import React, { FC, useEffect, useState } from 'react'
import axios from 'axios'
import useSWR from 'swr'
import _ from 'lodash'
import { GuessDiamond } from '../components/GuessDiamond'
import { AIGuessDataType, AIGuessResponse, StepsDataType } from '../types'
import { TextLoadingIndicator } from '../components/TextLoadingIndicator'

interface FourthStepProps {
  steps: StepsDataType
  aiGuessData: AIGuessDataType | undefined
  setAIGuessData: React.Dispatch<
    React.SetStateAction<AIGuessDataType | undefined>
  >
  setSelectedStep: (step: number) => void
}
export const FourthStep: FC<FourthStepProps> = ({
  steps,
  aiGuessData,
  setAIGuessData,
  setSelectedStep
}) => {
  const [showLoader, setShowLoader] = useState(true)
  const { isLoading } = useSWR<AIGuessResponse>(
    'https://hydra-dev.internal.arena-ai.com/hydra/api/hydra/core/diamond',
    async () => {
      const { firstStep, secondStep, thirdStep } = steps
      const formData = new FormData()

      formData.append('file', thirdStep.selectedValue?.topFile as File)
      formData.append(
        'payload',
        JSON.stringify({
          shape: firstStep.selectedValue,
          color: '',
          weight: secondStep.selectedValue
        })
      )

      try {
        const response = await axios.post(
          'https://hydra-dev.internal.arena-ai.com/hydra/api/hydra/core/diamond',
          formData,
          {
            headers: {
              accept: 'application/json',
              'Content-Type': 'multipart/form-data'
            }
          }
        )
        return response.data
      } catch (err) {
        console.error(err)
        setAIGuessData({
          diamond_id: '18526cf8-2299-41c5-842c-cbec58e41cd1',
          first_guess: 'I2',
          second_guess: 'SI2'
        })
        return err
      }
    },
    { revalidateOnFocus: false }
  )

  const {
    first_guess: firstGuess,
    second_guess: secondGuess,
    isFirstGuessCorrect
  } = aiGuessData || {}

  const showTextLoadingIndicator = showLoader || isLoading

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoader(false)
    }, 6000)
    return () => clearTimeout(timeout)
  }, [])
  return (
    <div>
      {showTextLoadingIndicator && <TextLoadingIndicator />}
      {!showTextLoadingIndicator && aiGuessData && (
        <>
          <GuessDiamond
            label='First guess'
            guess={firstGuess as string}
            correctGuessOnClick={() => setSelectedStep(6)}
            notCorrectGuessOnClick={() =>
              setAIGuessData({
                ...aiGuessData,
                isFirstGuessCorrect: false
              })
            }
          />

          {!_.isNil(isFirstGuessCorrect) && (
            <GuessDiamond
              label='Second guess'
              guess={secondGuess as string}
              correctGuessOnClick={() => setSelectedStep(6)}
              notCorrectGuessOnClick={() => setSelectedStep(4)}
            />
          )}
        </>
      )}
    </div>
  )
}
