import { UnwrappedResponsiveProps } from 'utils/theme'

type OptionalResponsiveProps<T> = {
  [key in keyof T]: T[key]
}
export declare const boxKeys: string[]
export declare const useThemeProps: <T>(
  props: OptionalResponsiveProps<T>
) => UnwrappedResponsiveProps<T>
export {}
