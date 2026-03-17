import { useState, useMemo } from 'react'
import styled from 'styled-components'

const ROWS = 4
const COLS = 4

const Box = styled.div<{
  $bgX: number
  $bgY: number
  $scattered: boolean
  $delay: number
}>`
  width: 125px;
  height: 125px;
  background-image: url('https://media.giphy.com/media/EZqwsBSrmBE2I/giphy.gif');
  background-size: ${COLS * 125}px ${ROWS * 125}px;
  background-position: ${({ $bgX, $bgY }) => `-${$bgX}px -${$bgY}px`};
  transition: transform 0.4s ease ${({ $delay }) => $delay}ms;
  transform: ${({ $scattered }) =>
    $scattered
      ? `rotateZ(${Math.random() * 360}deg) translateX(${Math.random() * 200 - 100}px) translateY(${Math.random() * 200 - 100}px)`
      : 'rotateZ(0) translateX(0) translateY(0)'};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.1);
  }
`

const BackgroundBoxes = () => {
  const [scattered, setScattered] = useState(false)

  const boxes = useMemo(
    () =>
      Array.from({ length: ROWS * COLS }, (_, i) => ({
        row: Math.floor(i / COLS),
        col: i % COLS,
        delay: i * 30
      })),
    []
  )

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-[#fafafa] gap-8'>
      <button
        type='button'
        className='px-6 py-3 bg-[#f9ca24] text-[#333] border-none rounded-md cursor-pointer text-sm font-bold hover:bg-[#f0b90b] transition-colors shadow-md'
        onClick={() => setScattered((prev) => !prev)}>
        Magic {scattered ? '🎩' : '🪄'}
      </button>
      <div
        className='grid gap-0'
        style={{
          gridTemplateColumns: `repeat(${COLS}, 125px)`,
          gridTemplateRows: `repeat(${ROWS}, 125px)`
        }}>
        {boxes.map(({ row, col, delay }, i) => (
          <Box
            key={i}
            $bgX={col * 125}
            $bgY={row * 125}
            $scattered={scattered}
            $delay={delay}
          />
        ))}
      </div>
    </div>
  )
}

export default BackgroundBoxes
