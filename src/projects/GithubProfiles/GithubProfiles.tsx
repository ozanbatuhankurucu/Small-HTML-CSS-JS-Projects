import React, { useState, useCallback } from 'react'
import axios from 'axios'

interface GithubUser {
  login: string
  avatar_url: string
  name: string | null
  bio: string | null
  followers: number
  following: number
  public_repos: number
}

interface Repo {
  id: number
  name: string
  html_url: string
}

const GithubProfiles = () => {
  const [username, setUsername] = useState('')
  const [user, setUser] = useState<GithubUser | null>(null)
  const [repos, setRepos] = useState<Repo[]>([])
  const [error, setError] = useState('')

  const searchUser = useCallback(async () => {
    if (!username.trim()) return
    setError('')
    try {
      const { data } = await axios.get<GithubUser>(
        `https://api.github.com/users/${username}`
      )
      setUser(data)
      const repoRes = await axios.get<Repo[]>(
        `https://api.github.com/users/${username}/repos?sort=created&per_page=5`
      )
      setRepos(repoRes.data)
    } catch {
      setUser(null)
      setRepos([])
      setError('No profile with this username')
    }
  }, [username])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    searchUser()
  }

  return (
    <div className='min-h-screen flex flex-col items-center bg-[#2a2a72] pt-20'>
      <form onSubmit={handleSubmit} className='mb-8 w-[400px]'>
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Search a Github User'
          className='w-full px-4 py-3 rounded-lg bg-[#4c2885] text-white border-none outline-none text-base placeholder-gray-400'
        />
      </form>

      {error && (
        <div className='bg-[#4c2885] rounded-xl p-8 text-center w-[400px]'>
          <p className='text-white text-lg'>{error}</p>
        </div>
      )}

      {user && (
        <div className='bg-[#4c2885] rounded-xl p-8 flex gap-6 w-[500px]'>
          <img
            src={user.avatar_url}
            alt={user.login}
            className='w-[150px] h-[150px] rounded-full border-4 border-[#2a2a72]'
          />
          <div className='flex-1'>
            <h2 className='text-white text-xl font-bold'>
              {user.name || user.login}
            </h2>
            {user.bio && (
              <p className='text-gray-300 text-sm mt-1 mb-3'>{user.bio}</p>
            )}
            <div className='flex gap-4 mb-4'>
              <span className='text-gray-300 text-sm'>
                <strong className='text-white'>{user.followers}</strong>{' '}
                Followers
              </span>
              <span className='text-gray-300 text-sm'>
                <strong className='text-white'>{user.following}</strong>{' '}
                Following
              </span>
              <span className='text-gray-300 text-sm'>
                <strong className='text-white'>{user.public_repos}</strong>{' '}
                Repos
              </span>
            </div>
            <div className='flex flex-wrap gap-2'>
              {repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-3 py-1 bg-[#2a2a72] text-white rounded text-xs no-underline hover:bg-[#1a1a52] transition-colors'>
                  {repo.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default GithubProfiles
