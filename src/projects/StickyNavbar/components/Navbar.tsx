import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useTheme } from '../ThemeContext'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { ScrolledProps, ThemedProps, NavbarItemProps, MobileMenuProps } from '../types'
import { colors, transitions, breakpoints } from '../styles'

const NavContainer = styled.nav<ScrolledProps & ThemedProps>`
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
    if (theme === 'dark') {
      return isScrolled ? colors.dark.secondary : 'transparent'
    }
    if (isScrolled) {
      return colors.light.primary
    }
    return 'transparent'
  }};
  color: ${({ isScrolled, theme }) => {
    if (theme === 'dark') {
      return colors.dark.text
    }
    if (isScrolled) {
      return colors.light.lightBackground
    }
    return colors.light.text
  }};
  box-shadow: ${({ isScrolled }) => (isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.3)' : 'none')};
  transition: ${transitions.default};
  z-index: 1000;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0 1rem;
  }
`

const Logo = styled.h1<ScrolledProps & ThemedProps>`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ isScrolled, theme }) => {
    if (theme === 'dark') {
      return colors.dark.text
    }
    if (isScrolled) {
      return colors.light.lightBackground
    }
    return colors.light.primary
  }};
  transition: ${transitions.default};
`

const NavLinks = styled.ul<MobileMenuProps>`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media (max-width: ${breakpoints.mobile}) {
    position: fixed;
    top: 70px;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    flex-direction: column;
    background-color: ${({ theme }) => (theme === 'dark' ? colors.dark.secondary : colors.light.primary)};
    width: 250px;
    height: calc(100vh - 70px);
    padding: 2rem;
    transition: ${transitions.default};
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  }
`

const NavLinkItem = styled(motion.li)<NavbarItemProps>`
  font-size: 1rem;
  cursor: pointer;
  position: relative;

  a {
    color: ${({ isScrolled, theme, isActive }) => {
      if (theme === 'dark') {
        return isActive ? colors.dark.primary : colors.dark.text
      }
      if (isScrolled) {
        return isActive ? '#ffcc00' : colors.light.lightBackground
      }
      return isActive ? colors.light.accentColor : colors.light.secondary
    }};
    text-decoration: none;
    font-weight: ${({ isActive }) => (isActive ? '700' : '500')};
    transition: ${transitions.default};
    display: block;
    padding: 0.5rem 0;

    @media (max-width: ${breakpoints.mobile}) {
      padding: 1rem 0;
    }
  }
`

const LinkUnderline = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: ${colors.light.accentColor};
  transform-origin: left;
`

const HamburgerButton = styled.button<ThemedProps>`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: ${breakpoints.mobile}) {
    display: block;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: ${({ theme }) => (theme === 'dark' ? colors.dark.text : colors.light.secondary)};
    margin: 5px 0;
    transition: ${transitions.default};
  }
`

const ThemeToggleButton = styled.button<ThemedProps>`
  background-color: ${({ theme }) => (theme === 'dark' ? colors.dark.text : colors.light.secondary)};
  color: ${({ theme }) => (theme === 'dark' ? colors.light.secondary : colors.light.lightBackground)};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 1rem;
  transition: ${transitions.default};

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
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
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
    <NavContainer isScrolled={isScrolled} theme={theme}>
      <Logo isScrolled={isScrolled} theme={theme}>
        BrandName
      </Logo>

      <NavbarRightSection>
        <HamburgerButton onClick={toggleMenu} theme={theme}>
          <div />
          <div />
          <div />
        </HamburgerButton>

        <NavLinks isOpen={isMenuOpen} theme={theme}>
          {sections.map((section) => (
            <NavLinkItem
              key={section}
              isScrolled={isScrolled}
              theme={theme}
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

        <ThemeToggleButton onClick={toggleTheme} theme={theme}>
          {theme === 'dark' ? '☀️' : '🌙'}
        </ThemeToggleButton>
      </NavbarRightSection>
    </NavContainer>
  )
}

export default Navbar
