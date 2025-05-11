import { Color, ColorOption, Shadow } from 'utils/theme'

export const variants = (color: Color) => {
  return {
    solid: {
      backgroundColor: color,
      borderColor: color,
      shadow: null,
      colorKey: 'foreground' as ColorOption,
      color
    },
    outline: {
      backgroundColor: 'transparent0' as Color,
      borderColor: color,
      shadow: 'none' as Shadow,
      colorKey: 'base' as ColorOption,
      color
    },
    icon: {
      backgroundColor: 'transparent0' as Color,
      borderColor: 'transparent0' as Color,
      shadow: 'none' as Shadow,
      colorKey: 'base' as ColorOption,
      color
    }
  }
}
