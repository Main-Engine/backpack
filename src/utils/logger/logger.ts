import { InteractionManager } from 'react-native'
import { consoleTransport, logger } from 'react-native-logs'
import { environment } from 'utils/constants'
import { isDebug } from 'utils/constants/environment'

const defaultConfig = {
  levels: {
    verbose: 0,
    debug: 100,
    info: 200,
    success: 300,
    warn: 400,
    error: 500,
    fatal: 600
  },
  severity: environment.isDebug ? 'debug' : 'fatal',
  transport: isDebug ? consoleTransport : [consoleTransport],
  transportOptions: {
    colors: {
      debug: 'blueBright',
      info: 'blueBright',
      success: 'greenBright',
      warn: 'yellowBright',
      error: 'redBright',
      fatal: 'red'
    } as const,
    extensionColors: {
      DEFAULT: 'whiteBright',
      REALM: 'magentaBright'
    } as const,
    errorLevels: ['error', 'fatal']
  },
  enabledExtensions: ['DEFAULT'],
  asyncFunc: InteractionManager.runAfterInteractions,
  async: true,
  dateFormat: 'time',
  printLevel: !environment.isDebug,
  printDate: !environment.isDebug,
  enabled: true
}

const baseLogger = logger.createLogger(defaultConfig)
const defaultLogger = baseLogger.extend('DEFAULT')

export const { debug, info, success, warn, error, fatal, verbose } = defaultLogger
