import { sortBy } from "src/lib/utils";
import { makeGame } from "test/utils/factories/game";

const game1 = makeGame({
  slug: "a-hat-in-time",
  title: "A Hat in Time",
  rating: 100,
  completedAt: "2022-01-02T12:00:00.000Z",
  playtime: 999,
});

const game2 = makeGame({
  slug: "yakuza-0",
  title: "Yakuza 0",
  rating: 90,
  completedAt: "2022-01-01T12:00:00.000Z",
});

describe("sortBy", () => {
  test.each`
    sorter
    ${"playtime"}
    ${"rating"}
    ${"name"}
    ${"completed"}
  `('sortBy("$sorter")', ({ sorter }) => {
    const games = [game2, game1];

    const [first, second] = sortBy(games, sorter);

    expect(first).toEqual(game1);
    expect(second).toEqual(game2);
  });

  test('sortBy("playtime") with undefined playtimes returns default order', () => {
    const game1WithoutPlaytime = { ...game1, playtime: null };
    const game2WithoutPlaytime = { ...game2, playtime: null };
    const games = [game2WithoutPlaytime, game1WithoutPlaytime];

    const [first, second] = sortBy(games, "playtime");

    expect(first).toEqual(game2WithoutPlaytime);
    expect(second).toEqual(game1WithoutPlaytime);
  });
});
