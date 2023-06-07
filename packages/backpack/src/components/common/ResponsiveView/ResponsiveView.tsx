import { useThemeProps } from '@backpack/hooks/theme/useThemeProps'
import { ResponsiveProp } from '@backpack/utils/theme'

type ResponsiveViewProps = {
	children: JSX.Element
	visible?: ResponsiveProp<boolean>
}

export const ResponsiveView = ({ children, visible }: ResponsiveViewProps) => {
	const { visible: isVisible } = useThemeProps({ visible })

	if (visible === undefined) return children
	if (!isVisible) return null

	return children
}
