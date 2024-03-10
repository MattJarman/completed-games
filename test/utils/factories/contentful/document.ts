import { BLOCKS, Document } from "@contentful/rich-text-types";
import { faker } from "@faker-js/faker";

export const makeDocument = (text?: string): Document => ({
  nodeType: BLOCKS.DOCUMENT,
  data: {},
  content: [
    {
      nodeType: BLOCKS.PARAGRAPH,
      data: {},
      content: [
        {
          nodeType: "text",
          value: text || faker.lorem.paragraph(),
          marks: [],
          data: {},
        },
      ],
    },
  ],
});
