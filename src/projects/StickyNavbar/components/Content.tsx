import React from 'react'
import styled from 'styled-components'

const ContentContainer = styled.main`
  padding: 4rem 2rem;
`

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 0;

  &:not(:last-child) {
    border-bottom: 1px solid #bdc3c7;
  }
`

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #3498db;
  margin-bottom: 1.5rem;
`

const SectionContent = styled.div`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #2c3e50;

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
