import { LinkWrapped } from 'components/atoms'
import Container from 'components/Container'

export default function ComingSoon() {
  return (
    <Container title="Coming Soon – Dio Ilham Dj">
      <div className="mx-auto mb-16 mt-1 flex max-w-2xl flex-col items-start justify-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          Coming Very Soon 🤗
        </h1>

        <p className="mb-8 text-gray-600 dark:text-gray-400">
          Thank you for being curious about my personal website, this page and all of its contents
          are still being curated and developed. Come back in a bit, if you don't mind 😊
        </p>

        <LinkWrapped
          mode="text"
          href="/"
          className="mx-auto w-64 rounded-md bg-gray-200 p-1 text-center font-bold text-black dark:bg-gray-800 dark:text-white sm:p-4"
        >
          Return Home
        </LinkWrapped>
      </div>
    </Container>
  )
}
