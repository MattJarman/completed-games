import { BLOCKS, Document, INLINES } from "@contentful/rich-text-types";
import { render, screen } from "@testing-library/react";
import ContentfulRichText from "@ui/contentful-rich-text";
import { GameRichTextLinks } from "src/schemas/game";

const links: GameRichTextLinks = {
  assets: {
    block: [],
  },
};

describe("ContentfulRichText", () => {
  describe("headings", () => {
    it.each`
      block               | headingLevel
      ${BLOCKS.HEADING_1} | ${1}
      ${BLOCKS.HEADING_2} | ${2}
      ${BLOCKS.HEADING_3} | ${3}
      ${BLOCKS.HEADING_4} | ${4}
      ${BLOCKS.HEADING_5} | ${5}
      ${BLOCKS.HEADING_6} | ${6}
    `(
      "renders a heading with a level of $headingLevel for a block of $block",
      ({ block, headingLevel }) => {
        const document: Document = {
          nodeType: BLOCKS.DOCUMENT,
          data: {},
          content: [
            {
              nodeType: block,
              data: {},
              content: [
                { nodeType: "text", value: "test", marks: [], data: {} },
              ],
            },
          ],
        };

        render(<ContentfulRichText document={document} links={links} />);

        const heading = screen.getByRole("heading", { level: headingLevel });
        expect(heading).toBeInTheDocument();
      }
    );
  });

  describe("table", () => {
    it("renders the table", () => {
      const document: Document = {
        nodeType: BLOCKS.DOCUMENT,
        data: {},
        content: [
          {
            nodeType: BLOCKS.TABLE,
            data: {},
            content: [
              {
                nodeType: BLOCKS.TABLE_ROW,
                data: {},
                content: [
                  {
                    nodeType: BLOCKS.TABLE_HEADER_CELL,
                    data: {},
                    content: [],
                  },
                ],
              },
              {
                nodeType: BLOCKS.TABLE_ROW,
                data: {},
                content: [
                  {
                    nodeType: BLOCKS.TABLE_CELL,
                    data: {},
                    content: [],
                  },
                ],
              },
            ],
          },
        ],
      };

      render(<ContentfulRichText document={document} links={links} />);

      const table = screen.getByRole("table");
      const cell = screen.getByRole("cell");
      const header = screen.getByRole("columnheader");
      const rows = screen.getAllByRole("row");

      expect(table).toBeInTheDocument();
      expect(cell).toBeInTheDocument();
      expect(header).toBeInTheDocument();
      expect(rows.length).toEqual(2);
    });
  });

  describe("hyperlink", () => {
    it("renders the link", () => {
      const uri = "/test";
      const text = "test";
      const document: Document = {
        nodeType: BLOCKS.DOCUMENT,
        data: {},
        content: [
          {
            nodeType: BLOCKS.PARAGRAPH,
            data: {},
            content: [
              {
                nodeType: INLINES.HYPERLINK,
                data: {
                  uri,
                },
                content: [
                  {
                    nodeType: "text",
                    value: text,
                    marks: [],
                    data: {},
                  },
                ],
              },
            ],
          },
        ],
      };

      render(<ContentfulRichText document={document} links={links} />);

      const link = screen.getByRole("link");

      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", uri);
      expect(link).toHaveTextContent(text);
    });
  });

  describe("lists", () => {
    it.each`
      listType | listBlock
      ${"ul"}  | ${BLOCKS.UL_LIST}
      ${"ol"}  | ${BLOCKS.OL_LIST}
    `("renders the $listType list", ({ listBlock }) => {
      const text = "item-1";
      const document: Document = {
        nodeType: BLOCKS.DOCUMENT,
        data: {},
        content: [
          {
            nodeType: listBlock,
            data: {},
            content: [
              {
                nodeType: BLOCKS.LIST_ITEM,
                data: {},
                content: [
                  {
                    nodeType: BLOCKS.PARAGRAPH,
                    data: {},
                    content: [
                      {
                        nodeType: "text",
                        value: text,
                        marks: [],
                        data: {},
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      };

      render(<ContentfulRichText document={document} links={links} />);

      const list = screen.getByRole("list");
      const listItem = screen.getByRole("listitem");

      expect(list).toBeInTheDocument();
      expect(listItem).toBeInTheDocument();
      expect(listItem).toHaveTextContent(text);
    });
  });

  describe("separator", () => {
    it("renders the hr", () => {
      const document: Document = {
        nodeType: BLOCKS.DOCUMENT,
        data: {},
        content: [
          {
            nodeType: BLOCKS.HR,
            data: {},
            content: [],
          },
        ],
      };

      const links: GameRichTextLinks = {
        assets: {
          block: [],
        },
      };

      render(<ContentfulRichText document={document} links={links} />);

      const hr = screen.getByRole("separator");

      expect(hr).toBeInTheDocument();
    });
  });

  describe("block quote", () => {
    it("renders the block quote", () => {
      const text = "I came, I saw, I conquered.";
      const document: Document = {
        nodeType: BLOCKS.DOCUMENT,
        data: {},
        content: [
          {
            nodeType: BLOCKS.QUOTE,
            data: {},
            content: [
              {
                nodeType: BLOCKS.PARAGRAPH,
                data: {},
                content: [
                  {
                    nodeType: "text",
                    value: text,
                    marks: [],
                    data: {},
                  },
                ],
              },
            ],
          },
        ],
      };

      render(<ContentfulRichText document={document} links={links} />);

      const quote = screen.getByText(text);

      expect(quote).toBeInTheDocument();
    });
  });

  describe("embedded asset", () => {
    it("renders the emedded asset", () => {
      const id = "2hrNH4dLZUqRVNGQuvUTHE";
      const altText = "Test";
      const document: Document = {
        nodeType: BLOCKS.DOCUMENT,
        data: {},
        content: [
          {
            nodeType: BLOCKS.EMBEDDED_ASSET,
            data: {
              target: {
                sys: {
                  id,
                  type: "Link",
                  linkType: "Asset",
                },
              },
            },
            content: [],
          },
        ],
      };

      const links: GameRichTextLinks = {
        assets: {
          block: [
            {
              fileName: "test",
              title: altText,
              description: "This is a test",
              url: "/image",
              width: 400,
              height: 400,
              sys: {
                id,
              },
            },
          ],
        },
      };

      render(<ContentfulRichText document={document} links={links} />);

      const image = screen.getByAltText(altText);

      expect(image).toBeInTheDocument();
    });
  });
});
