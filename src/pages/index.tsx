import { useAutoAnimate } from "@formkit/auto-animate/react";
import GameCard from "@ui/game-card";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import {
  parseAsString,
  parseAsStringLiteral,
  parseAsArrayOf,
  parseAsInteger,
  useQueryState,
} from "nuqs";
import { useMemo } from "react";
import FilterControls from "src/components/filter-controls";
import { getAllGames } from "src/lib/contentful";
import { getCompletedAtYears } from "src/lib/utils";
import { sortBy } from "src/lib/utils/sort";
import { Game as ContentfulGame } from "src/schemas/game";

export type HomeProps = {
  allGames: ContentfulGame[];
  completedAtYears: Array<number>;
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const allGames = await getAllGames();
  const completedAtYears = getCompletedAtYears(allGames);

  return { props: { allGames, completedAtYears } };
};

const Home: NextPage<HomeProps> = ({ allGames, completedAtYears }) => {
  const [parent] = useAutoAnimate<HTMLDivElement>();
  const [query, setQuery] = useQueryState(
    "query",
    parseAsString.withDefault("")
  );
  const [sort, setSort] = useQueryState(
    "sort",
    parseAsStringLiteral([
      "completed",
      "playtime",
      "rating",
      "name",
      "achievements",
    ] as const).withDefault("completed")
  );

  const [completedAtFilters, setCompletedAtFilters] = useQueryState(
    "completedAt",
    parseAsArrayOf(parseAsInteger)
  );
  const [completionFilter, setCompletionFilter] = useQueryState(
    "completion",
    parseAsStringLiteral(["allAchievements"] as const)
  );

  const filteredGames = useMemo(() => {
    let filteredGames: ContentfulGame[] = allGames;

    if (completedAtFilters) {
      filteredGames = filteredGames.filter((game) =>
        completedAtFilters.includes(new Date(game.completedAt).getFullYear())
      );
    }

    if (completionFilter === "allAchievements") {
      filteredGames = filteredGames.filter((game) => game.allAchievements);
    }

    if (query) {
      filteredGames = filteredGames.filter((game) =>
        game.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    return filteredGames;
  }, [completionFilter, allGames, completedAtFilters, query]);

  return (
    <>
      <Head>
        <title>Home | Completed Games</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="my-8">
        <div className="flex items-center my-4 space-x-3">
          <div className="grow text-gray-300 text-sm mt-8">
            {filteredGames.length} Games
          </div>
          <FilterControls
            sort={sort}
            search={query}
            completedAtYears={completedAtFilters || []}
            availableCompletedAtYears={completedAtYears}
            completionFilterValue={completionFilter}
            onSortChange={setSort}
            onSearchChange={setQuery}
            onCompletedAtFilterChange={setCompletedAtFilters}
            onCompletionFilterChange={setCompletionFilter}
          />
        </div>
        <div
          ref={parent}
          data-testid="game-container"
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-6"
        >
          {sortBy(filteredGames, sort).map(
            ({ sys, slug, title, image, rating, allAchievements }) => (
              <Link key={sys.id} href={`/game/${slug}`} passHref>
                <GameCard
                  id={sys.id}
                  title={title}
                  img={image.url}
                  rating={rating}
                  allAchievements={Boolean(allAchievements)}
                />
              </Link>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
