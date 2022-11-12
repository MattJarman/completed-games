import { faker } from '@faker-js/faker'
import { render, screen } from '@testing-library/react'
import { getAllGamesWithSlug, getGameBySlug } from 'src/lib/contentful/game'
import GamePage, { getStaticPaths, getStaticProps } from 'src/pages/game/[slug]'
import { makeDocument } from 'test/utils/factories/contentful/document'
import { makeGame } from 'test/utils/factories/game'

jest.mock('src/lib/contentful/game')

const mockGetAllGamesWithSlug = getAllGamesWithSlug as jest.MockedFunction<
  typeof getAllGamesWithSlug
>

const mockGetGameBySlug = getGameBySlug as jest.MockedFunction<
  typeof getGameBySlug
>

const text = faker.lorem.paragraph()
const richText = makeDocument(text)
const game = makeGame({
  notes: { json: richText, links: { assets: { block: [] } } }
})

describe('GamePage', () => {
  describe('GamePage rendering', () => {
    it('renders the game page correctly', async () => {
      render(<GamePage game={game} />)

      const title = screen.getByTestId('game-title')
      const tags = screen.getByTestId('game-tags')
      const table = screen.getByTestId('table')
      const richText = screen.getByTestId('rich-text')

      expect(title).toHaveTextContent(game.title)
      expect(title).toHaveTextContent(game.rating.toString())

      game.tags.forEach((tag) => expect(tags).toHaveTextContent(tag))

      expect(table).toHaveTextContent(new Date(game.completedAt).toDateString())
      expect(table).toHaveTextContent(game.playtime.toString())
      expect(table).toHaveTextContent(game.difficulty)
      expect(table).toHaveTextContent(game.completionStats)

      expect(richText).toHaveTextContent(text)
    })

    it('does not render the notes container if no notes were provided', async () => {
      render(<GamePage game={{ ...game, notes: null }} />)

      const richText = screen.queryByTestId('rich-text')

      expect(richText).not.toBeInTheDocument()
    })
  })

  describe('getStaticPaths', () => {
    it('returns the mapped game slugs', async () => {
      mockGetAllGamesWithSlug.mockResolvedValueOnce([game])
      const result = await getStaticPaths({})

      expect(result).toEqual({
        paths: [`/game/${game.slug}`],
        fallback: false
      })
    })
  })

  describe('getStaticProps', () => {
    it('returns the game props', async () => {
      mockGetGameBySlug.mockResolvedValueOnce(game)

      const result = await getStaticProps({
        params: { slug: game.slug }
      })

      expect(result).toEqual({
        props: {
          game
        }
      })
    })

    it('returns notFound as true if game is undefined', async () => {
      mockGetGameBySlug.mockResolvedValueOnce(undefined)

      const result = await getStaticProps({
        params: { slug: game.slug }
      })

      expect(result).toEqual({
        notFound: true
      })
    })

    it('returns notFound as true if the slug is undefined', async () => {
      const result = await getStaticProps({
        params: {}
      })

      expect(result).toEqual({
        notFound: true
      })
    })

    it('returns notFound as true if the slug is an array', async () => {
      const result = await getStaticProps({
        params: { slug: [game.slug] }
      })

      expect(result).toEqual({
        notFound: true
      })
    })
  })
})
