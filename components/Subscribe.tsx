import { useState, useRef } from 'react'
import useSWR from 'swr'

import fetcher from 'lib/fetcher'
import { Form, FormState, Subscribers } from 'lib/types'
// import SuccessMessage from 'components/SuccessMessage'
// import ErrorMessage from 'components/ErrorMessage'
import LoadingSpinner from 'components/LoadingSpinner'

export default function Subscribe() {
  const [form, setForm] = useState<FormState>({ state: Form.Initial })
  const inputEl = useRef(null)
  const { data } = useSWR<Subscribers>('/api/subscribers', fetcher)
  const subscriberCount = new Number(data?.count)

  const subscribe = async e => {
    e.preventDefault()
    setForm({ state: Form.Loading })

    const email = inputEl.current.value
    const res = await fetch(`/api/subscribe?email=${email}`, {
      method: 'POST',
    })

    const { error } = await res.json()
    if (error) {
      setForm({
        state: Form.Error,
        message: error,
      })
      return
    }

    inputEl.current.value = ''
    setForm({
      state: Form.Success,
      message: `Hooray! You're now on the list.`,
    })
  }

  return (
    <div className="my-4 w-full rounded border border-blue-200 bg-blue-50 p-6 dark:border-gray-800 dark:bg-blue-opaque">
      <p className="text-lg font-bold text-gray-900 dark:text-gray-100 md:text-xl">
        Subscribe to the newsletter
      </p>

      <p className="my-1 text-gray-800 dark:text-gray-200">
        Get emails from me about web development, tech, and early access to new articles.
      </p>

      <form className="relative my-4" onSubmit={subscribe}>
        <input
          ref={inputEl}
          aria-label="Email for newsletter"
          placeholder="dio@cto.com"
          type="email"
          autoComplete="email"
          required
          className="focusable mt-1 block w-full rounded-md border-gray-300 bg-white px-4 py-2 pr-32 text-gray-900 focus:border-blue-500 focus:ring-blue-500 disabled:cursor-not-allowed dark:bg-gray-800 dark:text-gray-100"
          disabled
        />

        <button
          className="focusable absolute right-1 top-1 flex h-8 w-36 items-center justify-center rounded bg-gray-100 px-4 pt-1 font-medium text-gray-900 disabled:cursor-not-allowed dark:bg-gray-700 dark:text-gray-100"
          type="submit"
          disabled
        >
          {form.state === Form.Loading ? <LoadingSpinner /> : 'Coming soon'}
        </button>
      </form>

      {/* {form.state === Form.Error ? (
        <ErrorMessage>{form.message}</ErrorMessage>
      ) : form.state === Form.Success ? (
        <SuccessMessage>{form.message}</SuccessMessage>
      ) : (
        <p className="text-sm text-gray-800 dark:text-gray-200">
          {`${subscriberCount > 0 ? subscriberCount.toLocaleString() : '-'} subscribers – `}
          <a
            href="https://www.getrevue.co/profile/dioilham"
            target="_blank"
            rel="noopener noreferrer"
          >
            View all issues
          </a>
        </p>
      )} */}
    </div>
  )
}
