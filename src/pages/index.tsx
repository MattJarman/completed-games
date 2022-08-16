import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useMemo, useState } from 'react'
import GameCard from 'src/components/atoms/gameCard'
import GameControls from 'src/components/molecules/gameControls'
import { getAllGames, PartialGame as ContentfulGame } from 'src/lib/contentful'
import {
  sortByCompletedAtDescending,
  sortByNameAscending,
  sortByPlaytimeDescending,
  sortByRatingDescending
} from 'src/lib/utils/sorters'

const sortMap = new Map([
  ['completed', sortByCompletedAtDescending],
  ['playtime', sortByPlaytimeDescending],
  ['rating', sortByRatingDescending],
  ['name', sortByNameAscending]
] as const)

export type SortMapKey = KeyOfMap<typeof sortMap>

type HomeProps = {
  allGames: ContentfulGame[]
}

const Home: NextPage<HomeProps> = ({ allGames }) => {
  const [sort, setSort] = useState<SortMapKey>('completed')
  const [filter, setFilter] = useState('')

  const filteredGames = useMemo(() => {
    if (!filter) {
      return allGames
    }

    return allGames.filter((game) =>
      game.title.toLowerCase().includes(filter.toLowerCase())
    )
  }, [allGames, filter])

  const sortedGames = useMemo(
    () =>
      filteredGames
        .sort(sortMap.get(sort))
        .map(({ sys, slug, title, image, rating }) => (
          <GameCard
            key={title}
            slug={slug}
            id={sys.id}
            title={title}
            img={image.url}
            rating={rating}
          />
        )),
    [sort, filteredGames]
  )

  return (
    <div>
      <Head>
        <title>Home | Completed Games</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="my-8">
        <div className="flex items-center my-4 space-x-3">
          <div className="flex-grow"></div>
          <GameControls
            initialSort={'completed'}
            setSort={setSort}
            setFilter={setFilter}
          />
        </div>
        <div
          data-testid="game-container"
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-6">
          {sortedGames}
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const allGames = await getAllGames()

  return { props: { allGames } }
}

export default Home
