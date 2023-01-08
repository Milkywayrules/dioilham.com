import classNames from 'classnames'
import { LinkWrapped } from 'components/atoms'
import ProjectPostCard from 'components/ProjectPostCard'
import { Project, projectMap } from 'config'
import { ChangeEvent, useMemo, useState } from 'react'
import Container from '../../components/Container'

type By = 'RANK' | 'ALPHA'
type Order = 'ASC' | 'DESC'

const {
  agenVX,
  akmIndonesiaWeb,
  animeFinder,
  croppie,
  femioTodoApp,
  hackernewsClone,
  jsDrillMovieSearch,
  jsDrillVBTodoApp,
  openAttendance,
  pokedex,
  rakbuku,
  takyoAdmin,
  verasicAdmin,
  verasicCollaborativeKanbanBoard,
  verasicStory,
  vipYukBisnis,
} = projectMap

const arr = [
  verasicCollaborativeKanbanBoard,
  verasicAdmin,
  femioTodoApp,
  rakbuku,
  takyoAdmin,
  pokedex,
  akmIndonesiaWeb,
  animeFinder,
  hackernewsClone,
  openAttendance,
  verasicStory,
  agenVX,
  jsDrillMovieSearch,
  jsDrillVBTodoApp,
  vipYukBisnis,
  croppie,
]

const slice = (strArr: any[]) => [
  strArr.slice(0, 2),
  strArr.slice(2, 5),
  strArr.slice(5, 8),
  strArr.slice(8, 11),
  strArr.slice(11, 14),
  strArr.slice(14, 17),
]

const makeByRankDesc = (arr: any[]) => slice(arr)
const makeByRankAsc = (arr: any[]) => slice(arr.reverse())
const makeByAlphabetDesc = (arr: any[]) => slice(arr.sort((a, b) => (a.title < b.title ? -1 : 1)))
const makeByAlphabetAsc = (arr: any[]) => slice(arr.sort((a, b) => (a.title > b.title ? -1 : 1)))

const makeProjects = (by: By, order: Order, arr: any[]) => {
  const newArr = [...arr]

  if (by === 'ALPHA') {
    return order === 'ASC' ? makeByAlphabetAsc(newArr) : makeByAlphabetDesc(newArr)
  } else if (by === 'RANK') {
    return order === 'ASC' ? makeByRankAsc(newArr) : makeByRankDesc(newArr)
  }
}

export default function IndexShowcasePage() {
  let k = 0

  const [sortBy, sortBySet] = useState<By>('RANK')
  const [order, orderSet] = useState<Order>('DESC')

  const projects: Project[][] = useMemo(() => makeProjects(sortBy, order, arr), [sortBy, order])

  const handle = (e: ChangeEvent<HTMLSelectElement>) => {
    const [sortBySelected, orderSelected] = e.target.value.split('-') as [By, Order]

    sortBySet(sortBySelected)
    orderSet(orderSelected)
  }

  return (
    <Container
      title="Project Showcase – Dio Ilham"
      description="My personal dashboard, built with Next.js API routes deployed as serverless functions."
    >
      <div className="mx-auto mb-8 flex max-w-2xl flex-col items-start justify-center">
        <section>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
            My Project Showcase
          </h1>

          <div className="mb-8">
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              This is showcase for my personal projects. I use this showcase to show you what I've
              build as a Front-end or Back-end Web Developer.
            </p>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              Want to collaborate with me? My pleasure,{' '}
              <LinkWrapped href="/about" className="text-gray-900 underline dark:text-gray-100">
                Contact me here 👀
              </LinkWrapped>
            </p>
          </div>
        </section>
      </div>

      <div className="mx-auto mb-16 flex max-w-6xl flex-col items-start justify-center">
        <div className="ml-auto">
          <label
            htmlFor="sort-by"
            className="mb-2 block text-right text-sm font-medium text-gray-900 dark:text-white"
          >
            Sort By
          </label>
          <select
            name="sort-by"
            id="sort-by"
            className="focusable w-full cursor-pointer rounded bg-gray-100 px-2 py-1 text-gray-600 shadow-md dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
            onChange={handle}
          >
            <option value="RANK-DESC">Rank - DESC</option>
            <option value="RANK-ASC">Rank - ASC</option>
            <option value="ALPHA-DESC">Alphabet - DESC</option>
            <option value="ALPHA-ASC">Alphabet - ASC</option>
          </select>
        </div>

        <section className="mt-8 flex w-full flex-col gap-8 md:gap-12">
          {projects.map((rowProjects, i) => (
            <div key={i} className="flex flex-col gap-8 md:flex-row">
              {rowProjects.map((project, j) => {
                k++

                return (
                  <div
                    key={j}
                    className={classNames({
                      'mx-auto w-full md:w-1/2': i === 0,
                      'mx-auto w-full md:w-1/3': i !== 0,
                    })}
                  >
                    <ProjectPostCard
                      title={project.title}
                      brief={project.brief}
                      slug={project.slug}
                      gradient={project.gradient}
                      /**
                       * TODO:
                       * this multiplier is problematic
                       *
                       * Error: Text content does not match server-rendered HTML.
                       * See more info here: https://nextjs.org/docs/messages/react-hydration-error
                       */
                      views={Math.floor(Math.random() * 273)}
                      image={project.image.covers[0]}
                    />
                  </div>
                )
              })}
            </div>
          ))}
        </section>
      </div>
    </Container>
  )
}
