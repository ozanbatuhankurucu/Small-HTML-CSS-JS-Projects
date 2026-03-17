import React, { useState, useCallback } from 'react'
import styled, { keyframes } from 'styled-components'

const grow = keyframes`
  0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
  50% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  100% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
`

const HeartIcon = styled.div<{ $x: number; $y: number }>`
  position: absolute;
  left: ${({ $x }) => $x}px;
  top: ${({ $y }) => $y}px;
  font-size: 40px;
  animation: ${grow} 0.6s ease forwards;
  pointer-events: none;
  z-index: 10;
`

interface Heart {
  id: number
  x: number
  y: number
}

const DoubleClickHeart = () => {
  const [likes, setLikes] = useState(0)
  const [hearts, setHearts] = useState<Heart[]>([])

  const handleDoubleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const id = Date.now()

      setLikes((prev) => prev + 1)
      setHearts((prev) => [...prev, { id, x, y }])

      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== id))
      }, 600)
    },
    []
  )

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-[#1b1b32]'>
      <h3 className='text-white text-lg mb-4'>
        Double click the image to <span className='text-red-500'>&#10084;</span>{' '}
        it
      </h3>
      <div
        className='relative w-[440px] h-[440px] rounded-lg overflow-hidden cursor-pointer select-none'
        onDoubleClick={handleDoubleClick}>
        <img
          src='https://images.unsplash.com/photo-1504006833117-8886a355efbf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
          alt='landscape'
          className='w-full h-full object-cover'
          draggable={false}
        />
        {hearts.map((heart) => (
          <HeartIcon key={heart.id} $x={heart.x} $y={heart.y}>
            &#10084;
          </HeartIcon>
        ))}
      </div>
      <p className='text-white mt-4 text-xl'>
        <span className='text-red-500'>&#10084;</span> {likes} Likes
      </p>
    </div>
  )
}

export default DoubleClickHeart
