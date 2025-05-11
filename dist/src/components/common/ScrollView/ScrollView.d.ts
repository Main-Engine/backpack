import type { ScrollViewProps as LibScrollViewProps } from 'react-native'
import { ScrollView as NativeScrollView } from 'react-native-gesture-handler'

export declare const ScrollView: import('react').ForwardRefExoticComponent<
  LibScrollViewProps & {
    numberOfItems?: number
  } & import('react').RefAttributes<NativeScrollView>
>
