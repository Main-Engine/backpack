import { DisplayProps, SpacingProps, TypographyProps as ThemeTypographyProps } from 'types/theme'
import { UnwrappedResponsiveProps, WithLoadingWrapper } from 'utils/theme'
import { LibTextProps } from './lib'

type RequiredTypographyUnlessLoadingProps = {
  children: Exclude<React.ReactNode, undefined>
}
export type RequiredTypographyProps = LibTextProps &
  DisplayProps &
  SpacingProps &
  ThemeTypographyProps
export type TypographyProps = WithLoadingWrapper<
  RequiredTypographyProps,
  RequiredTypographyUnlessLoadingProps
> & {
  variant?: 'title' | 'subtitle' | 'body' | 'subtle' | 'button' | 'label'
}
export type StyledTypographyProps = UnwrappedResponsiveProps<TypographyProps>
export {}
