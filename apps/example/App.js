import { Box, ColorGrid, RootContext, ScrollView, Text } from '@mainengine/backpack'
import { StatusBar } from 'expo-status-bar'

export const App = () => {
	return (
		<RootContext>
			<ScrollView>
				<Box flex={1} align='center' justifyContent='center' background='base' padding='xs'>
					<Box background='primary' margin='xxl'>
						<Text>Hello World!</Text>
					</Box>
					<ColorGrid />
					<StatusBar style='auto' />
				</Box>
			</ScrollView>
		</RootContext>
	)
}

export default App
