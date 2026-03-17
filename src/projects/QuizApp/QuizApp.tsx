import { useState, useCallback } from 'react'
import styled from 'styled-components'

interface Question {
  question: string
  answers: string[]
  correctIndex: number
}

const QUIZ_DATA: Question[] = [
  {
    question: 'Which language runs in a web browser?',
    answers: ['Java', 'C', 'Python', 'JavaScript'],
    correctIndex: 3
  },
  {
    question: 'What does CSS stand for?',
    answers: [
      'Central Style Sheets',
      'Cascading Style Sheets',
      'Cascading Simple Sheets',
      'Cars SUVs Sailboats'
    ],
    correctIndex: 1
  },
  {
    question: 'What does HTML stand for?',
    answers: [
      'Hypertext Markup Language',
      'Hypertext Markdown Language',
      'Hyperloop Machine Language',
      'Helicopters Terminals Monitors Laptops'
    ],
    correctIndex: 0
  },
  {
    question: 'What year was JavaScript launched?',
    answers: ['1996', '1995', '1994', 'None of the above'],
    correctIndex: 1
  }
]

const AnswerButton = styled.button<{ $selected: boolean }>`
  width: 100%;
  padding: 12px 16px;
  text-align: left;
  border: 2px solid ${({ $selected }) => ($selected ? '#3498db' : '#ddd')};
  border-radius: 8px;
  background: ${({ $selected }) => ($selected ? '#ebf5fb' : 'white')};
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;

  &:hover {
    border-color: #3498db;
  }
`

const QuizApp = () => {
  const [currentQ, setCurrentQ] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const handleSubmit = useCallback(() => {
    if (selectedAnswer === null) return

    if (selectedAnswer === QUIZ_DATA[currentQ].correctIndex) {
      setScore((prev) => prev + 1)
    }

    if (currentQ < QUIZ_DATA.length - 1) {
      setCurrentQ((prev) => prev + 1)
      setSelectedAnswer(null)
    } else {
      setFinished(true)
    }
  }, [selectedAnswer, currentQ])

  const restart = useCallback(() => {
    setCurrentQ(0)
    setSelectedAnswer(null)
    setScore(0)
    setFinished(false)
  }, [])

  if (finished) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-[#b8c6db]'>
        <div className='bg-white rounded-xl p-10 shadow-lg text-center w-[450px]'>
          <h2 className='text-2xl font-bold mb-4'>Quiz Complete!</h2>
          <p className='text-lg mb-6'>
            You answered{' '}
            <strong>
              {score}/{QUIZ_DATA.length}
            </strong>{' '}
            questions correctly
          </p>
          <button
            type='button'
            className='px-8 py-3 bg-[#8e44ad] text-white border-none rounded-lg cursor-pointer font-bold hover:bg-[#7d3c98] transition-colors'
            onClick={restart}>
            Reload
          </button>
        </div>
      </div>
    )
  }

  const q = QUIZ_DATA[currentQ]

  return (
    <div className='min-h-screen flex items-center justify-center bg-[#b8c6db]'>
      <div className='bg-white rounded-xl p-10 shadow-lg w-[450px]'>
        <h2 className='text-lg font-bold mb-6'>{q.question}</h2>
        <div className='flex flex-col gap-3 mb-6'>
          {q.answers.map((answer, i) => (
            <AnswerButton
              key={i}
              $selected={selectedAnswer === i}
              onClick={() => setSelectedAnswer(i)}>
              {answer}
            </AnswerButton>
          ))}
        </div>
        <button
          type='button'
          className='w-full py-3 bg-[#8e44ad] text-white border-none rounded-lg cursor-pointer font-bold hover:bg-[#7d3c98] transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
          disabled={selectedAnswer === null}
          onClick={handleSubmit}>
          {currentQ === QUIZ_DATA.length - 1 ? 'Submit' : 'Next'}
        </button>
        <p className='text-center text-gray-400 text-sm mt-4'>
          Question {currentQ + 1} of {QUIZ_DATA.length}
        </p>
      </div>
    </div>
  )
}

export default QuizApp
