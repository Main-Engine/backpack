import { ImageProps as BaseImageProps, ImageSource, ImageStyle } from 'expo-image'

import { BoxProps } from '@backpack/components/common/Box'
import { ResponsiveProp } from '@backpack/utils/theme'

export interface ImageProps extends BaseImageProps {
	source?: ImageSource
	style?: ImageStyle
	width?: ResponsiveProp<number | string>
	height?: ResponsiveProp<number | string>
	dimensions?: {
		width: number
		height: number
	}
	resizeMode?: 'contain' | 'cover' | 'center' | 'repeat' | 'stretch'
	containerProps?: BoxProps
}
