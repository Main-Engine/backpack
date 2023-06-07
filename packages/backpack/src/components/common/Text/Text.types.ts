import { TextProps as LibTextProps } from 'react-native'

import { DisplayProps, SpacingProps, TypographyProps } from '@backpack/types/theme'
import { UnwrappedResponsiveProps, WithLoadingWrapper } from '@backpack/utils/theme'

type RequiredTextUnlessLoadingProps = {
	children: Exclude<React.ReactNode, undefined>
}

export type RequiredTextProps = LibTextProps & DisplayProps & SpacingProps & TypographyProps

export type TextProps = WithLoadingWrapper<RequiredTextProps, RequiredTextUnlessLoadingProps>

export type StyledTextProps = UnwrappedResponsiveProps<TextProps>
