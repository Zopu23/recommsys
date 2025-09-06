// worker/src/index.ts
import express from "express";
import cors from "cors";
import Parser from "rss-parser";

import { DEFAULT_SOURCES, type Source } from "./sources.js";
import { normalizeRssItem, dedupe, type FeedItem } from "./normalize.js";
import { getCache, setCache } from "./cache.js";

// --- express setup ----------------------------------------------------------
const app = express();
const PORT = Number(process.env.PORT) || 8787;
const TTL_MS = 5 * 60 * 1000; // 5 minutes

app.use(cors());
app.use(express.json());

// simple root + health
app.get("/", (_req, res) =>
  res.type("text/plain").send("backend worker running. try /health or /feeds")
);
app.get("/health", (_req, res) => res.json({ ok: true }));

// --- /feeds -----------------------------------------------------------------
/**
 * GET /feeds
 * query (all optional):
 *   - feeds=url1,url2,...   override default sources
 *   - type=paper|blog|repo  filter after aggregation
 */
app.get("/feeds", async (req, res) => {
  const feedsParam = typeof req.query.feeds === "string" ? req.query.feeds : "";
  const typeFilter =
    typeof req.query.type === "string" ? req.query.type : "";

  // build the sources list
  let sources: Source[];
  if (feedsParam) {
    const urls = feedsParam
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    sources = urls.map((u) => ({
      name: u.includes("arxiv") ? "arXiv" : u,
      url: u,
      // naive type guesser (fine for now)
      type: u.includes("arxiv")
        ? "paper"
        : u.includes("github")
        ? "repo"
        : "blog",
    }));
  } else {
    sources = DEFAULT_SOURCES;
  }

  // cache by chosen feeds + filter
  const cacheKey = JSON.stringify({
    feeds: sources.map((s) => s.url).sort(),
    typeFilter,
  });

  const cached = getCache<FeedItem[]>(cacheKey, TTL_MS);
  if (cached) return res.json(cached);

  try {
    const parser = new Parser();
    const aggregated = (
      await Promise.all(
        sources.map(async (src) => {
          try {
            const feed = await parser.parseURL(src.url);
            const items = (feed.items ?? []).map((raw) =>
              normalizeRssItem(src.name, src.type, raw)
            );
            return items;
          } catch (e) {
            console.warn("source failed:", src.name, src.url, e);
            return [];
          }
        })
      )
    ).flat();

    let results = dedupe(aggregated);

    if (typeFilter === "paper" || typeFilter === "blog" || typeFilter === "repo") {
      results = results.filter((it) => it.type === typeFilter);
    }

    setCache(cacheKey, results);
    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "failed_to_build_feed" });
  }
});

// --- start server -----------------------------------------------------------
app.listen(PORT, () => {
  console.log(`worker listening on http://localhost:${PORT}`);
});
