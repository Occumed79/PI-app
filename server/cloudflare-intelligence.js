import { HSI_LENS_REGISTRY } from '../src/data/hsiLensRegistry.js';
import { PI_PROFILES } from '../src/data/profiles.js';
import { normalizePiFactors } from '../src/data/piCrosswalkEngine.js';
import {
  deriveLensProjection,
  summarizeProjectionForAi,
} from '../src/data/lensProjectionEngine.js';
import { normalizeContextOverlayIds } from '../src/data/contextOverlayCatalog.js';
import {
  callCloudflareChat,
  cloudflareEmbed,
  cloudflareRerank,
  configuredProviderMap,
  sanitizeProviderError,
} from './ai-provider-manager.js';

const lensDocuments = HSI_LENS_REGISTRY.map(lens => ({
  id: lens.id,
  text: [
    `Lens: ${lens.lens}`,
    `Category: ${lens.category}`,
    lens.why ? `Purpose: ${lens.why}` : '',
    lens.visualLabel ? `Output style: ${lens.visualLabel}` : '',
  ].filter(Boolean).join(' | '),
}));

let lensEmbeddingCache = {
  model: null,
  vectors: null,
};

function cosine(left = [], right = []) {
  if (!left.length || left.length !== right.length) return -1;
  let dot = 0;
  let a2 = 0;
  let b2 = 0;
  for (let i = 0; i < left.length; i += 1) {
    dot += left[i] * right[i];
    a2 += left[i] * left[i];
    b2 += right[i] * right[i];
  }
  const denominator = Math.sqrt(a2) * Math.sqrt(b2);
  return denominator ? dot / denominator : -1;
}

async function ensureLensEmbeddings({ force = false } = {}) {
  const cacheReady = Boolean(
    !force &&
    lensEmbeddingCache.model &&
    Array.isArray(lensEmbeddingCache.vectors) &&
    lensEmbeddingCache.vectors.length === lensDocuments.length
  );

  if (cacheReady) {
    return {
      model: lensEmbeddingCache.model,
      vectors: lensEmbeddingCache.vectors,
      accountSlot: null,
      cached: true,
    };
  }

  const embedded = await cloudflareEmbed(lensDocuments.map(item => item.text));
  if (!embedded?.vectors?.length) return null;

  lensEmbeddingCache = {
    model: embedded.model,
    vectors: embedded.vectors,
  };

  return {
    model: embedded.model,
    vectors: embedded.vectors,
    accountSlot: embedded.accountSlot,
    cached: false,
  };
}

async function semanticLensSelection(query) {
  if (!query || !configuredProviderMap().cloudflare) {
    return { lenses: [], metadata: { used: false } };
  }

  let embeddingMeta = null;
  let shortlist = [];

  try {
    let [catalog, queryEmbedding] = await Promise.all([
      ensureLensEmbeddings(),
      cloudflareEmbed([query]),
    ]);

    if (
      catalog?.model &&
      queryEmbedding?.model &&
      catalog.model !== queryEmbedding.model
    ) {
      catalog = await ensureLensEmbeddings({ force: true });
      queryEmbedding = await cloudflareEmbed([query]);
    }

    if (
      catalog?.vectors?.length === lensDocuments.length &&
      queryEmbedding?.vectors?.[0] &&
      catalog.model === queryEmbedding.model
    ) {
      embeddingMeta = {
        model: catalog.model,
        accountSlot: queryEmbedding.accountSlot,
        catalogCached: Boolean(catalog.cached),
      };
      shortlist = lensDocuments
        .map((item, index) => ({
          ...item,
          similarity: cosine(queryEmbedding.vectors[0], catalog.vectors[index]),
        }))
        .sort((a, b) => b.similarity - a.similarity)
        .slice(0, 20);
    }
  } catch {
    shortlist = [];
  }

  if (!shortlist.length) shortlist = lensDocuments.slice();

  try {
    const reranked = await cloudflareRerank(
      query,
      shortlist.map(item => ({ text: item.text, meta: { id: item.id } })),
      8
    );
    const lenses = (reranked?.ranked || [])
      .map(item => {
        const lens = HSI_LENS_REGISTRY.find(candidate => candidate.id === item.meta?.id);
        return lens ? {
          id: lens.id,
          lens: lens.lens,
          category: lens.category,
          score: item.score,
        } : null;
      })
      .filter(Boolean);

    return {
      lenses,
      metadata: {
        used: Boolean(lenses.length),
        embeddingModel: embeddingMeta?.model || null,
        rerankModel: reranked?.model || null,
        embeddingAccountSlot: embeddingMeta?.accountSlot || null,
        rerankAccountSlot: reranked?.accountSlot || null,
      },
    };
  } catch (error) {
    const fallback = shortlist.slice(0, 8).map(item => {
      const lens = HSI_LENS_REGISTRY.find(candidate => candidate.id === item.id);
      return lens ? {
        id: lens.id,
        lens: lens.lens,
        category: lens.category,
        score: item.similarity ?? null,
      } : null;
    }).filter(Boolean);

    return {
      lenses: fallback,
      metadata: {
        used: Boolean(fallback.length),
        embeddingModel: embeddingMeta?.model || null,
        rerankModel: null,
        embeddingAccountSlot: embeddingMeta?.accountSlot || null,
        rerankAccountSlot: null,
        warning: sanitizeProviderError(error.message),
      },
    };
  }
}

