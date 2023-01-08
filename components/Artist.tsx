import { ArtistData } from 'lib/types'
import Image from 'next/image'

interface Props extends ArtistData {
  ranking: number
}

export default function Artist({
  ranking,
  genres,
  image,
  name,
  // popularity,
  totalFollowers,
  urlArtist,
}: Props) {
  return (
    <div className="mt-8 flex w-full max-w-3xl flex-row items-baseline border-b border-gray-200 dark:border-gray-800">
      <p className="my-auto mt-4 text-sm font-bold text-gray-400 dark:text-gray-600">{ranking}</p>

      <div className="ml-2 mb-4 flex gap-2">
        <div className="">
          <Image
            src={image.thumbnail}
            alt={`${name} artist cover`}
            width={50}
            height={50}
            className="aspect-square rounded object-cover"
          />
        </div>

        <div className="flex w-2/3 flex-col">
          <div className="flex gap-2">
            <a
              className="focusable min-w-fit truncate rounded px-1.5 py-0.5 font-medium text-gray-900 hover:text-teal-400 dark:text-gray-100 dark:hover:text-teal-300"
              href={urlArtist}
              target="_blank"
              rel="noopener noreferrer"
            >
              {name}
            </a>
            <p className="text-gray-400" color="gray.400">
              -
            </p>
            <p className="min-w-fit truncate text-gray-400" color="gray.400">
              {totalFollowers} followers
            </p>
          </div>

          <p
            className="mb-4 ml-1.5 max-w-fit truncate text-gray-400"
            color="gray.400"
            title={genres}
          >
            {genres}
          </p>
        </div>
      </div>
    </div>
  )
}
