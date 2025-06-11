import { z } from "zod";

export const sortSchema = z.union([
  z.literal("completed"),
  z.literal("playtime"),
  z.literal("rating"),
  z.literal("name"),
  z.literal("achievements"),
]);

export type Sort = z.infer<typeof sortSchema>;
