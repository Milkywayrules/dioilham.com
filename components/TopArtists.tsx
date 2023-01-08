import useSWR from 'swr'

import fetcher from 'lib/fetcher'
import { TopArtistsData } from 'lib/types'
import Artist from './Artist'

export default function TopArtists() {
  const { data } = useSWR<TopArtistsData>('/api/top-artists', fetcher)

  if (!data) {
    return null
  }

  return (
    <>
      {data.artists.map((artist, index) => (
        <Artist ranking={index + 1} key={artist.urlArtist} {...artist} />
      ))}
    </>
  )
}
