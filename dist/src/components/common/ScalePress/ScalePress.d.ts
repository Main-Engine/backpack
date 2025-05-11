import { ScalePressProps } from './ScalePress.types'

export declare const ScalePress: ({
  children,
  onPress,
  onLongPress,
  withHaptics,
  withLongPressHaptics,
  activeScale,
  defaultScale,
  disabled,
  springConfig,
  ...restBoxProps
}: ScalePressProps) =>
  | string
  | number
  | boolean
  | Iterable<import('react').ReactNode>
  | import('react/jsx-runtime').JSX.Element
  | null
  | undefined
