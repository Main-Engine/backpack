import { StyleSheet, TextStyle } from 'react-native'
import {
  getContainerStyles,
  getFlexStyles,
  getSizeStyles,
  getSpacingStyles,
  getTypographyStyles
} from 'utils/styles'
import { Theme } from 'utils/theme'
import { StyledTextInputProps } from './TextInput.types'

export const createTextInputStyles = (theme: Theme, props: StyledTextInputProps) => {
  const styles = {
    input: {
      ...getFlexStyles(theme, props),
      ...getSizeStyles(props),
      ...getSpacingStyles(theme, props),
      ...getContainerStyles(theme, props),
      ...getTypographyStyles(theme, props)
    } as TextStyle
  }

  return StyleSheet.create(styles)
}
