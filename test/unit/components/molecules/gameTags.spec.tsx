import { render, screen } from '@testing-library/react'
import GameTags from 'src/components/molecules/gameTags'

describe('GameTags', () => {
  it('renders the tags correctly', () => {
    const tags = ['hello', 'there']

    render(<GameTags tags={tags} />)

    const gameTags = screen.getByTestId('game-tags')

    tags.forEach((tag) => expect(gameTags).toHaveTextContent(tag))
  })
})
