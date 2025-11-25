import React, { useState, useMemo } from 'react'
import styled from 'styled-components'
import { CaretUp, CaretDown } from 'phosphor-react'
import { SLIDES } from './constants'
import { useImageColors } from './hooks/useImageColors'

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`

const SliderContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
`

const LeftSlide = styled.div<{ $activeIndex: number }>`
  height: 100%;
  width: 50%;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.5s ease-in-out;
  transform: translateY(${(props) => -props.$activeIndex * 100}vh);

  @media (max-width: 768px) {
    width: 100%;
  }
`

const SlideContent = styled.div<{ $bgColor: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.$bgColor};
  color: #fff;
  padding: 2rem;
`

const SlideTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const SlideDescription = styled.p`
  font-size: 1.25rem;
  text-align: center;
  max-width: 400px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const RightSlide = styled.div<{ $activeIndex: number; $slidesLength: number }>`
  height: 100%;
  width: 50%;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.5s ease-in-out;
  transform: translateY(${(props) => (props.$activeIndex - (props.$slidesLength - 1)) * 100}vh);

  @media (max-width: 768px) {
    display: none;
  }
`

const ImageSlide = styled.div<{ $imageUrl: string }>`
  height: 100vh;
  width: 100%;
  background-image: url(${(props) => props.$imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const ControlButton = styled.button`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  border: none;
  color: #222;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 1rem;
  border-radius: 5px;
  z-index: 100;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;

  &:hover {
    background-color: #f1f1f1;
    transform: translateX(-50%) scale(1.1);
  }

  &:active {
    background-color: #e0e0e0;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    left: auto;
    right: 1rem;
    transform: none;

    &:hover {
      transform: scale(1.1);
    }
  }
`

const UpButton = styled(ControlButton)`
  top: 2rem;
`

const DownButton = styled(ControlButton)`
  bottom: 2rem;
`

const DoubleVerticalSlider: React.FC = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const slidesLength = SLIDES.length
  const imageUrls = useMemo(() => SLIDES.map((slide) => slide.imageUrl), [])
  // Get dominant colors from images
  const imageColors = useImageColors(imageUrls)

  const handleUpClick = () => {
    setActiveSlideIndex((prevIndex) => {
      if (prevIndex === slidesLength - 1) {
        return 0
      }
      return prevIndex + 1
    })
  }

  const handleDownClick = () => {
    setActiveSlideIndex((prevIndex) => {
      if (prevIndex === 0) {
        return slidesLength - 1
      }
      return prevIndex - 1
    })
  }

  return (
    <Container>
      <SliderContainer>
        <LeftSlide $activeIndex={activeSlideIndex}>
          {SLIDES.map((slide) => (
            <SlideContent key={slide.id} $bgColor={imageColors[slide.imageUrl] || '#333333'}>
              <SlideTitle>{slide.title}</SlideTitle>
              <SlideDescription>{slide.description}</SlideDescription>
            </SlideContent>
          ))}
        </LeftSlide>

        <RightSlide $activeIndex={activeSlideIndex} $slidesLength={slidesLength}>
          {SLIDES.slice()
            .reverse()
            .map((slide) => (
              <ImageSlide key={slide.id} $imageUrl={slide.imageUrl} />
            ))}
        </RightSlide>
      </SliderContainer>

      <UpButton onClick={handleUpClick} aria-label='Scroll up'>
        <CaretUp size={24} weight='bold' />
      </UpButton>

      <DownButton onClick={handleDownClick} aria-label='Scroll down'>
        <CaretDown size={24} weight='bold' />
      </DownButton>
    </Container>
  )
}

export default DoubleVerticalSlider
