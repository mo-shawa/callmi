import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex flex-1 flex-col items-center justify-center px-4 text-center">
        <h1 className="text-6xl font-bold">Callmi</h1>

        <p className="mt-3 text-2xl">Get paid for your time, every time.</p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <Link
            href="/signup"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Sign Up &rarr;</h3>
            <p className="mt-4 text-xl">
              Create an account and start earning money for your time.
            </p>
          </Link>

          <Link
            href="/login"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Login &rarr;</h3>
            <p className="mt-4 text-xl">Already have an account? Login here.</p>
          </Link>

          <Link
            href="/about"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">About &rarr;</h3>
            <p className="mt-4 text-xl">Learn more about Callmi.</p>
          </Link>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center"
          href="https://callmi.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/callmi.svg" alt="Callmi" className="ml-2 h-4" />
        </a>
      </footer>
    </div>
  )
}
