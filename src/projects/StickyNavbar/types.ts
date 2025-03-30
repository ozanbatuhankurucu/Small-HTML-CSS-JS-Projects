export type Theme = 'light' | 'dark'

export interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

export interface ThemedProps {
  theme: Theme
}

export interface ScrolledProps {
  isScrolled: boolean
}

export interface NavbarItemProps extends ThemedProps, ScrolledProps {
  isActive: boolean
}

export interface MobileMenuProps extends ThemedProps {
  isOpen: boolean
}
