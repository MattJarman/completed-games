import type { NextPage } from 'next'
import { getRatingColour } from 'src/lib/utils'

type RatingCircleProps = {
  rating: number
}

const RatingCircle: NextPage<RatingCircleProps> = ({ rating }) => {
  return (
    <div
      className="p-4 text-3xl font-bold text-gray-200 bg-black bg-opacity-50 border-4 rounded-full shadow-xl"
      style={{ borderColor: getRatingColour(rating) }}>
      {rating}
    </div>
  )
}

export default RatingCircle
