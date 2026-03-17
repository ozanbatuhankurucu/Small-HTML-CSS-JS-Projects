import { useState, useEffect, useMemo } from 'react'

interface User {
  name: string
  location: string
  picture: string
}

const LiveUserFilter = () => {
  const [users, setUsers] = useState<User[]>([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://randomuser.me/api/?results=50')
        const data = await res.json()
        const mapped: User[] = data.results.map(
          (u: {
            name: { first: string; last: string }
            location: { city: string; country: string }
            picture: { large: string }
          }) => ({
            name: `${u.name.first} ${u.name.last}`,
            location: `${u.location.city}, ${u.location.country}`,
            picture: u.picture.large
          })
        )
        setUsers(mapped)
      } finally {
        setLoading(false)
      }
    }
    fetchUsers()
  }, [])

  const filtered = useMemo(() => {
    const term = search.toLowerCase()
    if (!term) return users
    return users.filter(
      (u) =>
        u.name.toLowerCase().includes(term) ||
        u.location.toLowerCase().includes(term)
    )
  }, [users, search])

  return (
    <div className='min-h-screen flex items-start justify-center bg-[#f8f9fd] pt-16'>
      <div className='w-[400px] bg-white rounded-lg shadow-lg overflow-hidden'>
        <div className='bg-[#3e57db] p-6'>
          <h2 className='text-white text-xl font-bold mb-3'>Live User Filter</h2>
          <p className='text-blue-200 text-sm mb-3'>Search by name and/or location</p>
          <input
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search...'
            className='w-full px-4 py-2 rounded border-none outline-none text-sm'
          />
        </div>
        <div className='max-h-[500px] overflow-y-auto'>
          {loading && (
            <div className='p-8 text-center text-gray-500'>Loading...</div>
          )}
          {!loading && filtered.length === 0 && (
            <div className='p-8 text-center text-gray-500'>No results</div>
          )}
          {!loading && filtered.length > 0 && (
            <ul className='list-none p-0 m-0'>
              {filtered.map((user, i) => (
                <li
                  key={i}
                  className='flex items-center gap-4 p-4 border-b border-gray-100'>
                  <img
                    src={user.picture}
                    alt={user.name}
                    className='w-12 h-12 rounded-full object-cover'
                  />
                  <div>
                    <h4 className='font-medium text-sm'>{user.name}</h4>
                    <p className='text-gray-500 text-xs'>{user.location}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default LiveUserFilter
