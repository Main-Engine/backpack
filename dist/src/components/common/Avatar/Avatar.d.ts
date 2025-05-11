import { StyleProp, ViewStyle } from 'types/react'
import { BoxProps } from 'common/Box'
import { Color, Size } from 'utils/theme'

type AvatarProps = {
  children?: React.ReactNode
  src?: {
    uri: string
  }
  size?: Size
  backgroundColor?: Color
  style?: StyleProp<ViewStyle>
} & BoxProps
export declare const Avatar: ({
  children,
  src,
  size,
  backgroundColor,
  style,
  ...props
}: AvatarProps) => import('react/jsx-runtime').JSX.Element
export {}
