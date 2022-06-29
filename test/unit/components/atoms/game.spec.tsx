import { render, screen } from '@testing-library/react'
import Game from 'src/components/atoms/game'

describe('Game', () => {
  it('renders the game correctly', () => {
    const title = 'Planescape: Torment'
    render(
      <Game
        id="1"
        slug="planescape-torment"
        title={title}
        img="test.jpg"
        rating={90}
      />
    )

    const img = screen.getByRole('img')
    const rating = screen.getByText(90)

    expect(rating).toBeInTheDocument()
    expect(img).toHaveAttribute('alt', title)
  })
})
