import { faker } from '@faker-js/faker'
import { GameNotesLinksAssetBlock } from 'src/lib/contentful'

export const makeGameNotesLinkAssetBlock = (): GameNotesLinksAssetBlock => ({
  fileName: faker.system.fileName(),
  title: faker.lorem.text(),
  description: faker.lorem.paragraph(),
  url: faker.image.imageUrl(),
  width: `${faker.datatype.number({ min: 100, max: 600 })}px`,
  height: `${faker.datatype.number({ min: 100, max: 600 })}px`,
  sys: {
    id: faker.datatype.uuid()
  }
})
