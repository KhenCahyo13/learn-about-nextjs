import getUser from '@/lib/getUser'
import React from 'react'

export async function generateMetadata({ params: { userId } }) {
    const userData = getUser(userId)
    const [user] = await Promise.all([userData])

    return { 
        title: user.name,
        description: `Ini halaman detail dari user ${user.name}` 
    }
}

export default async function UserPage({ params: { userId } }) {
    const userData = getUser(userId)

    const [user] = await Promise.all([userData])

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  )
}
