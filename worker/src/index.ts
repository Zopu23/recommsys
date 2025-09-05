import express from "express";
import cors from "cors";
import Parser from "rss-parser"; // if TS complains, see note at the bottom

// -------------------- Express setup --------------------
const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 8787;

app.use(cors());

// Health check
app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

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
  }
});

// -------------------- start server --------------------
app.listen(PORT, () => {
  console.log(`worker listening on http://localhost:${PORT}`);
});
