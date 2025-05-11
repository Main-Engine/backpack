import { ColorValue, DimensionValue, TextStyle, ViewStyle } from 'react-native'
import {
  ContainerProps,
  DisplayProps,
  FlexProps,
  PositionProps,
  SizeProps,
  SpacingProps,
  TypographyProps
} from 'types/theme'
import { Shadow, Space, Theme, UnwrappedResponsiveProps } from 'utils/theme'

export const getDisplayStyles = ({
  display,
  overflow,
  aspectRatio
}: UnwrappedResponsiveProps<DisplayProps>): ViewStyle => ({
  display: display as ViewStyle['display'],
  overflow: overflow as ViewStyle['overflow'],
  aspectRatio
})

export const getFlexStyles = (
  theme: Theme,
  { flexWrap, flex, flexDirection, align, justify, gap }: UnwrappedResponsiveProps<FlexProps>
): ViewStyle => ({
  flexWrap: flexWrap as ViewStyle['flexWrap'],
  flex,
  flexDirection: flexDirection as ViewStyle['flexDirection'],
  alignItems: align as ViewStyle['alignItems'],
  justifyContent: justify as ViewStyle['justifyContent'],
  gap: gap !== undefined ? (typeof gap === 'number' ? gap : theme.space.base[gap]) : undefined
})

export const getPositionStyles = ({
  position,
  top,
  right,
  bottom,
  left,
  zIndex
}: UnwrappedResponsiveProps<PositionProps>): ViewStyle => ({
  position: position as ViewStyle['position'],
  top: getThemedSizeValue(top),
  right: getThemedSizeValue(right),
  bottom: getThemedSizeValue(bottom),
  left: getThemedSizeValue(left),
  zIndex
})

export const getSizeStyles = ({
  maxWidth,
  maxHeight,
  minWidth,
  minHeight,
  width,
  height
}: UnwrappedResponsiveProps<SizeProps>): ViewStyle => ({
  width: getThemedSizeValue(width),
  minWidth: getThemedSizeValue(minWidth),
  maxWidth: getThemedSizeValue(maxWidth),
  height: getThemedSizeValue(height),
  minHeight: getThemedSizeValue(minHeight),
  maxHeight: getThemedSizeValue(maxHeight)
})

export const getSpacingStyles = (
  theme: Theme,
  props: UnwrappedResponsiveProps<SpacingProps>
): ViewStyle => ({
  ...getMarginStyles(theme, props),
  ...getPaddingStyles(theme, props)
})

export const getContainerStyles = (
  theme: Theme,
  props: UnwrappedResponsiveProps<ContainerProps>
): ViewStyle => {
  const {
    borderRadius,
    shadow,
    border,
    borderBottom,
    borderLeft,
    borderRight,
    borderTop,
    background,
    backgroundColorKey,
    opacity
  } = props

  return {
    ...(shadow ? getShadowStyles(theme, shadow) : {}),
    ...(borderRadius ? getBorderRadiusStyles(theme, borderRadius) : {}),
    ...(border ? getFullBorderStyles(theme, border) : {}),
    ...(borderLeft ? getBorderStyles(theme, 'borderLeft', borderLeft) : {}),
    ...(borderRight ? getBorderStyles(theme, 'borderRight', borderRight) : {}),
    ...(borderTop ? getBorderStyles(theme, 'borderTop', borderTop) : {}),
    ...(borderBottom ? getBorderStyles(theme, 'borderBottom', borderBottom) : {}),
    opacity,
    backgroundColor: background
      ? (theme.color[background]?.[backgroundColorKey || 'base'] as ColorValue)
      : undefined
  }
}

export const getTypographyStyles = (
  theme: Theme,
  props: UnwrappedResponsiveProps<TypographyProps>
): TextStyle => {
  const { weight, font, textAlign, size, color, colorKey } = props

  return {
    fontWeight: weight as TextStyle['fontWeight'],
    fontFamily: font ? theme.typography.family.text[font]?.[weight || 'normal']?.name : undefined,
    textAlign,
    fontSize: size !== undefined ? theme.size.font[size] : undefined,
    color: color ? (theme.color[color][colorKey || 'foreground'] as ColorValue) : undefined
  }
}

