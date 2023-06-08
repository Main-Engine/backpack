import { PressableProps as RNPressableProps } from 'react-native'

import { BoxProps } from '@backpack/components/common/Box'

export interface PressableProps
	extends Omit<BoxProps, 'children' | 'style'>,
		Omit<RNPressableProps, 'children' | 'hitSlop'> {
	children?:
		| React.ReactNode
		| (({
				isPressed,
				isHovered,
				isFocused,
		  }: {
				isPressed: boolean
				isHovered: boolean
				isFocused: boolean
		  }) => any)
}
