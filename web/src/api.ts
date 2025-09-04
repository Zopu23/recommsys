import axios from "axios";
import { FeedItemSchema, type FeedItem } from "shared/src/schema";

type GetFeedsParams = {
  q?: string;
  type?: "paper" | "blog" | "repo";
  feeds?: string[]; // list of feed URLs to override defaults
};

export async function getFeeds(params: GetFeedsParams = {}): Promise<FeedItem[]> {
  const query: Record<string, string> = {};
  if (params.q) query.q = params.q;
  if (params.type) query.type = params.type;
  if (params.feeds?.length) query.feeds = params.feeds.join(",");

  const { data } = await axios.get("/feeds", { params: query });

  const parsed = FeedItemSchema.array().safeParse(data);
  if (!parsed.success) {
    console.error(parsed.error.format());
    throw new Error("Invalid feed data from backend");
  }
  return parsed.data;
}

export async function getHealth(): Promise<boolean> {
  try {
    const { data } = await axios.get("/health");
    return !!data?.ok;
  } catch {
    return false;
  }
}
