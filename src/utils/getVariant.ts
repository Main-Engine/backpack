// Creates a function that returns a variant result based on the variant prop
// Allows for passing arbitrary props to the variant function
// Variant names come from the variant prop on the component type
export function getVariantFunction<
  VariantResult,
  VariantMap extends Record<string, VariantResult> = Record<string, VariantResult>
>(variants: VariantMap) {
  return (variant: keyof VariantMap): VariantResult => variants[variant]
}
