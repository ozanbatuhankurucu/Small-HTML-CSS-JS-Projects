import { useState, useEffect, useCallback } from 'react'
import styled, { keyframes } from 'styled-components'

interface Testimonial {
  text: string
  name: string
  role: string
  image: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    text: "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is mass talent and creativity. He's the developer droids are looking for. I'd say he's easily in the top 1%.",
    name: 'Miyah Myles',
    role: 'Marketing @ Studio',
    image: 'https://randomuser.me/api/portraits/women/46.jpg'
  },
  {
    text: "This guy is an mass talent. He is professional, creative, and incredibly hardworking. After working with him on a few projects, I can say with certainty that this guy deserves every opportunity that comes his way.",
    name: 'June Cha',
    role: 'Software Engineer @ Google',
    image: 'https://randomuser.me/api/portraits/men/75.jpg'
  },
  {
    text: 'This guy is a rising star in the tech world. His attention to detail and commitment to quality are unmatched. I highly recommend him for any frontend development projects.',
    name: 'Iida Niskanen',
    role: 'Data Analyst @ Netflix',
    image: 'https://randomuser.me/api/portraits/women/65.jpg'
  }
]

const INTERVAL = 10000

const progressAnimation = keyframes`
  from { width: 0; }
  to { width: 100%; }
`

const ProgressBar = styled.div`
  height: 4px;
  background: #3498db;
  animation: ${progressAnimation} ${INTERVAL}ms linear infinite;
  border-radius: 2px;
`

const TestimonialBoxSwitcher = () => {
  const [index, setIndex] = useState(0)

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % TESTIMONIALS.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, INTERVAL)
    return () => clearInterval(timer)
  }, [next])

  const t = TESTIMONIALS[index]

  return (
    <div className='min-h-screen flex items-center justify-center bg-[#f4f4f4]'>
      <div className='bg-[#476ce4] rounded-xl p-10 max-w-lg text-center shadow-lg'>
        <ProgressBar key={index} />
        <p className='text-white/90 text-base leading-7 mt-6 mb-8 italic'>
          &ldquo;{t.text}&rdquo;
        </p>
        <div className='flex flex-col items-center'>
          <img
            src={t.image}
            alt={t.name}
            className='w-16 h-16 rounded-full border-2 border-white mb-3'
          />
          <h4 className='text-white font-bold text-sm'>{t.name}</h4>
          <p className='text-white/70 text-xs'>{t.role}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialBoxSwitcher
