import Tag from 'src/components/atoms/tag'

type GameTagsProps = {
  tags: string[]
}

const GameTags: React.FC<GameTagsProps> = ({ tags }) => (
  <div
    data-testid="game-tags"
    className="flex flex-col items-start space-y-2 md:items-center md:space-x-2 md:space-y-0 md:flex-row">
    {tags.map((tag) => (
      <Tag key={tag.toLowerCase()}>{tag}</Tag>
    ))}
  </div>
)

export default GameTags
