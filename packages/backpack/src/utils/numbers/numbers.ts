import { random } from '@backpack/utils/random'

export const randomIntFromInterval = (min: number, max: number) => {
	// min and max included
	return Math.floor(Math.random() * (max - min + 1) + min)
}

export const randomIntFromDateString = (min: number, max: number) => {
	const date = new Date()
	const finalSeed = `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`

	return randomIntFromSeedString(min, max, finalSeed)
}

export const kFormatter = (num: number) => {
	return Math.abs(num) > 999
		? `${(Math.sign(num) * (Math.abs(num) / 1000)).toFixed(1)}k`
		: Math.sign(num) * Math.abs(num)
}

export const randomIntFromSeedString = (min: number, max: number, seedString: string) => {
	const seedResults = random(seedString)
	return Math.floor(seedResults() * (max - min + 1) + min)
}

export const formatBytes = (bytes: number, decimals = 2) => {
	if (bytes === 0) return '0 Bytes'

	const k = 1024
	const dm = decimals < 0 ? 0 : decimals
	const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

	const i = Math.floor(Math.log(bytes) / Math.log(k))

	return `${parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`
}
