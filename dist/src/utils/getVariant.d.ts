export declare function getVariantFunction<
  VariantResult,
  VariantMap extends Record<string, VariantResult> = Record<string, VariantResult>
>(variants: VariantMap): (variant: keyof VariantMap) => VariantResult
