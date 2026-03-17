import { useState, useEffect, useCallback, useRef } from 'react'

const IMAGES = [
  'https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1458&q=80',
  'https://images.unsplash.com/photo-1593642702749-b7d2a804c0f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1450&q=80',
  'https://images.unsplash.com/photo-1536431311719-398b6704d4cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1450&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1450&q=80'
]

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef<number>()

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % IMAGES.length)
  }, [])

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length)
  }, [])

  const resetAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = window.setInterval(goToNext, 3000)
  }, [goToNext])

  useEffect(() => {
    resetAutoPlay()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [resetAutoPlay])

  const handlePrev = () => {
    goToPrev()
    resetAutoPlay()
  }

  const handleNext = () => {
    goToNext()
    resetAutoPlay()
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-[#1b1b32]'>
      <div className='relative w-[600px] h-[400px] overflow-hidden rounded-lg shadow-xl'>
        <div
          className='flex transition-transform duration-500 ease-in-out h-full'
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {IMAGES.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Slide ${i + 1}`}
              className='w-full h-full object-cover shrink-0'
            />
          ))}
        </div>

        <button
          type='button'
          className='absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white border-none w-10 h-10 rounded-full cursor-pointer text-lg font-bold transition-colors flex items-center justify-center'
          onClick={handlePrev}>
          &#8249;
        </button>
        <button
          type='button'
          className='absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white border-none w-10 h-10 rounded-full cursor-pointer text-lg font-bold transition-colors flex items-center justify-center'
          onClick={handleNext}>
          &#8250;
        </button>

        <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2'>
          {IMAGES.map((_, i) => (
            <button
              key={i}
              type='button'
              className={`w-3 h-3 rounded-full border-none cursor-pointer transition-colors ${
                i === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => {
                setCurrentIndex(i)
                resetAutoPlay()
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageCarousel
