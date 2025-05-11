import { TextInput as RNTextInput } from 'react-native-gesture-handler'

import { useTheme } from 'contexts/theme'

import { useThemeProps } from 'hooks/theme/useThemeProps'

import { isWeb } from 'utils/constants/platform'
import { Color } from 'utils/theme'

import { createTextInputStyles } from './TextInput.styles'
import { TextInputProps } from './TextInput.types'

export const TextInput = ({
  style = {},
  padding = 'xs',
  borderRadius = 'xs',
  border = {
    width: 1,
    color: 'primary'
  },
  outline,
  ...props
}: TextInputProps) => {
  const { theme } = useTheme()
  const convertedThemeProps = useThemeProps({
    padding,
    borderRadius,
    border,
    ...props
  })

  const styles = createTextInputStyles(theme, convertedThemeProps)

  const placeholderTextColorEvaluated =
    theme.color[(convertedThemeProps.placeholderTextColor as Color) || 'base'][
      convertedThemeProps.placeholderTextColorKey || 'foreground'
    ]

  const webTextInputHighlightStyle = isWeb && outline ? { outline } : {}

  return (
    <RNTextInput
      {...convertedThemeProps}
      placeholderTextColor={placeholderTextColorEvaluated}
      // @ts-expect-error - We use outline for RN web
      style={[styles.input, style, webTextInputHighlightStyle]}
    />
  )
}
