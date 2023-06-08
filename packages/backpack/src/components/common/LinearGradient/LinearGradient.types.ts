import { LinearGradientProps as RNLinearGradientProps } from 'expo-linear-gradient'

import { Color } from '@backpack/utils/theme'

export interface LinearGradientProps extends Omit<RNLinearGradientProps, 'colors'> {
	colors: Color[]
}
