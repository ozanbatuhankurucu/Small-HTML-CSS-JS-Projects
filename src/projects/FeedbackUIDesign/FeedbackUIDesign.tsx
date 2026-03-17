import { useState } from 'react'
import styled from 'styled-components'

interface FeedbackOption {
  emoji: string
  label: string
}

const OPTIONS: FeedbackOption[] = [
  { emoji: '😞', label: 'Unhappy' },
  { emoji: '😐', label: 'Neutral' },
  { emoji: '😊', label: 'Satisfied' }
]

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
`

const EmojiButton = styled.button<{ $active: boolean }>`
  background: none;
  border: none;
  font-size: 40px;
  cursor: pointer;
  padding: 12px 20px;
  border-radius: 8px;
  transition: all 0.2s;
  transform: ${({ $active }) => ($active ? 'scale(1.2)' : 'scale(1)')};
  box-shadow: ${({ $active }) =>
    $active ? '0 0 0 3px #3498db' : '0 0 0 1px #eee'};

  &:hover {
    transform: scale(1.1);
  }
`

const FeedbackUIDesign = () => {
  const [selected, setSelected] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-[#fef9f0]'>
        <Card>
          <strong className='text-2xl block mb-4'>Thank You!</strong>
          <br />
          <strong className='text-[#555] text-lg'>Feedback: {selected}</strong>
          <p className='text-gray-500 mt-4'>
            We&apos;ll use your feedback to improve our customer support.
          </p>
        </Card>
      </div>
    )
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-[#fef9f0]'>
      <Card>
        <strong className='text-xl mb-2 block'>
          How satisfied are you with our
          <br />
          customer support performance?
        </strong>
        <div className='flex justify-center gap-6 my-8'>
          {OPTIONS.map(({ emoji, label }) => (
            <div key={label} className='flex flex-col items-center gap-2'>
              <EmojiButton
                type='button'
                $active={selected === label}
                onClick={() => setSelected(label)}>
                {emoji}
              </EmojiButton>
              <span className='text-sm text-gray-600'>{label}</span>
            </div>
          ))}
        </div>
        <button
          type='button'
          className='px-8 py-3 bg-[#302d2b] text-white border-none rounded-md cursor-pointer text-sm font-medium hover:bg-[#1a1a1a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
          disabled={!selected}
          onClick={() => setSubmitted(true)}>
          Send Review
        </button>
      </Card>
    </div>
  )
}

export default FeedbackUIDesign
