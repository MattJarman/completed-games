import type { NextPage } from 'next'
import Image from 'next/image'
import { classNames } from 'src/lib/utils'
import styled from 'styled-components'

const GameWrapper = styled.div`
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

type GameProps = {
  title: string
  img: string
  rating: number
}

const Game: NextPage<GameProps> = ({ title, img, rating }) => (
  <GameWrapper>
    <Image src={img} alt={title} layout="responsive" width="600" height="900" />
    <div className="relative bottom-0 flex items-center justify-center w-full">
      <span
        className={classNames(
          'rounded-sm px-2 font-bold z-50 absolute -bottom-2',
          rating >= 95 ? 'bg-blue-500' : '',
          rating > 80 && rating < 95 ? 'bg-green-500' : '',
          rating > 75 && rating <= 80 ? 'bg-green-300' : '',
          rating > 60 && rating <= 75 ? 'bg-yellow-400' : '',
          rating > 50 && rating <= 60 ? 'bg-yellow-500' : '',
          rating <= 50 ? 'bg-red-500' : ''
        )}>
        {rating}
      </span>
    </div>
  </GameWrapper>
)

export default Game
