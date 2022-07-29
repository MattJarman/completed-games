import {
  CalendarIcon,
  ChartBarIcon,
  ClockIcon,
  TranslateIcon
} from '@heroicons/react/solid'
import { debounce } from 'lodash'
import { useCallback, useMemo, useState } from 'react'
import { SortMapKey } from 'src/pages'
import SearchInput from '../atoms/searchInput'
import SelectMenu from '../atoms/selectMenu'
import SelectMenuItem from '../atoms/selectMenuItem'

export type GameControlsProps = {
  initialSort: SortMapKey
  setSort: (sort: SortMapKey) => void
  setFilter: (filter: string) => void
}

const GameControls: React.FC<GameControlsProps> = ({
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
    <div className="flex items-center my-4 space-x-3">
      <div className="flex-grow"></div>
      <SearchInput
        id="game"
        name="filter"
        placeholder="Search"
        onChange={debouncedChangeHandler}
      />
      <SelectMenu text="Sort">
        <SelectMenuItem
          className="text-gray-300"
          activeClassName="bg-gray-900 text-white"
          onClick={() => handleSortClick('completed')}
          selected={selectedSort === 'completed'}>
          <span className="flex items-center flex-grow">
            <CalendarIcon className="w-5 h-5 mr-2" aria-hidden="true" />
            Completed
          </span>
        </SelectMenuItem>
        <SelectMenuItem
          className="text-gray-300"
          activeClassName="bg-gray-900 text-white"
          onClick={() => handleSortClick('playtime')}
          selected={selectedSort === 'playtime'}>
          <span className="flex items-center flex-grow">
            <ClockIcon className="w-5 h-5 mr-2" aria-hidden="true" />
            Playtime
          </span>
        </SelectMenuItem>
        <SelectMenuItem
          className="text-gray-300"
          activeClassName="bg-gray-900 text-white"
          onClick={() => handleSortClick('rating')}
          selected={selectedSort === 'rating'}>
          <span className="flex items-center flex-grow">
            <ChartBarIcon className="w-5 h-5 mr-2" aria-hidden="true" />
            Rating
          </span>
        </SelectMenuItem>
        <SelectMenuItem
          className="text-gray-300"
          activeClassName="bg-gray-900 text-white"
          onClick={() => handleSortClick('name')}
          selected={selectedSort === 'name'}>
          <span className="flex items-center flex-grow">
            <TranslateIcon className="w-5 h-5 mr-2" aria-hidden="true" />
            Name
          </span>
        </SelectMenuItem>
      </SelectMenu>
    </div>
  )
}

export default GameControls
