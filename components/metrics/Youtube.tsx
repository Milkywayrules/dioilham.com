import useSWR from 'swr'

import fetcher from 'lib/fetcher'
import { YouTube } from 'lib/types'
import MetricCard from 'components/metrics/Card'

export default function YouTubeCard() {
  const { data } = useSWR<YouTube>('/api/youtube', fetcher)

  const subscriberCount = Number(data?.subscriberCount)
  const viewCount = Number(data?.viewCount)
  const link = 'https://www.youtube.com/@mengoding' // tribute, temprorarily and then change to my own yt channel

  return (
    <div className="my-2 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
      <MetricCard
        header="YouTube Subscribers"
        link={link}
        metric={subscriberCount}
        isCurrency={false}
      />
      <MetricCard header="YouTube Views" link={link} metric={viewCount} isCurrency={false} />
    </div>
  )
}
