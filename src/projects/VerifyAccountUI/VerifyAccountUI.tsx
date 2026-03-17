import React, { useRef, useCallback } from 'react'
import styled from 'styled-components'

const CodeInput = styled.input`
  width: 60px;
  height: 70px;
  border: 2px solid #eee;
  border-radius: 8px;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  outline: none;
  transition: border-color 0.2s;
  caret-color: #3498db;

  &:focus {
    border-color: #3498db;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

const CODE_LENGTH = 6

const VerifyAccountUI = () => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  const handleInput = useCallback(
    (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value
      if (val.length === 1 && index < CODE_LENGTH - 1) {
        inputRefs.current[index + 1]?.focus()
      }
    },
    []
  )

  const handleKeyDown = useCallback(
    (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
      if (
        e.key === 'Backspace' &&
        !e.currentTarget.value &&
        index > 0
      ) {
        inputRefs.current[index - 1]?.focus()
      }
    },
    []
  )

  return (
    <div className='min-h-screen flex items-center justify-center bg-[#fbfbfb]'>
      <div className='bg-white rounded-lg shadow-lg p-10 text-center max-w-lg'>
        <h2 className='text-2xl font-bold mb-2'>Verify Your Account</h2>
        <p className='text-gray-500 mb-2'>
          We emailed you the six digit code to cool_guy@email.com
        </p>
        <p className='text-gray-500 mb-8'>
          Enter the code below to confirm your email address.
        </p>
        <div className='flex gap-3 justify-center mb-8'>
          {Array.from({ length: CODE_LENGTH }, (_, i) => (
            <CodeInput
              key={i}
              ref={(el) => {
                inputRefs.current[i] = el
              }}
              type='number'
              min={0}
              max={9}
              maxLength={1}
              onChange={(e) => handleInput(i, e)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              onFocus={(e) => e.target.select()}
            />
          ))}
        </div>
        <small className='text-gray-400'>
          This is design only. We didn&apos;t actually send you an email as we
          don&apos;t have your email, right?
        </small>
      </div>
    </div>
  )
}

export default VerifyAccountUI
