import {
  CalendarIcon,
  ChartBarIcon,
  ClockIcon,
  SearchIcon,
  TranslateIcon,
} from "@heroicons/react/solid";
import SelectMenu, { SelectMenuItem } from "@ui/select-menu";
import TextInput from "@ui/text-input";
import { ChangeEvent } from "react";
import { Sort } from "src/schemas/sort";

export type FilterControlsProps = {
  sort?: Sort;
  search?: string;
  onSortChange: (sort: Sort) => void;
  onSearchChange: (search: string) => void;
};

const FilterControls: React.FC<FilterControlsProps> = ({
  sort,
  search,
  onSortChange,
  onSearchChange,
}) => {
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };

  const handleSortClick = (sort: Sort) => {
    onSortChange(sort);
  };

  return (
    <div className="flex flex-col-reverse my-4 space-y-3 sm:items-center sm:space-x-3 sm:flex-row">
      <div className="flex-grow"></div>
      <TextInput
        id="game"
        name="filter"
        placeholder="Search"
        value={search}
        onChange={handleSearchChange}
        Icon={SearchIcon}
      />
      <div className="flex justify-end">
        <SelectMenu text="Sort">
          <SelectMenuItem
            onClick={() => handleSortClick("completed")}
            selected={sort === "completed"}
          >
            <span className="flex items-center flex-grow">
              <CalendarIcon className="w-5 h-5 mr-2" aria-hidden="true" />
              Completed
            </span>
          </SelectMenuItem>
          <SelectMenuItem
            onClick={() => handleSortClick("playtime")}
            selected={sort === "playtime"}
          >
            <span className="flex items-center flex-grow">
              <ClockIcon className="w-5 h-5 mr-2" aria-hidden="true" />
              Playtime
            </span>
          </SelectMenuItem>
          <SelectMenuItem
            onClick={() => handleSortClick("rating")}
            selected={sort === "rating"}
          >
            <span className="flex items-center flex-grow">
              <ChartBarIcon className="w-5 h-5 mr-2" aria-hidden="true" />
              Rating
            </span>
          </SelectMenuItem>
          <SelectMenuItem
            onClick={() => handleSortClick("name")}
            selected={sort === "name"}
          >
            <span className="flex items-center flex-grow">
              <TranslateIcon className="w-5 h-5 mr-2" aria-hidden="true" />
              Name
            </span>
          </SelectMenuItem>
        </SelectMenu>
      </div>
    </div>
  );
};

export default FilterControls;
