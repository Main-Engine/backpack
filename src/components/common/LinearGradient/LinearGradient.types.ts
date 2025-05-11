import { LinearGradientProps as RNLinearGradientProps } from 'expo-linear-gradient'
import { Color } from 'utils/theme'

export interface LinearGradientProps extends Omit<RNLinearGradientProps, 'colors'> {
  colors: Color[]
}
