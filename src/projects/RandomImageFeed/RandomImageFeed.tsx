import { useMemo } from 'react'

const ROWS = 3
const IMAGES_PER_ROW = 5

const getRandomSize = () => {
  const width = Math.floor(Math.random() * 10 + 300)
  const height = Math.floor(Math.random() * 10 + 300)
  return { width, height }
}

const RandomImageFeed = () => {
  const images = useMemo(
    () =>
      Array.from({ length: ROWS * IMAGES_PER_ROW }, (_, i) => {
        const { width, height } = getRandomSize()
        return {
          id: i,
          src: `https://picsum.photos/${width}/${height}?random=${i}`
        }
      }),
    []
  )

  return (
    <div className='min-h-screen bg-[#1b1b32] p-8'>
      <h1 className='text-center text-3xl font-bold text-white mb-8'>
        Random Image Feed
      </h1>
      <div className='flex flex-wrap justify-center gap-4 max-w-5xl mx-auto'>
        {images.map((img) => (
          <img
            key={img.id}
            src={img.src}
            alt={`Random ${img.id}`}
            className='w-[300px] h-[300px] object-cover rounded-md'
          />
        ))}
      </div>
    </div>
  )
}

export default RandomImageFeed
