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
  ArrowUturnLeftIcon,
  CalendarIcon,
  ClockIcon,
  FolderArrowDownIcon,
  ShareIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Dialog } from "radix-ui";
import { Button } from "@ui/button";
import Link from "next/link";

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
      <div className="flex flex-col my-8 space-y-4">
        <div>
          <Button asChild>
            <Link href="/">
              <ArrowUturnLeftIcon className="w-4" />
              Back
            </Link>
          </Button>
        </div>
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
            <Button className="z-20 fixed bottom-0 right-0 right-5 rounded-lg mr-1 mb-5 ">
              <ShareIcon className="w-4" />
              Share
            </Button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="bg-black/50 fixed inset-0 z-50" />
            <Dialog.Content
              aria-describedby={undefined}
              className="bg-gray-800 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg  p-6 shadow-lg duration-200 sm:max-w-[800px]"
            >
              <Dialog.Title className="text-white font-bold mb-4 text-xl">
                Share
              </Dialog.Title>
              <Dialog.Close asChild>
                <button className="absolute top-6 right-6" aria-label="Close">
                  <XMarkIcon className="text-white w-6" />
                </button>
              </Dialog.Close>
              <div className="w-full flex justify-center">
                <div
                  ref={ref}
                  className="w-[240px] min-[400px]:w-[300px] p-8 bg-linear-to-t bg-linear-to-t from-cyan-500 to-teal-500 shadow-lg rounded-md"
                >
                  <GameCard
                    id={game.sys.id}
                    title={game.title}
                    img={game.image.url}
                    rating={game.rating}
                    allAchievements={Boolean(game.allAchievements)}
                    interactive={false}
                  />
                  <div className="mt-4 flex justify-center flex-col w-full gap-4">
                    <p className="text-center text-gray-900 font-bold text-sm min-[400px]:text-xl uppercase">
                      {game.title}
                    </p>
                    <div className="flex justify-between w-full text-gray-800 font-medium text-xs min-[400px]:text-base">
                      <div className="flex gap-2">
                        <CalendarIcon className="w-4" />
                        <p>
                          {new Date(game.completedAt).toLocaleDateString(
                            "en-GB"
                          )}
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
              </div>
              <div className="flex mt-4 justify-center">
                <Button
                  intent="secondary"
                  onClick={() => {
                    domToPng(ref.current as Node, { scale: 4 }).then(
                      (dataUrl) => {
                        const link = document.createElement("a");
                        link.download = "game.png";
                        link.href = dataUrl;
                        link.click();
                      }
                    );
                  }}
                >
                  <FolderArrowDownIcon className="w-4" />
                  Save Image
                </Button>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </>
  );
};

export default Game;
