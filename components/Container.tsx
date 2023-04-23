import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import NextLink from 'next/link'
import cn from 'classnames'

import Footer from 'components/Footer'
import MobileMenu from 'components/MobileMenu'

interface Props {
  href: string
  text: string
}

function NavItem({ href, text }: Props) {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <NextLink
      href={href}
      className={cn(
        isActive
          ? 'font-semibold text-gray-800 dark:text-gray-200'
          : 'font-normal text-gray-600 dark:text-gray-400',
        'hidden rounded-lg p-1 transition-all hover:bg-gray-200 dark:hover:bg-gray-800 sm:px-3 sm:py-2 md:inline-block',
      )}
    >
      <span className="capsize">{text}</span>
    </NextLink>
  )
}

export default function Container(props: any) {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), [])

  const { children, ...customMeta } = props
  const router = useRouter()
  const meta = {
    title: 'Dio Ilham Dj – Developer, creator, wizard 🧙‍♂️.',
    description: `Dio Ilham Dj – Front-end developer, Typescript enthusiast, and wizard 🧙‍♂️.`,
    image: 'https://dioilham.com/static/images/dio-banner.png',
    type: 'website',
    ...customMeta,
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta content={'#2dd4bf'} name="theme-color" />
        <meta content={'#2dd4bf'} name="theme-color" />
        <meta content={'#2dd4bf'} name="theme-color" />
        <meta content={'#2dd4bf'} name="theme-color" />
        <meta content={'#2dd4bf'} name="theme-color" />
        <link rel="canonical" href={`https://dioilham.com${router.asPath}`} />

        <meta property="og:url" content={`https://dioilham.com${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Dio Ilham Dj" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mengoding" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && <meta property="article:published_time" content={meta.date} />}
      </Head>

      <div className="flex flex-col justify-center px-8">
        <nav className="relative mx-auto flex w-full max-w-2xl items-center justify-between border-gray-200 bg-gray-50 bg-opacity-60 pt-8 pb-8  text-gray-900 dark:border-gray-700  dark:bg-gray-900 dark:text-gray-100 sm:pb-16">
          <a href="#skip" className="skip-nav">
            Skip to content
          </a>

          <div className="ml-[-0.60rem]">
            <MobileMenu />
            <NavItem href="/" text="Home" />
            {/* <NavItem href="/guestbook" text="Guestbook" /> */}
            <NavItem href="/about" text="About" />
            <NavItem href="/showcase" text="Showcase" />
            <NavItem href="/resume" text="Resume" />
            <NavItem href="/dashboard" text="Dashboard" />
            <NavItem href="/blog" text="Blog" />
            <NavItem href="/snippets" text="Snippets" />
          </div>

          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="ringte flex h-9 w-9 items-center justify-center rounded-lg bg-gray-200 ring-gray-300 transition-all hover:ring-2 dark:bg-gray-600"
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="h-5 w-5 text-gray-800 dark:text-gray-200"
              >
                {resolvedTheme === 'dark' ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </nav>
      </div>

      <main id="skip" className="flex flex-col justify-center bg-gray-50 px-8 dark:bg-gray-900">
        {children}

        <Footer />
      </main>
    </div>
  )
}
