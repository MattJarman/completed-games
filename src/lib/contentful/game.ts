import type { Document } from '@contentful/rich-text-types'
import { ContentfulGraphQLResponse, query } from './query'

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
  } | null
  completionStats?: string
  difficulty?: string
}

type GameGraphQLResponse = ContentfulGraphQLResponse<'gameCollection', Game>

const GAME_GRAPHQL_FIELDS = `
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
notes {
  json
}
completionStats
difficulty`

const extractGameEntries = (entries: GameGraphQLResponse) =>
  entries?.data?.gameCollection?.items || []

const extractGame = (entries: GameGraphQLResponse) =>
  entries?.data?.gameCollection?.items?.[0]

export const getAllGames = async (): Promise<Game[]> => {
  const entries = await query<GameGraphQLResponse>(
    `query {
        gameCollection(order: completedAt_DESC) {
          items {
            ${GAME_GRAPHQL_FIELDS}
          }
        }
      }`
  )

  return extractGameEntries(entries)
}

export const getAllGamesWithSlug = async (): Promise<Game[]> => {
  const entries = await query<GameGraphQLResponse>(
    `query {
        gameCollection(where: { slug_exists: true }, order: completedAt_DESC) {
          items {
            ${GAME_GRAPHQL_FIELDS}
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
            ${GAME_GRAPHQL_FIELDS}
          }
        }
      }`
  )

  return extractGame(entries)
}
