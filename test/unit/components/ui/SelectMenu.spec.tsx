import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SelectMenu, { SelectMenuItem } from '@ui/SelectMenu'

describe('SelectMenu', () => {
  it('renders the select menu', () => {
    const menuText = 'Sort'
    render(<SelectMenu text={menuText}></SelectMenu>)
    expect(screen.getByText(menuText)).toBeInTheDocument()
  })

  it('renders select menu items on click', async () => {
    const menuText = 'Sort'
    const itemText = 'Item'
    const mockOnClick = jest.fn()

    render(
      <SelectMenu text={menuText}>
        <SelectMenuItem onClick={mockOnClick} selected={false}>
          {itemText}
        </SelectMenuItem>
      </SelectMenu>
    )

    await userEvent.click(screen.getByText(menuText))
    await userEvent.click(screen.getByText(itemText))

    expect(mockOnClick).toBeCalled()
  })

  it('renders a check icon if the item is selected', async () => {
    const menuText = 'Sort'
    const itemText = 'Item'

    render(
      <SelectMenu text={menuText}>
        <SelectMenuItem selected={true}>{itemText}</SelectMenuItem>
      </SelectMenu>
    )

    await userEvent.click(screen.getByText(menuText))

    const item = screen.getByText(itemText)
    const icon = within(item).getByTestId('check')

    expect(icon).toBeInTheDocument()
  })
})
