// export type Source = { name: string; url: string; type: "paper" | "blog" | "repo" };

// export const DEFAULT_SOURCES: Source[] = [
//   { name: "arXiv cs.LG", url: "http://export.arxiv.org/rss/cs.LG", type: "paper" },
//   { name: "Hugging Face Blog", url: "https://huggingface.co/blog/feed.xml", type: "blog" },
//   { name: "Google AI Blog", url: "https://ai.googleblog.com/atom.xml", type: "blog" },
//   { name: "Cohere Blog", url: "https://cohere.com/blog/rss.xml", type: "blog" },
//   { name: "EleutherAI Blog", url: "https://blog.eleuther.ai/index.xml", type: "blog" }
// ];

// worker/src/sources.ts
import Parser from "rss-parser";

export type FeedType = "paper" | "blog" | "repo";

export type Source = {
  name: string;
  url: string;
  type: FeedType;
};

export const DEFAULT_SOURCES: Source[] = [
  {
    name: "Hacker News: Front Page",
    url: "https://news.ycombinator.com/rss",
    type: "blog",
  },
  {
    name: "arXiv cs.LG",
    url: "https://export.arxiv.org/rss/cs.LG",
    type: "paper",
  },
];


export type FeedItem = {
  id: string;
  title: string;
  source: string;
  link: string;
  authors: string[];
  summary?: string;
  type: "paper" | "blog" | "repo";
  date: string; // ISO
  tags: string[];
};

const parser = new Parser();

/** fetch XML with UA + timeout, then parse with rss-parser */
async function fetchRss(url: string) {
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), 12_000);

  try {
    const res = await fetch(url, {
      headers: {
        // some feeds (arXiv esp.) are picky about UA
        "user-agent": "PaperPulse/1.0 (+http://localhost:8787)",
        "accept": "application/rss+xml, application/xml;q=0.9, */*;q=0.8",
      },
      signal: controller.signal,
    });
    if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
    const xml = await res.text();
    return parser.parseString(xml);
  } finally {
    clearTimeout(t);
  }
}

export async function fetchHackerNews(): Promise<FeedItem[]> {
  const rss = await fetchRss("https://news.ycombinator.com/rss");
  return (rss.items ?? []).map((it) => ({
    id: String(it.guid || it.link || it.title || Math.random()),
    title: String(it.title ?? "Untitled"),
    source: "Hacker News: Front Page",
    link: String(it.link ?? ""),
    authors: [],
    summary: String(it.contentSnippet ?? it.content ?? ""),
    type: "blog",
    date: (it as any).isoDate || it.pubDate || new Date().toISOString(),
    tags: ["hn", "frontpage"],
  }));
}

export async function fetchArxivLG(): Promise<FeedItem[]> {
  const rss = await fetchRss("https://export.arxiv.org/rss/cs.LG");
  return (rss.items ?? []).map((it) => ({
    id: String((it as any).id || it.link || it.guid || `${it.title}-${it.pubDate}`),
    title: String(it.title ?? "Untitled"),
    source: "arXiv cs.LG",
    link: String(it.link ?? ""),
    authors: it.creator ? [String(it.creator)] : [],
    summary: String(it.contentSnippet ?? it.content ?? ""),
    type: "paper",
    date: (it as any).isoDate || it.pubDate || new Date().toISOString(),
    tags: ["arxiv", "cs.LG"],
  }));
}

