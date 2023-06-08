import {
	LinearGradient as ExpoLinearGradient,
	LinearGradientProps as RNLinearGradientProps,
} from 'expo-linear-gradient'

import { useTheme } from '@backpack/contexts/Theme'
import { Color, ColorOption, CompoundColor } from '@backpack/utils/theme'

type LinearGradientProps = Omit<RNLinearGradientProps, 'colors'> & {
	colors: CompoundColor[] | Color[]
}

export const LinearGradient = ({ colors, ...props }: LinearGradientProps) => {
	const { theme } = useTheme()
	// Todo - clean this up... a lot
	const themeColors = colors.map((compoundColor) => {
		const color = compoundColor.split('.')[0] as Color
		const key = (compoundColor.split('.')[1] || 'base') as ColorOption
		return theme.color[color][key]
	})

	return <ExpoLinearGradient colors={themeColors} {...props} />
}
