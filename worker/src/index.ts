import express from "express";
import cors from "cors";
import Parser from "rss-parser"; // if TS complains, see note at the bottom
// -------------------- Express setup --------------------
const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 8787;
=======
import { DEFAULT_SOURCES } from "./sources.js";
import { normalizeRssItem, dedupe } from "./normalize.js";
import { getCache, setCache } from "./cache.js";
import type { Source } from "./sources.js";

const app = express();
const PORT = Number(process.env.PORT) || 8787;
const TTL_MS = 5 * 60 * 1000; // 5 minutes


app.use(cors());
app.use(express.json());

// Root & health
app.get("/", (_req, res) => res.type("text/plain").send("Backend worker running. Try /health or /feeds"));
app.get("/health", (_req, res) => res.json({ ok: true }));

// -------------------- Types + cache --------------------
type FeedItem = {
  id: string;
  title: string;
  source: string;
  link: string;
  authors: string[];
  summary?: string;
  type: "paper" | "blog" | "repo";
  date: string;   // ISO
  tags: string[];
};

const FEEDS_TTL_MS = 5 * 60 * 1000; // 5 minutes
let cache: { ts: number; data: FeedItem[] } = { ts: 0, data: [] };

const parser = new Parser();

// -------------------- Sources --------------------
async function fetchArxivLG(): Promise<FeedItem[]> {
  const rss = await parser.parseURL("https://export.arxiv.org/rss/cs.LG");
  return (rss.items || []).map((it: any) => ({
    id: it.id || it.link || it.guid || `${it.title}-${it.pubDate}`,
    title: it.title || "Untitled",
    source: "arXiv cs.LG",
    link: it.link || "",
    authors: it.creator ? [it.creator] : [],
    summary: it.contentSnippet || "",
    type: "paper",
    date: it.isoDate || it.pubDate || new Date().toISOString(),
    tags: ["arxiv", "cs.LG"],
  }));
}

async function fetchHackerNews(): Promise<FeedItem[]> {
  const rss = await parser.parseURL("https://news.ycombinator.com/rss");
  return (rss.items || []).map((it: any) => ({
    id: it.id || it.link || it.guid || `${it.title}-${it.pubDate}`,
    title: it.title || "Untitled",
    source: "Hacker News: Front Page",
    link: it.link || "",
    authors: [],
    summary: it.contentSnippet || "",
    type: "blog",
    date: it.isoDate || it.pubDate || new Date().toISOString(),
    tags: ["hn", "frontpage"],
  }));
}

// -------------------- /feeds route (cached) --------------------
app.get("/feeds", async (_req, res) => {
  try {
    const now = Date.now();

    // serve cache if fresh
    if (cache.data.length && now - cache.ts < FEEDS_TTL_MS) {
      return res.json(cache.data);
    }

    // fetch in parallel
    const [arxiv, hn] = await Promise.all([fetchArxivLG(), fetchHackerNews()]);

    // combine + newest first
    const all = [...arxiv, ...hn].sort(
      (a, b) => +new Date(b.date) - +new Date(a.date)
    );

    // store cache
    cache = { ts: now, data: all };

    res.json(all);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "failed_to_fetch_feeds" });
=======
/**
 * GET /feeds
 * Optional query:
 *   - feeds=url1,url2,...   (override default sources)
 *   - type=paper|blog|repo  (optional filter after aggregation)
 */
app.get("/feeds", async (req, res) => {
  const feedsParam = typeof req.query.feeds === "string" ? req.query.feeds : "";
  const typeFilter = typeof req.query.type === "string" ? req.query.type : "";

  // Build source list
  let sources: Source[];
  if (feedsParam) {
    const urls = feedsParam.split(",").map(s => s.trim()).filter(Boolean);
    sources = urls.map(u => ({
      name: u.includes("arxiv") ? "arXiv" : u,
      url: u,
      type: u.includes("arxiv") ? "paper" : (u.includes("github") ? "repo" : "blog")
    }));
  } else {
    sources = DEFAULT_SOURCES;
  }

  // Cache key depends on chosen feeds + type filter
  const cacheKey = JSON.stringify({ feeds: sources.map(s => s.url).sort(), typeFilter });
  const cached = getCache<any[]>(cacheKey, TTL_MS);
  if (cached) return res.json(cached);

  try {
    const parser = new Parser();
    const all = (
      await Promise.all(
        sources.map(async (src) => {
          try {
            const feed = await parser.parseURL(src.url);
            const items = (feed.items ?? []).map((raw) =>
              normalizeRssItem(src.name, src.type, raw)
            );
            return items;
          } catch (e) {
            console.warn("Source failed:", src.name, src.url, e);
            return [];
          }
        })
      )
    ).flat();

    let result = dedupe(all);
    if (typeFilter === "paper" || typeFilter === "blog" || typeFilter === "repo") {
      result = result.filter((it) => it.type === typeFilter);
    }

    setCache(cacheKey, result);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "failed_to_build_feed" });

  }
});

// -------------------- start server --------------------
app.listen(PORT, () => {
  console.log(`worker listening on http://localhost:${PORT}`);
});
