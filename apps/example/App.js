import { Box, ColorGrid, Text, ThemeProvider } from '@mainengine/backpack'
import { StatusBar } from 'expo-status-bar'

export default function App() {
	return (
		<ThemeProvider>
			<Box flex={1} align='center' justifyContent='center' background='base' padding='xs'>
				<Box background='primary' margin='xxl'>
					<Text>Hello World!</Text>
				</Box>
				<ColorGrid />
				<StatusBar style='auto' />
			</Box>
		</ThemeProvider>
	)
}
