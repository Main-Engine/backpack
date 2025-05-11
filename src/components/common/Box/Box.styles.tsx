import { StyleSheet, ViewStyle } from 'react-native'
import {
  getContainerStyles,
  getDisplayStyles,
  getFlexStyles,
  getPositionStyles,
  getSizeStyles,
  getSpacingStyles
} from 'utils/styles'
import { Theme } from 'utils/theme'
import type { StyledBoxProps } from './Box.types'

export const createBoxStyles = (theme: Theme, props: StyledBoxProps) => {
  const styles = {
    box: {
      ...getDisplayStyles(props),
      ...getFlexStyles(theme, props),
      ...getPositionStyles(props),
      ...getSizeStyles(props),
      ...getSpacingStyles(theme, props),
      ...getContainerStyles(theme, props)
    } as ViewStyle
  }

  return StyleSheet.create(styles)
}
