import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Fragment, ReactNode } from 'react'

export type SelectMenuProps = {
  children: ReactNode
  text: string
}

const SelectMenu: React.FC<SelectMenuProps> = ({ text, children }) => (
  <div>
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-300 bg-gray-800 rounded-md hover:bg-opacity-30">
          {text}
          <ChevronDownIcon
            className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items className="absolute right-0 z-50 w-56 mt-2 origin-top-right bg-gray-800 rounded-md shadow-lg">
          <div className="px-1 py-1 ">{children}</div>
        </Menu.Items>
      </Transition>
    </Menu>
  </div>
)

export default SelectMenu
