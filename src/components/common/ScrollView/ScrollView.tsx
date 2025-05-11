import { forwardRef } from 'react'
import type { ScrollViewProps as LibScrollViewProps } from 'react-native'
import {
  ScrollView as NativeScrollView,
  ScrollView as GHScrollView
} from 'react-native-gesture-handler'

type ScrollViewProps = LibScrollViewProps & {
  numberOfItems?: number
}

export const ScrollView = forwardRef<GHScrollView, ScrollViewProps>(
  ({ children, showsHorizontalScrollIndicator = false, hitSlop, ...props }, ref) => {
    return (
      <NativeScrollView
        ref={ref}
        showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
        scrollEventThrottle={16}
        decelerationRate='normal'
        hitSlop={hitSlop || undefined}
        {...props}
      >
        {children}
      </NativeScrollView>
    )
  }
)

ScrollView.displayName = 'ScrollView'
