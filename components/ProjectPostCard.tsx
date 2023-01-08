// import useSWR from 'swr'

import classNames from 'classnames'
// import fetcher from 'lib/fetcher'
// import { Views } from 'lib/types'
import { LinkWrapped } from './atoms'
import Image from 'next/image'
import { ReactNode } from 'react'
import { CONSTS } from 'config'

interface Props {
  title: string
  brief: ReactNode
  slug: string
  gradient: string
  image?: {
    src: string
    alt: string
  }
  views?: number
}

export default function ProjectPostCard({
  title,
  brief,
  slug,
  gradient,
  views,
  image = { alt: 'Project Cover', src: CONSTS.UTILS.DEFAULT_COVER },
}: Props) {
  if (image.src === '') image = { ...image, src: CONSTS.UTILS.DEFAULT_COVER }

  return (
    <div className="flex w-full flex-col gap-5">
      <LinkWrapped
        href={`/showcase/${slug}`}
        replaceClassName
        className={classNames(
          'flex-shrink-0 transform transition-all',
          'group aspect-video w-full rounded-xl p-1',
          'relative bg-gradient-to-r outline-none',
          'hover:scale-[1.01] hover:bg-gradient-to-b focus-visible:scale-[1.01] focus-visible:ring-2 focus-visible:ring-pink-400 dark:focus-visible:ring-pink-600',
          gradient,
        )}
      >
        <div className="flex h-full flex-col justify-between rounded-xl bg-white p-0 dark:bg-gray-900">
          <Image
            src={image.src}
            alt={`${image.alt} project cover`}
            className="rounded-xl p-1 grayscale filter transition-all group-hover:grayscale-0 group-focus-visible:grayscale-0"
            blurDataURL={CONSTS.UTILS.LQIP}
            placeholder="blur"
            quality={20}
            fill
          />
        </div>

        <div className="absolute bottom-0 left-0 translate-y-3.5 translate-x-6 rounded-lg border-2 border-gray-50 bg-gray-50 px-4 py-1 text-gray-600 dark:border-gray-900 dark:bg-gray-900 dark:text-gray-400">
          <div className="flex items-center text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>

            <span className="capsize ml-2 align-baseline">
              {views ? (
                <>
                  {views}{' '}
                  <span className="text-[8px] text-gray-300 dark:text-gray-600">(still dummy)</span>
                </>
              ) : (
                '–––'
              )}
            </span>
          </div>
        </div>
      </LinkWrapped>

      <LinkWrapped
        href={`/showcase/${slug}`}
        mode="text"
        tabIndex={-1}
        className={classNames('group h-full')}
      >
        <div className="flex h-full flex-col justify-between gap-4 rounded-xl">
          <div className="flex flex-col justify-between gap-4">
            <h4 className="w-full text-lg font-semibold tracking-tight text-gray-900 group-hover:text-teal-400 dark:text-gray-100 dark:group-hover:text-teal-300 md:text-lg">
              {title}
            </h4>
            <div className="space-y-2 text-gray-600 dark:text-gray-400">{brief}</div>
          </div>

          <div className="mt-4 flex flex-col gap-4">
            <div className="-mx-s1 w-fit rounded bg-gray-200 px-1.5 text-gray-600 group-hover:text-teal-400 dark:bg-gray-800 dark:text-gray-400 dark:group-hover:text-teal-300">
              Read More
            </div>
          </div>
        </div>
      </LinkWrapped>
    </div>
  )
}
