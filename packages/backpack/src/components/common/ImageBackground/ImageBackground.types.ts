import {
	ImageResizeMode,
	ImageSourcePropType,
	ImageStyle,
	ImageBackgroundProps as RNImageBackgroundProps,
	StyleProp,
} from 'react-native'

export interface ImageBackgroundProps extends Omit<RNImageBackgroundProps, 'source'> {
	source?: ImageSourcePropType
	resizeMode?: ImageResizeMode
	style?: StyleProp<ImageStyle>
	children?: React.ReactNode
}
