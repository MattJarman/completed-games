import { getRatingColour } from 'src/lib/utils'

type RatingCircleProps = {
  rating: number
}

const RatingCircle: React.FC<RatingCircleProps> = ({ rating }) => {
  return (
    <div
      className="flex items-center justify-center text-xl font-bold text-gray-200 border-4 rounded-full shadow-xl w-14 h-14 bg-black/50 sm:text-3xl sm:w-20 sm:h-20"
      style={{ borderColor: getRatingColour(rating) }}>
      {rating}
    </div>
  )
}

export default RatingCircle
