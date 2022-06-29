import RatingCircle from 'src/components/atoms/ratingCircle'
import Title from 'src/components/atoms/title'

type GameTitleProps = {
  title: string
  rating: number
}

const GameTitle: React.FC<GameTitleProps> = ({ title, rating }) => (
  <div className="flex items-center justify-between">
    <Title
      title={title}
      className="text-2xl font-bold tracking-wide text-gray-200 truncate md:text-4xl"></Title>
    <RatingCircle rating={rating} />
  </div>
)

export default GameTitle
