export declare const hexToGrayscale: (hex: string) => string | null
export declare const hexToRGB: (
  hex: string,
  alpha?: number
) => {
  r: number
  g: number
  b: number
  a: number
}
export declare const rgbToRgbString: ({
  r,
  g,
  b,
  a
}: {
  r: number
  g: number
  b: number
  a: number
}) => string
export declare const rgbToHex: (r: number, g: number, b: number) => string
export declare const computeTint: (hexColor: string, tintFactor?: number) => string
export declare const computeShade: (hexColor: string, shadeFactor?: number) => string
export declare const computeContrast: (hexColor: string) => {
  contrast: string
  contrast0: string
  contrast5: string
  contrast10: string
  contrast25: string
  contrast50: string
  contrast75: string
  contrast90: string
  contrast95: string
  contrast100: string
}
export declare const computeVariants: (
  base: string,
  foreground: string
) => {
  contrast: string
  contrast0: string
  contrast5: string
  contrast10: string
  contrast25: string
  contrast50: string
  contrast75: string
  contrast90: string
  contrast95: string
  contrast100: string
  tint: string
  tint0: string
  tint5: string
  tint10: string
  tint25: string
  tint50: string
  tint75: string
  tint90: string
  tint95: string
  tint100: string
  shade: string
  shade0: string
  shade5: string
  shade10: string
  shade25: string
  shade50: string
  shade75: string
  shade90: string
  shade95: string
  shade100: string
  base: string
  foreground: string
}
export declare const computeShades: (hexColor: string) => {
  shade: string
  shade0: string
  shade5: string
  shade10: string
  shade25: string
  shade50: string
  shade75: string
  shade90: string
  shade95: string
  shade100: string
}
export declare const computeTints: (hexColor: string) => {
  tint: string
  tint0: string
  tint5: string
  tint10: string
  tint25: string
  tint50: string
  tint75: string
  tint90: string
  tint95: string
  tint100: string
}
