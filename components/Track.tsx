import { TrackData } from 'lib/types'
import Image from 'next/image'

interface Props extends TrackData {
  ranking: number
}

export default function Track({ artist, ranking, title, urlSong, image }: Props) {
  return (
    <div className="mt-8 flex w-full max-w-3xl flex-row items-baseline border-b border-gray-200 dark:border-gray-800">
      <p className="my-auto mt-4 text-sm font-bold text-gray-400 dark:text-gray-600">{ranking}</p>

      <div className="ml-2 mb-4 flex gap-2">
        <div className="">
          <Image
            src={image.thumbnail}
            alt={`${title} track cover`}
            width={50}
            height={50}
            className="aspect-square rounded object-cover"
          />
        </div>

        <div className="flex flex-col">
          <a
            className="focusable w-60 truncate rounded px-1.5 py-0.5 font-medium text-gray-900 hover:text-teal-400 dark:text-gray-100 dark:hover:text-teal-300 sm:w-96 md:w-full"
            href={urlSong}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a>

          <p className="ml-1.5 w-60 truncate text-gray-400 sm:w-96 md:w-full" color="gray.400">
            {artist}
          </p>
        </div>
      </div>
    </div>
  )
}
