import ContentfulImage from "@ui/contentful-image";
import { getRatingColour } from "src/lib/utils";

type GameCardProps = {
  id: string;
  title: string;
  img: string;
  rating: number;
};

const GameCard: React.FC<GameCardProps> = ({ id, title, img, rating }) => (
  <div className="game-card" data-testid={id}>
    <ContentfulImage
      src={img}
      alt={title}
      quality={75}
      placeholder="blur"
      blurDataURL={`${img}?w=100&q=5&fm=jpg&fl=progressive`}
      layout="responsive"
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
