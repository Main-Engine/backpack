import { Box } from '@backpack/components/common/Box'

import { CardProps } from './Card.types'

export const Card = ({
	children,
	background = 'base',
	padding = 'lg',
	margin = { vertical: 'xs' },
	borderRadius = 'sm',
	border = { width: 2, color: 'baseFlip' },
	width = '100%',
	...other
}: CardProps) => {
	return (
		<Box
			background={background}
			padding={padding}
			borderRadius={borderRadius}
			border={border}
			shadow='xxs'
			margin={margin}
			width={width}
			{...other}
		>
			{children}
		</Box>
	)
}