function localPlan(query) {
  const text = String(query || '').toLowerCase();
  const comparisonSignals = (text.match(/compare|versus| vs |difference|across|contradict|conflict|why|how|under stress|overlay|lens|framework/g) || []).length;
  const complex = text.length > 220 || comparisonSignals >= 2;
  return {
    complexity: complex ? 'high' : text.length > 90 || comparisonSignals ? 'medium' : 'low',
    needsCritic: complex,
    needsSemanticRetrieval: true,
    preferredPrimary: complex ? 'groq' : 'gemini',
    reason: 'Local routing fallback.',
  };
}

async function classifyRequest(query, lenses = []) {
  if (!configuredProviderMap().cloudflare) return { plan: localPlan(query), metadata: { used: false } };
  try {
    const response = await callCloudflareChat({
      system: `You are the routing controller for a PI behavioral crosswalk assistant.
Return only JSON with:
{
  "complexity": "low" | "medium" | "high",
  "needsCritic": boolean,
  "needsSemanticRetrieval": boolean,
  "preferredPrimary": "gemini" | "groq",
  "reason": string
}
Use "high" when the request compares multiple behavioral frameworks, asks for contradictions or alternative explanations, involves several context layers, or needs careful multi-step interpretation.
Choose "groq" when the request primarily benefits from deliberate multi-step reasoning, structured comparison, contradiction analysis, or dense framework synthesis.
Choose "gemini" when the request primarily benefits from conversational synthesis, explanation, broader context handling, or ordinary follow-up dialogue.
This is only a routing preference; the backend will automatically fail over to the other provider if needed.
Do not infer any health, disability, identity, or life circumstance that the user did not explicitly state.`,
      messages: [{
        role: 'user',
        content: `Question: ${query}\n\nSemantically relevant lenses: ${lenses.map(item => item.lens).join(', ') || 'not yet available'}`,
      }],
      temperature: 0,
      maxTokens: 260,
      jsonMode: true,
    });

    const parsed = JSON.parse(String(response?.reply || '').replace(/^\`\`\`json\s*/i, '').replace(/\`\`\`$/i, '').trim());
    const complexity = ['low', 'medium', 'high'].includes(parsed?.complexity) ? parsed.complexity : 'medium';
    return {
      plan: {
        complexity,
        needsCritic: Boolean(parsed?.needsCritic ?? complexity === 'high'),
        needsSemanticRetrieval: parsed?.needsSemanticRetrieval !== false,
        preferredPrimary: ['gemini', 'groq'].includes(parsed?.preferredPrimary)
          ? parsed.preferredPrimary
          : complexity === 'high'
            ? 'groq'
            : 'gemini',
        reason: String(parsed?.reason || ''),
      },
      metadata: {
        used: true,
        model: response.model,
        accountSlot: response.accountSlot,
      },
    };
  } catch (error) {
    return {
      plan: localPlan(query),
      metadata: {
        used: false,
        warning: sanitizeProviderError(error.message),
      },
    };
  }
}

function profileFor(employee = {}) {
  return PI_PROFILES.find(profile => profile.id === (employee.piProfileId || employee.profileId)) || PI_PROFILES[0];
}

function factorsFor(employee = {}) {
  const profile = profileFor(employee);
  return normalizePiFactors({
    dominance: employee.dominance ?? profile.dominance,
    extraversion: employee.extraversion ?? profile.extraversion,
    patience: employee.patience ?? profile.patience,
    formality: employee.formality ?? profile.formality,
  });
}

function relevantEmployees(query, employees = []) {
  const normalizedQuery = String(query || '').toLowerCase();
  const direct = employees.filter(employee => {
    const name = String(employee?.name || '').trim().toLowerCase();
    if (!name) return false;
    if (normalizedQuery.includes(name)) return true;
    return name.split(/\s+/).filter(part => part.length > 2).some(part => normalizedQuery.includes(part));
  });
  if (direct.length) return direct.slice(0, 6);
  if (employees.length === 1) return employees;
  return employees.slice(0, 6);
}

function buildProjectionContext(query, employees, lenses) {
  if (!lenses.length) return '';
  const selected = lenses
    .map(item => HSI_LENS_REGISTRY.find(lens => lens.id === item.id))
    .filter(Boolean);
  const people = relevantEmployees(query, employees);

  const lines = [
    'CLOUDFLARE SEMANTIC LENS SELECTION',
    'These lenses were selected semantically from the full registry, not by keyword matching:',
    ...lenses.map((item, index) => `${index + 1}. ${item.lens} [${item.category}]${Number.isFinite(item.score) ? ` relevance ${item.score.toFixed(3)}` : ''}`),
  ];

  if (people.length) {
    lines.push('', 'EXACT CALCULATED PROJECTIONS FOR THOSE LENSES');
    for (const employee of people) {
      const factors = factorsFor(employee);
      const overlays = normalizeContextOverlayIds(employee?.contextOverlays);
      lines.push(`Employee: ${employee.name || 'selected employee'}`);
      for (const lens of selected) {
        lines.push(`- ${summarizeProjectionForAi(deriveLensProjection(lens, factors, overlays))}`);
      }
    }
  }

  lines.push(
    '',
    'Use this material as additional retrieval context. The completed PI D/E/P/F values remain the source assessment. Do not treat a crosswalk as a separately administered assessment, and do not infer an unprovided context overlay.'
  );

  return lines.join('\n');
}

export async function buildCloudflareIntelligence({ query, employees = [] } = {}) {
  if (!query || !configuredProviderMap().cloudflare) {
    return {
      plan: localPlan(query),
      lenses: [],
      context: '',
      metadata: { used: false },
    };
  }

  const semantic = await semanticLensSelection(query);
  const classification = await classifyRequest(query, semantic.lenses);

  return {
    plan: classification.plan,
    lenses: semantic.lenses,
    context: buildProjectionContext(query, employees, semantic.lenses),
    metadata: {
      used: Boolean(semantic.metadata.used || classification.metadata.used),
      semantic: semantic.metadata,
      classifier: classification.metadata,
    },
  };
}

export async function runCloudflareCritic({
  query,
  draft,
  semanticContext = '',
} = {}) {
  if (!query || !draft || !configuredProviderMap().cloudflare) return null;

  try {
    const response = await callCloudflareChat({
      system: `You are an independent behavioral-analysis critic for a PI crosswalk application.
Review the draft for:
- confusion between completed PI baseline and translated/crosswalk output;
- confusion between baseline and explicitly supplied context overlays;
- unsupported causal claims;
- contradictions across frameworks;
- overlooked alternative interpretations;
- overconfidence or invented facts;
- failure to distinguish direct PI correspondences from weaker directional estimates.

Do not rewrite the answer. Return concise JSON only:
{
  "materialIssue": boolean,
  "issues": string[],
  "missingAlternatives": string[],
  "preserve": string[]
}`,
      messages: [{
        role: 'user',
        content: `User question:\n${query}\n\nSemantic context:\n${semanticContext || 'none'}\n\nDraft answer:\n${draft}`,
      }],
      temperature: 0,
      maxTokens: 700,
      jsonMode: true,
    });

    const critique = JSON.parse(String(response.reply || '').replace(/^\`\`\`json\s*/i, '').replace(/\`\`\`$/i, '').trim());
    return {
      critique,
      metadata: {
        model: response.model,
        accountSlot: response.accountSlot,
      },
    };
  } catch (error) {
    return {
      critique: null,
      metadata: {
        warning: sanitizeProviderError(error.message),
      },
    };
  }
}
