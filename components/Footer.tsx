import NowPlaying from 'components/NowPlaying'
import { CONSTS } from 'config'
import { ReactNode } from 'react'
import { LinkWrapped } from './atoms'

interface Props {
  children: ReactNode | ReactNode[]
  href: string
}

const ExternalLink = ({ href, children }: Props) => (
  <LinkWrapped mode="text" target="_blank" rel="noopener noreferrer" href={href}>
    {children}
  </LinkWrapped>
)

export default function Footer() {
  return (
    <footer className="mx-auto mb-8 flex w-full max-w-2xl flex-col items-start justify-center">
      <hr className="border-1 mb-8 w-full border-gray-200 dark:border-gray-800" />
      <NowPlaying />

      <div className="grid w-full max-w-2xl grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <LinkWrapped href="/" mode="text">
            Home
          </LinkWrapped>
          <LinkWrapped href="/about" mode="text">
            About
          </LinkWrapped>
          <LinkWrapped href="/showcase" mode="text">
            Showcase
          </LinkWrapped>
          <LinkWrapped href="/resume" mode="text">
            Resume / cv
          </LinkWrapped>
          <LinkWrapped href="/newsletter" mode="text">
            Newsletter
          </LinkWrapped>
        </div>

        <div className="flex flex-col space-y-4">
          <ExternalLink href={CONSTS.SOSIAL.IG.URL}>{CONSTS.SOSIAL.IG.NAME}</ExternalLink>
          <ExternalLink href={CONSTS.SOSIAL.GITHUB.URL}>{CONSTS.SOSIAL.GITHUB.NAME}</ExternalLink>
          <ExternalLink href={CONSTS.SOSIAL.LINKEDIN.URL}>
            {CONSTS.SOSIAL.LINKEDIN.NAME}
          </ExternalLink>
          <ExternalLink href={CONSTS.SOSIAL.YT.URL}>{CONSTS.SOSIAL.YT.NAME}</ExternalLink>
        </div>

        <div className="flex flex-col space-y-4">
          <LinkWrapped href="/peripherals" mode="text">
            Peripherals
          </LinkWrapped>
          <LinkWrapped href="/guestbook" mode="text">
            Guestbook
          </LinkWrapped>
          <LinkWrapped href="/snippets" mode="text">
            Snippets
          </LinkWrapped>
          <LinkWrapped href="/tweets" mode="text">
            Tweets
          </LinkWrapped>
        </div>
      </div>
    </footer>
  )
}
