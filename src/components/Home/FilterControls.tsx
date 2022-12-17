import {
  CalendarIcon,
  ChartBarIcon,
  ClockIcon,
  SearchIcon,
  TranslateIcon
} from '@heroicons/react/solid'
import SelectMenu, { SelectMenuItem } from '@ui/SelectMenu'
import TextInput from '@ui/TextInput'
import { debounce } from 'lodash'
import { useCallback, useMemo, useState } from 'react'
import { SortMapKey } from './index'

export type FilterControlsProps = {
  initialSort: SortMapKey
  setSort: (sort: SortMapKey) => void
  setFilter: (filter: string) => void
}

const FilterControls: React.FC<FilterControlsProps> = ({
  initialSort,
  setFilter,
  setSort
}) => {
  const [selectedSort, setSelectedSort] = useState(initialSort)

  const changeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFilter(event.target.value)
    },
    [setFilter]
  )

  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, 300),
    [changeHandler]
  )

  const handleSortClick = (sort: SortMapKey) => {
    setSelectedSort(sort)
    setSort(sort)
  }

  return (
    <div className="flex flex-col-reverse my-4 space-y-3 sm:items-center sm:space-x-3 sm:flex-row">
      <div className="flex-grow"></div>
      <TextInput
        id="game"
        name="filter"
        placeholder="Search"
        onChange={debouncedChangeHandler}
        Icon={SearchIcon}
      />
      <div className="flex justify-end">
        <SelectMenu text="Sort">
          <SelectMenuItem
            onClick={() => handleSortClick('completed')}
            selected={selectedSort === 'completed'}>
            <span className="flex items-center flex-grow">
              <CalendarIcon className="w-5 h-5 mr-2" aria-hidden="true" />
              Completed
            </span>
          </SelectMenuItem>
          <SelectMenuItem
            onClick={() => handleSortClick('playtime')}
            selected={selectedSort === 'playtime'}>
            <span className="flex items-center flex-grow">
              <ClockIcon className="w-5 h-5 mr-2" aria-hidden="true" />
              Playtime
            </span>
          </SelectMenuItem>
          <SelectMenuItem
            onClick={() => handleSortClick('rating')}
            selected={selectedSort === 'rating'}>
            <span className="flex items-center flex-grow">
              <ChartBarIcon className="w-5 h-5 mr-2" aria-hidden="true" />
              Rating
            </span>
          </SelectMenuItem>
          <SelectMenuItem
            onClick={() => handleSortClick('name')}
            selected={selectedSort === 'name'}>
            <span className="flex items-center flex-grow">
              <TranslateIcon className="w-5 h-5 mr-2" aria-hidden="true" />
              Name
            </span>
          </SelectMenuItem>
        </SelectMenu>
      </div>
    </div>
  )
}

export default FilterControls
