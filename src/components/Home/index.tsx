import { useAutoAnimate } from '@formkit/auto-animate/react'
import GameCard from '@ui/GameCard'
import Link from 'next/link'
import { FC, useMemo, useState } from 'react'
import { PartialGame as ContentfulGame } from 'src/lib/contentful'
import {
  sortByCompletedAtDescending,
  sortByNameAscending,
  sortByPlaytimeDescending,
  sortByRatingDescending
} from 'src/lib/utils/sorters'
import FilterControls from './FilterControls'

const sortMap = new Map([
  ['completed', sortByCompletedAtDescending],
  ['playtime', sortByPlaytimeDescending],
  ['rating', sortByRatingDescending],
  ['name', sortByNameAscending]
] as const)

export type SortMapKey = KeyOfMap<typeof sortMap>

export type HomeProps = {
  allGames: ContentfulGame[]
}

const HomePage: FC<HomeProps> = ({ allGames }) => {
  const [sort, setSort] = useState<SortMapKey>('completed')
  const [filter, setFilter] = useState('')
  const [parent] = useAutoAnimate<HTMLDivElement>()

  const filteredGames = useMemo(() => {
    if (!filter) {
      return allGames
    }

    return allGames.filter((game) =>
      game.title.toLowerCase().includes(filter.toLowerCase())
    )
  }, [allGames, filter])

  return (
    <div className="my-8">
      <div className="flex items-center my-4 space-x-3">
        <div className="flex-grow"></div>
        <FilterControls
          initialSort={'completed'}
          setSort={setSort}
          setFilter={setFilter}
        />
      </div>
      <div
        ref={parent}
        data-testid="game-container"
        className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-6">
        {filteredGames
          .sort(sortMap.get(sort))
          .map(({ sys, slug, title, image, rating }) => (
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
          ))}
      </div>
    </div>
  )
}

export default HomePage
