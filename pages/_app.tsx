import 'styles/global.css'

import { ThemeProvider } from 'next-themes'
// import { SessionProvider } from 'next-auth/react'
import { Inter } from '@next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'

const interVariable = Inter()

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <ThemeProvider attribute="class">
      <main className={interVariable.className}>
        <Component {...pageProps} />
        <Analytics />

        <Script
          data-website-id="2a4410ee-2d77-42a7-ae81-88244b97e73b"
          src="https://umami-production-79bd.up.railway.app/script.js"
          strategy="lazyOnload"
        />

        {/* <script
          async
          src="https://umami-production-79bd.up.railway.app/script.js"
          data-website-id="2a4410ee-2d77-42a7-ae81-88244b97e73b"
        ></script> */}
      </main>
    </ThemeProvider>
  )
}
