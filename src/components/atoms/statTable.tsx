export type StatRow = {
  icon: JSX.Element
  name: string
  value: string
}

export type StatTableProps = {
  className?: string
  rows: StatRow[]
}

const StatTable: React.FC<StatTableProps> = ({ rows, className }) => (
  <div className={className}>
    {rows.map((row, index) => (
      <div
        key={index}
        className="flex flex-col mb-2 sm:justify-between sm:flex-row">
        <div className="flex items-center space-x-2 tracking-wider text-gray-400 sm:justify-center">
          {row.icon}
          <span>{row.name}</span>
        </div>
        <div className="font-light tracking-wide text-gray-200">
          {row.value}
        </div>
      </div>
    ))}
  </div>
)

export default StatTable
