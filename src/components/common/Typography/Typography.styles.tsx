import { StyleSheet, TextStyle } from 'react-native'
import { getDisplayStyles, getSpacingStyles, getTypographyStyles } from 'utils/styles'
import { Theme } from 'utils/theme'
import { StyledTypographyProps } from './Typography.types'

export const createTypographyStyles = (theme: Theme, props: StyledTypographyProps) => {
  const styles = {
    text: {
      ...getDisplayStyles(props),
      ...getSpacingStyles(theme, props),
      ...getTypographyStyles(theme, props)
    } as TextStyle
  }

  return StyleSheet.create(styles)
}
