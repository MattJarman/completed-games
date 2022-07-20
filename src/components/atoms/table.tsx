import type { ReactNode } from 'react'

type TableProps = {
  children: ReactNode
  className?: string
}

const Table: React.FC<TableProps> = ({ children, className }) => (
  <table
    className={`font-thin flex md:table rounded-md text-white ${className}`}>
    <tbody className="flex flex-col w-full">{children}</tbody>
  </table>
)

export default Table
