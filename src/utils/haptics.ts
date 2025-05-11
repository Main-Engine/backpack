import * as ExpoHaptics from 'expo-haptics'

export const Haptics = ExpoHaptics

export const impactNotification = () => {
  Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
}

export const impactMedium = () => {
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
}

export const impactHeavy = () => {
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
}
