import { PressableProps as RNPressableProps } from 'react-native'
import { BoxProps } from 'common/Box'

export type PressableProps = Omit<BoxProps, 'children'> &
  Omit<RNPressableProps, 'children'> & {
    children?:
      | React.ReactNode
      | (({
          isPressed,
          isHovered,
          isFocused
        }: {
          isPressed: boolean
          isHovered: boolean
          isFocused: boolean
        }) => React.ReactNode)
  }
