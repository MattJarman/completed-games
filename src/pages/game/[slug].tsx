import ContentfulRichText from "@ui/contentful-rich-text";
import RatingCircle from "@ui/rating-circle";
import Tag from "@ui/tag";
import Title from "@ui/title";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { AchievementIcon } from "src/components/icons";
import StatTable from "src/components/stat-table";
import { getAllGames, getGameBySlug } from "src/lib/contentful";
import type { Game } from "src/schemas/game";
import { domToPng } from "modern-screenshot";
import { useRef } from "react";
import GameCard from "@ui/game-card";
import {
  CalendarIcon,
  ClockIcon,
  FolderArrowDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Dialog } from "radix-ui";

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

const Game: NextPage<GamePageProps> = ({ game }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
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
          {game.allAchievements && <AchievementIcon className="w-10" />}
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

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="bg-white py-2 px-2 rounded-md">Share</button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="bg-black/50 fixed inset-0" />
            <Dialog.Content className="fixed top-1/2 left-1/2 bg-gray-800 -translate-x-1/2 -translate-y-1/2 py-8 px-48 shadow-lg rounded-md">
              <Dialog.Title className="text-white font-bold mb-4 text-xl">
                Share
              </Dialog.Title>
              <Dialog.Close asChild>
                <button className="absolute top-6 right-6" aria-label="Close">
                  <XMarkIcon className="text-white w-6" />
                </button>
              </Dialog.Close>
              <div
                ref={ref}
                className="w-[300px] p-8 bg-indigo-900 shadow-lg rounded-md"
              >
                <GameCard
                  id={game.sys.id}
                  title={game.title}
                  img={game.image.url}
                  rating={game.rating}
                  allAchievements={Boolean(game.allAchievements)}
                />
                <div className="mt-4 flex justify-center flex-col w-full gap-2">
                  <p className="text-center text-gray-200 font-bold text-xl tracking-wider">
                    {game.title}
                  </p>
                  <div className="flex justify-between w-full text-gray-400">
                    <div className="flex gap-2">
                      <CalendarIcon className="w-4" />
                      <p>
                        {new Date(game.completedAt).toLocaleDateString("en-GB")}
                      </p>
                    </div>
                    {game.playtime && (
                      <div className="flex gap-2">
                        <ClockIcon className="w-4" />
                        <p>{game.playtime} hrs</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex mt-4 justify-between">
                <button
                  onClick={() => {
                    domToPng(ref.current).then((dataUrl) => {
                      const link = document.createElement("a");
                      link.download = "game.png";
                      link.href = dataUrl;
                      link.click();
                    });
                  }}
                  className="bg-white px-2 py-2 rounded-xs shadow-lg text-sm font-medium inline-flex gap-2"
                >
                  <FolderArrowDownIcon className="w-4" />
                  Save Image
                </button>
                <button className="bg-white px-2 py-2 rounded-xs shadow-lg text-sm font-medium inline-flex gap-2">
                  <FolderArrowDownIcon className="w-4" />
                  Share
                </button>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </>
  );
};

export default Game;
