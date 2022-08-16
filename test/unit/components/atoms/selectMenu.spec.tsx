import { render, screen } from '@testing-library/react'
import SelectMenu from 'src/components/atoms/selectMenu'

describe('SelectMenu', () => {
  it('renders the select menu', () => {
    const text = 'Sort'

    render(
      <SelectMenu text={text}>
        <div></div>
      </SelectMenu>
    )

    const button = screen.getByText(text)

    expect(button).toBeInTheDocument()
  })
})
