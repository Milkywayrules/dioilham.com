const client_id = process.env.SPOTIFY_CLIENT_ID!
const client_secret = process.env.SPOTIFY_CLIENT_SECRET!
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN!

const basic = btoa(`${client_id}:${client_secret}`)
// const basic = new Buffer(client_id + ':' + client_secret).toString('base64')
// const basic = Buffer.from(client_id + ':' + client_secret).toString('base64')
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`
const TOP_ARTISTS_ENDPOINT = `https://api.spotify.com/v1/me/top/artists`
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

/**
 * this gives us "code" and "state"
 */
export const oauthSpotifyUrl = () => {
  // i'm not sure abt this, i believe this is not safe, client still can read it
  const state = refresh_token

  const scope = [
    /** Not used anymore scopes */
    // // Spotify Connect
    // 'user-read-playback-state user-read-currently-playing',
    // // Playlists
    // 'playlist-read-private playlist-read-collaborative',
    // // Follow
    // 'user-follow-read',
    // // Listening History
    // 'user-read-playback-position user-top-read user-read-recently-played',
    // // Library
    // 'user-library-read',
    // // Users
    // 'user-read-email user-read-private',

    /** Picked scopes */
    // Spotify Connect
    'user-read-currently-playing',
    // Playlists
    'playlist-read-private',
    // Follow
    'user-follow-read',
    // Listening History
    'user-read-playback-position user-top-read user-read-recently-played',
    // Library
    'user-library-read',
    // Users
    '',
  ].join(' ')

  console.log(
    '------------------------------------------------------------------------------------------------------------------------------------------------------------',
  )
  console.log(client_id, client_secret, scope, state)

  return (
    'https://accounts.spotify.com/authorize?' +
    new URLSearchParams({
      response_type: 'code',
      redirect_uri: 'http://localhost:4000',
      client_id,
      scope,
      state,
    })
  )
}

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  })

  return response.json()
}
export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken()

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken()

  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      time_range: 'short_term',
      limit: '10',
      offset: '0',
    },
  })
}

export const getTopArtists = async () => {
  const { access_token } = await getAccessToken()

  return fetch(TOP_ARTISTS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      time_range: 'medium_term',
      limit: '10',
      offset: '0',
    },
  })
}
