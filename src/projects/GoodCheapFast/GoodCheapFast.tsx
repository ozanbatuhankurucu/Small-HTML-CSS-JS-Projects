import { useState, useCallback } from 'react'
import styled from 'styled-components'

type Option = 'good' | 'cheap' | 'fast'

const ToggleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`

const ToggleRow = styled.label`
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  user-select: none;
`

const Track = styled.div<{ $checked: boolean }>`
  width: 60px;
  height: 30px;
  border-radius: 15px;
  background-color: ${({ $checked }) => ($checked ? '#2ecc71' : '#ccc')};
  position: relative;
  transition: background-color 0.3s;
`

const Thumb = styled.div<{ $checked: boolean }>`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: white;
  position: absolute;
  top: 2px;
  left: ${({ $checked }) => ($checked ? '32px' : '2px')};
  transition: left 0.3s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`

const Label = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: white;
  min-width: 100px;
`

const GoodCheapFast = () => {
  const [selected, setSelected] = useState<Set<Option>>(new Set())

  const handleToggle = useCallback(
    (option: Option) => {
      const next = new Set(selected)
      if (next.has(option)) {
        next.delete(option)
      } else {
        next.add(option)
        if (next.size > 2) {
          const others: Option[] = ['good', 'cheap', 'fast']
          const toRemove = others.find((o) => o !== option && next.has(o))
          if (toRemove) next.delete(toRemove)
        }
      }
      setSelected(next)
    },
    [selected]
  )

  const options: { key: Option; label: string }[] = [
    { key: 'good', label: 'Good' },
    { key: 'cheap', label: 'Cheap' },
    { key: 'fast', label: 'Fast' }
  ]

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-[#003049]'>
      <h2 className='text-white text-3xl font-bold mb-2'>
        How do you want your project?
      </h2>
      <p className='text-gray-400 mb-10 text-lg'>Pick two</p>
      <ToggleContainer>
        {options.map(({ key, label }) => (
          <ToggleRow key={key} onClick={() => handleToggle(key)}>
            <Label>{label}</Label>
            <Track $checked={selected.has(key)}>
              <Thumb $checked={selected.has(key)} />
            </Track>
          </ToggleRow>
        ))}
      </ToggleContainer>
    </div>
  )
}

export default GoodCheapFast
