import { useCallback } from 'react'
import { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'

import { Pressable } from 'common/Pressable'

import { impactMedium } from 'utils/haptics'

import { ScalePressProps } from './ScalePress.types'

// At the top, outside component
const DEFAULT_SPRING_CONFIG = {
  damping: 10,
  mass: 0.25,
  stiffness: 600
} as const

const DEFAULT_TIMING_CONFIG = {
  duration: 150
} as const

export const ScalePress = ({
  children,
  onPress,
  onLongPress,
  withHaptics = false,
  withLongPressHaptics = false,
  activeScale = 0.95,
  defaultScale = 1,
  disabled = false,
  springConfig = DEFAULT_SPRING_CONFIG,
  ...restBoxProps
}: ScalePressProps) => {
  const scale = useSharedValue(1)

  const animatedStyle = useAnimatedStyle(
    () => ({
      transform: [
        {
          scale: withSpring(scale.value, springConfig)
        }
      ]
    }),
    [springConfig.damping, springConfig.mass, springConfig.stiffness]
  )

  const handlePressIn = useCallback(() => {
    'worklet'
    if (onLongPress && onPress) {
      scale.value = activeScale
    } else if (!onLongPress) {
      scale.value = withTiming(activeScale, DEFAULT_TIMING_CONFIG, () => {
        scale.value = withTiming(defaultScale, DEFAULT_TIMING_CONFIG)
      })
    }
  }, [activeScale, defaultScale, onLongPress, onPress, scale])

  const handlePressOut = useCallback(() => {
    'worklet'
    if ((onLongPress && onPress) || !onLongPress) {
      scale.value = defaultScale
    }
  }, [defaultScale, onLongPress, onPress, scale])

  const handleSingleTap = useCallback(() => {
    if (onPress) {
      if (withHaptics) impactMedium()
      onPress()
    }
  }, [onPress, withHaptics])

  const handleLongPress = useCallback(() => {
    if (onLongPress) {
      scale.value = defaultScale
      handlePressOut()
      if (withHaptics || withLongPressHaptics) impactMedium()
      onLongPress()
    }
  }, [defaultScale, handlePressOut, onLongPress, scale, withHaptics, withLongPressHaptics])

  // Handle cases where gestures or scale animation is disabled
  if (disabled) return typeof children !== 'function' ? children : children(animatedStyle)

  return (
    <Pressable
      onPress={onPress ? handleSingleTap : null}
      onLongPress={onLongPress ? handleLongPress : null}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      {...restBoxProps}
    >
      {children(animatedStyle)}
    </Pressable>
  )
}
