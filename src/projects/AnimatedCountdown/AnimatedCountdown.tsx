import { useState, useEffect, useCallback } from 'react'
import styled, { keyframes } from 'styled-components'

const goIn = keyframes`
  0% { transform: scale(0) rotate(180deg); opacity: 0; }
  50% { transform: scale(1) rotate(0deg); opacity: 1; }
  100% { transform: scale(0) rotate(-180deg); opacity: 0; }
`

const fadeIn = keyframes`
  0% { transform: scale(0); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1b1b32;
  flex-direction: column;
`

const NumberDisplay = styled.span<{ $animating: boolean }>`
  font-size: 80px;
  font-weight: bold;
  color: #3498db;
  animation: ${({ $animating }) => ($animating ? goIn : 'none')} 1s ease-in-out;
`

const GoText = styled.h2`
  font-size: 80px;
  font-weight: bold;
  color: #2ecc71;
  animation: ${fadeIn} 0.5s ease;
`

const AnimatedCountdown = () => {
  const [count, setCount] = useState(3)
  const [finished, setFinished] = useState(false)
  const [animating, setAnimating] = useState(true)

  const startCountdown = useCallback(() => {
    setCount(3)
    setFinished(false)
    setAnimating(true)
  }, [])

  useEffect(() => {
    if (finished) return

    const timer = setTimeout(() => {
      if (count > 1) {
        setAnimating(false)
        setTimeout(() => {
          setCount((prev) => prev - 1)
          setAnimating(true)
        }, 50)
      } else {
        setFinished(true)
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [count, finished])

  if (finished) {
    return (
      <Container>
        <GoText>GO!</GoText>
        <button
          type='button'
          className='mt-8 px-8 py-3 bg-[#3498db] text-white border-none rounded text-lg cursor-pointer hover:opacity-90 transition-opacity'
          onClick={startCountdown}>
          Replay
        </button>
      </Container>
    )
  }

  return (
    <Container>
      <NumberDisplay key={count} $animating={animating}>
        {count}
      </NumberDisplay>
    </Container>
  )
}

export default AnimatedCountdown
