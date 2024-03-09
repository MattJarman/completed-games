import { useAutoAnimate } from '@formkit/auto-animate/react'
import GameCard from '@ui/game-card'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import FilterControls from 'src/components/filter-controls'
import { getAllGames } from 'src/lib/contentful'
import { Sorter, sortBy } from 'src/lib/utils/sort'
import { Game as ContentfulGame } from 'src/schemas/game'

export type HomeProps = {
  allGames: ContentfulGame[]
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const allGames = await getAllGames()

  return { props: { allGames } }
}

const Home: NextPage<HomeProps> = ({ allGames }) => {
  const [sort, setSort] = useState<Sorter>('completed')
  const [filter, setFilter] = useState('')
  const [parent] = useAutoAnimate<HTMLDivElement>()

  const filteredGames = useMemo(() => {
    if (!filter) {
      return allGames
    }

    return allGames.filter((game) =>
      game.title.toLowerCase().includes(filter.toLowerCase())
    )
  }, [allGames, filter])

  return (
    <>
      <Head>
        <title>Home | Completed Games</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="my-8">
        <div className="flex items-center my-4 space-x-3">
          <div className="flex-grow"></div>
          <FilterControls
            initialSort={'completed'}
            setSort={setSort}
            setFilter={setFilter}
          />
        </div>
        <div
          ref={parent}
          data-testid="game-container"
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-6">
          {sortBy(filteredGames, sort).map(
            ({ sys, slug, title, image, rating }) => (
              <Link key={sys.id} href={`/game/${slug}`} passHref>
                <a>
                  <GameCard
                    id={sys.id}
                    title={title}
                    img={image.url}
                    rating={rating}
                  />
                </a>
              </Link>
            )
          )}
        </div>
      </div>
    </>
  )
}

export default Home
