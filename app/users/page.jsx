import getAllUsers from "@/lib/getAllUsers"
import Link from "next/link"
/** @type {import('next').Metadata} */

export const metadata = {
    title: 'Users',
    description: 'Halaman untuk data users'
}

export default async function UsersPage() {
    const usersData = await getAllUsers()

    const usersMap = (
        <div>
            {usersData.map((row, index) => (
                <div key={index}>
                    <Link href={`/users/${row.id}`}>
                        <h1>{row.name}</h1>
                    </Link>
                </div>
            ))}
            <Link href="/">Back to Home Page</Link>
        </div>
    )

    return usersMap
}
