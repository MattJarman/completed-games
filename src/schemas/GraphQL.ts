import { z } from "zod";
import { gameSchema } from "./game";

export const gameCollectionResponseSchema = z.object({
  data: z
    .object({
      gameCollection: z
        .object({
          items: z.array(gameSchema).optional(),
        })
        .optional(),
    })
    .optional(),
});

export type GameCollection = z.infer<typeof gameCollectionResponseSchema>;
