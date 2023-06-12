import { PageProvider } from '@backpack/contexts/Page'
import { ThemeProvider } from '@backpack/contexts/Theme'
import { WindowProvider } from '@backpack/contexts/Window'

// import { GestureHandlerRootView } from '@backpack/utils/reanimated'
// import { SafeAreaProvider } from '@backpack/utils/safeArea'

export const RootContext = ({ children }: { children: JSX.Element }) => {
	return (
		<WindowProvider>
			<PageProvider>
				<ThemeProvider>{children}</ThemeProvider>
			</PageProvider>
		</WindowProvider>
	)
}
