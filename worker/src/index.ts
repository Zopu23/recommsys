import express from "express";
import cors from "cors";
import Parser from "rss-parser";

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

app.listen(PORT, () => {
  console.log(`worker listening on http://localhost:${PORT}`);
});
