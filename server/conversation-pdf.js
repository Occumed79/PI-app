function ascii(value) {
  return String(value ?? '')
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2013\u2014]/g, '-')
    .replace(/\u2026/g, '...')
    .replace(/[^\x20-\x7E\n]/g, '?');
}

function stripMarkdown(value) {
  return ascii(value)
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\x60([^\x60]+)\x60/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/^[-*]\s+/gm, '- ')
    .replace(/\r/g, '');
}

function wrapLine(text, width = 92) {
  const input = ascii(text).trimEnd();
  if (!input) return [''];
  const words = input.split(/\s+/);
  const lines = [];
  let line = '';
  for (const word of words) {
    const candidate = line ? line + ' ' + word : word;
    if (candidate.length <= width) {
      line = candidate;
      continue;
    }
    if (line) lines.push(line);
    if (word.length <= width) {
      line = word;
      continue;
    }
    for (let i = 0; i < word.length; i += width) lines.push(word.slice(i, i + width));
    line = '';
  }
  if (line) lines.push(line);
  return lines;
}

function escapePdfText(value) {
  return ascii(value)
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)');
}

function messageLines(message) {
  const role = message.role === 'user' ? 'USER' : 'ASSISTANT';
  const lines = ['', role + (message.source ? ' - ' + String(message.source).toUpperCase() : ''), ''];
  for (const paragraph of stripMarkdown(message.messageText || message.text || '').split('\n')) {
    lines.push(...wrapLine(paragraph));
  }

  const visuals = Array.isArray(message.visualizations) ? message.visualizations : [];
  for (const visual of visuals) {
    lines.push('');
    lines.push(...wrapLine('[Visualization] ' + (visual.title || visual.type || 'Chart')));
    if (visual.subtitle) lines.push(...wrapLine(visual.subtitle));
    if (visual.caption) lines.push(...wrapLine(visual.caption));
    if (Array.isArray(visual.data) && visual.data.length) {
      const preview = visual.data.slice(0, 12).map(item => {
        if (!item || typeof item !== 'object') return String(item);
        return Object.entries(item).slice(0, 5).map(([key, value]) => key + ': ' + value).join(', ');
      });
      preview.forEach(item => lines.push(...wrapLine('  ' + item)));
      if (visual.data.length > preview.length) lines.push('  ...');
    }
  }

  const sources = Array.isArray(message.webResearch?.sources) ? message.webResearch.sources : [];
  if (sources.length) {
    lines.push('');
    lines.push('WEB SOURCES');
    for (const source of sources) {
      lines.push(...wrapLine('[' + (source.id || '') + '] ' + (source.title || 'Source')));
      if (source.url) lines.push(...wrapLine(source.url));
    }
  }
  return lines;
}

export function buildConversationPdf({ conversation, messages = [] } = {}) {
  const title = stripMarkdown(conversation?.title || 'Crosswalk Assistant Conversation');
  const exported = new Date().toISOString();
  const allLines = [
    title,
    '',
    'PI Crosswalk Assistant',
    'Exported: ' + exported,
    '',
    ...messages.flatMap(messageLines),
  ];

  const linesPerPage = 48;
  const pages = [];
  for (let i = 0; i < allLines.length; i += linesPerPage) pages.push(allLines.slice(i, i + linesPerPage));
  if (!pages.length) pages.push(['Crosswalk Assistant Conversation']);

  const objects = [];
  const addObject = body => {
    objects.push(body);
    return objects.length;
  };

  const catalogId = addObject('');
  const pagesId = addObject('');
  const fontId = addObject('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>');

  const pageIds = [];
  for (const pageLines of pages) {
    const content = [
      'BT',
      '/F1 10 Tf',
      '54 738 Td',
      '14 TL',
      ...pageLines.map((line, index) => {
        const text = '(' + escapePdfText(line) + ') Tj';
        return index === 0 ? text : 'T* ' + text;
      }),
      'ET',
    ].join('\n');
    const contentId = addObject('<< /Length ' + Buffer.byteLength(content, 'latin1') + ' >>\nstream\n' + content + '\nendstream');
    const pageId = addObject('<< /Type /Page /Parent ' + pagesId + ' 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 ' + fontId + ' 0 R >> >> /Contents ' + contentId + ' 0 R >>');
    pageIds.push(pageId);
  }

  objects[catalogId - 1] = '<< /Type /Catalog /Pages ' + pagesId + ' 0 R >>';
  objects[pagesId - 1] = '<< /Type /Pages /Kids [' + pageIds.map(id => id + ' 0 R').join(' ') + '] /Count ' + pageIds.length + ' >>';

  let output = '%PDF-1.4\n%\xE2\xE3\xCF\xD3\n';
  const offsets = [0];
  for (let index = 0; index < objects.length; index += 1) {
    offsets[index + 1] = Buffer.byteLength(output, 'latin1');
    output += (index + 1) + ' 0 obj\n' + objects[index] + '\nendobj\n';
  }

  const xrefOffset = Buffer.byteLength(output, 'latin1');
  output += 'xref\n0 ' + (objects.length + 1) + '\n';
  output += '0000000000 65535 f \n';
  for (let index = 1; index <= objects.length; index += 1) {
    output += String(offsets[index]).padStart(10, '0') + ' 00000 n \n';
  }
  output += 'trailer\n<< /Size ' + (objects.length + 1) + ' /Root ' + catalogId + ' 0 R >>\n';
  output += 'startxref\n' + xrefOffset + '\n%%EOF';

  return Buffer.from(output, 'latin1');
}
