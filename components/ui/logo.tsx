import Link from 'next/link'

export default function Logo() {
  return (
    <div className="flex items-center">
      <Link href="/" aria-label="AskSeo Online">
        <div className="flex items-center">
          <svg className="w-10 h-10 fill-current text-indigo-500" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.547 23.383l-5.924.563L6.5 6.5l5.924-.563L23.547 23.383zM15.167 9.002c0 .93-.554 1.666-1.438 1.666-.883 0-1.438-.736-1.438-1.666s.555-1.666 1.438-1.666c.884 0 1.438.736 1.438 1.666zm2.946 12.06c-.112.557-.558.938-1.284.938-.675 0-1.285-.15-1.674-.74-.87-1.127-3.17-3.863-3.17-3.863v5.322l-1.98 1.98V16.775c-2.63.384-4.616 1.848-4.616 4.225 0 2.56 2.487 4.273 5.354 4.273.87 0 1.702-.237 2.36-.736 1.26-.808 3.666-3.27 3.666-3.27zM23 14.498h-2.5v-2.5h-1v2.5H17v1h2.5v2.5h1v-2.5H23v-1z" />
          </svg>
          <span className="ml-2 text-lg font-bold tracking-wider text-indigo-500">AskSeo</span>
        </div>
      </Link>
      <div className="ml-2 text-sm font-medium text-gray-700">Online</div>
    </div>
  )
}
