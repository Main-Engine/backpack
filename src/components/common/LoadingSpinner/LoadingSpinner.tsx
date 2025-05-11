import { useEffect } from 'react'

import { Box } from 'common/Box'
import { Icon } from 'common/Icon'

import { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'utils/reanimated'

import { LoadingSpinnerProps } from './LoadingSpinner.types'

export const LoadingSpinner = ({
  isLoading = false,
  size = 'sm',
  color = 'base'
}: LoadingSpinnerProps) => {
  const sharedRotationValue = useSharedValue(0)

  useEffect(() => {
    sharedRotationValue.value = isLoading
      ? withRepeat(
          withTiming(360, {
            duration: 1000
          }),
          -1
        )
      : 0
  }, [sharedRotationValue, isLoading])

  const loadingSpinnerStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${sharedRotationValue.value}deg` }]
    }
  }, [])

  if (!isLoading) return null

  return (
    <Box style={loadingSpinnerStyle}>
      <Icon name='spinner' size={size} color={color} />
    </Box>
  )
}
