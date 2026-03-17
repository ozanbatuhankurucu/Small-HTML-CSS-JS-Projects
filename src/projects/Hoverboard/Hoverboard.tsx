import { useCallback, useState } from 'react'
import styled from 'styled-components'

const TOTAL_SQUARES = 400

const COLORS = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']

const getRandomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)]

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 440px;
  gap: 4px;
`

const Square = styled.div<{ $color: string | null }>`
  width: 16px;
  height: 16px;
  background-color: ${({ $color }) => $color || '#1d1d1d'};
  box-shadow: ${({ $color }) =>
    $color ? `0 0 2px ${$color}, 0 0 10px ${$color}` : 'none'};
  border-radius: 1px;
  transition: background-color 2s ease, box-shadow 2s ease;
  cursor: pointer;
`

const Hoverboard = () => {
  const [colors, setColors] = useState<(string | null)[]>(
    Array(TOTAL_SQUARES).fill(null)
  )

  const handleMouseOver = useCallback((index: number) => {
    setColors((prev) => {
      const next = [...prev]
      next[index] = getRandomColor()
      return next
    })
  }, [])

  const handleMouseOut = useCallback((index: number) => {
    setTimeout(() => {
      setColors((prev) => {
        const next = [...prev]
        next[index] = null
        return next
      })
    }, 500)
  }, [])

  return (
    <div className='min-h-screen flex items-center justify-center bg-[#111]'>
      <Container>
        {colors.map((color, i) => (
          <Square
            key={i}
            $color={color}
            onMouseOver={() => handleMouseOver(i)}
            onMouseOut={() => handleMouseOut(i)}
          />
        ))}
      </Container>
    </div>
  )
}

export default Hoverboard
