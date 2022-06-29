import { render, screen } from '@testing-library/react'
import ContentContainer from 'src/components/atoms/contentContainer'

describe('ContentContainer', () => {
  it('renders the container with its children', () => {
    render(
      <ContentContainer>
        <p data-testid="test">Test</p>
      </ContentContainer>
    )

    const paragraph = screen.getByTestId('test')
    expect(paragraph).toBeInTheDocument()
  })
})
