import Title from '@ui/Title'
import RatingCircle from '@ui/RatingCircle'

type GameTitleProps = {
  title: string
  rating: number
}

const GameTitle: React.FC<GameTitleProps> = ({ title, rating }) => (
  <div data-testid="game-title" className="flex items-center justify-between">
    <Title>{title}</Title>
    <RatingCircle rating={rating} />
  </div>
)

export default GameTitle
