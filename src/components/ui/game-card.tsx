import ContentfulImage from "@ui/contentful-image";
import { getRatingColour } from "src/lib/utils";
import { AchievementIcon } from "src/components/icons";

type GameCardProps = {
  id: string;
  title: string;
  img: string;
  rating: number;
  allAchievements: boolean;
};

const GameCard: React.FC<GameCardProps> = ({
  id,
  title,
  img,
  rating,
  allAchievements,
}) => (
  <div className="game-card" data-testid={id}>
    {allAchievements && (
      <AchievementIcon className="absolute z-40 top-1 right-0 w-8" />
    )}
    <ContentfulImage
      src={img}
      alt={title}
      quality={75}
      placeholder="blur"
      blurDataURL={`${img}?w=100&q=5&fm=jpg&fl=progressive`}
      sizes="(max-width: 768px) 50vw,
        (max-width: 1200px) 30vw,
        20vw"
      width="600"
      height="900"
    />
    <div className="relative bottom-0 flex items-center justify-center w-full">
      <span
        className="absolute z-40 px-2 font-bold rounded-sm -bottom-2"
        style={{ background: getRatingColour(rating) }}
      >
        {rating}
      </span>
    </div>
  </div>
);

export default GameCard;
