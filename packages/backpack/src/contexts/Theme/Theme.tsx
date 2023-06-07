import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'

import { useWindow } from '@backpack/contexts/Window'
import { useColorScheme } from '@backpack/hooks/theme/useColorScheme'
import { ThemeProvider as StyledComponentsThemeProvider } from '@backpack/utils/styled'
import { ColorKey, Theme, theme } from '@backpack/utils/theme'

type ThemeContextState = {
	theme: Theme
	toggleTheme: () => void
}

const ThemeContext = createContext({} as ThemeContextState)

// This allows for a tightly typed theme object to be passed to components
declare module 'styled-components' {
	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	export interface DefaultTheme extends Theme {}
}

export const ThemeProvider = ({
	children,
	withToggleTheme = false,
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
		breakpointIndex: breakpoint.index,
	})

	const setColor = (themeColorKey: ColorKey = 'base') => {
		setUserOptions((options) => {
			return {
				...options,
				themeColor: themeColorKey,
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

		return () => clearTimeout(timer)
	}, [toggleTheme, withToggleTheme])

	return (
		<ThemeContext.Provider
			value={{
				theme: computedTheme,
				toggleTheme,
			}}
		>
			{/* This is necessary for the styled-components to receive the theme via their props */}
			<StyledComponentsThemeProvider theme={computedTheme}>
				{children}
			</StyledComponentsThemeProvider>
		</ThemeContext.Provider>
	)
}

export const useTheme = () => {
	const themeContext = useContext(ThemeContext)
	if (themeContext == null) {
		throw new Error('useTheme() called outside of a ThemeProvider?')
	}
	return themeContext
}
