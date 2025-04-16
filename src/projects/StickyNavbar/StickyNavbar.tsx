import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Content from './components/Content'
import { NavThemeProvider } from './ThemeContext'

export const StickyNavbar = () => (
  <NavThemeProvider>
    <Navbar />
    <Hero />
    <Content />
  </NavThemeProvider>
)
