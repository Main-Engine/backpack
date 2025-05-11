import { BoxProps } from 'common/Box'
import { IconKey } from 'common/Icon'
import { Color, IconFontWeight, Size } from 'utils/theme'

type Props = BoxProps & {
  title?: string
  size?: Size
  icon?: IconKey
  color?: Color
  background?: Color
  weight?: IconFontWeight
}
export declare const Tag: ({
  title,
  color,
  background,
  icon,
  size,
  weight,
  borderRadius,
  margin,
  padding,
  border
}: Props) => import('react/jsx-runtime').JSX.Element
export {}
