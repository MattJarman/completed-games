import { useAutoAnimate } from "@formkit/auto-animate/react";
import GameCard from "@ui/game-card";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import * as R from "remeda";
import FilterControls from "src/components/filter-controls";
import { getAllGames } from "src/lib/contentful";
import { sortBy } from "src/lib/utils/sort";
import { Game as ContentfulGame } from "src/schemas/game";
import { Sort, sortSchema } from "src/schemas/sort";

export type HomeProps = {
  allGames: ContentfulGame[];
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const allGames = await getAllGames();

  return { props: { allGames } };
};

type SearchParams = {
  query?: string;
  sort?: Sort;
};

const useSearchParams = () => {
  const router = useRouter();
  const defaultSort: Sort = "completed";
  const query =
    Array.isArray(router.query.query) || !router.query.query
      ? ""
      : router.query.query;

  const sortResult = sortSchema.safeParse(router.query.sort);

  const params: Required<SearchParams> = {
    query,
    sort: sortResult.success ? sortResult.data : defaultSort,
  };

  const setParam = <T extends keyof SearchParams>(
    key: T,
    value: SearchParams[T]
  ) => {
    const newQuery = { ...router.query, [key]: value };
    if (!value) {
      delete newQuery[key];
    }

    router.push({ query: newQuery });
  };

  return {
    params,
    setParam,
  };
};

const Home: NextPage<HomeProps> = ({ allGames }) => {
  const [parent] = useAutoAnimate<HTMLDivElement>();
  const {
    params: { query, sort },
    setParam,
  } = useSearchParams();

  const debouncedSetSearch = useMemo(
    () =>
      R.debounce((search) => setParam("query", search), { waitMs: 300 }).call,
    [setParam]
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
            initialSort={sort}
            initialSearch={query}
            onSortChange={(sort) => setParam("sort", sort)}
            onSearchChange={debouncedSetSearch}
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
                <a>
                  <GameCard
                    id={sys.id}
                    title={title}
                    img={image.url}
                    rating={rating}
                  />
                </a>
              </Link>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
