import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FilterControls from 'src/components/Home/FilterControls'

describe('FilterControls', () => {
  it.each`
    menuItemText   | sort
    ${'Completed'} | ${'completed'}
    ${'Playtime'}  | ${'playtime'}
    ${'Rating'}    | ${'rating'}
    ${'Name'}      | ${'name'}
  `(
    'sets sort when $menuItemText is clicked',
    async ({ menuItemText, sort }) => {
      const user = userEvent.setup()
      const setSort = jest.fn()

      render(
        <FilterControls
          initialSort={'completed'}
          setSort={setSort}
          setFilter={jest.fn()}
        />
      )

      const menu = screen.getByText(/Sort/i)
      await user.click(menu)

      const completedSortButton = screen.getByText(menuItemText)
      await user.click(completedSortButton)

      expect(setSort).toBeCalledWith(sort)
    }
  )
})
