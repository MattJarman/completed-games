import {
  CalendarIcon,
  ChartBarIcon,
  ClockIcon,
  CogIcon
} from '@heroicons/react/solid'
import Table, { TableCell, TableRow } from '@ui/table'
import { Game } from 'src/schemas/game'

export type StatTableProps<> = {
  completedAt: Game['completedAt']
  playtime?: Game['playtime']
  difficulty?: Game['difficulty']
  completionStats?: Game['completionStats']
}

const StatTable: React.FC<StatTableProps> = ({
  completedAt,
  playtime,
  difficulty,
  completionStats
}) => {
  const rows = [
    {
      name: 'Completed',
      value: new Date(completedAt).toDateString(),
      Icon: CalendarIcon
    },
    {
      name: 'Playtime',
      value: `${playtime ?? 0} hrs`,
      Icon: ClockIcon
    },
    {
      name: 'Difficulty',
      value: difficulty || '?',
      Icon: CogIcon
    },
    {
      name: 'Completion Stats',
      value: completionStats || '?',
      Icon: ChartBarIcon
    }
  ]

  return (
    <Table>
      {rows.map(({ name, value, Icon }, index) => (
        <TableRow key={`${name}-${index}`}>
          <TableCell>
            <span className="mr-2">
              <Icon className="w-4 h-4 md:w-5 md:h-5" />
            </span>
            <span>{name}</span>
          </TableCell>
          <TableCell intent="secondary">{value}</TableCell>
        </TableRow>
      ))}
    </Table>
  )
}

export default StatTable
