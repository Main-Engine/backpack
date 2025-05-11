import { version as packageVersion } from '../../../package.json'

export const baseVersion = '0.0.0'
export const bundleVersion = packageVersion || '0.0.0'
export const otaVersion = '0.0.0'
export const fullVersion = `${baseVersion}-${bundleVersion}${otaVersion ? ` (${otaVersion})` : ''}`
