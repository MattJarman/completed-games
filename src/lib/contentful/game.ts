import {
  GameCollection,
  gameCollectionResponseSchema
} from 'src/schemas/graphql'
import { Game } from 'src/schemas/game'
import { query } from './query'

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

const extractGameEntries = (entries: GameCollection) =>
  entries?.data?.gameCollection?.items || []

const extractGame = (entries: GameCollection) => extractGameEntries(entries)[0]

export const getAllGames = async (): Promise<Game[]> => {
  const entries = await query(
    `query {
        gameCollection(order: completedAt_DESC) {
          items {
            ${PARTIAL_GAME_GRAPHQL_FIELDS}
          }
        }
      }`,
    gameCollectionResponseSchema
  )

  return extractGameEntries(entries)
}

export const getGameBySlug = async (
  slug: string
): Promise<Game | undefined> => {
  const entries = await query(
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
      }`,
    gameCollectionResponseSchema
  )

  return extractGame(entries)
}
