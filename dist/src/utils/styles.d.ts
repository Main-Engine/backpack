import { TextStyle, ViewStyle } from 'react-native'
import {
  ContainerProps,
  DisplayProps,
  FlexProps,
  PositionProps,
  SizeProps,
  SpacingProps,
  TypographyProps
} from 'types/theme'
import { Theme, UnwrappedResponsiveProps } from 'utils/theme'

export declare const getDisplayStyles: ({
  display,
  overflow,
  aspectRatio
}: UnwrappedResponsiveProps<DisplayProps>) => ViewStyle
export declare const getFlexStyles: (
  theme: Theme,
  { flexWrap, flex, flexDirection, align, justify, gap }: UnwrappedResponsiveProps<FlexProps>
) => ViewStyle
export declare const getPositionStyles: ({
  position,
  top,
  right,
  bottom,
  left,
  zIndex
}: UnwrappedResponsiveProps<PositionProps>) => ViewStyle
export declare const getSizeStyles: ({
  maxWidth,
  maxHeight,
  minWidth,
  minHeight,
  width,
  height
}: UnwrappedResponsiveProps<SizeProps>) => ViewStyle
export declare const getSpacingStyles: (
  theme: Theme,
  props: UnwrappedResponsiveProps<SpacingProps>
) => ViewStyle
export declare const getContainerStyles: (
  theme: Theme,
  props: UnwrappedResponsiveProps<ContainerProps>
) => ViewStyle
export declare const getTypographyStyles: (
  theme: Theme,
  props: UnwrappedResponsiveProps<TypographyProps>
) => TextStyle
