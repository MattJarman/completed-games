import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import HomePage, { HomeProps } from 'src/components/Home'
import { getAllGames } from 'src/lib/contentful'

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const allGames = await getAllGames()

  return { props: { allGames } }
}

const Home: NextPage<HomeProps> = (props) => (
  <>
    <Head>
      <title>Home | Completed Games</title>
      <meta name="description" content="Home" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <HomePage {...props} />
  </>
)

export default Home
