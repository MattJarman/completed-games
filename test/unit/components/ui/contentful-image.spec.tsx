import { render, screen } from '@testing-library/react'
import ContentfulImage from '@ui/contentful-image'

describe('ContentfulImage', () => {
  it('renders the image with the correct props', () => {
    const alt = 'test-alt'
    render(
      <ContentfulImage src="./index.png" width="100" height="100" alt={alt} />
    )

    const image = screen.getByAltText(alt)
    expect(image).toBeInTheDocument()
  })
})
