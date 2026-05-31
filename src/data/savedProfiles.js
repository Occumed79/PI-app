export const SAVED_PROFILES_KEY = 'signalglass.savedProfiles.v1';

export function makeProfileId() {
  return `profile-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export function loadSavedProfiles() {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(SAVED_PROFILES_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveProfilesToStorage(items) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(SAVED_PROFILES_KEY, JSON.stringify(items, null, 2));
}

export function normalizeSavedProfile(profile) {
  const now = new Date().toISOString();
  return {
    id: profile.id || makeProfileId(),
    createdAt: profile.createdAt || now,
    updatedAt: now,
    employee: {
      name: profile.employee?.name || 'Untitled profile',
      role: profile.employee?.role || '',
      department: profile.employee?.department || '',
      notes: profile.employee?.notes || '',
    },
    baseProfileName: profile.baseProfileName || 'Analyzer',
    lensStates: profile.lensStates || {},
    factorStates: profile.factorStates || {},
  };
}
