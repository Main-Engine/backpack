import { isDev } from './environment'

export const APP_ICON = isDev ? require('assets/icon.png') : require('assets/icon.png')
