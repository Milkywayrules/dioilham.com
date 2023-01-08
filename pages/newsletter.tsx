import Container from 'components/Container'
import Subscribe from 'components/Subscribe'

export default function Newsletter() {
  return (
    <Container
      title="Newsletter – Dio Ilham"
      description="Thoughts on the software industry, programming, tech, videography, music, and my personal life."
    >
      <div className="mx-auto mb-16 flex max-w-2xl flex-col items-start justify-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          Newsletter
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          My newsletter provides a behind-the-scenes look into what I'm working on and writing
          about. I frequently share some of my favorite articles I've read, as well as anything
          fascinating about technology.
        </p>
        <Subscribe />
      </div>
    </Container>
  )
}
