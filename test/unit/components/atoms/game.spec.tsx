import { render, screen } from '@testing-library/react'
import Game from 'src/components/atoms/game'

jest.mock('next/image')

describe('Test Game', () => {
  it.each`
    rating | expected
    ${0}   | ${'bg-red-500'}
    ${51}  | ${'bg-yellow-500'}
    ${61}  | ${'bg-yellow-400'}
    ${76}  | ${'bg-green-300'}
    ${81}  | ${'bg-green-500'}
    ${95}  | ${'bg-blue-500'}
  `(
    'renders with a class of $expected when provided with $rating',
    ({ rating, expected }) => {
      render(
        <Game title="Planescape: Torment" img="test.jpg" rating={rating} />
      )

      const ratingCard = screen.getByText(rating)

      expect(ratingCard).toHaveClass(expected)
    }
  )
})
