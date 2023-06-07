import { BoxProps } from '@backpack/components/common/Box'
import { ResponsiveProp, Space } from '@backpack/utils/theme'

export interface StackProps extends BoxProps {
	children: React.ReactNode | React.ReactNode[]
	space?: ResponsiveProp<Space>
	flexDirection?: ResponsiveProp<'row' | 'column' | 'row-reverse' | 'column-reverse'>
}
