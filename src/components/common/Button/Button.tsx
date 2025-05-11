import { router } from 'expo-router'

import { Box, BoxProps } from 'common/Box'
import { LoadingSpinner } from 'common/LoadingSpinner'
import { ScalePress } from 'common/ScalePress'
import { Stack } from 'common/Stack'
import { Typography } from 'common/Typography'

import { useThemeProps } from 'hooks/theme/useThemeProps'

import { variants } from './Button.styles'
import type { ButtonProps } from './Button.types'

export const Button = ({
  onPress,
  color,
  variant = 'solid',
  borderRadius = 'xs',
  size = 'sm',
  shadow = 'xxs',
  padding = { horizontal: 'xl', vertical: 'sm' },
  children,
  href,
  icon,
  loading = false,
  disabled = false,
  withHaptics = false,
  height,
  analyticInfo,
  ...rest
}: ButtonProps &
  BoxProps & {
    activeScale?: number
    analyticInfo?: { location: string; action: string }
    children?: string | string[]
  }) => {
  const { color: baseColor = 'secondary' } = useThemeProps({ color })

  let computedOnPress = onPress

  if (href) {
    computedOnPress = () => (href.push ? router.push(href) : router.navigate(href))
  }

  const variantProps = variants(baseColor)[variant]

  if (!variantProps) {
    console.log('variantProps', variantProps)
    console.log('baseColor', baseColor)
    console.log('variant', variant)
  }
  const loadingOrDisabled = disabled || loading

  const buttonBorder = {
    color: variantProps.borderColor,
    width: 1
  }

  return (
    <ScalePress
      disabled={loadingOrDisabled}
      onPress={computedOnPress}
      activeScale={rest.activeScale}
      withHaptics={withHaptics}
      analyticInfo={analyticInfo}
      accessible
      accessibilityRole='button'
    >
      {(animatedStyle) => (
        <Stack
          gap={size}
          opacity={loadingOrDisabled ? 0.8 : 1.0}
          borderRadius={borderRadius}
          height={height || undefined}
          border={buttonBorder}
          padding={padding}
          shadow={variantProps?.shadow || shadow}
          background={variantProps.backgroundColor}
          flexDirection={'row'}
          justify='center'
          align={'center'}
          style={[animatedStyle, rest.style]}
          {...rest}
        >
          {loading ? <LoadingSpinner isLoading size='md' color='baseFlip' /> : null}
          {!loading && icon ? <Box justify='center'>{icon}</Box> : null}
          {!loading && children && (
            <Typography
              color={variantProps.color}
              colorKey={variantProps.colorKey}
              weight='medium'
              textAlign='center'
              margin='none'
              padding='none'
              selectable={false}
              suppressHighlighting
              size={size}
            >
              {children}
            </Typography>
          )}
        </Stack>
      )}
    </ScalePress>
  )
}
