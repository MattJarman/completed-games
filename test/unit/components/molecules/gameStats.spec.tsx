import { render, screen } from '@testing-library/react'
import ContentContainer from 'src/components/atoms/contentContainer'
import GameStats from 'src/components/molecules/gameStats'

jest.mock('src/components/atoms/contentContainer')

const mockedContentContainer = ContentContainer as jest.MockedFunction<
  typeof ContentContainer
>

describe('GameStats', () => {
  it('renders the stats correctly', () => {
    mockedContentContainer.mockReturnValueOnce(
      <p data-testid="container">hello</p>
    )

    render(
      <GameStats rows={[{ icon: <p></p>, name: 'test', value: 'hello' }]} />
    )

    const container = screen.getByTestId('container')

    expect(container).toBeInTheDocument()
  })
})
