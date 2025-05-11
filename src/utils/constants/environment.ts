import { debugMode, easEnvironment } from './lib/expo-constants'
import { isWeb } from './platform'

const Env = easEnvironment || process.env.EXPO_PUBLIC_APP_ENV

export const isDebug = debugMode
export const isProd = !debugMode && (Env === 'production' || isWeb)
export const isDev = debugMode || Env === 'development' || Env === 'local' || !isProd

let intReadable = 'unknown'
if (isDebug) {
  intReadable = 'debug'
} else if (isDev) {
  intReadable = 'development'
} else if (isProd) {
  intReadable = 'production'
}

export const readable = intReadable as 'development' | 'production' | 'unknown' | 'debug'
