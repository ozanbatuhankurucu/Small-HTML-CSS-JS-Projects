import { useState, useCallback, useEffect, useRef } from 'react'
import styled from 'styled-components'

interface Insect {
  id: number
  emoji: string
  x: number
  y: number
  rotation: number
}

const INSECT_OPTIONS = [
  { name: 'Fly', emoji: '🪰' },
  { name: 'Mosquito', emoji: '🦟' },
  { name: 'Spider', emoji: '🕷️' },
  { name: 'Roach', emoji: '🪳' }
]

const InsectEl = styled.div<{ $x: number; $y: number; $rotation: number }>`
  position: absolute;
  left: ${({ $x }) => $x}%;
  top: ${({ $y }) => $y}%;
  font-size: 40px;
  cursor: pointer;
  transform: rotate(${({ $rotation }) => $rotation}deg);
  transition: transform 0.1s;
  user-select: none;

  &:hover {
    transform: rotate(${({ $rotation }) => $rotation}deg) scale(1.2);
  }
`

const createInsect = (emoji: string): Insect => ({
  id: Date.now() + Math.random(),
  emoji,
  x: Math.random() * 85 + 5,
  y: Math.random() * 80 + 10,
  rotation: Math.random() * 360
})

const InsectCatchGame = () => {
  const [screen, setScreen] = useState<'start' | 'choose' | 'game'>('start')
  const [selectedEmoji, setSelectedEmoji] = useState('')
  const [score, setScore] = useState(0)
  const [insects, setInsects] = useState<Insect[]>([])
  const [time, setTime] = useState(0)
  const timerRef = useRef<number>()

  useEffect(() => {
    if (screen === 'game') {
      timerRef.current = window.setInterval(() => {
        setTime((prev) => prev + 1)
      }, 1000)
      return () => {
        if (timerRef.current) clearInterval(timerRef.current)
      }
    }
  }, [screen])

  const startGame = useCallback(
    (emoji: string) => {
      setSelectedEmoji(emoji)
      setScreen('game')
      setScore(0)
      setTime(0)
      setInsects([createInsect(emoji), createInsect(emoji)])
    },
    []
  )

  const catchInsect = useCallback(
    (id: number) => {
      setScore((prev) => prev + 1)
      setInsects((prev) => {
        const filtered = prev.filter((ins) => ins.id !== id)
        return [
          ...filtered,
          createInsect(selectedEmoji),
          createInsect(selectedEmoji)
        ]
      })
    },
    [selectedEmoji]
  )

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60)
    const secs = s % 60
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  if (screen === 'start') {
    return (
      <div className='min-h-screen flex flex-col items-center justify-center bg-[#516dff] text-white'>
        <h1 className='text-5xl font-bold mb-4'>Catch The Insect</h1>
        <p className='text-lg mb-8 text-white/80'>A fun little game</p>
        <button
          type='button'
          className='px-8 py-3 bg-white text-[#516dff] border-none rounded-lg cursor-pointer text-lg font-bold hover:bg-gray-100 transition-colors'
          onClick={() => setScreen('choose')}>
          Play Game
        </button>
      </div>
    )
  }

  if (screen === 'choose') {
    return (
      <div className='min-h-screen flex flex-col items-center justify-center bg-[#516dff] text-white'>
        <h2 className='text-3xl font-bold mb-8'>What is yourستخفقا?</h2>
        <p className='mb-8 text-lg'>Choose an insect to catch</p>
        <div className='flex gap-6'>
          {INSECT_OPTIONS.map(({ name, emoji }) => (
            <button
              key={name}
              type='button'
              className='flex flex-col items-center gap-2 bg-white/10 p-6 rounded-xl cursor-pointer border-2 border-transparent hover:border-white transition-colors'
              onClick={() => startGame(emoji)}>
              <span className='text-5xl'>{emoji}</span>
              <span className='text-sm'>{name}</span>
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-[#516dff] relative overflow-hidden'>
      <div className='flex justify-between items-center p-4 bg-black/20'>
        <span className='text-white text-lg font-bold'>
          Score: {score}
        </span>
        <span className='text-white text-lg font-mono'>
          {formatTime(time)}
        </span>
      </div>

      {insects.map((insect) => (
        <InsectEl
          key={insect.id}
          $x={insect.x}
          $y={insect.y}
          $rotation={insect.rotation}
          onClick={() => catchInsect(insect.id)}>
          {insect.emoji}
        </InsectEl>
      ))}

      {score > 19 && (
        <div className='absolute inset-0 bg-black/80 flex items-center justify-center'>
          <div className='text-center text-white'>
            <h2 className='text-3xl font-bold mb-4'>
              Are you still going?
            </h2>
            <p className='text-lg'>
              You caught {score} insects in {formatTime(time)}!
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default InsectCatchGame
