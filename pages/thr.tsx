import Container from 'components/Container'
import Image from 'next/image'
import Countdown, { CountdownRenderProps } from 'react-countdown'

const JAM_5_30_SUBUH = 1682289000000

const rendererCountdown = ({
  api,
  completed,
  formatted: { hours, minutes, seconds },
}: CountdownRenderProps) => {
  return completed ? '' : `(${hours}:${minutes}:${seconds} lagi)`
}

export default function ThrPage() {
  return (
    <Container
      title="THR – Dio Ilham Dj"
      description="Thoughts on the software industry, programming, tech, videography, music, and my personal life."
    >
      <div className="mx-auto mb-16 flex max-w-2xl flex-col items-start justify-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          THR
          <br />
          <p className="mb-4 text-xl text-gray-600 dark:text-gray-400 md:text-2xl">
            <Countdown date={JAM_5_30_SUBUH} renderer={rendererCountdown} />
          </p>
        </h1>

        <p className="mb-4 text-gray-600 dark:text-gray-400">
          Hahaha ikutin aja cara di bawah, ez, siapa cepat dia dapet yes:
        </p>

        <div className="mb-4 text-gray-600 dark:text-gray-400">
          <ol className="list-inside list-decimal space-y-4">
            <li className="">
              Berlaku mulai 24 April 2023, jam 05.00 pagi, mungkin ga semua kebagian karena limited
              yes (04.59 - ❌ ; 05.00 - ✅)
              <br />
              Pas tuh, abis subuhan trus buka IG, yakan? Kalo ga subuhan juga yaudah sih.
            </li>
            <li className="">
              Reply story yg barusan, <strong className='dark:text-gray-300 text-gray-700'><i>reply-nya mulai jam 5, kalo sebelum itu ga diitung ok</i></strong>, isinya kurang lebih gini
              <br />
              (pokoknya nomornya dipisah biar gampang copas-nya):
              <div className="">
                <Image
                  src="/static/images/contoh-thr-1.webp"
                  alt="Contoh format DM THR"
                  width={200}
                  height={200}
                  className="aspect-video rounded object-contain"
                />
              </div>
            </li>
            <li className="">
              Kalo bisa Gopay, Ovo, Shopeepay, or BCA. Biar gabayar 6500+++ buat transfernya :)
            </li>
            <li className="">
              Yaudah, selesai, tungguin aja,
              <br />
              InsyaAllah Anda beruntung dapet rejeki di pagi hari ygy
            </li>
          </ol>
        </div>
      </div>
    </Container>
  )
}
