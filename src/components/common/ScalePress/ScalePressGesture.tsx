import { useCallback, useEffect, useState } from 'react'
import { runOnJS } from 'react-native-reanimated'

import { impactMedium } from 'utils/haptics'
import {
  Gesture,
  GestureDetector,
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'utils/reanimated'

import { ScalePressProps } from './ScalePress.types'

export const ScalePressGesture = ({
  children,
  onPress,
  onDoublePress,
  onLongPress,
  withHaptics = false,
  withLongPressHaptics = false,
  activeScale = 0.95,
  defaultScale = 1,
  disabled = false,
  springConfig = {
    damping: 10,
    mass: 0.5,
    stiffness: 600
  }
}: ScalePressProps) => {
  const [activeGesture, setActiveGesture] = useState('')

  const scale = useSharedValue(1)
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withSpring(scale.value, springConfig)
        }
      ]
    }
  }, [springConfig])

  const handleTap = useCallback(() => {
    if (onPress) {
      if (withHaptics) impactMedium()
      onPress()
    }
  }, [onPress, withHaptics])

  const handleDoubleTap = useCallback(() => {
    if (onDoublePress) {
      if (withHaptics) impactMedium()
      onDoublePress()
    }
  }, [onDoublePress, withHaptics])

  const handleLongPress = useCallback(() => {
    if (onLongPress) {
      if (withHaptics || withLongPressHaptics) impactMedium()
      onLongPress()
    }
  }, [onLongPress, withHaptics, withLongPressHaptics])

  useEffect(() => {
    if (activeGesture === 'tap') handleTap()
    if (activeGesture === 'doubleTap') handleDoubleTap()
    if (activeGesture === 'longPress') handleLongPress()

    setActiveGesture('')
  }, [activeGesture, handleDoubleTap, handleLongPress, handleTap])

  const tapGesture = Gesture.Tap()
    .runOnJS(true)
    .numberOfTaps(1)
    .enabled(!disabled)
    .onTouchesDown(() => (scale.value = activeScale))
    .onStart(() => {
      runOnJS(handleTap)()
    })
    .onFinalize(() => (scale.value = defaultScale))

  const doubleTapGesture = Gesture.Tap()
    .runOnJS(true)
    .numberOfTaps(2)
    .enabled(!disabled)
    .onTouchesDown(() => (scale.value = activeScale))
    .onStart(() => {
      scale.value = defaultScale
      runOnJS(setActiveGesture)('doubleTap')
    })
    .onTouchesUp(() => (scale.value = defaultScale))

  const longTapGesture = Gesture.LongPress()
    .runOnJS(true)
    .enabled(!disabled)
    .onStart(() => {
      scale.value = defaultScale
      runOnJS(setActiveGesture)('longPress')
    })
    .onFinalize(() => (scale.value = defaultScale))

  const gestures = []
  if (onPress) gestures.push(tapGesture)
  if (onDoublePress) gestures.push(doubleTapGesture)
  if (onLongPress) gestures.push(longTapGesture)

  const combinedGesture = Gesture.Exclusive(...gestures)

  return <GestureDetector gesture={combinedGesture}>{children(animatedStyle)}</GestureDetector>
}
