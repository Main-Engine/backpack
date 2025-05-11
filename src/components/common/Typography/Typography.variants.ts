import { getVariantFunction } from 'utils/getVariant'
import { Size, TextFont, TextFontWeight } from 'utils/theme'

interface VariantResult {
  font: TextFont
  weight: TextFontWeight
  size: Size
}

export const getVariant = getVariantFunction<VariantResult>({
  title: {
    font: 'heading',
    weight: 'bold',
    size: 'xl'
  },
  subtitle: {
    font: 'heading',
    weight: 'normal',
    size: 'md'
  },
  body: {
    font: 'body',
    weight: 'normal',
    size: 'xs'
  },
  subtle: {
    font: 'body',
    weight: 'normal',
    size: 'xxs'
  },
  button: {
    font: 'body',
    weight: 'bold',
    size: 'sm'
  },
  label: {
    font: 'body',
    weight: 'bold',
    size: 'sm'
  }
} as Record<string, VariantResult>)
