import type { NextPage } from 'next'

export type StatRow = {
  icon: JSX.Element
  name: string
  value: string
}

export type StatTableProps = {
  className?: string
  rows: StatRow[]
}

const StatTable: NextPage<StatTableProps> = ({ rows, className }) => (
  <div className={className}>
    {rows.map((row, index) => (
      <div key={index} className="flex justify-between">
        <div className="flex items-center justify-center space-x-2 tracking-wider text-gray-500">
          {row.icon}
          <span>{row.name}</span>
        </div>
        <div className="tracking-wide text-gray-300">{row.value}</div>
      </div>
    ))}
  </div>
)

export default StatTable
