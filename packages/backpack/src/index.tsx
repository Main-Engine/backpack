import { hexToGrayscale } from '@backpack/utils/colors'

export const greeting = () => {
	console.log('Hello World Import Test: ', hexToGrayscale('#000000'))
	return 'Hello World!'
}

export function multiply(a: number, b: number): Promise<number> {
	return Promise.resolve(a * b)
}
