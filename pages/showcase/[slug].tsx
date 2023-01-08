import Image from 'next/image'
import { Suspense, useEffect, useState } from 'react'

import { LinkWrapped } from 'components/atoms'
import { CONSTS, Project, projectMap } from 'config'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import BlogPostCard from '../../components/BlogPostCard'
import Container from '../../components/Container'
import Subscribe from '../../components/Subscribe'
import VideoCard from '../../components/VideoCard'
import ProjectPostCard from 'components/ProjectPostCard'
import classNames from 'classnames'
import LoadingSpinner from 'components/LoadingSpinner'

export async function getServerSideProps({ params }: GetServerSidePropsContext) {
  const project = Object.values(projectMap).find(project => project.slug === params.slug)

  if (!project) {
    return {
      notFound: true,
    }
  }

  return {
    props: { params }, // will be passed to the page component as props
  }
}

export default function SlugShowcasePage({
  params,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [project, projectSet] = useState<Project>()

  useEffect(() => {
    projectSet(Object.values(projectMap).find(project => project.slug === params.slug))
  }, [params.slug])

  console.log(project)

  return (
    <Suspense fallback={'Loading...'}>
      <Container
        title="Dashboard – Dio Ilham"
        description="My personal dashboard, built with Next.js API routes deployed as serverless functions."
      >
        <div className="mx-auto mb-16 flex max-w-4xl flex-col items-start justify-center">
          {!project ? (
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
              <LoadingSpinner />
            </h1>
          ) : (
            <div className="flex flex-col gap-12">
              <div className="relative aspect-video rounded-xl shadow-xl shadow-teal-300/10 transition-shadow hover:shadow-teal-300/30 dark:shadow-teal-800/10 dark:hover:shadow-teal-800/30">
                <Image
                  src={project.image.covers[0].src}
                  alt={`${project.image.covers[0].alt} project cover`}
                  className="rounded-xl"
                  fill
                />
              </div>

              <section className="max-w-2xl">
                <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
                  {project.title}
                </h1>

                <div className="mb-8">
                  <div className="space-y-2 text-gray-600 dark:text-gray-400">{project.brief}</div>
                </div>

                <h2 className="my-24 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
                  Coming soon... ☕
                </h2>
              </section>
            </div>
          )}
        </div>
      </Container>
    </Suspense>
  )
}
