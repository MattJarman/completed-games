import { render, screen } from '@testing-library/react'
import Title from 'src/components/atoms/title'

describe('Title', () => {
  it('renders the title correctly', () => {
    const title = 'title'
    render(<Title title={title} />)

    const text = screen.getByText(title)

    expect(text).toBeInTheDocument()
  })
})
