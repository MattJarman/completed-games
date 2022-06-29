import ContentContainer from 'src/components/atoms/contentContainer'
import StatTable, { StatTableProps } from 'src/components/atoms/statTable'

type GameStatsProps = StatTableProps

const GameStats: React.FC<GameStatsProps> = ({ rows }) => (
  <ContentContainer className="md:w-2/3 2xl:w-1/3">
    <StatTable rows={rows} />
  </ContentContainer>
)

export default GameStats
