import { Image as ExpoImage, ImageProps, ImageSource, ImageStyle } from 'expo-image'
import { useMemo } from 'react'
import { DimensionValue } from 'react-native'

import { Box, BoxProps } from 'common/Box'

import { useThemeImage } from 'hooks/theme/useThemeImage'
import { useThemeProps } from 'hooks/theme/useThemeProps'

import { isWeb } from 'utils/constants/platform'
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

const fullContinerStyle: {
  width: DimensionValue
  height: DimensionValue
} = {
  width: '100%',
  height: '100%'
}

export const Image = ({
  source,
  style = {},
  width = undefined,
  height = undefined,
  image,
  placeholder,
  // Used to calculate the aspect ratio
  dimensions,
  contentFit = 'contain',
  containerProps = {},
  ...props
}: Props) => {
  const computedAspectRatio =
    dimensions?.width && dimensions?.height ? dimensions.width / dimensions.height : 1
  const themeProps = useThemeProps({ image, width, height })
  const themeImage = useThemeImage(themeProps.image)

  const cachePolicy = isWeb ? {} : { cachePolicy: 'memory-disk' as any }
  const memoizedStyle = useMemo(() => {
    return [fullContinerStyle, style]
  }, [style])

  return (
    <Box aspectRatio={computedAspectRatio} {...themeProps} {...containerProps} overflow='hidden'>
      <ExpoImage
        {...cachePolicy}
        transition={placeholder ? 150 : undefined}
        contentFit={contentFit}
        source={source || themeImage}
        placeholder={placeholder}
        style={memoizedStyle}
        {...props}
      />
    </Box>
  )
}
