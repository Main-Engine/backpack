import {
  ImageResizeMode,
  ImageSourcePropType,
  ImageBackground as RNImageBackground,
  ImageBackgroundProps as RNImageBackgroundProps
} from 'react-native'

type ImageBackgroundProps = Omit<RNImageBackgroundProps, 'source'> & {
  source?: ImageSourcePropType
  onPress?: () => void
  resizeMode?: ImageResizeMode
  children?: React.ReactNode
}
export const ImageBackground = ({
  source,
  resizeMode = 'cover',
  style = {},
  children,
  ...props
}: ImageBackgroundProps) => {
  if (!source) return null

  return (
    <RNImageBackground source={source} resizeMode={resizeMode} style={style} {...props}>
      {children}
    </RNImageBackground>
  )
}
