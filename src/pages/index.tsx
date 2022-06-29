import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import GameCard from 'src/components/atoms/gameCard'
import { Game as ContentfulGame, getAllGames } from 'src/lib/contentful'

type HomeProps = {
  allGames: ContentfulGame[]
}

const Home: NextPage<HomeProps> = ({ allGames }) => {
  return (
    <div>
      <Head>
        <title>Home | Completed Games</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="my-8">
        <div
          data-testid="game-container"
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-6">
          {allGames.map(({ sys, slug, title, image, rating }) => (
            <GameCard
              key={title}
              slug={slug}
              id={sys.id}
              title={title}
              img={image.url}
              rating={rating}
            />
          ))}
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
