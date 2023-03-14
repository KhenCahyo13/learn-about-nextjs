import React from 'react'

export default async function getUser(userId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

  if (!response.ok) throw new Error('Fetching data user gagal')

  return response.json()
}
