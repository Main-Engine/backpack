import { Animated } from '@backpack/utils/reanimated'
import { styled } from '@backpack/utils/styled'
import {
	getContainerStyles,
	getDisplayStyles,
	getFlexStyles,
	getPositionStyles,
	getSizeStyles,
	getSpacingStyles,
} from '@backpack/utils/styles'

import type { StyledBoxProps } from './Box.types'

export const StyledBox = styled(Animated.View as any)<StyledBoxProps>(
	{},
	({ theme, ...props }) =>
		`
		${getDisplayStyles(props)}
		${getFlexStyles(props)}
		${getPositionStyles(props)}
		${getSizeStyles(props)}
		${getSpacingStyles(theme, props)}
		${getContainerStyles(theme, props)}
	`,
)
