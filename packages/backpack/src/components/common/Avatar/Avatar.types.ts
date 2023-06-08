import { StyleProp, ViewStyle } from '@backpack/types/react'
import { Color, Size } from '@backpack/utils/theme'

export interface AvatarProps {
	children?: React.ReactNode
	src?: { uri: string }
	size?: Size
	backgroundColor?: Color
	style?: StyleProp<ViewStyle>
}
