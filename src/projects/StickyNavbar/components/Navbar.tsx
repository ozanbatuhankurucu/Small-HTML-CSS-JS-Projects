import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const NavContainer = styled.nav<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 70px;
  background-color: ${({ isScrolled }) => (isScrolled ? '#3498db' : 'transparent')};
  color: ${({ isScrolled }) => (isScrolled ? '#ecf0f1' : '#2c3e50')};
  box-shadow: ${({ isScrolled }) => (isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.3)' : 'none')};
  transition: all 0.3s ease-in-out;
  z-index: 1000;
`

const Logo = styled.h1<{ isScrolled: boolean }>`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ isScrolled }) => (isScrolled ? '#ecf0f1' : '#3498db')};
  transition: color 0.3s ease-in-out;
`

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
`

const NavLink = styled.li<{ isScrolled: boolean }>`
  font-size: 1rem;
  cursor: pointer;

  a {
    color: ${({ isScrolled }) => (isScrolled ? '#ecf0f1' : '#2c3e50')};
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: ${({ isScrolled }) => (isScrolled ? '#e74c3c' : '#3498db')};
    }
  }
`

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <NavContainer isScrolled={isScrolled}>
      <Logo isScrolled={isScrolled}>BrandName</Logo>
      <NavLinks>
        <NavLink isScrolled={isScrolled}>
          <a href='#home'>Home</a>
        </NavLink>
        <NavLink isScrolled={isScrolled}>
          <a href='#about'>About</a>
        </NavLink>
        <NavLink isScrolled={isScrolled}>
          <a href='#services'>Services</a>
        </NavLink>
        <NavLink isScrolled={isScrolled}>
          <a href='#contact'>Contact</a>
        </NavLink>
      </NavLinks>
    </NavContainer>
  )
}

export default Navbar
