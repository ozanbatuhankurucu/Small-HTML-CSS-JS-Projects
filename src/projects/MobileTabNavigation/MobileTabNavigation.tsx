import { useState } from 'react'
import styled from 'styled-components'

interface Tab {
  icon: string
  label: string
  image: string
  title: string
}

const TABS: Tab[] = [
  {
    icon: '🏠',
    label: 'Home',
    image:
      'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Home'
  },
  {
    icon: '📋',
    label: 'Work',
    image:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Work'
  },
  {
    icon: '📝',
    label: 'Blog',
    image:
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Blog'
  },
  {
    icon: '👤',
    label: 'About',
    image:
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'About Me'
  }
]

const Phone = styled.div`
  width: 340px;
  height: 600px;
  border: 3px solid #333;
  border-radius: 30px;
  overflow: hidden;
  position: relative;
  background: white;
`

const TabBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  background: white;
  border-top: 1px solid #eee;
  z-index: 2;
`

const TabButton = styled.button<{ $active: boolean }>`
  flex: 1;
  padding: 12px 0;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 20px;
  opacity: ${({ $active }) => ($active ? 1 : 0.4)};
  transition: opacity 0.2s;

  span {
    display: block;
    font-size: 10px;
    margin-top: 2px;
    color: ${({ $active }) => ($active ? '#333' : '#999')};
  }
`

const MobileTabNavigation = () => {
  const [activeTab, setActiveTab] = useState(0)
  const tab = TABS[activeTab]

  return (
    <div className='min-h-screen flex items-center justify-center bg-[#8e44ad]'>
      <Phone>
        <img
          src={tab.image}
          alt={tab.title}
          className='w-full h-full object-cover'
        />
        <div className='absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/50 to-transparent'>
          <h3 className='text-white font-bold text-lg'>{tab.title}</h3>
        </div>
        <TabBar>
          {TABS.map((t, i) => (
            <TabButton
              key={t.label}
              $active={i === activeTab}
              onClick={() => setActiveTab(i)}>
              {t.icon}
              <span>{t.label}</span>
            </TabButton>
          ))}
        </TabBar>
      </Phone>
    </div>
  )
}

export default MobileTabNavigation
