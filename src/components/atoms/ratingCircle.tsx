import type { NextPage } from 'next'
import { getRatingColour } from 'src/lib/utils'

type RatingCircleProps = {
  rating: number
}

const RatingCircle: React.FC<RatingCircleProps> = ({ rating }) => {
  return (
    <div
      className="p-3 text-xl font-bold text-gray-200 bg-black bg-opacity-50 border-4 rounded-full shadow-xl sm:p-4 sm:text-3xl"
      style={{ borderColor: getRatingColour(rating) }}>
      {rating}
    </div>
  )
}

export default RatingCircle
