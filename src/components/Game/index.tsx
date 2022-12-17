import ContentfulRichText from '@ui/ContentfulRichText'
import RatingCircle from '@ui/RatingCircle'
import Tag from '@ui/Tag'
import Title from '@ui/Title'
import { FC } from 'react'
import { Game } from 'src/lib/contentful'
import StatTable from './StatTable'

export type GamePageProps = {
  game: Game
}

const GamePage: FC<GamePageProps> = ({ game }) => (
  <div className="flex flex-col my-8 space-y-8">
    <div data-testid="game-title" className="flex items-center justify-between">
      <Title>{game.title}</Title>
      <RatingCircle rating={game.rating} />
    </div>
    <div
      data-testid="game-tags"
      className="flex flex-col items-start space-y-2 md:items-center md:space-x-2 md:space-y-0 md:flex-row">
      {game.tags.map((tag) => (
        <Tag key={tag.toLowerCase()}>{tag}</Tag>
      ))}
    </div>
    <StatTable {...game} />
    {game.notes && (
      <ContentfulRichText
        textSize="lg"
        document={game.notes.json}
        links={game.notes.links}
      />
    )}
  </div>
)

export default GamePage
