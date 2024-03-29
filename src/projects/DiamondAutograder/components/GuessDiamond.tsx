/* global NodeJS */
import { ThumbsDown, ThumbsUp } from 'phosphor-react'
import React, { FC, useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import cx from 'classnames'

const DEFAULT_THUMBS_COLOR = '#ffffff80'

const bounceRight = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`
const DivContainer = styled.div`
  animation: ${bounceRight} 150ms ease-in;
`

interface GuessDiamondProps {
  label: string
  guess: string
  correctGuessOnClick: () => void
  notCorrectGuessOnClick: () => void
}
export const GuessDiamond: FC<GuessDiamondProps> = ({
  guess,
  label,
  correctGuessOnClick,
  notCorrectGuessOnClick
}) => {
  const [hasUserGuess, setHasUserGuess] = useState(false)
  const [thumbsDownColor, setThumbsDownColor] = useState(DEFAULT_THUMBS_COLOR)
  const [thumbsUpColor, setThumbsUpColor] = useState(DEFAULT_THUMBS_COLOR)
  const [isThumbsClickable, setIsThumbsClickable] = useState(true)
  let handleThumbsClickTimeout: NodeJS.Timeout

  const handleThumbsDownClick = () => {
    setIsThumbsClickable(false)
    setThumbsDownColor('#D47171')
    if (isThumbsClickable) {
      handleThumbsClickTimeout = setTimeout(() => {
        notCorrectGuessOnClick()
        setHasUserGuess(true)
      }, 500)
    }
  }

  const handleThumbsUpClick = () => {
    setIsThumbsClickable(false)
    setThumbsUpColor('#769274')
    if (isThumbsClickable) {
      handleThumbsClickTimeout = setTimeout(() => {
        correctGuessOnClick()
      }, 500)
    }
  }

  useEffect(
    () => () => {
      if (handleThumbsClickTimeout) {
        clearTimeout(handleThumbsClickTimeout)
      }
    },
    []
  )

  return (
    <DivContainer
      className={cx('flex items-center gap-14 font-normal', {
        '!mb-9': hasUserGuess
      })}>
      <span
        className={cx('text-xs text-white', {
          '!text-[8px] !text-[#ffffff80]': hasUserGuess
        })}>
        {label}
      </span>
      <span
        className={cx('text-2xl text-white', {
          '!text-base !text-[#ffffff80]': hasUserGuess
        })}>
        {guess}
      </span>
      {!hasUserGuess && (
        <div className='flex items-center justify-evenly w-[161px] h-[58px] bg-[#272E3F] rounded-lg'>
          <button type='button' onClick={handleThumbsDownClick}>
            <ThumbsDown
              size={32}
              color={thumbsDownColor}
              onMouseOver={() => setThumbsDownColor('#FFFFFF')}
              onMouseLeave={() => setThumbsDownColor(DEFAULT_THUMBS_COLOR)}
            />
          </button>
          <button type='button' onClick={handleThumbsUpClick}>
            <ThumbsUp
              size={32}
              color={thumbsUpColor}
              onMouseOver={() => setThumbsUpColor('#FFFFFF')}
              onMouseLeave={() => setThumbsUpColor(DEFAULT_THUMBS_COLOR)}
            />
          </button>
        </div>
      )}
    </DivContainer>
  )
}
