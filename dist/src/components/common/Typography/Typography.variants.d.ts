import { Size, TextFont, TextFontWeight } from 'utils/theme'

interface VariantResult {
  font: TextFont
  weight: TextFontWeight
  size: Size
}
export declare const getVariant: (variant: string) => VariantResult
export {}
