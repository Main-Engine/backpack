import Constants from 'expo-constants'

export const { debugMode } = Constants
export const easEnvironment = Constants.expoConfig?.extra?.env
export const version = Constants.expoConfig?.version
export const projectId = Constants.easconfig?.projectId
