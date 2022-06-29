import { render, screen } from '@testing-library/react'
import RatingCircle from 'src/components/atoms/ratingCircle'
import Title from 'src/components/atoms/title'
import GameTitle from 'src/components/molecules/gameTitle'

jest.mock('src/components/atoms/title')
jest.mock('src/components/atoms/ratingCircle')

const mockedTitle = Title as jest.MockedFunction<typeof Title>
const mockedRatingCircle = RatingCircle as jest.MockedFunction<
  typeof RatingCircle
>

describe('GameTitle', () => {
  it('renders the title and rating correctly', () => {
    mockedTitle.mockReturnValueOnce(<p data-testid="title">hello</p>)
    mockedRatingCircle.mockReturnValueOnce(
      <span data-testid="rating-circle">100</span>
    )

    render(<GameTitle title={'hello'} rating={100} />)

    const title = screen.getByTestId('title')
    const ratingCircle = screen.getByTestId('title')

    expect(title).toBeInTheDocument()
    expect(ratingCircle).toBeInTheDocument()
  })
})
