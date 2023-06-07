import { Fragment } from 'react'

import { Box } from '@backpack/components/common/Box'
import { useTheme } from '@backpack/contexts/Theme'
import { useThemeProps } from '@backpack/hooks/theme/useThemeProps'

import { StackProps } from './Stack.types'

export const Stack = ({ children, space, flexDirection = 'column', ...props }: StackProps) => {
	const { theme } = useTheme()
	const themeProps = useThemeProps({ flexDirection, space })

	const calculatedSpace = themeProps.space ? theme.space.base[themeProps.space] : 0

	const childrenWithoutNull =
		children && Array.isArray(children)
			? children.filter((_child) => _child !== false && _child !== null && _child !== undefined)
			: children

	const childrenWithSpace =
		childrenWithoutNull && Array.isArray(childrenWithoutNull) && childrenWithoutNull.length
			? childrenWithoutNull.map((child: React.ReactNode, index: number) => {
					return (
						// eslint-disable-next-line react/no-array-index-key
						<Fragment key={index}>
							{child}
							{index < childrenWithoutNull.length - 1 ? (
								<Box
									height={themeProps.flexDirection?.includes('column') ? calculatedSpace : 0}
									width={themeProps.flexDirection?.includes('row') ? calculatedSpace : 0}
								/>
							) : null}
						</Fragment>
					)
			  })
			: children

	return (
		<Box flexDirection={flexDirection} {...props}>
			{childrenWithSpace}
		</Box>
	)
}
