import React from 'react'
import styled from 'styled-components'

const ContentContainer = styled.main`
  padding: 4rem 2rem;
  background-color: ${({ theme }) => (theme.mode === 'dark' ? theme.colors.background : theme.colors.background)};
`

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 0;
  scroll-margin-top: 80px;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => (theme.mode === 'dark' ? theme.colors.border : theme.colors.border)};
  }
`

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => (theme.mode === 'dark' ? theme.colors.primary : theme.colors.primary)};
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
    background-color: ${({ theme }) => (theme.mode === 'dark' ? theme.colors.primary : theme.colors.primary)};
  }
`

const SectionContent = styled.div`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${({ theme }) => (theme.mode === 'dark' ? theme.colors.secondaryText : theme.colors.text)};

  p {
    margin-bottom: 1rem;
  }
`

const Content: React.FC = () => (
  <ContentContainer>
    <Section id='about'>
      <SectionTitle>About Us</SectionTitle>
      <SectionContent>
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

    <Section id='services'>
      <SectionTitle>Our Services</SectionTitle>
      <SectionContent>
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

    <Section id='contact'>
      <SectionTitle>Contact Us</SectionTitle>
      <SectionContent>
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

export default Content
