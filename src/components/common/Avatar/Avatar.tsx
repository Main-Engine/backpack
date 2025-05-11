import { useState } from 'react'
import { DimensionValue } from 'react-native'
import { StyleProp, ViewStyle } from 'types/react'

import { Box, BoxProps } from 'common/Box'
import { ImageBackground } from 'common/ImageBackground'
import { Typography } from 'common/Typography'

import { useTheme } from 'contexts/theme'

import { Color, Size } from 'utils/theme'

type AvatarProps = {
  children?: React.ReactNode
  src?: { uri: string }
  size?: Size
  backgroundColor?: Color
  style?: StyleProp<ViewStyle>
} & BoxProps

export const Avatar = ({
  children,
  src,
  size = 'xs',
  backgroundColor = 'primary',
  style = {},
  ...props
}: AvatarProps) => {
  const { theme } = useTheme()
  const [avatarLoaded, setAvatarLoaded] = useState(true)

  const imageBackgroundStyle = {
    width: '100%' as DimensionValue,
    height: '100%' as DimensionValue
  }

  return (
    <Box
      justify='center'
      align='center'
      width={`${theme.size.avatar[size]}px`}
      height={`${theme.size.avatar[size]}px`}
      overflow='hidden'
      borderRadius='full'
      background={backgroundColor}
      style={style}
      {...props}
    >
      <ImageBackground
        onError={() => setAvatarLoaded(false)}
        source={src}
        style={imageBackgroundStyle}
      >
        {!avatarLoaded && children ? (
          <>
            <Box borderRadius='full' justify='center' align='center' width='100%' height='100%'>
              <Typography color={backgroundColor}>{children}</Typography>
            </Box>
          </>
        ) : null}
      </ImageBackground>
    </Box>
  )
}
