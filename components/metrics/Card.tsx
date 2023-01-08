import { LinkWrapped } from 'components/atoms'

interface Props {
  header: string
  link: string
  metric: number
  isCurrency: boolean
}

export default function MetricCard({ header, link, metric, isCurrency }: Props) {
  return (
    <div className="metric-card max-w-72 w-full rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
      <div className="flex">
        <LinkWrapped
          mode="see-more"
          aria-label={header}
          target="_blank"
          rel="noopener noreferrer"
          href={link}
          className="-mx-1"
        >
          <div className="flex items-center text-gray-900 dark:text-gray-300">
            {header}

            <svg
              className="ml-1 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </div>
        </LinkWrapped>
      </div>

      <p className="spacing-sm mt-2 text-3xl font-bold text-black dark:text-white">
        {metric > -1 && isCurrency && 'Rp.'}
        {metric > -1 ? metric.toLocaleString() : '-'}
      </p>
    </div>
  )
}
