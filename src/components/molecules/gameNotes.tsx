import ContentContainer from 'src/components/atoms/contentContainer'
import ContentfulRichText, {
  ContentfulRichTextProps
} from 'src/components/atoms/contentfulRichText'

type GameNotesProps = ContentfulRichTextProps

const GameNotes: React.FC<GameNotesProps> = ({ document }) => (
  <ContentContainer>
    <ContentfulRichText document={document} />
  </ContentContainer>
)

export default GameNotes
