import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import GamePage, { GamePageProps } from 'src/components/Game'
import { getAllGames, getGameBySlug } from 'src/lib/contentful'

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
  const allGames = await getAllGames()
  return {
    paths: allGames.map(({ slug }) => `/game/${slug}`),
    fallback: false
  }
}

const Game: NextPage<GamePageProps> = ({ game }) => (
  <>
    <Head>
      <title>{game.title} | Completed Games</title>
      <meta name="description" content={game.title} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <GamePage game={game} />
  </>
)

export default Game
