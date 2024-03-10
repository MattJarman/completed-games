import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getAllGames } from "src/lib/contentful";
import HomePage, { getStaticProps } from "src/pages/index";
import { makeGame } from "test/utils/factories/game";

jest.mock("src/lib/contentful");

const mockGetAllGames = getAllGames as jest.MockedFunction<typeof getAllGames>;

const game = makeGame({
  slug: "resident-evil-4",
  title: "Resident Evil 4",
  rating: 90,
});

const game2 = makeGame({
  slug: "risk-of-rain-2",
  title: "Risk Of Rain 2",
  rating: 95,
});

describe("HomePage", () => {
  describe("HomePage rendering", () => {
    it("renders the home page correctly", () => {
      render(<HomePage allGames={[game]} />);

      const card = screen.getByTestId(game.sys.id);

      expect(card).toBeInTheDocument();
      expect(card).toHaveTextContent(game.rating.toString());
    });

    it("filters game cards on search input", async () => {
      const user = userEvent.setup();
      render(<HomePage allGames={[game, game2]} />);

      const card = screen.getByTestId(game.sys.id);
      const card2 = screen.getByTestId(game2.sys.id);
      const input = screen.getByPlaceholderText("Search");

      expect(card).toBeInTheDocument();
      expect(card2).toBeInTheDocument();

      await user.type(input, game.title.slice(0, 2));

      await waitFor(() => {
        expect(screen.getByTestId(game.sys.id)).toBeInTheDocument();
        expect(screen.queryByTestId(game2.sys.id)).not.toBeInTheDocument();
      });
    });
  });

  describe("getStaticProps", () => {
    it("returns allGames as props", async () => {
      mockGetAllGames.mockResolvedValueOnce([game]);
      const result = await getStaticProps({});
      expect(result).toEqual({ props: { allGames: [game] } });
    });
  });
});
