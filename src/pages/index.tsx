import { useAutoAnimate } from "@formkit/auto-animate/react";
import GameCard from "@ui/game-card";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { parseAsString, parseAsStringLiteral, useQueryState } from "nuqs";
import { useMemo } from "react";
import FilterControls from "src/components/filter-controls";
import { getAllGames } from "src/lib/contentful";
import { sortBy } from "src/lib/utils/sort";
import { Game as ContentfulGame } from "src/schemas/game";

export type HomeProps = {
  allGames: ContentfulGame[];
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const allGames = await getAllGames();

  return { props: { allGames } };
};

const Home: NextPage<HomeProps> = ({ allGames }) => {
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
    ] as const).withDefault("completed")
  );

  const filteredGames = useMemo(() => {
    if (!query) {
      return allGames;
    }

    return allGames.filter((game) =>
      game.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [allGames, query]);

  return (
    <>
      <Head>
        <title>Home | Completed Games</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="my-8">
        <div className="flex items-center my-4 space-x-3">
          <div className="flex-grow"></div>
          <FilterControls
            sort={sort}
            search={query}
            onSortChange={setSort}
            onSearchChange={setQuery}
          />
        </div>
        <div
          ref={parent}
          data-testid="game-container"
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-6"
        >
          {sortBy(filteredGames, sort).map(
            ({ sys, slug, title, image, rating }) => (
              <Link key={sys.id} href={`/game/${slug}`} passHref>
                <GameCard
                  id={sys.id}
                  title={title}
                  img={image.url}
                  rating={rating}
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
