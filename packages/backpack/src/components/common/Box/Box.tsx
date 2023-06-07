import { ResponsiveView } from '@backpack/components/common/ResponsiveView'
import { useThemeProps } from '@backpack/hooks/theme/useThemeProps'
import { PanGestureHandler } from '@backpack/utils/reanimated'

import { StyledBox } from './Box.styles'
import type { BoxProps } from './Box.types'

export const Box = ({ style, children, ...rest }: BoxProps) => {
	const { onGestureEvent, ...themeProps } = useThemeProps<BoxProps>(rest)

	const StyledBoxContent = (
		<StyledBox {...themeProps} style={style}>
			{children}
		</StyledBox>
	)

	if (onGestureEvent) {
		return (
			<ResponsiveView visible={themeProps.visible}>
				<PanGestureHandler onGestureEvent={onGestureEvent}>{StyledBoxContent}</PanGestureHandler>
			</ResponsiveView>
		)
	}

	return <ResponsiveView visible={themeProps.visible}>{StyledBoxContent}</ResponsiveView>
}
