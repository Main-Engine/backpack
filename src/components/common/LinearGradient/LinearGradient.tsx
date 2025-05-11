import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient'

import { useTheme } from 'contexts/theme'

import { Color, ColorOption } from 'utils/theme'

import { LinearGradientProps } from './LinearGradient.types'

export const LinearGradient = ({ colors, ...props }: LinearGradientProps) => {
  const { theme } = useTheme()
  // Todo - clean this up... a lot
  const themeColors = colors.map((compoundColor) => {
    const color = compoundColor.split('.')[0] as Color
    const key = (compoundColor.split('.')[1] || 'base') as ColorOption
    return theme.color[color][key]
  })

  return <ExpoLinearGradient colors={themeColors as [string, string, ...string[]]} {...props} />
}
