import { useState, useRef, useEffect, useCallback } from 'react'
import styled from 'styled-components'

const SliderContainer = styled.div`
  position: relative;
  width: 300px;
`

const StyledInput = styled.input`
  width: 100%;
  -webkit-appearance: none;
  appearance: none;
  height: 10px;
  background: linear-gradient(to right, #6c5ce7, #a29bfe);
  border-radius: 5px;
  outline: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 24px;
    height: 24px;
    background: white;
    border: 3px solid #6c5ce7;
    border-radius: 50%;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 24px;
    height: 24px;
    background: white;
    border: 3px solid #6c5ce7;
    border-radius: 50%;
    cursor: pointer;
  }
`

const ValueLabel = styled.div<{ $left: number }>`
  position: absolute;
  top: -40px;
  left: ${({ $left }) => $left}%;
  transform: translateX(-50%);
  background: #6c5ce7;
  color: white;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  white-space: nowrap;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid #6c5ce7;
  }
`

const CustomRangeSlider = () => {
  const [value, setValue] = useState(50)
  const inputRef = useRef<HTMLInputElement>(null)
  const [labelLeft, setLabelLeft] = useState(50)

  const updateLabel = useCallback(() => {
    if (!inputRef.current) return
    const min = Number(inputRef.current.min) || 0
    const max = Number(inputRef.current.max) || 100
    const thumbWidth = 24
    const range = max - min
    const pct = ((value - min) / range) * 100
    const offset = ((value - min) / range - 0.5) * thumbWidth
    setLabelLeft(pct - (offset / inputRef.current.offsetWidth) * 100)
  }, [value])

  useEffect(() => {
    updateLabel()
    window.addEventListener('resize', updateLabel)
    return () => window.removeEventListener('resize', updateLabel)
  }, [updateLabel])

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-[#6c5ce7] to-[#a29bfe]'>
      <SliderContainer>
        <ValueLabel $left={labelLeft}>{value}</ValueLabel>
        <StyledInput
          ref={inputRef}
          type='range'
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
      </SliderContainer>
    </div>
  )
}

export default CustomRangeSlider
