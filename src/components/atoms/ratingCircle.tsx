import { getRatingColour } from 'src/lib/utils'

type RatingCircleProps = {
  rating: number
}

const RatingCircle: React.FC<RatingCircleProps> = ({ rating }) => {
  return (
    <div
      className="p-3 text-xl font-bold text-gray-200 border-4 rounded-full shadow-xl bg-black/50 sm:p-4 sm:text-3xl"
      style={{ borderColor: getRatingColour(rating) }}>
      {rating}
    </div>
  )
}

export default RatingCircle
