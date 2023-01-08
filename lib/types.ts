// import { MDXRemoteSerializeResult } from 'next-mdx-remote'

// export type Post = {
//   _id: string
//   slug: string
//   content: MDXRemoteSerializeResult
//   title: string
//   date: string
//   excerpt: string
//   coverImage: string
//   readingTime: string
//   tweets: any[]
// }

// export type Snippet = {
//   _id: string
//   slug: string
//   content: MDXRemoteSerializeResult
//   title: string
//   description: string
//   logo: string
// }

export enum Form {
  Initial,
  Loading,
  Success,
  Error,
}

export type FormState = {
  state: Form
  message?: string
}

export type Subscribers = {
  count: number
}

export type Views = {
  total: number
}

export type TrackData = {
  artist: string
  urlSong: string
  title: string
  image: {
    thumbnail: string
  }
}

export type NowPlayingSong = {
  album: string
  albumImageUrl: string
  artist: string
  isPlaying: boolean
  songUrl: string
  title: string
}

export type TopTracks = {
  tracks: TrackData[]
}

export interface ArtistData {
  urlArtist: string
  totalFollowers: string
  genres: string
  name: string
  image: {
    thumbnail: string
  }
  popularity: string
}

export type TopArtistsData = {
  artists: ArtistData[]
}

export type YouTube = {
  subscriberCount: number
  viewCount: number
}

export type GitHub = {
  stars: number
}

export type Unsplash = {
  downloads: number
  views: number
}
