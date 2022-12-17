import { render, screen } from '@testing-library/react'
import Tag from '@ui/Tag'

describe('Tag', () => {
  it('renders the tag correctly', () => {
    render(
      <Tag>
        <p data-testid="text"></p>
      </Tag>
    )

    const text = screen.getByTestId('text')

    expect(text).toBeInTheDocument()
  })
})
