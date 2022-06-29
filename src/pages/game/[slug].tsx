import {
  CalendarIcon,
  ChartPieIcon,
  ClockIcon,
  CogIcon
} from '@heroicons/react/solid'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import GameNotes from 'src/components/molecules/gameNotes'
import GameStats from 'src/components/molecules/gameStats'
import GameTags from 'src/components/molecules/gameTags'
import GameTitle from 'src/components/molecules/gameTitle'
import { Game, getAllGamesWithSlug, getGameBySlug } from 'src/lib/contentful'

type GamePageProps = {
  game: Game
}

const GamePage: NextPage<GamePageProps> = ({ game }) => {
  return (
    <div>
      <Head>
        <title>{game.title} | Completed Games</title>
        <meta name="description" content={game.title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mt-8">
        <GameTitle title={game.title} rating={game.rating} />
        <GameTags tags={game.tags} />
        <GameStats
          rows={[
            {
              icon: <CalendarIcon className="w-4 h-4 md:w-5 md:h-5" />,
              name: 'Completed',
              value: new Date(game.completedAt).toDateString()
            },
            {
              icon: <ClockIcon className="w-4 h-4 md:w-5 md:h-5" />,
              name: 'Playtime',
              value: `${game.playtime ?? 0} hrs`
            },
            {
              icon: <CogIcon className="w-4 h-4 md:w-5 md:h-5" />,
              name: 'Difficulty',
              value: game.difficulty ?? '?'
            },
            {
              icon: <ChartPieIcon className="w-4 h-4 md:w-5 md:h-5" />,
              name: 'Completion Stats',
              value: game.completionStats ?? '?'
            }
          ]}
        />
        {game.notes && <GameNotes document={game.notes.json} />}
      </div>
    </div>
  )
}

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
