import type { ReactNode } from 'react'

type TableRowProps = {
  children: ReactNode
  className?: string
}

const TableRow: React.FC<TableRowProps> = ({ children, className }) => (
  <tr
    className={`flex flex-row flex-wrap group md:flex-nowrap ${
      className || ''
    }`}>
    {children}
  </tr>
)

export default TableRow
