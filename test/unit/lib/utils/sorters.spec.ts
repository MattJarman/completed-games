import { PartialGame } from 'src/lib/contentful'
import {
  sortByCompletedAtDescending,
  sortByNameAscending,
  sortByPlaytimeDescending,
  sortByRatingDescending
} from 'src/lib/utils/sorters'

const game1: PartialGame = {
  slug: 'a-hat-in-time',
  title: 'A Hat in Time',
  rating: 100,
  completedAt: '2022-01-02T12:00:00.000Z',
  sys: {
    id: '58349059034590'
  },
  image: {
    title: 'A Hat in Time Cover',
    url: '/image.png'
  },
  playtime: 999,
  tags: []
}

const game2: PartialGame = {
  slug: 'yakuza-0',
  title: 'Yakuza 0',
  rating: 90,
  completedAt: '2022-01-01T12:00:00.000Z',
  sys: {
    id: '23974234892'
  },
  image: {
    title: 'Yakuza 0 Cover',
    url: '/image.png'
  },
  tags: []
}

describe('sorters', () => {
  test.each`
    sorter
    ${sortByPlaytimeDescending}
    ${sortByRatingDescending}
    ${sortByNameAscending}
    ${sortByCompletedAtDescending}
  `('$sorter.name', ({ sorter }) => {
    const games = [game2, game1]

    const [first, second] = games.sort(sorter)

    expect(first).toEqual(game1)
    expect(second).toEqual(game2)
  })

  test('sortByPlaytimeDescending with undefined playtimes returns default order', () => {
    const game1WithoutPlaytime = { ...game1, playtime: undefined }
    const game2WithoutPlaytime = { ...game2, playtime: undefined }
    const games = [game2WithoutPlaytime, game1WithoutPlaytime]

    const [first, second] = games.sort(sortByPlaytimeDescending)

    expect(first).toEqual(game2WithoutPlaytime)
    expect(second).toEqual(game1WithoutPlaytime)
  })
})
