import type { Document } from '@contentful/rich-text-types'
import { ContentfulGraphQLResponse, query, RichTextLinks } from './query'

export type GameNotesLinksAssetBlock = {
  fileName: string
  title: string
  description: string
  url: string
  width: string
  height: string
  sys: {
    id: string
  }
}

export type GameNotesLinks = RichTextLinks<GameNotesLinksAssetBlock>

export type Game = {
  slug: string
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
  playtime?: number
  tags: string[]
  notes: {
    json: Document
    links: GameNotesLinks
  } | null
  completionStats?: string
  difficulty?: string
}

export type PartialGame = Omit<Game, 'notes'>

type GameGraphQLResponse = ContentfulGraphQLResponse<'gameCollection', Game>
type PartialGameGraphQLResponse = ContentfulGraphQLResponse<
  'gameCollection',
  PartialGame
>

const PARTIAL_GAME_GRAPHQL_FIELDS = `
slug
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
completionStats
difficulty`

const extractGameEntries = (entries: PartialGameGraphQLResponse) =>
  entries?.data?.gameCollection?.items || []

const extractGame = (entries: GameGraphQLResponse) =>
  entries?.data?.gameCollection?.items?.[0]

export const getAllGames = async (): Promise<PartialGame[]> => {
  const entries = await query<PartialGameGraphQLResponse>(
    `query {
        gameCollection(order: completedAt_DESC) {
          items {
            ${PARTIAL_GAME_GRAPHQL_FIELDS}
          }
        }
      }`
  )

  return extractGameEntries(entries)
}

export const getAllGamesWithSlug = async (): Promise<PartialGame[]> => {
  const entries = await query<PartialGameGraphQLResponse>(
    `query {
        gameCollection(where: { slug_exists: true }, order: completedAt_DESC) {
          items {
            ${PARTIAL_GAME_GRAPHQL_FIELDS}
          }
        }
      }`
  )

  return extractGameEntries(entries)
}

export const getGameBySlug = async (
  slug: string
): Promise<Game | undefined> => {
  const entries = await query<GameGraphQLResponse>(
    `query {
        gameCollection(where: { slug: "${slug}" }, limit: 1) {
          items {
            ${PARTIAL_GAME_GRAPHQL_FIELDS}
            notes {
              json
              links {
                assets {
                  block {
                    fileName
                    title
                    description
                    url
                    width
                    height
                    sys {
                      id
                    }
                  }
                }
              }
            }
          }
        }
      }`
  )

  return extractGame(entries)
}
