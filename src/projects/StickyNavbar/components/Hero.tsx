import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../ThemeContext'
import { ThemedProps } from '../types'
import { colors, transitions } from '../styles'

const HeroContainer = styled.section<ThemedProps>`
  height: 100vh;
  background-image: ${({ theme }) =>
    theme === 'dark'
      ? `linear-gradient(to bottom, ${colors.dark.secondary}, ${colors.dark.darkBackground})`
      : `linear-gradient(to bottom, ${colors.light.lightBackground}, ${colors.light.accentColor})`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 2rem;
`

const HeroTitle = styled.h1<ThemedProps>`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => (theme === 'dark' ? colors.dark.text : colors.light.primary)};
`

const HeroSubtitle = styled.h2<ThemedProps>`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => (theme === 'dark' ? colors.dark.secondaryText : colors.light.secondary)};
  font-weight: 400;
`

const HeroButton = styled.button<ThemedProps>`
  padding: 0.8rem 2rem;
  background-color: ${({ theme }) => (theme === 'dark' ? colors.dark.primary : colors.light.primary)};
  color: ${colors.light.lightBackground};
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: ${transitions.default};

  &:hover {
    background-color: ${({ theme }) => (theme === 'dark' ? '#c0392b' : colors.light.secondary)};
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-1px);
  }
`

const Hero: React.FC = () => {
  const { theme } = useTheme()

  return (
    <HeroContainer id='home' theme={theme}>
      <HeroTitle theme={theme}>Welcome to Our Website</HeroTitle>
      <HeroSubtitle theme={theme}>Discover amazing content as you scroll</HeroSubtitle>
      <HeroButton theme={theme}>Learn More</HeroButton>
    </HeroContainer>
  )
}

export default Hero
