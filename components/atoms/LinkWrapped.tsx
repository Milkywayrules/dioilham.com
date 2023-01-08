import classNames from 'classnames'
import Link from 'next/link'
import { HTMLAttributeAnchorTarget, ReactNode } from 'react'

type Mode = 'prose' | 'text' | 'image' | 'see-more'

interface Props {
  children: ReactNode | ReactNode[]
  href: string
  className?: string
  target?: HTMLAttributeAnchorTarget
  replaceClassName?: boolean
  mode?: Mode
  rel?: string
  tabIndex?: number
}

export default function LinkWrapped({
  children,
  href,
  className: classNameProp,
  target,
  rel,
  mode = 'prose',
  replaceClassName = false,
  tabIndex,
}: Props) {
  const className = makeClassName(mode)

  const cn = replaceClassName ? classNameProp : classNames(className, classNameProp)

  return (
    <Link href={href} className={cn} target={target} rel={rel} tabIndex={tabIndex}>
      {children}
    </Link>
  )
}

function makeClassName(mode: Mode) {
  let className = ''

  if (mode === 'image') {
    className =
      'focusable rounded-md hover:shadow-lg dark:hover:shadow-teal-700 hover:shadow-teal-200'

    return className
  }

  if (mode === 'text') {
    className = 'focusable text-gray-500 transition hover:text-teal-400 dark:hover:text-teal-300'
  } else if (mode === 'prose') {
    className =
      'focusable bg-teal-300/20 !text-teal-700 hover:bg-teal-300/40 dark:bg-teal-300/10 dark:!text-teal-300 dark:hover:bg-teal-300/30'
  } else if (mode === 'see-more') {
    className =
      'focusable flex h-6 items-center leading-7 text-gray-600 transition-all hover:text-teal-400 dark:text-gray-400 dark:hover:text-teal-300'
  } else {
    throw new Error('Invalid LinkWrapped mode.')
  }

  className += ' px-1.5 py-0.5 rounded no-underline outline-none'

  return className
}
