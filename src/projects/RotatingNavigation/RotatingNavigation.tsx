import { useState } from 'react'
import styled from 'styled-components'

const PageContainer = styled.div`
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: #333;
`

const ContentWrapper = styled.div<{ $open: boolean }>`
  background-color: #fafafa;
  transform-origin: top left;
  transition: transform 0.5s linear;
  transform: ${({ $open }) => ($open ? 'rotate(-20deg)' : 'rotate(0)')};
  width: 100%;
  min-height: 100vh;
  padding: 50px;
  position: relative;
  z-index: 1;
`

const CircleContainer = styled.div`
  position: fixed;
  top: -100px;
  left: -100px;
  z-index: 10;
`

const Circle = styled.div<{ $open: boolean }>`
  background-color: #ff7979;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: relative;
  transition: transform 0.5s linear;
  transform: ${({ $open }) => ($open ? 'rotate(-70deg)' : 'rotate(0)')};
`

const CircleButton = styled.button<{ $position: 'close' | 'open' }>`
  position: absolute;
  cursor: pointer;
  top: ${({ $position }) => ($position === 'close' ? '60%' : '68%')};
  left: ${({ $position }) => ($position === 'close' ? '68%' : '60%')};
  background: transparent;
  border: none;
  font-size: 20px;
  color: white;
  outline: none;

  &:hover {
    color: #ddd;
  }
`

const Nav = styled.nav<{ $open: boolean }>`
  position: fixed;
  bottom: 40px;
  left: 0;
  z-index: 5;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    text-transform: uppercase;
    color: white;
    margin: 20px 0;
    transform: ${({ $open }) => ($open ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.4s ease-in;
  }

  li:nth-child(2) {
    transition-delay: 0.1s;
  }
  li:nth-child(3) {
    transition-delay: 0.2s;
  }

  li a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    margin-left: 32px;
    transition: color 0.2s;

    &:hover {
      color: #ff7979;
    }
  }
`

const RotatingNavigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <PageContainer>
      <CircleContainer>
        <Circle $open={isOpen}>
          <CircleButton $position='close' onClick={() => setIsOpen(false)}>
            ✕
          </CircleButton>
          <CircleButton $position='open' onClick={() => setIsOpen(true)}>
            ☰
          </CircleButton>
        </Circle>
      </CircleContainer>

      <ContentWrapper $open={isOpen}>
        <div className='max-w-3xl mx-auto'>
          <h1 className='text-3xl font-bold mb-4'>Amazing Article</h1>
          <small className='text-gray-500'>Florin Pop</small>
          <p className='text-gray-600 mt-4 leading-7'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            quia in ratione dolores cupiditate, maxime aliquid impedit dolorem
            nam dolor omnis atque fuga labore modi veritatis porro laborum
            minus, illo maiores recusandae cumque ipsa quos. Tenetur,
            consequuntur. Impedit consectetur natus quisquam laborum soluta
            voluptatibus saepe dignissimos.
          </p>
          <p className='text-gray-600 mt-4 leading-7'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            vero, nisi totam provident tempora repellat at laboriosam hic non
            qui dolorum. Amet reiciendis ratione perspiciatis commodi atque
            quidem sed reprehenderit officiis. Distinctio praesentium porro
            accusantium.
          </p>
          <h3 className='text-xl font-semibold mt-6 mb-2'>My Dog</h3>
          <img
            className='w-full max-w-md rounded-lg shadow-md'
            src='https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            alt='dog'
          />
          <p className='text-gray-600 mt-4 leading-7'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit libero
            deleniti rerum quo, incidunt vel consequatur culpa ullam. Magnam
            facere earum unde harum. Ea culpa veritatis magnam at aliquid.
            Perferendis autem doloremque unde recusandae.
          </p>
        </div>
      </ContentWrapper>

      <Nav $open={isOpen}>
        <ul>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </Nav>
    </PageContainer>
  )
}

export default RotatingNavigation
