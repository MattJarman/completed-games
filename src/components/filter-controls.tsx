import {
  CalendarIcon,
  ChartBarIcon,
  ClockIcon,
  MagnifyingGlassIcon,
  LanguageIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import SelectMenu, {
  SelectMenuItem,
  SelectMenuSeparator,
  SelectMenuTitle,
} from "@ui/select-menu";
import TextInput from "@ui/text-input";
import { ChangeEvent } from "react";
import { Sort } from "src/schemas/sort";

export type FilterControlsProps = {
  sort?: Sort;
  search?: string;
  completedAtYears: Array<number>;
  availableCompletedAtYears: Array<number>;
  completionFilterValue: "allAchievements" | null;
  onSortChange: (sort: Sort) => void;
  onSearchChange: (search: string | null) => void;
  onCompletedAtFilterChange: (year: Array<number> | null) => void;
  onCompletionFilterChange: (completion: "allAchievements" | null) => void;
};

const FilterControls: React.FC<FilterControlsProps> = ({
  sort,
  search,
  completedAtYears,
  availableCompletedAtYears,
  completionFilterValue,
  onSortChange,
  onSearchChange,
  onCompletedAtFilterChange,
  onCompletionFilterChange,
}) => {
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value || null);
  };

  const handleSortClick = (sort: Sort) => {
    onSortChange(sort);
  };

  return (
    <div className="flex flex-col-reverse my-4 gap-3 sm:items-center sm:flex-row">
      <div className="grow"></div>
      <TextInput
        id="game"
        name="filter"
        placeholder="Search"
        value={search}
        onChange={handleSearchChange}
        Icon={MagnifyingGlassIcon}
      />
      <div className="flex gap-2 justify-end">
        <SelectMenu text="Filter">
          <SelectMenuTitle>Year</SelectMenuTitle>
          {availableCompletedAtYears.map((year) => {
            const isSelected = Boolean(completedAtYears?.includes(year));
            const handleCompletedAtYearSelected = (year: number) => {
              const updatedCompletedAtYears = isSelected
                ? completedAtYears.filter(
                    (completedAtYear) => completedAtYear !== year
                  )
                : completedAtYears.concat(year).sort((a, b) => b - a);

              if (updatedCompletedAtYears.length === 0) {
                onCompletedAtFilterChange(null);
                return;
              }

              onCompletedAtFilterChange(updatedCompletedAtYears);
            };

            return (
              <SelectMenuItem
                key={year}
                onClick={() => handleCompletedAtYearSelected(year)}
                selected={completedAtYears?.includes(year) || false}
              >
                <span className="flex items-center grow">{year}</span>
              </SelectMenuItem>
            );
          })}

          <SelectMenuSeparator />
          <SelectMenuTitle>Completion</SelectMenuTitle>
          <SelectMenuItem
            onClick={() =>
              completionFilterValue === "allAchievements"
                ? onCompletionFilterChange(null)
                : onCompletionFilterChange("allAchievements")
            }
            selected={completionFilterValue === "allAchievements"}
          >
            <span className="flex items-center grow">All Achievements</span>
          </SelectMenuItem>
        </SelectMenu>
        <SelectMenu text="Sort">
          <SelectMenuItem
            onClick={() => handleSortClick("completed")}
            selected={sort === "completed"}
          >
            <span className="flex items-center grow">
              <CalendarIcon className="w-4 h-4 mr-2" aria-hidden="true" />
              Completed
            </span>
          </SelectMenuItem>
          <SelectMenuItem
            onClick={() => handleSortClick("playtime")}
            selected={sort === "playtime"}
          >
            <span className="flex items-center grow">
              <ClockIcon className="w-4 h-4 mr-2" aria-hidden="true" />
              Playtime
            </span>
          </SelectMenuItem>
          <SelectMenuItem
            onClick={() => handleSortClick("rating")}
            selected={sort === "rating"}
          >
            <span className="flex items-center grow">
              <ChartBarIcon className="w-4 h-4 mr-2" aria-hidden="true" />
              Rating
            </span>
          </SelectMenuItem>
          <SelectMenuItem
            onClick={() => handleSortClick("name")}
            selected={sort === "name"}
          >
            <span className="flex items-center grow">
              <LanguageIcon className="w-4 h-4 mr-2" aria-hidden="true" />
              Name
            </span>
          </SelectMenuItem>
          <SelectMenuItem
            onClick={() => handleSortClick("achievements")}
            selected={sort === "achievements"}
          >
            <span className="flex items-center grow">
              <StarIcon className="w-4 h-4 mr-2" />
              Achievements
            </span>
          </SelectMenuItem>
        </SelectMenu>
      </div>
    </div>
  );
};

export default FilterControls;
