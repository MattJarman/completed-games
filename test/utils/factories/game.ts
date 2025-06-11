import { faker } from "@faker-js/faker";
import { Game } from "src/schemas/game";
import { makeDocument } from "./contentful/document";

export const makeGame = (game?: Partial<Game>): Game => ({
  slug: faker.lorem.slug(),
  title: faker.lorem.word(),
  rating: faker.datatype.number({ min: 0, max: 100 }),
  completedAt: faker.datatype.datetime().toDateString(),
  sys: {
    id: faker.datatype.uuid(),
  },
  image: {
    title: faker.lorem.text(),
    url: faker.image.imageUrl(),
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
        block: [
          {
            fileName: faker.system.fileName(),
            title: faker.lorem.text(),
            description: faker.lorem.paragraph(),
            url: faker.image.imageUrl(),
            width: faker.datatype.number({ min: 100, max: 600 }),
            height: faker.datatype.number({ min: 100, max: 600 }),
            sys: {
              id: faker.datatype.uuid(),
            },
          },
        ],
      },
    },
    ...game?.notes,
  },
  completionStats: faker.lorem.sentence(),
  allAchievements: faker.datatype.boolean(),
  difficulty: faker.helpers.arrayElement(["Easy", "Normal", "Hard"]),
  ...game,
});
