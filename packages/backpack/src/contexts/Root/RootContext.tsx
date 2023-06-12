import { PageProvider } from '@backpack/contexts/Page'
import { ThemeProvider } from '@backpack/contexts/Theme'
import { WindowProvider } from '@backpack/contexts/Window'
import { SafeAreaProvider } from '@backpack/utils/safeArea'

export const RootContext = ({ children }: { children: JSX.Element }) => {
	return (
		<SafeAreaProvider>
			<WindowProvider>
				<PageProvider>
					<ThemeProvider>{children}</ThemeProvider>
				</PageProvider>
			</WindowProvider>
		</SafeAreaProvider>
	)
}
