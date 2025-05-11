import { ImageProps, ImageSource, ImageStyle } from 'expo-image'
import { BoxProps } from 'common/Box'
import { ImageName, ResponsiveProp } from 'utils/theme'

type Props = ImageProps & {
  source?: ImageSource
  image?: ResponsiveProp<ImageName>
  style?: ImageStyle | null
  width?: ResponsiveProp<number | string>
  height?: ResponsiveProp<number | string>
  dimensions?: {
    width: number
    height: number
  }
  resizeMode?: 'contain' | 'cover' | 'center' | 'repeat' | 'stretch'
  containerProps?: BoxProps
}
export declare const Image: ({
  source,
  style,
  width,
  height,
  image,
  placeholder,
  dimensions,
  contentFit,
  containerProps,
  ...props
}: Props) => import('react/jsx-runtime').JSX.Element
export {}
