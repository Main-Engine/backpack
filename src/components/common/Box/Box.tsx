import { useMemo } from 'react'
import { View } from 'react-native'

import { ResponsiveView } from 'common/ResponsiveView'

import { useTheme } from 'contexts/theme'

import { useThemeProps } from 'hooks/theme/useThemeProps'

import { PanGestureHandler } from 'utils/reanimated'
import { Animated } from 'utils/reanimated'

import { createBoxStyles } from './Box.styles'
import type { BoxProps } from './Box.types'

export const Box = ({ style, children, ...rest }: BoxProps) => {
  const { theme } = useTheme()
  const { onGestureEvent, ...themeProps } = useThemeProps<BoxProps>(rest)
  const styles = useMemo(() => createBoxStyles(theme, themeProps), [theme, themeProps])

  const BoxContent = useMemo(() => {
    if (onGestureEvent || style) {
      return (
        <Animated.View {...themeProps} style={[styles.box, style]}>
          {children}
        </Animated.View>
      )
    }
    return (
      <View {...themeProps} style={[styles.box]}>
        {children}
      </View>
    )
  }, [onGestureEvent, style, styles.box, children, themeProps])

  if (onGestureEvent) {
    return (
      <ResponsiveView visible={themeProps.visible}>
        <PanGestureHandler onGestureEvent={onGestureEvent}>{BoxContent}</PanGestureHandler>
      </ResponsiveView>
    )
  }

  return <ResponsiveView visible={themeProps.visible}>{BoxContent}</ResponsiveView>
}
