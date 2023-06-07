import { ResponsiveProp } from '@backpack/utils/theme'

export interface ResponsiveViewProps {
	children: JSX.Element
	visible?: ResponsiveProp<boolean>
}
