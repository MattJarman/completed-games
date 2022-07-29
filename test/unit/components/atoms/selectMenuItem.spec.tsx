import { Menu } from '@headlessui/react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SelectMenuItem from 'src/components/atoms/selectMenuItem'
import { classNames } from 'src/lib/utils'

jest.mock('src/lib/utils/classNames')
jest.mock('@heroicons/react/solid')

const mockClassNames = classNames as jest.MockedFunction<typeof classNames>

describe('SelectMenuItem', () => {
  beforeAll(() => {
    mockClassNames.mockReturnValue('')
  })

  it('renders the select menu item', () => {
    render(
      <Menu>
        <SelectMenuItem
          selected={true}
          className={''}
          activeClassName={''}
          onClick={() => jest.fn()}>
          <div></div>
        </SelectMenuItem>
      </Menu>
    )

    const menuItem = screen.getByRole('menuitem')

    expect(menuItem).toBeInTheDocument()
  })

  it('calls the onClick function when clicked', async () => {
    const mockOnClick = jest.fn()
    render(
      <Menu>
        <SelectMenuItem
          selected={false}
          className={''}
          activeClassName={''}
          onClick={() => mockOnClick()}>
          <div></div>
        </SelectMenuItem>
      </Menu>
    )

    const menuItem = screen.getByRole('menuitem')

    await userEvent.click(menuItem)

    expect(mockOnClick).toHaveBeenCalled()
  })
})
