import test from 'node:test';
import assert from 'node:assert/strict';

import {
  ROLE_INTELLIGENCE_ROLES,
  deriveAdjacentRolePull,
  deriveRoleInteraction,
  deriveRoleLandscape,
  orbitRadiusForInteraction,
} from '../src/data/roleIntelligence.js';

const BASE_EMPLOYEE = {
  id: 'engine-test',
  name: 'Engine Test',
  dominance: 72,
  extraversion: 54,
  patience: 36,
  formality: 78,
};

const EXTREMES = [
  { ...BASE_EMPLOYEE, id: 'all-low', dominance: 0, extraversion: 0, patience: 0, formality: 0 },
  { ...BASE_EMPLOYEE, id: 'all-high', dominance: 100, extraversion: 100, patience: 100, formality: 100 },
  BASE_EMPLOYEE,
];

test('Role Intelligence v2 models fourteen distinct company role environments', () => {
  assert.equal(ROLE_INTELLIGENCE_ROLES.length, 14);
  assert.equal(new Set(ROLE_INTELLIGENCE_ROLES.map(role => role.id)).size, 14);
});

test('all role-interaction outputs stay bounded for extreme PI inputs', () => {
  const componentKeys = [
    'behavioralFit',
    'cognitiveTaskFit',
    'workValueFit',
    'environmentFit',
    'boundaryFit',
    'sustainabilityFit',
  ];

  for (const employee of EXTREMES) {
    for (const role of ROLE_INTELLIGENCE_ROLES) {
      const result = deriveRoleInteraction(employee, role);

      for (const key of componentKeys) {
        assert.ok(result.components[key] >= 0 && result.components[key] <= 100, `${role.id} ${key} out of range`);
      }

      assert.ok(result.inversionRisk >= 0 && result.inversionRisk <= 100, `${role.id} inversionRisk out of range`);
      assert.ok(result.evidenceConfidence >= 0 && result.evidenceConfidence <= 100, `${role.id} evidenceConfidence out of range`);
      assert.ok(result.internalCompatibilityIndex >= 0 && result.internalCompatibilityIndex <= 100, `${role.id} internalCompatibilityIndex out of range`);
      assert.ok(result.orbitRadius >= 112 && result.orbitRadius <= 247, `${role.id} orbitRadius out of range`);
    }
  }
});

test('sensitive or life-context fields cannot change baseline role calculations', () => {
  const role = ROLE_INTELLIGENCE_ROLES.find(item => item.id === 'examqa-analyst');
  const baseline = deriveRoleInteraction(BASE_EMPLOYEE, role);
  const withContext = deriveRoleInteraction({
    ...BASE_EMPLOYEE,
    contextOverlays: ['health-disability', 'family-caregiving', 'neurodivergence-accessibility'],
    contextNotes: 'Hypothetical private context that must not affect baseline compatibility.',
    notes: 'Additional personal narrative that the baseline engine must ignore.',
  }, role);

  assert.deepEqual(withContext.factors, baseline.factors);
  assert.deepEqual(withContext.preferences, baseline.preferences);
  assert.deepEqual(withContext.workValues, baseline.workValues);
  assert.deepEqual(withContext.components, baseline.components);
  assert.equal(withContext.inversionRisk, baseline.inversionRisk);
  assert.equal(withContext.internalCompatibilityIndex, baseline.internalCompatibilityIndex);
  assert.equal(withContext.orbitRadius, baseline.orbitRadius);
});

test('adjacent-role pull is deterministic and never returns the selected role', () => {
  const selected = ROLE_INTELLIGENCE_ROLES.find(item => item.id === 'network-management');
  const first = deriveAdjacentRolePull(BASE_EMPLOYEE, selected, 4);
  const second = deriveAdjacentRolePull(BASE_EMPLOYEE, selected, 4);

  assert.deepEqual(first, second);
  assert.equal(first.length, 4);
  assert.ok(first.every(item => item.roleId !== selected.id));
  assert.ok(first.every(item => item.pull >= 0 && item.pull <= 100));
});

test('role landscape is deterministic and sorted by the internal spatial index only', () => {
  const first = deriveRoleLandscape(BASE_EMPLOYEE);
  const second = deriveRoleLandscape(BASE_EMPLOYEE);

  assert.deepEqual(first, second);
  assert.equal(first.length, ROLE_INTELLIGENCE_ROLES.length);

  for (let index = 1; index < first.length; index += 1) {
    assert.ok(
      first[index - 1].interaction.internalCompatibilityIndex >= first[index].interaction.internalCompatibilityIndex,
      'role landscape must be descending by the internal spatial index'
    );
  }
});

test('evidence confidence is present and every modeled role has traceable evidence', () => {
  for (const role of ROLE_INTELLIGENCE_ROLES) {
    const result = deriveRoleInteraction(BASE_EMPLOYEE, role);
    assert.ok(Array.isArray(result.evidence) && result.evidence.length >= 3, `${role.id} needs a multi-source evidence bundle`);
    assert.ok(result.evidenceConfidence >= 25 && result.evidenceConfidence <= 96);
  }
});

test('orbit radius moves farther out as internal compatibility decreases', () => {
  assert.equal(orbitRadiusForInteraction(100), 112);
  assert.equal(orbitRadiusForInteraction(0), 247);
  assert.ok(orbitRadiusForInteraction(30) > orbitRadiusForInteraction(80));
});
