import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchInput from 'src/components/atoms/searchInput'

describe('SearchInput', () => {
  it('renders the input', async () => {
    const onChange = jest.fn()
    const placeholder = 'Search'
    const inputText = 'test'
    const user = userEvent.setup()

    render(
      <SearchInput
        id="search"
        name="search"
        placeholder={placeholder}
        onChange={onChange}
      />
    )

    const input = screen.getByPlaceholderText(placeholder)
    expect(input).toBeInTheDocument()

    await user.type(input, inputText)

    expect(onChange).toBeCalledTimes(inputText.length)
  })
})
