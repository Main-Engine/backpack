import { Box } from 'common/Box'

import { SharedValue, interpolate, useAnimatedStyle } from 'utils/reanimated'

const BottomIndicatorTick = ({
  currentAnimatedIndex,
  index
}: {
  currentAnimatedIndex: SharedValue<number>
  index: number
}) => {
  const backGradientAnimatedStyle = useAnimatedStyle(() => {
    const interpolatedOpacity = interpolate(
      currentAnimatedIndex.value,
      [index - 0.50000000001, index - 0.5, index, index + 0.5, index + 0.50000000001],
      [0.3, 1, 1, 1, 0.3],
      'clamp'
    )
    return {
      opacity: interpolatedOpacity
    }
  })

  return (
    <Box
      height={8}
      width={8}
      background='primary'
      borderRadius='full'
      style={[backGradientAnimatedStyle]}
    />
  )
}

export default BottomIndicatorTick
