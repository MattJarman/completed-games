import { render, screen } from '@testing-library/react'
import ContentfulImage from 'src/components/atoms/contentfulImage'

describe('Test ContentfulImage', () => {
  it('should render the image with the correct props', () => {
    const alt = 'test-alt'
    render(
      <ContentfulImage src="./index.png" width="100" height="100" alt={alt} />
    )

    const image = screen.getByAltText(alt)
    expect(image).toBeInTheDocument()
  })
})
