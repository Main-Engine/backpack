import React from 'react'
import { TextInputProps as RNTextInputProps } from 'react-native'
import { ContainerProps, FlexProps, SizeProps, SpacingProps, TypographyProps } from 'types/theme'
import { Color, ColorOption, ResponsivePropWrapper, UnwrappedResponsiveProps } from 'utils/theme'

type CustomTextInputProps = {
  placeholderTextColor?: Color
  placeholderTextColorKey?: ColorOption
}
type ResponsiveCustomTextInputProps = ResponsivePropWrapper<CustomTextInputProps>

export type TextInputProps = ResponsiveCustomTextInputProps &
  RNTextInputProps &
  FlexProps &
  SizeProps &
  SpacingProps &
  ContainerProps &
  TypographyProps & {
    children?: React.ReactNode
    // This is valid in React-native-web
    outline?: 'none'
  }

export type StyledTextInputProps = UnwrappedResponsiveProps<TextInputProps>
