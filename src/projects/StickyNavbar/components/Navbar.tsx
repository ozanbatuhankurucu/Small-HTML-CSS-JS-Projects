import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useTheme } from '../ThemeContext'
import { useScrollSpy } from '../hooks/useScrollSpy'

interface StyledProps {
  isScrolled?: boolean
}

const NavContainer = styled.nav<StyledProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 70px;
  background-color: ${({ isScrolled, theme }) => {
    if (!isScrolled) return 'transparent'
    return theme.mode === 'dark' ? theme.colors.secondary : theme.colors.primary
  }};
  color: ${({ isScrolled, theme }) => {
    if (theme.mode === 'dark') {
      return theme.colors.text
    }
    return isScrolled ? theme.colors.lightBackground : theme.colors.text
  }};
  box-shadow: ${({ isScrolled }) => (isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.3)' : 'none')};
  transition: ${(props) => props.theme.transitions.default};
  z-index: 1000;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`

const Logo = styled.h1<StyledProps>`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ isScrolled, theme }) => {
    if (theme.mode === 'dark') {
      return theme.colors.text
    }
    return isScrolled ? theme.colors.lightBackground : theme.colors.primary
  }};
  transition: ${(props) => props.theme.transitions.default};
`

interface MenuProps extends StyledProps {
  isOpen?: boolean
}

const NavLinks = styled.ul<MenuProps>`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    background-color: ${({ theme }) =>
      theme.mode === 'dark' ? 'rgba(26, 26, 46, 0.95)' : 'rgba(236, 240, 241, 0.95)'};
    backdrop-filter: blur(10px);
    width: 100%;
    height: 100vh;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    transition: ${(props) => props.theme.transitions.default};
    z-index: 999;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-10px)')};
  }
`

interface NavItemProps extends StyledProps {
  isActive?: boolean
}

const NavLinkItem = styled(motion.li)<NavItemProps>`
  font-size: 1rem;
  cursor: pointer;
  position: relative;

  a {
    color: ${({ isScrolled, theme, isActive }) => {
      if (theme.mode === 'dark') {
        return isActive ? theme.colors.primary : theme.colors.text
      }
      if (isScrolled) {
        return isActive ? '#ffcc00' : theme.colors.lightBackground
      }
      return isActive ? theme.colors.accentColor : theme.colors.secondary
    }};
    text-decoration: none;
    font-weight: ${({ isActive }) => (isActive ? '700' : '500')};
    transition: ${(props) => props.theme.transitions.default};
    display: block;
    padding: 0.5rem 0;

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
      padding: 1rem;
      font-size: 1.5rem;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
  }
`

const LinkUnderline = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: ${(props) => props.theme.colors.accentColor || props.theme.colors.primary};
  transform-origin: left;
`

const HamburgerButton = styled.button<MenuProps>`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
  position: relative;
  width: 40px;
  height: 40px;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: ${({ theme }) => (theme.mode === 'dark' ? theme.colors.text : theme.colors.secondary)};
    margin: 2px 0;
    transition: ${(props) => props.theme.transitions.default};
    position: absolute;

    &:nth-child(1) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
      top: ${({ isOpen }) => (isOpen ? '50%' : 'calc(50% - 8px)')};
    }

    &:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
      transform: ${({ isOpen }) => (isOpen ? 'translateX(-20px)' : 'translateX(0)')};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
      top: ${({ isOpen }) => (isOpen ? '50%' : 'calc(50% + 8px)')};
    }
  }
`

const ThemeToggleButton = styled.button`
  background-color: ${({ theme }) => (theme.mode === 'dark' ? theme.colors.text : theme.colors.secondary)};
  color: ${({ theme }) => (theme.mode === 'dark' ? theme.colors.secondary : theme.colors.lightBackground)};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 1rem;
  transition: ${(props) => props.theme.transitions.default};

  &:hover {
    transform: scale(1.1);
  }
`

const NavbarRightSection = styled.div`
  display: flex;
  align-items: center;
`

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const { theme, toggleTheme } = useTheme()

  const sections = ['home', 'about', 'services', 'contact']
  const activeSection = useScrollSpy(sections, 100)

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href')

    if (href && href.startsWith('#')) {
      e.preventDefault()
      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        })
      }
    }

    setIsMenuOpen(false)
  }

  return (
    <NavContainer isScrolled={isScrolled}>
      <Logo isScrolled={isScrolled}>BrandName</Logo>

      <NavbarRightSection>
        <HamburgerButton onClick={toggleMenu} isOpen={isMenuOpen}>
          <div />
          <div />
          <div />
        </HamburgerButton>

        <NavLinks isOpen={isMenuOpen}>
          {sections.map((section) => (
            <NavLinkItem
              key={section}
              isScrolled={isScrolled}
              isActive={activeSection === section}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
              <a href={`#${section}`} onClick={handleLinkClick}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
              {activeSection === section && (
                <LinkUnderline initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.3 }} />
              )}
            </NavLinkItem>
          ))}
        </NavLinks>

        <ThemeToggleButton onClick={toggleTheme}>{theme === 'dark' ? '☀️' : '🌙'}</ThemeToggleButton>
      </NavbarRightSection>
    </NavContainer>
  )
}

export default Navbar
