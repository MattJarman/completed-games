import { z } from "zod";
import { documentSchema } from "./rich-text";

const richTextImageLinkSchema = z.object({
  fileName: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  url: z.string(),
  width: z.number(),
  height: z.number(),
  sys: z.object({
    id: z.string(),
  }),
});

export const gameRichTextLinksSchema = z.object({
  assets: z.object({
    block: z.array(richTextImageLinkSchema),
  }),
});

export const gameSchema = z.object({
  sys: z.object({
    id: z.string(),
  }),
  slug: z.string(),
  title: z.string(),
  rating: z.number(),
  completedAt: z.string(),
  image: z.object({
    title: z.string(),
    url: z.string(),
  }),
  playtime: z.number().nullable(),
  tags: z.array(z.string()),
  notes: z
    .object({
      json: documentSchema,
      links: gameRichTextLinksSchema,
    })
    .nullable()
    .optional(),
  completionStats: z.string().nullable(),
  allAchievements: z.boolean().nullable(),
  difficulty: z.string().nullable(),
});

export type Game = z.infer<typeof gameSchema>;
export type GameRichTextLinks = z.infer<typeof gameRichTextLinksSchema>;
