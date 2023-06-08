import { Box } from '@backpack/components/common/Box'

import { DividerProps } from './Divider.types'

export const Divider = ({ height = 1, background = 'baseFlip', ...props }: DividerProps) => {
	return (
		<Box
			height={height}
			width='100%'
			background={background}
			backgroundColorKey='tint75'
			{...props}
		/>
	)
}
