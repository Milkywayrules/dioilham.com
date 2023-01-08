import { LinkWrapped } from 'components/atoms'
import Container from 'components/Container'
import { ReactNode } from 'react'

interface BtnProps {
  children: ReactNode
  href: string
}

function Btn({ children, href }: BtnProps) {
  return (
    <LinkWrapped
      mode="text"
      href={href}
      className="group w-full rounded-md bg-gray-200 text-center dark:bg-gray-800 sm:p-4"
    >
      {children}
    </LinkWrapped>
  )
}

export default function ResumePage() {
  const updatedAt = new Date(1665668198545).toLocaleString() // 10/13/2022, 8:36:38 PM

  return (
    <Container title="Resume / CV – Dio Ilham" description="Get Dio Ilham's latest resume and CV.">
      <div className="mx-auto w-full max-w-2xl">
        <div className="mb-16 flex flex-col items-start justify-center">
          <h1 className="text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
            Resume / CV 📃
          </h1>

          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Here is my latest resume / cv written on English & Indonesian 🚀
          </p>

          <div className="mt-8 flex w-full flex-row gap-4">
            <Btn href="/resume/dl-with-certificates">
              <span className="font-semibold text-gray-700 group-hover:text-teal-300 dark:text-gray-200">
                Download
              </span>
              <br />
              <i className="text-gray-300 dark:text-gray-500">with certificates</i>
              <br />
              <span className="text-gray-300 dark:text-gray-500">(.pdf, 1.53 MB)</span>
            </Btn>

            <Btn href="/resume/dl-without-certificates">
              <span className="font-semibold text-gray-700 group-hover:text-teal-300 dark:text-gray-200">
                Download
              </span>
              <br />
              <i className="text-gray-300 dark:text-gray-500">
                with<span className="underline underline-offset-4">out</span> certificates
              </i>
              <br />
              <span className="text-gray-300 dark:text-gray-500">(.pdf, 154 KB)</span>
            </Btn>
          </div>

          <p className="mt-8 text-gray-300 dark:text-gray-500">Last update: {updatedAt}</p>

          <div className="mt-12 flex flex-col text-gray-300 dark:text-gray-500">
            <p className="">Click Gdrive links below if the above button didn't work</p>

            <div className="mt-2 flex">
              <LinkWrapped
                mode="text"
                href="https://drive.google.com/file/d/1cZLQ2CJesFsxqk0Yk9LE7p7b2u4-eJve/view?usp=sharing"
                target="_blank"
                className="!underline underline-offset-4"
              >
                with certificates
              </LinkWrapped>
            </div>

            <div className="mt-1 flex">
              <LinkWrapped
                mode="text"
                href="https://drive.google.com/file/d/1fp4enOQE5wI41y0OjEPPvgkrb8dO1LAP/view?usp=sharing"
                target="_blank"
                className="!underline underline-offset-4"
              >
                without certificates
              </LinkWrapped>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
