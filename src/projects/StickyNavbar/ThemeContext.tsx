import React, { createContext, useState, useContext, useEffect, ReactNode, useMemo } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { colors, transitions, breakpoints } from './styles'

export type Theme = 'light' | 'dark'

export interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const NavThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme')
    return (savedTheme as Theme) || 'light'
  })

  useEffect(() => {
    localStorage.setItem('theme', themeMode)
  }, [themeMode])

  const toggleTheme = () => {
    setThemeMode((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  const themeValues = useMemo(
    () => ({
      mode: themeMode,
      colors: themeMode === 'light' ? colors.light : colors.dark,
      transitions,
      breakpoints
    }),
    [themeMode]
  )

  const contextValue = useMemo(() => ({ theme: themeMode, toggleTheme }), [themeMode])

  return (
    <ThemeContext.Provider value={contextValue}>
      <StyledThemeProvider theme={themeValues}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a NavThemeProvider')
  }
  return context
}
