import Link from 'next/link'
import { getRatingColour } from 'src/lib/utils'
import styled from 'styled-components'
import ContentfulImage from './contentfulImage'

const GameCardWrapper = styled.a`
  border-radius: 0.375rem;
  object-fit: contain;
  cursor: pointer;
  position: relative;
  padding: 0;
  transition: 0.2s all ease-in-out;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);

  & img {
    width: 100%;
    display: inherit;
  }

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: linear-gradient(
      -135deg,
      rgba(200, 230, 250, 1) 0%,
      transparent 50%
    );
    z-index: 40;
    background-size: 200%;
    box-shadow: inset 0 10px 20px rgba(0, 0, 0, 0.5);
    transition: 0.2s all ease-in-out;
  }

  &:hover {
    transform: perspective(100em) rotateX(10deg) scale(1.05);
    z-index: 10;

    &:before {
      background-position: 50%;
    }
  }
`

type GameCardProps = {
  id: string
  slug: string
  title: string
  img: string
  rating: number
}

const GameCard: React.FC<GameCardProps> = ({
  id,
  slug,
  title,
  img,
  rating
}) => (
  <Link href={`/game/${slug}`} passHref>
    <GameCardWrapper id={id}>
      <ContentfulImage
        src={img}
        alt={title}
        layout="responsive"
        width="600"
        height="900"
      />
      <div className="relative bottom-0 flex items-center justify-center w-full">
        <span
          className="absolute z-50 px-2 font-bold rounded-sm -bottom-2"
          style={{ background: getRatingColour(rating) }}>
          {rating}
        </span>
      </div>
    </GameCardWrapper>
  </Link>
)

export default GameCard
