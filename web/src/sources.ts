export type Source = { name: string; url: string; type: "paper" | "blog" | "repo" };

export const DEFAULT_SOURCES: Source[] = [
  { name: "arXiv cs.LG",        url: "http://export.arxiv.org/rss/cs.LG",        type: "paper" },
  { name: "Hugging Face Blog",  url: "https://huggingface.co/blog/feed.xml",     type: "blog"  },
  { name: "Google AI Blog",     url: "https://ai.googleblog.com/atom.xml",       type: "blog"  },
  { name: "Cohere Blog",        url: "https://cohere.com/blog/rss.xml",          type: "blog"  },
  { name: "EleutherAI Blog",    url: "https://blog.eleuther.ai/index.xml",       type: "blog"  },
];
