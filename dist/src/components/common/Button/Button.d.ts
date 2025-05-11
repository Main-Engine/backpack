import { BoxProps } from 'common/Box'
import type { ButtonProps } from './Button.types'

export declare const Button: ({
  onPress,
  color,
  variant,
  borderRadius,
  size,
  shadow,
  padding,
  children,
  href,
  icon,
  loading,
  disabled,
  withHaptics,
  height,
  ...rest
}: ButtonProps &
  BoxProps & {
    activeScale?: number
    children?: string | string[]
  }) => import('react/jsx-runtime').JSX.Element
