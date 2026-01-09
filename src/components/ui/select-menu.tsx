import { Menu, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import type { ComponentProps, FC, PropsWithChildren } from "react";
import { Fragment } from "react";
import { classNames } from "src/lib/utils";

export type SelectMenuProps = {
  text: string;
};

export type SelectMenuItemProps = ComponentProps<"button"> & {
  selected: boolean;
};

const SelectMenu: FC<PropsWithChildren<SelectMenuProps>> = ({
  text,
  children,
}) => (
  <Menu as="div" className="relative inline-block text-left">
    <Menu.Button className="inline-flex justify-between items-center w-32 px-3 py-2 text-sm font-medium text-gray-300 bg-gray-800 rounded-md hover:bg-opacity-30">
      {text}
      <ChevronDownIcon
        className="w-4 h-4 ml-2 -mr-1 text-gray-500"
        aria-hidden="true"
      />
    </Menu.Button>
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute right-0 z-50 w-56 mt-2 origin-top-right bg-gray-800 rounded-md shadow-lg">
        <div className="px-1 py-1">{children}</div>
      </Menu.Items>
    </Transition>
  </Menu>
);

export const SelectMenuItem: FC<PropsWithChildren<SelectMenuItemProps>> = ({
  children,
  selected,
  ...buttonProps
}) => (
  <Menu.Item>
    {({ active }) => (
      <button
        {...buttonProps}
        className={classNames(
          "group flex w-full items-center rounded-md px-2 py-1.5 text-sm",
          active ? "bg-gray-900 text-white" : "text-gray-300"
        )}
      >
        {children}
        {selected && (
          <CheckIcon
            data-testid="check"
            className="w-4 h-4"
            aria-hidden="true"
          />
        )}
      </button>
    )}
  </Menu.Item>
);

export const SelectMenuTitle: FC<PropsWithChildren> = ({ children }) => (
  <div className="group flex w-full items-center rounded-md px-2 py-1.5 text-gray-300 font-semibold">
    {children}
  </div>
);

export const SelectMenuSeparator: FC = () => (
  <div className="bg-gray-700 h-[2px] my-1.5 mx-1 rounded-md"></div>
);

export default SelectMenu;
