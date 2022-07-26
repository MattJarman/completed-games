import { SearchIcon } from '@heroicons/react/solid'

export type SearchInputProps = {
  id: string
  name: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

const SearchInput: React.FC<SearchInputProps> = ({
  id,
  name,
  onChange,
  placeholder
}) => (
  <div className="bg-gray-800 rounded-md">
    <div className="flex p-2 mx-auto">
      <label htmlFor={id} className="flex items-center flex-none pr-3">
        <span className="sr-only">{name}</span>
        <SearchIcon className="w-6 h-6 text-gray-500" />
      </label>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        className="flex-auto leading-6 text-gray-300 placeholder-gray-600 bg-transparent rounded-lg base focus:outline-none focus:placeholder-gray-400"
      />
    </div>
  </div>
)

export default SearchInput
