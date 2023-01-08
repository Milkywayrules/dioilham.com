import { type NextRequest } from 'next/server'
import { getTopTracks } from 'lib/spotify'
import { TrackData } from 'lib/types'

interface ApiTrack {
  album: {
    album_type: string
    artists: [
      {
        external_urls: {
          spotify: string
        }
        href: string
        id: string
        name: string
        type: string
        uri: string
      },
    ]
    available_markets: string[]
    external_urls: {
      spotify: string
    }
    href: string
    id: string
    images: {
      height: number
      url: string
      width: number
    }[]
    name: string
    release_date: Date
    release_date_precision: string
    total_tracks: number
    type: string
    uri: string
  }
  artists: [
    {
      external_urls: {
        spotify: string
      }
      href: string
      id: string
      name: string
      type: string
      uri: string
    },
  ]
  available_markets: string[]
  disc_number: number
  duration_ms: number
  explicit: boolean
  external_ids: {
    isrc: string
  }
  external_urls: {
    spotify: string
  }
  href: string
  id: string
  is_local: boolean
  name: string
  popularity: number
  preview_url: string
  track_number: number
  type: string
  uri: string
}

export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req: NextRequest) {
  const response = await getTopTracks()
  const { items } = (await response.json()) as { items: ApiTrack[] }

  const isDev = process.env.NODE_ENV === 'development'

  const sliced = isDev ? items : items.slice(0, 3)

  const tracks = sliced.map<TrackData>(track => ({
    artist: track.artists.map(_artist => _artist.name).join(', '),
    urlSong: track.external_urls.spotify,
    title: track.name,
    image: {
      thumbnail: track.album.images[track.album.images.length - 1].url,
    },
  }))

  return new Response(JSON.stringify({ tracks }), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'cache-control': isDev ? '' : 'public, s-maxage=86400, stale-while-revalidate=43200',
    },
  })
}
