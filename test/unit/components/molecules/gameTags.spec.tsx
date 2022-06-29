import { render, screen } from '@testing-library/react'
import Tag from 'src/components/atoms/tag'
import GameTags from 'src/components/molecules/gameTags'

jest.mock('src/components/atoms/tag')

const mockedTag = Tag as jest.MockedFunction<typeof Tag>

describe('GameTags', () => {
  it('renders the tags correctly', () => {
    const tags = ['hello', 'there']
    mockedTag.mockReturnValueOnce(<span data-testid="tag">hello</span>)

    render(<GameTags tags={tags} />)

    const tag = screen.getByTestId('tag')

    expect(tag).toBeInTheDocument()

    expect(mockedTag).toBeCalledTimes(tags.length)
    expect(mockedTag).toHaveBeenNthCalledWith(1, { children: tags[0] }, {})
    expect(mockedTag).toHaveBeenNthCalledWith(2, { children: tags[1] }, {})
  })
})
