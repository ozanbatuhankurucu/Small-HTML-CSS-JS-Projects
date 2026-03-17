import { useState } from 'react'
import styled from 'styled-components'

const Overlay = styled.div<{ $open: boolean; $color: string; $delay: string }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ $color }) => $color};
  transform: ${({ $open }) => ($open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.4s ease ${({ $delay }) => $delay};
  z-index: 5;
`

const NavContent = styled.nav<{ $open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease ${({ $open }) => ($open ? '0.6s' : '0s')},
    visibility 0.3s ease ${({ $open }) => ($open ? '0.6s' : '0s')};
`

const CloseButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 28px;
  cursor: pointer;
  z-index: 20;

  &:hover {
    opacity: 0.7;
  }
`

const LINKS = ['Audit', 'Board', 'Compensation', 'Diversity', 'ESG']

const NetflixNavigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='min-h-screen bg-[#1b1b1b]'>
      <button
        type='button'
        className='fixed top-5 left-5 z-20 bg-transparent border-none text-white text-3xl cursor-pointer hover:opacity-70'
        onClick={() => setIsOpen(true)}>
        ☰
      </button>

      <div className='flex items-center justify-center min-h-screen'>
        <div className='text-center'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png'
            alt='Netflix Logo'
            className='w-64 mb-4'
          />
          <p className='text-gray-400'>Mobile Navigation</p>
        </div>
      </div>

      <Overlay $open={isOpen} $color='#e50914' $delay={isOpen ? '0s' : '0.4s'} />
      <Overlay $open={isOpen} $color='#b20710' $delay={isOpen ? '0.15s' : '0.25s'} />
      <Overlay $open={isOpen} $color='#221f1f' $delay={isOpen ? '0.3s' : '0.1s'} />

      {isOpen && (
        <CloseButton type='button' onClick={() => setIsOpen(false)}>✕</CloseButton>
      )}

      <NavContent $open={isOpen}>
        <ul className='list-none p-0 m-0 text-center'>
          {LINKS.map((link) => (
            <li key={link} className='mb-6'>
              <a
                href={`#${link.toLowerCase()}`}
                className='text-white text-2xl font-bold no-underline hover:opacity-70 transition-opacity'>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </NavContent>
    </div>
  )
}

export default NetflixNavigation
