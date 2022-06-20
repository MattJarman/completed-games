import { getAllGames } from 'src/lib/contentful/game'
import { query } from 'src/lib/contentful/query'

jest.mock('src/lib/contentful/query')

const mockedQuery = query as jest.MockedFunction<typeof query>

describe('Test getAllGames', () => {
  it('returns all games if all keys are defined in response', async () => {
    const expected = [{ id: '29428' }]
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
