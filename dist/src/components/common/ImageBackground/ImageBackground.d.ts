import {
  ImageResizeMode,
  ImageSourcePropType,
  ImageBackgroundProps as RNImageBackgroundProps
} from 'react-native'

type ImageBackgroundProps = Omit<RNImageBackgroundProps, 'source'> & {
  source?: ImageSourcePropType
  onPress?: () => void
  resizeMode?: ImageResizeMode
  children?: React.ReactNode
}
export declare const ImageBackground: ({
  source,
  resizeMode,
  style,
  children,
  ...props
}: ImageBackgroundProps) => import('react/jsx-runtime').JSX.Element | null
export {}
