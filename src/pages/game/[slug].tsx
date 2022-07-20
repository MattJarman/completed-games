import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import ContentfulRichText from 'src/components/atoms/contentfulRichText'
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
    <div className="mt-8">
      <GameTitle title={game.title} rating={game.rating} />
      <GameTags tags={game.tags} />
      <StatTable className="my-10 md:w-2/3 2xl:w-1/2" {...game} />
      {game.notes && (
        <ContentfulRichText
          className="text-lg text-white"
          document={game.notes.json}
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
