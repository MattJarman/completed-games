import { faker } from "@faker-js/faker";
import { render, screen } from "@testing-library/react";
import { getAllGames, getGameBySlug } from "src/lib/contentful/game";
import GamePage, {
  getStaticPaths,
  getStaticProps,
} from "src/pages/game/[slug]";
import { makeDocument } from "test/utils/factories/contentful/document";
import { makeGame } from "test/utils/factories/game";

jest.mock("src/lib/contentful/game");

const mockGetAllGames = getAllGames as jest.MockedFunction<typeof getAllGames>;

const mockGetGameBySlug = getGameBySlug as jest.MockedFunction<
  typeof getGameBySlug
>;

const text = faker.lorem.paragraph();
const richText = makeDocument(text);
const game = makeGame({
  notes: { json: richText, links: { assets: { block: [] } } },
});

describe("GamePage", () => {
  describe("GamePage rendering", () => {
    it("renders the game page correctly", async () => {
      const gameWithAllFields = {
        ...game,
        playtime: 123,
        difficulty: "Easy",
        completionStats: "100%",
      } as const;

      render(<GamePage game={gameWithAllFields} />);

      const title = screen.getByTestId("title");
      const rating = screen.getByTestId("rating");
      const tags = screen.getByTestId("game-tags");
      const table = screen.getByTestId("table");
      const richText = screen.getByTestId("rich-text");

      expect(title).toHaveTextContent(gameWithAllFields.title);
      expect(rating).toHaveTextContent(gameWithAllFields.rating.toString());

      gameWithAllFields.tags.forEach((tag) =>
        expect(tags).toHaveTextContent(tag)
      );

      expect(table).toHaveTextContent(
        new Date(gameWithAllFields.completedAt).toDateString()
      );
      expect(table).toHaveTextContent(gameWithAllFields.playtime.toString());
      expect(table).toHaveTextContent(gameWithAllFields.difficulty);
      expect(table).toHaveTextContent(gameWithAllFields.completionStats);

      expect(richText).toHaveTextContent(text);
    });

    it("does not render the notes container if no notes were provided", async () => {
      render(<GamePage game={{ ...game, notes: null }} />);

      const richText = screen.queryByTestId("rich-text");

      expect(richText).not.toBeInTheDocument();
    });
  });

  describe("getStaticPaths", () => {
    it("returns the mapped game slugs", async () => {
      mockGetAllGames.mockResolvedValueOnce([game]);
      const result = await getStaticPaths({});

      expect(result).toEqual({
        paths: [`/game/${game.slug}`],
        fallback: false,
      });
    });
  });

  describe("getStaticProps", () => {
    it("returns the game props", async () => {
      mockGetGameBySlug.mockResolvedValueOnce(game);

      const result = await getStaticProps({
        params: { slug: game.slug },
      });

      expect(result).toEqual({
        props: {
          game,
        },
      });
    });

    it("returns notFound as true if game is undefined", async () => {
      mockGetGameBySlug.mockResolvedValueOnce(undefined);

      const result = await getStaticProps({
        params: { slug: game.slug },
      });

      expect(result).toEqual({
        notFound: true,
      });
    });

    it("returns notFound as true if the slug is undefined", async () => {
      const result = await getStaticProps({
        params: {},
      });

      expect(result).toEqual({
        notFound: true,
      });
    });

    it("returns notFound as true if the slug is an array", async () => {
      const result = await getStaticProps({
        params: { slug: [game.slug] },
      });

      expect(result).toEqual({
        notFound: true,
      });
    });
  });
});
