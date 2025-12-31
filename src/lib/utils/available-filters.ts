import { Game } from "src/schemas/game";

export const getCompletedAtYears = (games: Array<Game>) =>
  games
    .reduce((acc, cur) => {
      const year = new Date(cur.completedAt).getFullYear();
      if (acc.includes(year)) {
        return acc;
      }

      return [...acc, year];
    }, [] as Array<number>)
    .sort((a, b) => b - a);
