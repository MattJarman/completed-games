import { render, screen } from '@testing-library/react'
import Index from 'src/pages/index'

describe('Index', () => {
  it('renders hello world', () => {
    render(<Index />)

    const helloWorld = screen.getByText(/Hello, World!/)

    expect(helloWorld).toBeInTheDocument()
  })
})
