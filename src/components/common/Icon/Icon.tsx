import { useThemeProps } from 'hooks/theme/useThemeProps'

import { FontAwesome, fontAwesomeGlyphMap } from './FontAwesome'
import type { IconProps } from './Icon.types'

export const Icon = ({ color = 'base', size = 'md', weight = 'regular', ...rest }: IconProps) => {
  const props = {
    color,
    size,
    weight,
    ...rest
  }
  const themeProps = useThemeProps(props)

  if (fontAwesomeGlyphMap[themeProps.name]) {
    return <FontAwesome {...themeProps} style={props.style} />
  }

  // In the future, we can add more glyph maps here
  return null
}
