import { Menu } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/solid'
import type { ReactNode } from 'react'
import { classNames } from 'src/lib/utils'

export type SelectMenuItemProps = {
  children: ReactNode
  selected: boolean
  className: string
  activeClassName: string
  onClick: () => void
}

const SelectMenuItem: React.FC<SelectMenuItemProps> = ({
  children,
  selected,
  className,
  activeClassName,
  onClick
}) => (
  <Menu.Item>
    {({ active }) => (
      <button
        onClick={() => onClick()}
        className={classNames(
          'group flex w-full items-center rounded-md px-2 py-2 text-sm',
          active ? activeClassName : className
        )}>
        {children}
        {selected && <CheckIcon className="w-5 h-5" aria-hidden="true" />}
      </button>
    )}
  </Menu.Item>
)

export default SelectMenuItem
