import { z } from "zod";

export const FeedItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  source: z.string(),
  link: z.string().url(),
  authors: z.array(z.string()).default([]),
  summary: z.string().optional(),
  type: z.enum(["paper", "blog", "repo"]).default("paper"),
  date: z.string(),
  tags: z.array(z.string()).default([])
});

export type FeedItem = z.infer<typeof FeedItemSchema>;
