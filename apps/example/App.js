import { Box, ColorGrid, Greeting, ThemeProvider } from '@mainengine/backpack'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
	return (
		<ThemeProvider>
			<Box flex={1} align='center' justifyContent='center' background='base' padding='xs'>
				<Box background='primary' margin='xxl'>
					<Greeting />
				</Box>
				<ColorGrid />
				<StatusBar style='auto' />
			</Box>
		</ThemeProvider>
	)
}
