import { Pressable as RNPressable } from 'react-native'

import { Box } from 'common/Box'

import { composeEventHandlers } from 'utils/eventHandlers'

import { PressableProps } from './Pressable.types'
import { useFocus, useHover, useIsPressed } from './hooks'

export const Pressable = (props: PressableProps) => {
  const { hoverProps, isHovered } = useHover()
  const { pressableProps, isPressed } = useIsPressed()
  const { focusProps, isFocused } = useFocus()

  const {
    onPress,
    onLongPress,
    onPressIn,
    onPressOut,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - web only
    onFocusIn,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - web only
    onFocusOut,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - web only
    onHoverIn,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - web only
    onHoverOut,
    delayLongPress,
    children,
    style,
    ...restBoxProps
  } = props

  return (
    <Box {...restBoxProps}>
      <RNPressable
        onPress={onPress}
        onLongPress={onLongPress}
        onPressIn={composeEventHandlers(onPressIn, pressableProps.onPressIn)}
        onPressOut={composeEventHandlers(onPressOut, pressableProps.onPressOut)}
        delayLongPress={delayLongPress}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore - web only
        onHoverIn={composeEventHandlers(onHoverIn, hoverProps.onHoverIn)}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore - web only
        onHoverOut={composeEventHandlers(onHoverOut, hoverProps.onHoverOut)}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore - web only
        onFocusIn={composeEventHandlers(onFocusIn, focusProps.onFocusIn)}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore - web only
        onFocusOut={composeEventHandlers(onFocusOut, focusProps.onFocusOut)}
        style={style}
      >
        {typeof children !== 'function'
          ? children
          : children({
              isPressed,
              isHovered,
              isFocused
            })}
      </RNPressable>
    </Box>
  )
}
