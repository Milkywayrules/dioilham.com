import { type NextRequest } from 'next/server'
import { getTopArtists } from 'lib/spotify'
import { ArtistData } from 'lib/types'

interface ApiArtist {
  external_urls: {
    spotify: string
  }
  followers: {
    href: string | null
    total: number
  }
  genres: string[]
  href: string
  id: string
  images: {
    height: number
    url: string
    width: number
  }[]
  name: string
  popularity: number
  type: string
  uri: string
}

export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req: NextRequest) {
  const response = await getTopArtists()
  const { items } = (await response.json()) as { items: ApiArtist[] }

  const isDev = process.env.NODE_ENV === 'development'

  const sliced = isDev ? items : items.slice(0, 7)

  const artists = sliced.map<ArtistData>(
    ({ external_urls, followers, genres, name, images, popularity }) => ({
      urlArtist: external_urls.spotify,
      totalFollowers: `${followers.total.toLocaleString()}`,
      genres: genres.join(', '),
      name,
      image: {
        thumbnail: images[images.length - 1].url,
      },
      popularity: `${popularity.toLocaleString()}`,
    }),
  )

  return new Response(JSON.stringify({ artists }), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'cache-control': isDev ? '' : 'public, s-maxage=86400, stale-while-revalidate=43200',
    },
  })
}
