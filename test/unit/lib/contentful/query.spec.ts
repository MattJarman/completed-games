import { query } from 'src/lib/contentful'

const mockedFetch = jest.fn()

describe('Test query', () => {
  beforeAll(() => {
    window.fetch = mockedFetch
  })

  it('fetches the correct url and returns the decoded response', async () => {
    const expected = {
      data: {
        testCollection: {
          id: '23878923'
        }
      }
    }
    mockedFetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(expected)
    })

    const actual = await query(
      `query {
        testCollection {
          id
        }
      }`
    )

    expect(actual).toEqual(expected)
  })
})
