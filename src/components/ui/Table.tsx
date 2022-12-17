import { cva, VariantProps } from 'class-variance-authority'
import type { FC, PropsWithChildren } from 'react'

const tableCellStyles = cva('px-2 py-3 border-[1px] border-gray-600', {
  variants: {
    intent: {
      primary: 'font-bold text-white',
      secondary: 'text-gray-200'
    }
  },
  defaultVariants: {
    intent: 'primary'
  }
})

const tableStyles = cva(
  'text-sm text-white border-[1px] border-collapse border-gray-600',
  {
    variants: {
      widthLg: {
        '2/3': 'w-full lg:w-2/3'
      }
    },
    defaultVariants: {
      widthLg: '2/3'
    }
  }
)

export type TableCellProps = VariantProps<typeof tableCellStyles>
export type TableProps = VariantProps<typeof tableStyles>

export const TableRow: FC<PropsWithChildren> = ({ children }) => (
  <tr>{children}</tr>
)

export const TableCell: FC<PropsWithChildren<TableCellProps>> = ({
  intent,
  children
}) => (
  <td className={tableCellStyles({ intent })}>
    <div className="flex items-center">{children}</div>
  </td>
)

const Table: FC<PropsWithChildren<TableProps>> = ({ children, widthLg }) => (
  <table data-testid="table" className={tableStyles({ widthLg })}>
    <tbody>{children}</tbody>
  </table>
)

export default Table
