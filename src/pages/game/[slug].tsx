import ContentfulRichText from "@ui/contentful-rich-text";
import RatingCircle from "@ui/rating-circle";
import Tag from "@ui/tag";
import Title from "@ui/title";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import StatTable from "src/components/stat-table";
import { getAllGames, getGameBySlug } from "src/lib/contentful";
import { Game } from "src/schemas/game";

export type GamePageProps = {
  game: Game;
};

export const getStaticProps: GetStaticProps<GamePageProps> = async ({
  params,
}) => {
  if (!params?.slug || Array.isArray(params?.slug)) {
    return { notFound: true };
  }

  const game = await getGameBySlug(params.slug);

  if (!game) {
    return { notFound: true };
  }

  return { props: { game } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allGames = await getAllGames();
  return {
    paths: allGames.map(({ slug }) => `/game/${slug}`),
    fallback: false,
  };
};

const Game: NextPage<GamePageProps> = ({ game }) => (
  <>
    <Head>
      <title>{game.title} | Completed Games</title>
      <meta name="description" content={game.title} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="flex flex-col my-8 space-y-8">
      <div
        data-testid="game-title"
        className="flex items-center justify-between"
      >
        <Title>{game.title}</Title>
        <RatingCircle rating={game.rating} />
      </div>
      <div
        data-testid="game-tags"
        className="flex flex-col items-start space-y-2 md:items-center md:space-x-2 md:space-y-0 md:flex-row"
      >
        {game.tags.map((tag) => (
          <Tag key={tag.toLowerCase()}>{tag}</Tag>
        ))}
      </div>
      <StatTable {...game} />
      {game.notes && (
        <ContentfulRichText
          textSize="lg"
          document={game.notes.json}
          links={game.notes.links}
        />
      )}
    </div>
  </>
);

export default Game;
