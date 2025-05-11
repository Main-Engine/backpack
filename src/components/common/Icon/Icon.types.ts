import { StyleProp, TextStyle } from 'react-native'
import { TypographyProps } from 'types/theme'
import { IconFontWeight, ResponsivePropWrapper } from 'utils/theme'
import { fontAwesomeGlyphMap } from './FontAwesome/fontAwesomeGlyphMap'

export type IconKey = keyof typeof fontAwesomeGlyphMap

type IconFontProps = Omit<TypographyProps, 'font' | 'weight'>
export type StyledIconProps = {
  name: IconKey
  weight?: IconFontWeight
  style?: StyleProp<TextStyle>
} & IconFontProps

export type IconProps = ResponsivePropWrapper<Omit<StyledIconProps, 'style'>> & {
  style?: StyleProp<TextStyle>
}
