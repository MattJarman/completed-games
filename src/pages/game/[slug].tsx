import ContentfulRichText from '@ui/ContentfulRichText'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import GameTags from 'src/components/molecules/gameTags'
import GameTitle from 'src/components/molecules/gameTitle'
import StatTable from 'src/components/molecules/statTable'
import { Game, getAllGamesWithSlug, getGameBySlug } from 'src/lib/contentful'

type GamePageProps = {
  game: Game
}

const GamePage: NextPage<GamePageProps> = ({ game }) => (
  <div>
    <Head>
      <title>{game.title} | Completed Games</title>
      <meta name="description" content={game.title} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="flex flex-col my-8 space-y-8">
      <GameTitle title={game.title} rating={game.rating} />
      <GameTags tags={game.tags} />
      <StatTable {...game} />
      {game.notes && (
        <ContentfulRichText
          textSize="lg"
          document={game.notes.json}
          links={game.notes.links}
        />
      )}
    </div>
  </div>
)

export const getStaticProps: GetStaticProps<GamePageProps> = async ({
  params
}) => {
  if (!params?.slug || Array.isArray(params?.slug)) {
    return { notFound: true }
  }

  const game = await getGameBySlug(params.slug)

  if (!game) {
    return { notFound: true }
  }

  return { props: { game } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allGames = await getAllGamesWithSlug()
  return {
    paths: allGames.map(({ slug }) => `/game/${slug}`),
    fallback: false
  }
}

export default GamePage
