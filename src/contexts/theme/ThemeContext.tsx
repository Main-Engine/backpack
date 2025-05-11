import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

import { useWindow } from 'contexts/window'

import { useColorScheme } from 'hooks/theme/useColorScheme'

import { environment } from 'utils/constants'
import { ColorKey, Theme, theme } from 'utils/theme'

type ThemeContextState = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext({} as ThemeContextState)

const ThemeProvider = ({
  children,
  withToggleTheme = false
}: {
  children: React.ReactNode
  withToggleTheme?: boolean
}) => {
  const { breakpoint } = useWindow()
  const deviceTheme = useColorScheme()

  const useDeviceTheme = false
  const [userOptions, setUserOptions] = useState<{
    themeColor: ColorKey
  }>({ themeColor: useDeviceTheme ? deviceTheme || 'base' : 'base' })

  useEffect(() => {
    if (deviceTheme && useDeviceTheme) {
      setColor(deviceTheme)
    }
  }, [useDeviceTheme, deviceTheme])

  const computedTheme = theme({
    userOptions,
    breakpointIndex: breakpoint.index
  })

  const setColor = (themeColorKey: ColorKey = 'base') => {
    setUserOptions((options) => {
      return {
        ...options,
        themeColor: themeColorKey
      }
    })
  }

  const toggleTheme = useCallback(() => {
    const { themeColor } = userOptions
    if (themeColor === 'base') {
      setColor('dark')
    } else if (themeColor === 'dark') {
      setColor('light')
    } else if (themeColor === 'light') {
      setColor('grayscale')
    } else {
      setColor('base')
    }
  }, [userOptions])

  useEffect(() => {
    const timer = setInterval(() => {
      toggleTheme()
    }, 30000)

    if (!environment.isDev || !withToggleTheme) clearInterval(timer)

    return () => clearTimeout(timer)
  }, [toggleTheme, withToggleTheme])

  const value = useMemo(() => {
    return {
      theme: computedTheme,
      toggleTheme
    }
  }, [computedTheme, toggleTheme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

const useTheme = () => {
  const themeContext = useContext(ThemeContext)
  if (themeContext == null) {
    throw new Error('useTheme() called outside of a ThemeProvider?')
  }
  return themeContext
}

export { ThemeProvider, useTheme }
