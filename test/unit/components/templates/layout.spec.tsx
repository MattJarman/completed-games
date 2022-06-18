import { render, screen } from '@testing-library/react'
import Layout from 'src/components/templates/layout'

describe('Test Layout', () => {
  it('renders the children', () => {
    render(
      <Layout>
        <div data-testid="child"></div>
      </Layout>
    )

    const child = screen.getByTestId('child')

    expect(child).toBeInTheDocument()
  })
})
