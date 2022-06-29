import { render, screen } from '@testing-library/react'
import Tag from 'src/components/atoms/tag'

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
