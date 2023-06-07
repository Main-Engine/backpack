import { ViewProps } from 'react-native'

import {
	AnimationProps,
	ContainerProps,
	DisplayProps,
	FlexProps,
	PositionProps,
	SizeProps,
	SpacingProps,
} from '@backpack/types/theme'
import { UnwrappedResponsiveProps } from '@backpack/utils/theme'

export type BoxProps = {
	children?: React.ReactNode
} & DisplayProps &
	FlexProps &
	PositionProps &
	SizeProps &
	SpacingProps &
	ContainerProps &
	AnimationProps &
	ViewProps

export type StyledBoxProps = UnwrappedResponsiveProps<BoxProps>
