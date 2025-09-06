import type { FeedType } from "./sources.js";

export type FeedItem = {
  id: string;
  title: string;
  source: string;
  link: string;
  authors: string[];
  summary?: string;
  type: FeedType;
  date: string; // ISO
  tags: string[];
};

export function normalizeRssItem(
  sourceName: string,
  type: FeedType,
  raw: any
): FeedItem {
  return {
    id: String(raw.guid ?? raw.id ?? raw.link ?? raw.title ?? Math.random()),
    title: String(raw.title ?? "Untitled"),
    source: sourceName,
    link: String(raw.link ?? ""),
    authors: raw.creator ? [String(raw.creator)] : [],
    summary: String(raw.contentSnippet ?? raw.content ?? "").slice(0, 600),
    type,
    date: String(raw.isoDate ?? raw.pubDate ?? new Date().toISOString()),
    tags: [],
  };
}

export function dedupe(items: FeedItem[]): FeedItem[] {
  const seen = new Set<string>();
  const out: FeedItem[] = [];
  for (const it of items) {
    const key = it.link || `${it.source}:${it.title}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(it);
  }
  // newest first (works fine for ISO strings)
  out.sort((a, b) => b.date.localeCompare(a.date));
  return out;
}
