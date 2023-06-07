import { ResponsiveView } from '@backpack/components/common/ResponsiveView'
import { Skeleton } from '@backpack/components/common/Skeleton'
import { useThemeProps } from '@backpack/hooks/theme/useThemeProps'

import { StyledText } from './Text.styles'
import { TextProps } from './Text.types'

export const Text = ({ style, children, ...props }: TextProps) => {
	const themeProps = useThemeProps(props)

	// Load in a skeleton state
	if (props.isLoading) {
		return <Skeleton {...themeProps.skeleton} />
	}

	return (
		<ResponsiveView visible={themeProps.visible}>
			<StyledText selectable {...themeProps} style={style}>
				{children}
			</StyledText>
		</ResponsiveView>
	)
}
