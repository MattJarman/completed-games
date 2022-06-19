import { ContentfulGraphQLResponse, query } from './query'

export type Game = {
  title: string
  rating: number
  completedAt: string
  sys: {
    id: string
  }
  image: {
    title: string
    url: string
  }
  playtime: number
  tags: string[]
  notes: {
    json: unknown
  }
  completionStats: string
  difficulty: string
}

type GameGraphQLResponse = ContentfulGraphQLResponse<'gameCollection', Game>

const extractGameEntries = (entries: GameGraphQLResponse) =>
  entries?.data?.gameCollection?.items || []

export const getAllGames = async (): Promise<Game[]> => {
  const entries = await query<GameGraphQLResponse>(
    `query {
        gameCollection(order: completedAt_DESC) {
          items {
            sys {
              id
            }
            title
            rating
            completedAt
            image {
              title
              url
            }
            playtime
            tags 
            notes {
              json
            }
            completionStats
            difficulty
          }
        }
      }`
  )

  return extractGameEntries(entries)
}
