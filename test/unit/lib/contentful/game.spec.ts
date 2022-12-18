import { getAllGames, getGameBySlug, query } from 'src/lib/contentful'
import { makeGame } from 'test/utils/factories/game'

jest.mock('src/lib/contentful/query')

const mockedQuery = query as jest.MockedFunction<typeof query>

describe('Test getAllGames', () => {
  it('returns all games if all keys are defined in the response', async () => {
    const expected = [makeGame()]
    const entries = {
      data: {
        gameCollection: {
          items: expected
        }
      }
    }

    mockedQuery.mockResolvedValueOnce(entries)

    const actual = await getAllGames()

    expect(actual).toEqual(expected)
  })

  it('returns an empty array if one of the keys in the response was not defined', async () => {
    mockedQuery.mockResolvedValueOnce({})

    const actual = await getAllGames()

    expect(actual).toEqual([])
  })
})

describe('Test getGameBySlug', () => {
  it('returns game if all keys are defined in the response', async () => {
    const expected = makeGame()
    const entries = {
      data: {
        gameCollection: {
          items: [expected]
        }
      }
    }

    mockedQuery.mockResolvedValueOnce(entries)

    const actual = await getGameBySlug('slug')

    expect(actual).toEqual(expected)
  })

  it('returns undefined if one of the keys in the response was not defined', async () => {
    mockedQuery.mockResolvedValueOnce({})

    const actual = await getGameBySlug('slug')

    expect(actual).toBeUndefined()
  })
})
