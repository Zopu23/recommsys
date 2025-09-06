type Entry<T> = { at: number; data: T };
const STORE = new Map<string, Entry<any>>();

export function getCache<T>(key: string, ttlMs: number): T | null {
  const hit = STORE.get(key);
  if (!hit) return null;
  if (Date.now() - hit.at > ttlMs) {
    STORE.delete(key);
    return null;
  }
  return hit.data as T;
}

export function setCache<T>(key: string, data: T) {
  STORE.set(key, { at: Date.now(), data });
}
