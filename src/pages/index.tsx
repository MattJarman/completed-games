import { debounce } from 'lodash'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useMemo, useState } from 'react'
import GameCard from 'src/components/atoms/gameCard'
import SearchInput from 'src/components/atoms/searchInput'
import { getAllGames, PartialGame as ContentfulGame } from 'src/lib/contentful'

type HomeProps = {
  allGames: ContentfulGame[]
}

const Home: NextPage<HomeProps> = ({ allGames }) => {
  const [filter, setFilter] = useState('')

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value)
  }

  const debouncedChangeHandler = useMemo(() => debounce(changeHandler, 300), [])

  const filteredGames = useMemo(() => {
    let gamesToMap = allGames
    if (filter) {
      gamesToMap = allGames.filter((game) =>
        game.title.toLowerCase().includes(filter.toLowerCase())
      )
    }

    return gamesToMap.map(({ sys, slug, title, image, rating }) => (
      <GameCard
        key={title}
        slug={slug}
        id={sys.id}
        title={title}
        img={image.url}
        rating={rating}
      />
    ))
  }, [allGames, filter])

  return (
    <div>
      <Head>
        <title>Home | Completed Games</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="my-8">
        <div className="flex items-center my-4">
          <div className="flex-grow"></div>
          <SearchInput
            id="game"
            name="filter"
            placeholder="Search"
            onChange={debouncedChangeHandler}
          />
        </div>
        <div
          data-testid="game-container"
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-6">
          {filteredGames}
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
