import { PressableProps } from 'common/Pressable'

interface StyleProp {
  transform: {
    scale: number
  }[]
}
export type ScalePressProps = Omit<PressableProps, 'children'> & {
  activeScale?: number
  defaultScale?: number
  withHaptics?: boolean
  withLongPressHaptics?: boolean
  children: (style: StyleProp) => React.ReactNode
  onPress?: () => void
  onLongPress?: () => void
  onDoublePress?: () => void
  disabled?: boolean
  scaleDisabled?: boolean
  isUnauthed?: boolean
  springConfig?: {
    damping: number
    mass: number
    stiffness: number
  }
}
export {}
