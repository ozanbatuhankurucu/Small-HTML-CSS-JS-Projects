import { useState } from 'react'
import styled from 'styled-components'

const TOTAL_STEPS = 4

const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-bottom: 30px;
  max-width: 100%;
  width: 350px;
`

const ProgressBar = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 4px;
  width: 100%;
  background-color: #e0e0e0;
  z-index: 0;
`

const ProgressBarFill = styled.div<{ $width: number }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${({ $width }) => $width}%;
  background-color: #3498db;
  transition: width 0.4s ease;
`

const Circle = styled.div<{ $active: boolean }>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ $active }) => ($active ? '#3498db' : '#fff')};
  color: ${({ $active }) => ($active ? '#fff' : '#999')};
  border: 3px solid ${({ $active }) => ($active ? '#3498db' : '#e0e0e0')};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  z-index: 1;
  transition: 0.4s ease;
`

const ProgressSteps = () => {
  const [currentActive, setCurrentActive] = useState(1)

  const handlePrev = () => {
    setCurrentActive((prev) => Math.max(1, prev - 1))
  }

  const handleNext = () => {
    setCurrentActive((prev) => Math.min(TOTAL_STEPS, prev + 1))
  }

  const progressWidth = ((currentActive - 1) / (TOTAL_STEPS - 1)) * 100

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-[#f6f7fb]'>
      <ProgressContainer>
        <ProgressBar>
          <ProgressBarFill $width={progressWidth} />
        </ProgressBar>
        {Array.from({ length: TOTAL_STEPS }, (_, i) => (
          <Circle key={i} $active={i < currentActive}>
            {i + 1}
          </Circle>
        ))}
      </ProgressContainer>
      <div className='flex gap-4'>
        <button
          type='button'
          className='px-6 py-2 bg-[#3498db] text-white border-none rounded cursor-pointer text-sm font-medium disabled:bg-[#e0e0e0] disabled:cursor-not-allowed transition-colors'
          disabled={currentActive === 1}
          onClick={handlePrev}>
          Prev
        </button>
        <button
          type='button'
          className='px-6 py-2 bg-[#3498db] text-white border-none rounded cursor-pointer text-sm font-medium disabled:bg-[#e0e0e0] disabled:cursor-not-allowed transition-colors'
          disabled={currentActive === TOTAL_STEPS}
          onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  )
}

export default ProgressSteps
