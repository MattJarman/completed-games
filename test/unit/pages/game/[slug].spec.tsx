import { EMPTY_DOCUMENT } from '@contentful/rich-text-types'
import { render } from '@testing-library/react'
import GameNotes from 'src/components/molecules/gameNotes'
import GameStats from 'src/components/molecules/gameStats'
import GameTags from 'src/components/molecules/gameTags'
import GameTitle from 'src/components/molecules/gameTitle'
import {
  Game,
  getAllGamesWithSlug,
  getGameBySlug
} from 'src/lib/contentful/game'
import GamePage, { getStaticPaths, getStaticProps } from 'src/pages/game/[slug]'

jest.mock('src/lib/contentful/game')
jest.mock('src/components/molecules/gameTitle')
jest.mock('src/components/molecules/gameTags')
jest.mock('src/components/molecules/gameStats')
jest.mock('src/components/molecules/gameNotes')
jest.mock('@heroicons/react/solid')

const mockGetAllGamesWithSlug = getAllGamesWithSlug as jest.MockedFunction<
  typeof getAllGamesWithSlug
>

const mockGetGameBySlug = getGameBySlug as jest.MockedFunction<
  typeof getGameBySlug
>

const mockGameTitle = GameTitle as jest.MockedFunction<typeof GameTitle>
const mockGameTags = GameTags as jest.MockedFunction<typeof GameTags>
const mockGameStats = GameStats as jest.MockedFunction<typeof GameStats>
const mockGameNotes = GameNotes as jest.MockedFunction<typeof GameNotes>

const game = {
  title: 'Risk of Rain 2',
  slug: 'risk-of-rain-2',
  rating: 97,
  completedAt: '2022-01-01',
  sys: {
    id: '4398572894734589'
  },
  image: {
    title: 'risk-of-rain-2-img',
    url: 'risk-of-rain-2-img-url'
  },
  playtime: 40,
  tags: ['Roguelike'],
  notes: {
    json: EMPTY_DOCUMENT
  },
  completionStats: 'All Achievements',
  difficulty: 'N/A'
}

describe('GamePage', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  describe('GamePage rendering', () => {
    it('renders the game page correctly', async () => {
      render(<GamePage game={game} />)

      expect(mockGameTitle).toHaveBeenCalledWith(
        { rating: game.rating, title: game.title },
        {}
      )
      expect(mockGameTags).toHaveBeenCalledWith({ tags: game.tags }, {})
      expect(mockGameStats).toHaveBeenCalledWith(
        {
          rows: [
            expect.objectContaining({
              name: 'Completed',
              value: 'Sat Jan 01 2022'
            }),
            expect.objectContaining({
              name: 'Playtime',
              value: '40 hrs'
            }),
            expect.objectContaining({
              name: 'Difficulty',
              value: 'N/A'
            }),
            expect.objectContaining({
              name: 'Completion Stats',
              value: game.completionStats
            })
          ]
        },
        {}
      )
      expect(mockGameNotes).toHaveBeenCalledWith(
        { document: game.notes.json },
        {}
      )
    })

    it('handles stats that are undefined', async () => {
      render(
        <GamePage
          game={{
            ...game,
            playtime: undefined,
            difficulty: undefined,
            completionStats: undefined
          }}
        />
      )

      expect(mockGameStats).toHaveBeenCalledWith(
        {
          rows: [
            expect.objectContaining({
              name: 'Completed',
              value: 'Sat Jan 01 2022'
            }),
            expect.objectContaining({
              name: 'Playtime',
              value: '0 hrs'
            }),
            expect.objectContaining({
              name: 'Difficulty',
              value: '?'
            }),
            expect.objectContaining({
              name: 'Completion Stats',
              value: '?'
            })
          ]
        },
        {}
      )
    })

    it('does not render the notes container if no notes were provided', async () => {
      render(<GamePage game={{ ...game, notes: null }} />)

      expect(mockGameNotes).not.toHaveBeenCalled()
    })
  })

  describe('getStaticPaths', () => {
    it('returns the mapped game slugs', async () => {
      mockGetAllGamesWithSlug.mockResolvedValueOnce([
        { slug: game.slug } as unknown as Game
      ])
      const result = await getStaticPaths({})

      expect(result.paths).toEqual(['/game/risk-of-rain-2'])
      expect(result.fallback).toEqual(true)
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
