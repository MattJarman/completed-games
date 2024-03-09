import { getRatingColour } from 'src/lib/utils'

describe('Test getRatingColour', () => {
  it.each`
    rating | expected
    ${0}   | ${'#EF4444'}
    ${51}  | ${'#EAB308'}
    ${61}  | ${'#FACC15'}
    ${76}  | ${'#86EFAC'}
    ${81}  | ${'#22C55E'}
    ${95}  | ${'#0EA5E9'}
  `(
    'returns $expected when provided with a rating of $rating',
    ({ rating, expected }) => {
      const actual = getRatingColour(rating)
      expect(actual).toEqual(expected)
    }
  )
})
