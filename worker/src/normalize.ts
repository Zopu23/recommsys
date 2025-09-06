import type { FeedItem } from "shared/src/schema.js";  
import { FeedItemSchema } from "shared/src/schema.js";

/** Safe ISO date */
export function toIsoDate(input?: string): string {
  if (!input) return new Date().toISOString();
  const d = new Date(input);
  return isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString();
}

/** Normalize an rss-parser item into our FeedItem shape */
export function normalizeRssItem(
  sourceName: string,
  type: FeedItem["type"],
  raw: any
): FeedItem {
  const id = String(raw.guid || raw.id || raw.link || `${sourceName}:${raw.title || Math.random()}`);
  const link = String(raw.link || "");
  const title = String(raw.title || "Untitled");

  // rss-parser commonly exposes creator/author or arrays on some feeds
  const authors: string[] = []
    .concat(raw.creator ?? [])
    .concat(raw.author ?? [])
    .flat()
    .filter(Boolean)
    .map((x: any) => String(x));

  const summary = (raw.contentSnippet || raw.content || raw.summary || "")
    ?.toString()
    .trim()
    .slice(0, 1000);

  const date = toIsoDate(raw.isoDate || raw.pubDate || raw.updated);

  const candidate: FeedItem = {
    id,
    title,
    source: sourceName,
    link,
    authors,
    summary,
    type,
    date,
    tags: []
  };

  return FeedItemSchema.parse(candidate);
}

/** Remove duplicates across sources (by link+title) */
export function dedupe(items: FeedItem[]): FeedItem[] {
  const seen = new Set<string>();
  const out: FeedItem[] = [];
  for (const it of items) {
    const key = `${(it.link || "").toLowerCase()}__${(it.title || "").toLowerCase()}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(it);
  }
  return out;
}
