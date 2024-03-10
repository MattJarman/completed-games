import { FC } from "react";
import { getRatingColour } from "src/lib/utils";

type RatingCircleProps = {
  rating: number;
};

const RatingCircle: FC<RatingCircleProps> = ({ rating }) => (
  <div
    data-testid="rating"
    className="flex items-center justify-center text-xl font-bold text-gray-200 border-4 rounded-full shadow-xl min-w-[3.5rem] min-h-[3.5rem] bg-black/50 sm:text-3xl sm:min-w-[5rem] sm:min-h-[5rem]"
    style={{ borderColor: getRatingColour(rating) }}
  >
    {rating}
  </div>
);

export default RatingCircle;
