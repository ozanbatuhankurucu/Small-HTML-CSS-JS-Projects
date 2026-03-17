import { useState } from 'react'

const MAX_LENGTH = 20

const PasswordStrengthBackground = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const blurAmount = MAX_LENGTH - password.length
  const blurPx = Math.max(0, (blurAmount / MAX_LENGTH) * 20)

  return (
    <div className='relative min-h-screen overflow-hidden'>
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)',
          filter: `blur(${blurPx}px)`,
          transition: 'filter 0.3s ease',
          transform: 'scale(1.1)'
        }}
      />
      <div className='relative z-10 min-h-screen flex items-center justify-center'>
        <div className='bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-10 w-[400px]'>
          <h1 className='text-2xl font-bold text-center mb-8'>
            Image Password Strength
          </h1>
          <div className='mb-4'>
            <label
              htmlFor='email-input'
              className='block text-sm font-medium text-gray-700 mb-1'>
              Email:
            </label>
            <input
              id='email-input'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter Email'
              className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#3498db] transition-colors'
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='password-input'
              className='block text-sm font-medium text-gray-700 mb-1'>
              Password:
            </label>
            <input
              id='password-input'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter Password'
              className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#3498db] transition-colors'
            />
          </div>
          <button
            type='button'
            className='w-full py-2 bg-[#1b1b32] text-white border-none rounded cursor-pointer text-sm font-bold hover:bg-[#2d2d5e] transition-colors'>
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default PasswordStrengthBackground
