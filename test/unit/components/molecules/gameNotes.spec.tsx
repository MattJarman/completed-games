import { EMPTY_DOCUMENT } from '@contentful/rich-text-types'
import { render, screen } from '@testing-library/react'
import ContentContainer from 'src/components/atoms/contentContainer'
import GameNotes from 'src/components/molecules/gameNotes'

jest.mock('src/components/atoms/contentContainer')

const mockedContentContainer = ContentContainer as jest.MockedFunction<
  typeof ContentContainer
>

describe('GameNotes', () => {
  it('renders the notes correctly', () => {
    mockedContentContainer.mockReturnValueOnce(
      <p data-testid="container">hello</p>
    )

    render(<GameNotes document={EMPTY_DOCUMENT} />)

    const container = screen.getByTestId('container')

    expect(container).toBeInTheDocument()
  })
})
