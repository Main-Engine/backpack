import { useState } from 'react'

import { Box } from '@backpack/components/common/Box'
import { ImageBackground } from '@backpack/components/common/ImageBackground'
import { LinearGradient } from '@backpack/components/common/LinearGradient'
import { Text } from '@backpack/components/common/Text'
import { useTheme } from '@backpack/contexts/Theme'
import { StyleProp, ViewStyle } from '@backpack/types/react'
import { Color, Size } from '@backpack/utils/theme'

type AvatarProps = {
	children?: string
	src?: { uri?: string }
	size?: Size
	backgroundColor?: Color
	style?: StyleProp<ViewStyle>
}

export const Avatar = ({
	children,
	src,
	size = 'xs',
	backgroundColor = 'primary',
	style = {},
}: AvatarProps) => {
	const { theme } = useTheme()
	const [avatarLoaded, setAvatarLoaded] = useState(!!(src && src.uri))

	const imageBackgroundStyle = {
		width: '100%',
		height: '100%',
	}

	const initials = children
		?.split(' ')
		.filter((_, index) => index < 2)
		.map((n) => n[0])
		.join('')

	const childrenContent = initials ? (
		<Box borderRadius='full' justify='center' align='center' width='100%' height='100%'>
			<Text isLoading={!initials} size={size} color={backgroundColor}>
				{initials}
			</Text>
		</Box>
	) : null

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
		>
			{src?.uri ? (
				<ImageBackground
					onError={() => setAvatarLoaded(false)}
					source={src}
					style={imageBackgroundStyle}
				>
					{!avatarLoaded && children ? childrenContent : null}
				</ImageBackground>
			) : (
				<>
					<LinearGradient
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 1 }}
						colors={['primary', 'secondary']}
						// eslint-disable-next-line react-native/no-inline-styles
						style={{
							width: '100%',
							height: '100%',
							position: 'absolute',
							top: 0,
							left: 0,
							right: 0,
						}}
					/>
					{childrenContent}
				</>
			)}
		</Box>
	)
}
