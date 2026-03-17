import { useState, useCallback } from 'react'

const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz'
const NUMBERS = '0123456789'
const SYMBOLS = '!@#$%^&*()_+-=[]{}|;:,.<>?'

const PasswordGenerator = () => {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(20)
  const [hasUpper, setHasUpper] = useState(true)
  const [hasLower, setHasLower] = useState(true)
  const [hasNumbers, setHasNumbers] = useState(true)
  const [hasSymbols, setHasSymbols] = useState(true)
  const [copied, setCopied] = useState(false)

  const generatePassword = useCallback(() => {
    let chars = ''
    if (hasUpper) chars += UPPERCASE
    if (hasLower) chars += LOWERCASE
    if (hasNumbers) chars += NUMBERS
    if (hasSymbols) chars += SYMBOLS

    if (!chars) {
      setPassword('')
      return
    }

    let result = ''
    for (let i = 0; i < length; i += 1) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    setPassword(result)
    setCopied(false)
  }, [length, hasUpper, hasLower, hasNumbers, hasSymbols])

  const copyToClipboard = useCallback(() => {
    if (!password) return
    navigator.clipboard.writeText(password)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [password])

  return (
    <div className='min-h-screen flex items-center justify-center bg-[#3b3b98]'>
      <div className='bg-[#23235b] text-white p-8 rounded-lg shadow-lg w-[400px]'>
        <h2 className='text-center text-xl font-bold mb-6'>
          Password Generator
        </h2>

        <div className='flex items-center justify-between bg-[#1a1a4e] p-3 rounded mb-4'>
          <span className='text-lg font-mono truncate mr-2'>
            {password || 'Click Generate'}
          </span>
          <button
            type='button'
            className='text-[#3498db] hover:text-[#2980b9] transition-colors text-sm shrink-0'
            onClick={copyToClipboard}>
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>

        <div className='flex justify-between items-center mb-4'>
          <label htmlFor='password-length' className='text-sm'>
            Password Length
          </label>
          <input
            id='password-length'
            type='number'
            min={4}
            max={50}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className='w-16 bg-[#1a1a4e] text-white border-none p-2 rounded text-center text-sm'
          />
        </div>

        {[
          { label: 'Include Uppercase', checked: hasUpper, set: setHasUpper },
          { label: 'Include Lowercase', checked: hasLower, set: setHasLower },
          {
            label: 'Include Numbers',
            checked: hasNumbers,
            set: setHasNumbers
          },
          { label: 'Include Symbols', checked: hasSymbols, set: setHasSymbols }
        ].map(({ label, checked, set }) => (
          <div key={label} className='flex justify-between items-center mb-3'>
            <label className='text-sm'>{label}</label>
            <input
              type='checkbox'
              checked={checked}
              onChange={(e) => set(e.target.checked)}
              className='w-5 h-5 cursor-pointer accent-[#3498db]'
            />
          </div>
        ))}

        <button
          type='button'
          className='w-full py-3 bg-[#3498db] text-white border-none rounded cursor-pointer text-sm font-bold hover:bg-[#2980b9] transition-colors mt-4'
          onClick={generatePassword}>
          Generate Password
        </button>
      </div>
    </div>
  )
}

export default PasswordGenerator
