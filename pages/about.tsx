import Image from 'next/image'

import { LinkWrapped } from 'components/atoms'
import Container from 'components/Container'
import avatarBW from 'public/avatar-bw.jpg'
import avatar from 'public/avatar.jpg'
import { ReactNode } from 'react'
import { CONSTS } from 'config'

function Section({
  children,
  className,
}: {
  children: ReactNode | ReactNode[]
  className?: string
}) {
  return <section className={className}>{children}</section>
}

const AUTOPEDIA = CONSTS.BIO.WORK.SECONDARY
const CAROLINE = CONSTS.BIO.WORK.MAIN

export default function About() {
  return (
    <Container title="About – Dio Ilham">
      <div className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          About Me
        </h1>

        <div className="mb-8 leading-6">
          <Section className="prose dark:prose-dark">
            <h2>Links</h2>
            <ul>
              <li>
                GitHub:{' '}
                <LinkWrapped href={CONSTS.SOSIAL.GITHUB.URL} target="_blank">
                  {CONSTS.SOSIAL.GITHUB.TEXT}
                </LinkWrapped>
              </li>

              <li>
                Website:{' '}
                <LinkWrapped href={CONSTS.SOSIAL.WEB.URL} target="_blank">
                  {CONSTS.SOSIAL.WEB.TEXT}
                </LinkWrapped>
              </li>

              <li>
                LinkedIn:{' '}
                <LinkWrapped href={CONSTS.SOSIAL.LINKEDIN.URL} target="_blank">
                  {CONSTS.SOSIAL.LINKEDIN.TEXT}
                </LinkWrapped>
              </li>

              <li>
                Instagram:{' '}
                <LinkWrapped href={CONSTS.SOSIAL.IG.URL} target="_blank">
                  {CONSTS.SOSIAL.IG.TEXT}
                </LinkWrapped>
              </li>
            </ul>
          </Section>

          <Section className="prose dark:prose-dark">
            <h2>Bio</h2>

            <Section>
              <h3>Job Title</h3>

              {/* prettier-ignore */}
              <p>
                Dio Ilham, Front-end Developer of Software Engineer at{' '}
                <LinkWrapped href={AUTOPEDIA.URL} target='_blank'>{AUTOPEDIA.TEXT}</LinkWrapped>
              </p>
            </Section>

            <Section>
              <h3>Long, 3rd Person</h3>

              {/* prettier-ignore */}
              <p>
                Dio Ilham is the Front-end Developer of Software Engineer at{' '}
                <LinkWrapped href={AUTOPEDIA.URL} target='_blank'>{AUTOPEDIA.TEXT}</LinkWrapped>, currently working
                on <LinkWrapped href={CAROLINE.URL} target='_blank'>{CAROLINE.TEXT}</LinkWrapped>, where he
                helps team to implement designs from Adobe XD to the actual website that user can
                use. He collaborate with other engineer to develop blazingly fast website and
                research the best technology to implement.
              </p>
              <p>
                His main focus is Developer Experience (DX), how the team collaborate on each other
                and how can tools like <i>prettier, eslint, husky, typescript, etc.</i> can help the
                team to move faster.
              </p>
              <p>
                He is such a dreamer, learner, and wizard, Dio want to help people (not specific on
                tech) as much as he can.
              </p>
            </Section>

            <Section>
              <h3>Long, 1st Person</h3>

              <p>Hi, Dio is here. 🙌</p>
              {/* prettier-ignore */}
              <p>
                Im' a (kinda) Fullstack Developer, now working as Front-end Developer of Software
                Engineer at <LinkWrapped href={AUTOPEDIA.URL} target='_blank'>{AUTOPEDIA.TEXT}</LinkWrapped>,
                currently working on their project called{' '}
                <LinkWrapped href={CAROLINE.URL} target='_blank'>{CAROLINE.TEXT}</LinkWrapped>.
                I collaborate with my team to implement the best feature for our users, with focus on
                implement designs from Adobe XD to the actual website that our users can use. We want to
                deliver the blazingly fast website. Also, we research the current best technology to
                solve all our users (also our) problems.
              </p>
              <p>
                A dreamer, learner, and wizard, Dio want to help people (not specific on tech) as
                much as he can.
              </p>
            </Section>

            <div className="my-10 h-[1px] bg-teal-200 dark:bg-teal-900"></div>

            <Section>
              <h3>Short, 3rd Person</h3>

              {/* prettier-ignore */}
              <p>
                Dio Ilham is Front-end Developer at{' '}
                <LinkWrapped href={AUTOPEDIA.URL} target='_blank'>{AUTOPEDIA.TEXT}</LinkWrapped>,
                currently working on their automotive&nbsp;marketplace project called{' '}
                <LinkWrapped href={CAROLINE.URL} target='_blank'>{CAROLINE.TEXT}</LinkWrapped>.
              </p>
            </Section>

            <Section>
              <h3>Short, 1st Person</h3>

              <p>Hi, Dio is here. 🙌</p>
              {/* prettier-ignore */}
              <p>
                I'm a Front-end Developer at{' '}
                <LinkWrapped href={AUTOPEDIA.URL} target='_blank'>{AUTOPEDIA.TEXT}</LinkWrapped>,
                currently working on their automotive&nbsp;marketplace project called{' '}
                <LinkWrapped href={CAROLINE.URL} target='_blank'>{CAROLINE.TEXT}</LinkWrapped>.
              </p>
            </Section>

            <Section>
              <h3>Education</h3>

              <p>
                Dio Ilham graduated from Indonesian Computer University with a B.CS. in Informatics
                Engineering.
              </p>
            </Section>

            <Section>
              <h2>Headshots</h2>
              <div className="flex space-x-8">
                <LinkWrapped href="/avatar.jpg" mode="image">
                  <Image
                    alt="Dio Ilham headshot"
                    width={400}
                    quality={100}
                    src={avatar}
                    className="rounded-md"
                  />
                </LinkWrapped>
                <LinkWrapped href="/avatar-bw.jpg" mode="image">
                  <Image
                    alt="Dio Ilham headshot black and white"
                    width={400}
                    quality={100}
                    src={avatarBW}
                    className="rounded-md"
                  />
                </LinkWrapped>
              </div>
            </Section>
          </Section>
        </div>
      </div>
    </Container>
  )
}