const parseShadowOffset = (offset: string): { width: number; height: number } => {
  const parts = offset.split(' ').map((val) => parseInt(val, 10))
  return {
    width: isNaN(parts[0]) ? 0 : parts[0],
    height: isNaN(parts[1]) ? 0 : parts[1]
  }
}

const getShadowStyles = (theme: Theme, value: Shadow): ViewStyle => {
  const shadowConfig = theme.shadow.base[value]
  const offset =
    typeof shadowConfig.shadowOffset === 'string'
      ? parseShadowOffset(shadowConfig.shadowOffset)
      : shadowConfig.shadowOffset

  return {
    shadowRadius: shadowConfig.shadowRadius,
    shadowOpacity: shadowConfig.shadowOpacity,
    shadowColor: shadowConfig.shadowColor as ColorValue,
    shadowOffset: offset
  }
}

const getBorderRadiusStyles = (
  theme: Theme,
  value: UnwrappedResponsiveProps<ContainerProps>['borderRadius']
): ViewStyle => {
  if (value === undefined) return {}
  return {
    borderRadius:
      value === 'full' ? 999 : typeof value === 'number' ? value : theme.space.base[value]
  }
}

const getFullBorderStyles = (
  theme: Theme,
  value: UnwrappedResponsiveProps<ContainerProps>['border']
): ViewStyle => {
  if (!value) return {}
  return {
    borderWidth: value.width,
    borderStyle: (value.style as ViewStyle['borderStyle']) || 'solid',
    borderColor: value.color
      ? (theme.color[value.color][value.colorKey || 'base'] as ColorValue)
      : undefined
  }
}

const getBorderStyles = (
  theme: Theme,
  key: string,
  value: UnwrappedResponsiveProps<ContainerProps>['border']
): ViewStyle => {
  if (!value) return {}

  const result: Record<string, unknown> = {}
  result[`${key}Width`] = value.width

  if (value.color) {
    result[`${key}Color`] = theme.color[value.color][value.colorKey || 'base'] as ColorValue
  }

  return result as ViewStyle
}

const getThemedSizeValue = (value?: string | number): DimensionValue | undefined => {
  if (value === undefined) return undefined
  if (typeof value === 'string') {
    // Handle percentage values
    if (value.endsWith('%')) return value as DimensionValue
    // Convert other string values to numbers
    return parseFloat(value)
  }
  return value
}

const getThemedSpaceValue = (theme: Theme, value?: number | Space): number | undefined => {
  if (value === undefined) return undefined
  return typeof value === 'number' ? value : theme.space.base[value]
}

const emptyStyle = {}
const getMarginStyles = (
  theme: Theme,
  { marginTop, marginBottom, marginRight, marginLeft }: UnwrappedResponsiveProps<SpacingProps>
): ViewStyle => {
  if (
    marginTop === undefined &&
    marginBottom === undefined &&
    marginRight === undefined &&
    marginLeft === undefined
  ) {
    return emptyStyle
  }

  return {
    marginTop: getThemedSpaceValue(theme, marginTop),
    marginBottom: getThemedSpaceValue(theme, marginBottom),
    marginRight: getThemedSpaceValue(theme, marginRight),
    marginLeft: getThemedSpaceValue(theme, marginLeft)
  }
}

const getPaddingStyles = (
  theme: Theme,
  { paddingTop, paddingBottom, paddingLeft, paddingRight }: UnwrappedResponsiveProps<SpacingProps>
): ViewStyle => ({
  paddingTop: getThemedSpaceValue(theme, paddingTop),
  paddingBottom: getThemedSpaceValue(theme, paddingBottom),
  paddingRight: getThemedSpaceValue(theme, paddingRight),
  paddingLeft: getThemedSpaceValue(theme, paddingLeft)
})
