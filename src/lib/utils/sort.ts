import { Game } from "src/schemas/game";
import { Sort } from "src/schemas/sort";

export type GameSortFn = (a: Game, b: Game) => number;

const sortByPlaytimeDescending: GameSortFn = (a, b) =>
  (b.playtime || 0) - (a.playtime || 0);

const sortByRatingDescending: GameSortFn = (a, b) => b.rating - a.rating;

const sortByNameAscending: GameSortFn = (a, b) =>
  a.title.localeCompare(b.title);

const sortByCompletedAtDescending: GameSortFn = (a, b) =>
  new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime();

const sorters: { [key in Sort]: GameSortFn } = {
  completed: sortByCompletedAtDescending,
  playtime: sortByPlaytimeDescending,
  rating: sortByRatingDescending,
  name: sortByNameAscending,
};

export const sortBy = (games: Array<Game>, by: Sort) => games.sort(sorters[by]);
