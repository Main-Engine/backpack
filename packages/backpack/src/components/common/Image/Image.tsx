import { Image as ExpoImage, ImageProps, ImageSource, ImageStyle } from 'expo-image'

import { Box, BoxProps } from '@backpack/components/common/Box'
import { useThemeProps } from '@backpack/hooks/theme/useThemeProps'
import { ResponsiveProp } from '@backpack/utils/theme'

type Props = ImageProps & {
	source?: ImageSource
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

export const Image = ({
	source,
	style = {},
	width = undefined,
	height = undefined,
	placeholder,
	// Used to calculate the aspect ratio
	dimensions,
	contentFit = 'contain',
	containerProps = {},
	...props
}: Props) => {
	const computedAspectRatio =
		dimensions?.width && dimensions?.height ? dimensions.width / dimensions.height : 1
	const themeProps = useThemeProps({ width, height })

	return (
		<Box aspectRatio={computedAspectRatio} {...themeProps} {...containerProps} overflow='hidden'>
			<ExpoImage
				transition={placeholder ? 150 : undefined}
				contentFit={contentFit}
				source={source}
				placeholder={placeholder}
				style={[{ width: '100%', height: '100%' }, style]}
				{...props}
			/>
		</Box>
	)
}
