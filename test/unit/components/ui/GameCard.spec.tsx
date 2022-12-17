import { render, screen } from '@testing-library/react'
import Game from '@ui/GameCard'

describe('GameCard', () => {
  it('renders the game card correctly', () => {
    const title = 'Planescape: Torment'
    render(<Game id="1" title={title} img="test.jpg" rating={90} />)

    const img = screen.getByRole('img')
    const rating = screen.getByText(90)

    expect(rating).toBeInTheDocument()
    expect(img).toHaveAttribute('alt', title)
  })
})
