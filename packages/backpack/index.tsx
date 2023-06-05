import { hexToGrayscale } from '@backpack/utils/colors'

export const greeting = () => {
	console.log("hexToGrayscale('#000000')", hexToGrayscale('#000000'))
	return 'Hello World3 !'
}

export function multiply(a: number, b: number): Promise<number> {
	return Promise.resolve(a * b)
}
