import { Text } from '@backpack/components/common/Text'

export * from '@backpack/components/common'
export * from '@backpack/components/partials'

export { RootContext as ThemeProvider } from '@backpack/contexts/Root'

export const Greeting = () => {
	return <Text weight='bold'>Hello World!</Text>
}

export function multiply(a: number, b: number): Promise<number> {
	return Promise.resolve(a * b)
}
