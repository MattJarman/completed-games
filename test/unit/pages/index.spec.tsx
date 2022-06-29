import { render } from '@testing-library/react'
import GameCard from 'src/components/atoms/gameCard'
import { Game, getAllGames } from 'src/lib/contentful'
import HomePage, { getStaticProps } from 'src/pages/index'

jest.mock('src/lib/contentful')
jest.mock('src/components/atoms/gameCard')

const mockGetAllGames = getAllGames as jest.MockedFunction<typeof getAllGames>
const mockGameCard = GameCard as jest.MockedFunction<typeof GameCard>

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

describe('HomePage', () => {
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
  })

  describe('getStaticProps', () => {
    it('returns allGames as props', async () => {
      mockGetAllGames.mockResolvedValueOnce([game] as unknown as Game[])
      const result = await getStaticProps({})
      expect(result).toEqual({ props: { allGames: [game] } })
    })
  })
})
