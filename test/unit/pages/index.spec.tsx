import { render, screen } from '@testing-library/react'
import Home from 'src/pages/index'

describe('Test Layout', () => {
  it('renders the children', () => {
    render(<Home />)

    const container = screen.getByTestId('game-container')

    expect(container).toBeInTheDocument()
  })
})
