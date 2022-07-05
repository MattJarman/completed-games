import {
  CalendarIcon,
  ChartBarIcon,
  ClockIcon,
  CogIcon
} from '@heroicons/react/solid'
import Table from 'src/components/atoms/Table'
import TableCell from 'src/components/atoms/TableCell'
import TableRow from 'src/components/atoms/TableRow'
import { Game } from 'src/lib/contentful'

export type StatTableProps = Pick<
  Game,
  'completedAt' | 'playtime' | 'difficulty' | 'completionStats'
> & { className?: string }

const StatTable: React.FC<StatTableProps> = ({
  completedAt,
  playtime,
  difficulty,
  completionStats,
  className
}) => (
  <Table
    className={`md:border-[1px] border-gray-600 border-separate border-spacing-0 ${className}`}>
    <TableRow className="hover:bg-sky-700">
      <TableCell className="pt-2 space-x-2 text-base font-bold md:p-2">
        <span>
          <CalendarIcon className="w-4 h-4 md:w-5 md:h-5" />
        </span>
        <span>Completed</span>
      </TableCell>
      <TableCell className="pb-2 md:p-2 md:border-l-[1px] border-gray-600 text-gray-100 text-sm">
        {new Date(completedAt).toDateString()}
      </TableCell>
    </TableRow>
    <TableRow className="hover:bg-sky-700">
      <TableCell className="pt-2 md:p-2 space-x-2 font-bold border-t-[2px] md:border-t-[1px] border-gray-600">
        <span>
          <ClockIcon className="w-4 h-4 md:w-5 md:h-5" />
        </span>
        <span>Playtime</span>
      </TableCell>
      <TableCell className="pb-2 md:p-2 md:border-l-[1px] border-gray-600 text-gray-100 text-sm md:border-t-[1px]">
        {`${playtime ?? 0} hrs`}
      </TableCell>
    </TableRow>
    <TableRow className="hover:bg-sky-700">
      <TableCell className="pt-2 md:p-2 space-x-2 font-bold border-t-[2px] md:border-t-[1px] border-gray-600">
        <span>
          <CogIcon className="w-4 h-4 md:w-5 md:h-5" />
        </span>
        <span>Difficulty</span>
      </TableCell>
      <TableCell className="pb-2 md:p-2 md:border-l-[1px] border-gray-600 text-gray-100 text-sm md:border-t-[1px]">
        {difficulty ?? '?'}
      </TableCell>
    </TableRow>
    <TableRow className="hover:bg-sky-700">
      <TableCell className="pt-2 md:p-2 space-x-2 font-bold border-t-[2px] md:border-t-[1px] border-gray-600">
        <span>
          <ChartBarIcon className="w-4 h-4 md:w-5 md:h-5" />
        </span>
        <span>Completion Stats</span>
      </TableCell>
      <TableCell className="pb-2 md:p-2 md:border-l-[1px] border-gray-600 text-gray-100 text-sm md:border-t-[1px]">
        {completionStats ?? '?'}
      </TableCell>
    </TableRow>
  </Table>
)

export default StatTable
