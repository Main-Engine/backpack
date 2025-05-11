/* eslint-disable @typescript-eslint/no-var-requires */
import { createIconSet } from '@expo/vector-icons'

import { useTheme } from 'contexts/theme'

import {
  faBrandsRegular,
  faProLight,
  faProRegular,
  faProSolid,
  faProThin
} from 'utils/constants/fonts'
import { Color, ColorOption, Size } from 'utils/theme'

import type { StyledIconProps } from '../Icon.types'
import { fontAwesomeGlyphMap, fontawesomeBrandsGlyphMap } from './fontAwesomeGlyphMap'

const FontAwesomeThin = createIconSet(
  fontAwesomeGlyphMap,
  faProThin,

  require('../../../../assets/fonts/fontawesome/FA6Pro-Thin-100.otf')
)

const FontAwesomeLight = createIconSet(
  fontAwesomeGlyphMap,
  faProLight,

  require('../../../../assets/fonts/fontawesome/FA6Pro-Light-300.otf')
)

const FontAwesomeRegular = createIconSet(
  fontAwesomeGlyphMap,
  faProRegular,

  require('../../../../assets/fonts/fontawesome/FA6Pro-Regular-400.otf')
)

const FontAwesomeSolid = createIconSet(
  fontAwesomeGlyphMap,
  faProSolid,

  require('../../../../assets/fonts/fontawesome/FA6Pro-Solid-900.otf')
)

const FontAwesomeBrands = createIconSet(
  fontawesomeBrandsGlyphMap,
  faBrandsRegular,

  require('../../../../assets/fonts/fontawesome/FA6Brands-Regular-400.otf')
)

export const FontAwesome = ({
  name,
  color = 'base',
  colorKey = 'foreground',
  size = 'xxl',
  style = {},
  weight = 'regular'
}: StyledIconProps) => {
  const { theme } = useTheme()

  const iconColor = theme.color[color as Color][colorKey as ColorOption]
  const iconSize = theme.size.font[size as Size]

  const props = {
    name,
    color: iconColor,
    size: iconSize,
    style
  }

  if (name in fontawesomeBrandsGlyphMap) {
    return (
      <FontAwesomeBrands {...props} name={props.name as keyof typeof fontawesomeBrandsGlyphMap} />
    )
  }

  switch (weight) {
    case 'thin':
      return <FontAwesomeThin {...props} />
    case 'light':
      return <FontAwesomeLight {...props} />
    case 'solid':
      return <FontAwesomeSolid {...props} />
    default:
      return <FontAwesomeRegular {...props} />
  }
}
