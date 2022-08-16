import type { ReactNode } from 'react'

type TableCellProps = {
  children: ReactNode
  className?: string
}

const TableCell: React.FC<TableCellProps> = ({ children, className }) => (
  <td className={`flex items-center w-full ${className}`}>{children}</td>
)

export default TableCell
