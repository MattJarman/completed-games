import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { debounce } from 'lodash'
import GameCard from 'src/components/atoms/gameCard'
import { Game, getAllGames } from 'src/lib/contentful'
import HomePage, { getStaticProps } from 'src/pages/index'

jest.mock('src/lib/contentful')
jest.mock('src/components/atoms/gameCard')
jest.mock('lodash')

const mockGetAllGames = getAllGames as jest.MockedFunction<typeof getAllGames>
const mockGameCard = GameCard as jest.MockedFunction<typeof GameCard>
const mockDebounce = debounce as jest.MockedFunction<typeof debounce>

const game = {
  sys: {
    id: '123'
  },
  slug: 'resident-evil-4',
  title: 'Resident Evil 4',
  image: {
    url: '/resident-evil-4-img'
  },
  rating: 90
}

const game2 = {
  sys: {
    id: '456'
  },
  slug: 'risk-of-rain-2',
  title: 'Risk Of Rain 2',
  image: {
    url: '/risk-of-rain-2-img'
  },
  rating: 95
}

describe('HomePage', () => {
  beforeAll(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    mockDebounce.mockImplementation((fn) => fn)
  })

  describe('HomePage rendering', () => {
    it('renders the home page correctly', () => {
      render(<HomePage allGames={[game] as unknown as Game[]} />)

      expect(mockGameCard).toHaveBeenCalledWith(
        {
          id: game.sys.id,
          img: game.image.url,
          rating: game.rating,
          slug: game.slug,
          title: game.title
        },
        {}
      )
    })

    it('renders the home page correctly', async () => {
      const user = userEvent.setup()
      const testId = 'game-card'
      mockGameCard.mockReturnValue(<div data-testid="game-card"></div>)
      render(<HomePage allGames={[game, game2] as unknown as Game[]} />)

      expect(screen.getAllByTestId(testId).length).toEqual(2)

      await user.type(screen.getByPlaceholderText('Search'), 'Res')

      expect(screen.getAllByTestId(testId).length).toEqual(1)
    })
  })

  describe('getStaticProps', () => {
    it('returns allGames as props', async () => {
      mockGetAllGames.mockResolvedValueOnce([game] as unknown as Game[])
      const result = await getStaticProps({})
      expect(result).toEqual({ props: { allGames: [game] } })
    })
  })
})
