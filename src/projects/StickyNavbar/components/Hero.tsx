import React from 'react'
import styled from 'styled-components'

const HeroContainer = styled.section`
  height: 100vh;
  background-image: ${({ theme }) =>
    theme.mode === 'dark'
      ? `linear-gradient(to bottom, ${theme.colors.secondary}, ${theme.colors.darkBackground})`
      : `linear-gradient(to bottom, ${theme.colors.lightBackground}, ${theme.colors.accentColor})`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 2rem;
`

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => (theme.mode === 'dark' ? theme.colors.text : theme.colors.primary)};
`

const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => (theme.mode === 'dark' ? theme.colors.secondaryText : theme.colors.secondary)};
  font-weight: 400;
`

const HeroButton = styled.button`
  padding: 0.8rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.lightBackground || '#fff'};
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme }) => (theme.mode === 'dark' ? '#c0392b' : theme.colors.secondary)};
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-1px);
  }
`

const Hero: React.FC = () => (
  <HeroContainer id='home'>
    <HeroTitle>Welcome to Our Website</HeroTitle>
    <HeroSubtitle>Discover amazing content as you scroll</HeroSubtitle>
    <HeroButton>Learn More</HeroButton>
  </HeroContainer>
)

export default Hero
