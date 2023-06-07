import seedrandom from 'seedrandom'

export const random = (seed: string) => {
	return seedrandom(seed)
}
