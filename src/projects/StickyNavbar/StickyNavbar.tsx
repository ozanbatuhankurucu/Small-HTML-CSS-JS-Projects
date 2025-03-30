import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Content from './components/Content'
import { ThemeProvider } from './ThemeContext'

export const StickyNavbar = () => (
  <ThemeProvider>
    <Navbar />
    <Hero />
    <Content />
  </ThemeProvider>
)
