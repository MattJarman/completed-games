import { Game } from 'src/schemas/game'

export type GameSortFn = (a: Game, b: Game) => number

const sortByPlaytimeDescending: GameSortFn = (a, b) =>
  (b.playtime || 0) - (a.playtime || 0)

const sortByRatingDescending: GameSortFn = (a, b) => b.rating - a.rating

const sortByNameAscending: GameSortFn = (a, b) => a.title.localeCompare(b.title)

const sortByCompletedAtDescending: GameSortFn = (a, b) =>
  new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime()

const sorters = {
  completed: sortByCompletedAtDescending,
  playtime: sortByPlaytimeDescending,
  rating: sortByRatingDescending,
  name: sortByNameAscending
} as const

export type Sorter = keyof typeof sorters

export const sortBy = (games: Array<Game>, by: Sorter) =>
  games.sort(sorters[by])
