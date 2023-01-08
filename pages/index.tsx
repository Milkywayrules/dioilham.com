import Image from 'next/image'

import { LinkWrapped } from 'components/atoms'
import ProjectPostCard from 'components/ProjectPostCard'
import { CONSTS, projectMap } from 'config'
import BlogPostCard from '../components/BlogPostCard'
import Container from '../components/Container'
import Subscribe from '../components/Subscribe'
import VideoCard from '../components/VideoCard'

const { verasicCollaborativeKanbanBoard, verasicAdmin, femioTodoApp, rakbuku } = projectMap

const projects = [
  [verasicCollaborativeKanbanBoard, verasicAdmin],
  [femioTodoApp, rakbuku],
]

export default function Home() {
  return (
    <Container>
      <div className="mx-auto flex max-w-2xl flex-col items-start justify-center border-gray-200 pb-16 dark:border-gray-700">
        <section>
          <div className="flex flex-col-reverse items-start sm:flex-row">
            <div className="flex flex-col pr-8">
              <h1 className="mb-1 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
                {CONSTS.BIO.NAME}
              </h1>

              <h2 className="mb-4 text-gray-700 dark:text-gray-200">
                Front-end Developer of Software Engineer at{' '}
                <LinkWrapped href={CONSTS.BIO.WORK.SECONDARY.URL} target="_blank">
                  {CONSTS.BIO.WORK.SECONDARY.TEXT}
                </LinkWrapped>
              </h2>

              <p className="mb-16 text-gray-600 dark:text-gray-400">
                Craft arts using Next.js, React, and Typescript. On my way becoming a Typescript
                Wizard. 🧙‍♂️
              </p>
            </div>

            <div className="relative mb-8 mr-auto w-[80px] overflow-hidden rounded-full sm:mb-0 sm:w-[176px]">
              <Image
                alt="Dio Ilham headshot"
                height={176}
                width={176}
                src="/avatar.jpg"
                sizes="30vw"
                priority
                className="grayscalse scale-110 rounded-full filter"
              />
            </div>
          </div>
        </section>

        <section className="w-full">
          <h3 className="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
            Featured Projects
          </h3>

          <div className="flex flex-col gap-10">
            {projects.map((rowProjects, i) => (
              <div key={i} className="flex flex-col gap-6 md:flex-row">
                {rowProjects.map((project, j) => (
                  <ProjectPostCard
                    key={j}
                    title={project.title}
                    brief={project.brief}
                    slug={project.slug}
                    /**
                     * TODO:
                     * this multiplier is problematic
                     *
                     * Error: Text content does not match server-rendered HTML.
                     * See more info here: https://nextjs.org/docs/messages/react-hydration-error
                     */
                    views={Math.floor(Math.random() * 273)}
                    gradient={project.gradient}
                    image={project.image.covers[0]}
                  />
                ))}
              </div>
            ))}
          </div>

          <div className="flex">
            <LinkWrapped mode="see-more" href="/showcase" className="mt-8">
              <>
                {'Explore all on showcase'}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="ml-1 h-6 w-6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                  />
                </svg>
              </>
            </LinkWrapped>
          </div>
        </section>

        <span className="h-16" />

        <section className="w-full">
          <h3 className="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
            Featured Posts
          </h3>

          <div className="flex flex-col gap-6 md:flex-row">
            <BlogPostCard
              title="Coming soon ✌"
              slug=""
              gradient="from-[#9333EA] via-[#FDE68A] to-[#818CF8]"
            />
            <BlogPostCard
              title="Coming soon ✌"
              slug=""
              gradient="from-[#3B82F6] via-[#9333EA] to-[#6EE7B7]"
            />
            <BlogPostCard
              title="Coming soon ✌"
              slug=""
              gradient="from-[#FDE68A] via-[#6EE7B7] to-[#9333EA]"
            />
          </div>

          <div className="flex">
            <LinkWrapped mode="see-more" href="/blog" className="mt-8">
              <>
                {'Read all posts'}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="ml-1 h-6 w-6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                  />
                </svg>
              </>
            </LinkWrapped>
          </div>
        </section>

        <span className="h-16" />

        <section>
          <h3 className="mb-4 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
            Learn React & Next.js
          </h3>

          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Build and deploy a modern SaaS application using the most popular open-source software.
            This course is 12 hours long and is completely live streamed.
          </p>

          <VideoCard
            index="01"
            href="https://www.youtube.com/watch?v=MxR5I5_hOKk&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=2"
            length="1:02:45"
            title="Introduction to React 2025"
          />
          <VideoCard
            index="02"
            href="https://www.youtube.com/watch?v=AGl52moyISU&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=3"
            length="54:22"
            title="Firestore, Chakra UI, Absolute Imports"
          />
          <VideoCard
            index="03"
            href="https://www.youtube.com/watch?v=3g6-v3_BNbM&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=4"
            length="1:08:30"
            title="Designing & Building the Dashboard"
          />
          <VideoCard
            index="04"
            href="https://www.youtube.com/watch?v=u8iv_yhSRI8&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=5"
            length="1:13:45"
            title="Firebase Admin with Next.js + SWR"
          />

          <div className="flex">
            <LinkWrapped href="/blog" rel="noopener noreferrer" mode="see-more" className="mt-8">
              Watch all videos
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="ml-1 h-6 w-6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                />
              </svg>
            </LinkWrapped>
          </div>
        </section>

        <span className="h-16" />

        <Subscribe />
      </div>
    </Container>
  )
}
