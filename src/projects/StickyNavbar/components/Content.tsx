import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../ThemeContext'
import { ThemedProps } from '../types'
import { colors } from '../styles'

const ContentContainer = styled.main<ThemedProps>`
  padding: 4rem 2rem;
  background-color: ${({ theme }) => (theme === 'dark' ? colors.dark.background : colors.light.background)};
`

const Section = styled.section<ThemedProps>`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 0;
  scroll-margin-top: 80px;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => (theme === 'dark' ? colors.dark.border : colors.light.border)};
  }
`

const SectionTitle = styled.h2<ThemedProps>`
  font-size: 2rem;
  color: ${({ theme }) => (theme === 'dark' ? colors.dark.primary : colors.light.primary)};
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;

  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: ${({ theme }) => (theme === 'dark' ? colors.dark.primary : colors.light.primary)};
  }
`

const SectionContent = styled.div<ThemedProps>`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${({ theme }) => (theme === 'dark' ? colors.dark.secondaryText : colors.light.text)};

  p {
    margin-bottom: 1rem;
  }
`

const Content: React.FC = () => {
  const { theme } = useTheme()

  return (
    <ContentContainer theme={theme}>
      <Section id='about' theme={theme}>
        <SectionTitle theme={theme}>About Us</SectionTitle>
        <SectionContent theme={theme}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit odio a erat lobortis auctor.
            Curabitur non justo velit. Cras sagittis egestas eros, a feugiat justo.
          </p>
          <p>
            Suspendisse vitae imperdiet erat. Nulla vulputate fermentum massa, vitae vestibulum justo faucibus in. Donec
            vitae arcu non erat tincidunt tincidunt.
          </p>
        </SectionContent>
      </Section>

      <Section id='services' theme={theme}>
        <SectionTitle theme={theme}>Our Services</SectionTitle>
        <SectionContent theme={theme}>
          <p>
            Maecenas varius justo a lacus tempor, eu tincidunt nibh elementum. In feugiat libero ac egestas eleifend.
            Praesent pretium enim eu leo condimentum, nec aliquet metus pellentesque.
          </p>
          <p>
            Vivamus at porttitor purus. Sed commodo, ex at placerat rhoncus, lorem est mollis sem, ac varius elit mauris
            condimentum nisi. Ut sollicitudin scelerisque porta.
          </p>
        </SectionContent>
      </Section>

      <Section id='contact' theme={theme}>
        <SectionTitle theme={theme}>Contact Us</SectionTitle>
        <SectionContent theme={theme}>
          <p>
            Vivamus at porttitor purus. Sed commodo, ex at placerat rhoncus, lorem est mollis sem, ac varius elit mauris
            condimentum nisi. Ut sollicitudin scelerisque porta.
          </p>
          <p>
            Email: contact@example.com
            <br />
            Phone: (123) 456-7890
            <br />
            Address: 123 Main Street, City, Country
          </p>
        </SectionContent>
      </Section>
    </ContentContainer>
  )
}

export default Content
