import { render, screen } from '@testing-library/react'
import RatingCircle from 'src/components/atoms/ratingCircle'

describe('RatingCircle', () => {
  it('renders the circle with the provided rating', () => {
    const rating = 90
    render(<RatingCircle rating={rating} />)

    const ratingElement = screen.getByText(rating)

    expect(ratingElement).toBeInTheDocument()
  })
})
