import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()

  return {
    props: {
      users: data
    }
  }
}

export default function Home({ users }) {
  return (
    <main>
      <h1>SSR - SSG - ISR</h1>
      <Link href="/users">Users</Link>

      <h1>Data Users</h1>
      <div>
        {users?.map((row) => (
          <div key={row.id}>
            <h1>{row.name}</h1>
          </div>
        ))}
      </div>

    </main>
  )
}
