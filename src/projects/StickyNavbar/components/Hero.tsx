import React from 'react'
import styled from 'styled-components'

const HeroContainer = styled.section`
  height: 100vh;
  background-image: linear-gradient(to bottom, #ecf0f1, #e74c3c);
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
  color: #3498db;
`

const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #2c3e50;
  font-weight: 400;
`

const HeroButton = styled.button`
  padding: 0.8rem 2rem;
  background-color: #3498db;
  color: #ecf0f1;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
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
