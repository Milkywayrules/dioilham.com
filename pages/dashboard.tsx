import { LinkWrapped } from 'components/atoms'
import Container from 'components/Container'
import Analytics from 'components/metrics/Analytics'
import GitHub from 'components/metrics/Github'
import YouTube from 'components/metrics/Youtube'
import TopArtists from 'components/TopArtists'
import TopTracks from 'components/TopTracks'

export default function Dashboard() {
  return (
    <Container
      title="Dashboard – Dio Ilham Dj"
      description="My personal dashboard, built with Next.js API routes deployed as serverless functions."
    >
      <div className="mx-auto mb-16 flex max-w-2xl flex-col items-start justify-center">
        <section>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
            Dashboard
          </h1>

          <div className="mb-8">
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              This is my personal dashboard, built with Next.js API routes deployed as serverless
              functions. I use this dashboard to track various metrics across platforms like
              YouTube, GitHub, and more. Want to build your own? Check out my&nbsp;
              <LinkWrapped href="/blog" className="text-gray-900 underline dark:text-gray-100">
                blog series.
              </LinkWrapped>
            </p>
          </div>
        </section>

        <section className="w-full">
          <div className="flex w-full flex-col">
            {/* <Unsplash /> */}
            <YouTube />
          </div>

          <div className="my-2 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
            <Analytics />
            <GitHub />
          </div>
        </section>

        <section>
          <h2 className="mb-4 mt-16 text-3xl font-bold tracking-tight text-black dark:text-white">
            Top Artists
          </h2>

          <p className="mb-4 text-gray-600 dark:text-gray-400">
            I know you wouldn't be curious to my favorite artists. Idc, here's my top artists on
            Spotify updated daily 😜
          </p>

          <TopArtists />
        </section>

        <section>
          <h2 className="mb-4 mt-16 text-3xl font-bold tracking-tight text-black dark:text-white">
            Top Tracks
          </h2>

          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Yea, these are what I'm currently jamming to. Again, idc, here's my top tracks on
            Spotify updated daily 😏
          </p>

          <TopTracks />
        </section>
      </div>
    </Container>
  )
}
