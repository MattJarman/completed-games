import { render, screen } from '@testing-library/react'
import GameTitle from 'src/components/molecules/gameTitle'

describe('GameTitle', () => {
  it('renders the title and rating correctly', () => {
    const title = 'test'
    const rating = 100

    render(<GameTitle title={title} rating={rating} />)

    const gameTitle = screen.getByTestId('game-title')

    expect(gameTitle).toHaveTextContent(title)
    expect(gameTitle).toHaveTextContent(rating.toString())
  })
})
