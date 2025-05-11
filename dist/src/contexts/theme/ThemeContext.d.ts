import React from 'react'
import { Theme } from 'utils/theme'

type ThemeContextState = {
  theme: Theme
  toggleTheme: () => void
}
declare const ThemeProvider: ({
  children,
  withToggleTheme
}: {
  children: React.ReactNode
  withToggleTheme?: boolean
}) => import('react/jsx-runtime').JSX.Element
declare const useTheme: () => ThemeContextState
export { ThemeProvider, useTheme }
