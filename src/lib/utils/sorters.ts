import { Game } from 'src/schemas/Game'

export type GameSortFn = (a: Game, b: Game) => number

export const sortByPlaytimeDescending: GameSortFn = (a, b) =>
  (b.playtime || 0) - (a.playtime || 0)

export const sortByRatingDescending: GameSortFn = (a, b) => b.rating - a.rating

export const sortByNameAscending: GameSortFn = (a, b) =>
  a.title.localeCompare(b.title)

export const sortByCompletedAtDescending: GameSortFn = (a, b) =>
  new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime()
