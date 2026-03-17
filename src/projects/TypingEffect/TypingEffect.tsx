import { useState, useEffect, useRef, useCallback } from 'react'
import styled, { keyframes } from 'styled-components'

const blink = keyframes`
  50% { border-color: transparent; }
`

const TypedText = styled.span`
  border-right: 2px solid white;
  padding-right: 4px;
  animation: ${blink} 0.7s step-end infinite;
`

const TEXT = "I love programming..."

const TypingEffect = () => {
  const [displayText, setDisplayText] = useState('')
  const [speed, setSpeed] = useState(100)
  const indexRef = useRef(0)
  const timeoutRef = useRef<number>()

  const type = useCallback(() => {
    if (indexRef.current <= TEXT.length) {
      setDisplayText(TEXT.slice(0, indexRef.current))
      indexRef.current += 1
      timeoutRef.current = window.setTimeout(type, speed)
    } else {
      indexRef.current = 0
      timeoutRef.current = window.setTimeout(type, speed + 500)
    }
  }, [speed])

  useEffect(() => {
    indexRef.current = 0
    type()
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    }
  }, [type])

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-[#1b1b32] text-white'>
      <p className='text-sm tracking-wider mb-2 text-gray-400'>
        I am a
      </p>
      <h1 className='text-4xl font-bold mb-8'>
        <TypedText>{displayText}</TypedText>
      </h1>
      <div className='flex items-center gap-3'>
        <label htmlFor='speed-slider' className='text-sm text-gray-400'>
          Speed:
        </label>
        <input
          id='speed-slider'
          type='range'
          min='20'
          max='300'
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className='cursor-pointer'
        />
        <span className='text-sm text-gray-400'>{speed}ms</span>
      </div>
    </div>
  )
}

export default TypingEffect
