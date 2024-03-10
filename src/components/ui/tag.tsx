import type { FC, PropsWithChildren } from "react";

const Tag: FC<PropsWithChildren> = ({ children }) => (
  <div className="px-2 py-1 text-xs rounded-sm shadow-sm md:text-sm bg-sky-700/25 text-sky-400">
    {children}
  </div>
);

export default Tag;
