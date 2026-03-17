import { useState } from 'react'
import styled from 'styled-components'

const PANELS = [
  {
    title: 'Explore The World',
    image:
      'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    title: 'Wild Forest',
    image:
      'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    title: 'Sunny Beach',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80'
  },
  {
    title: 'City on Winter',
    image:
      'https://images.unsplash.com/photo-1551009175-8a68da93987c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80'
  },
  {
    title: 'Mountains - Loss',
    image:
      'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }
]

const Container = styled.div`
  display: flex;
  width: 90vw;
  max-width: 900px;
  gap: 12px;
`

const Panel = styled.div<{ $active: boolean }>`
  background-size: cover;
  background-position: center;
  border-radius: 50px;
  cursor: pointer;
  flex: ${({ $active }) => ($active ? 5 : 0.5)};
  height: 80vh;
  position: relative;
  transition: flex 0.7s ease-in;
  overflow: hidden;
`

const PanelTitle = styled.h3<{ $active: boolean }>`
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 24px;
  color: white;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 0.3s ease-in ${({ $active }) => ($active ? '0.4s' : '0s')};
`

const ExpandingCards = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className='min-h-screen flex items-center justify-center bg-[#1b1b32]'>
      <Container>
        {PANELS.map((panel, index) => (
          <Panel
            key={panel.title}
            $active={index === activeIndex}
            style={{ backgroundImage: `url(${panel.image})` }}
            onClick={() => setActiveIndex(index)}>
            <PanelTitle $active={index === activeIndex}>
              {panel.title}
            </PanelTitle>
          </Panel>
        ))}
      </Container>
    </div>
  )
}

export default ExpandingCards
