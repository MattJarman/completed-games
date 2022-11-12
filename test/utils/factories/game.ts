import { faker } from '@faker-js/faker'
import { Game } from 'src/lib/contentful'
import { makeDocument } from './contentful/document'
import { makeGameNotesLinkAssetBlock } from './contentful/gameNotesLinksAssetBlock'

export const makeGame = (game?: Partial<Game>): Required<Game> => ({
  slug: faker.lorem.slug(),
  title: faker.lorem.word(),
  rating: faker.datatype.number({ min: 0, max: 100 }),
  completedAt: faker.datatype.datetime().toDateString(),
  sys: {
    id: faker.datatype.uuid()
  },
  image: {
    title: faker.lorem.text(),
    url: faker.image.imageUrl()
  },
  playtime: faker.datatype.number({ min: 1, max: 1000 }),
  tags: Array.from(
    { length: faker.datatype.number({ min: 1, max: 3 }) },
    faker.random.word
  ),
  notes: {
    json: makeDocument(),
    links: {
      assets: {
        block: [makeGameNotesLinkAssetBlock()]
      }
    },
    ...game?.notes
  },
  completionStats: faker.lorem.sentence(),
  difficulty: faker.helpers.arrayElement(['Easy', 'Normal', 'Hard']),
  ...game
})
