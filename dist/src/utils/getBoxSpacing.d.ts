import { BoxSpacing, Space } from 'utils/theme'

export declare const getBoxSpacing: (
  prop: string,
  spacing?: BoxSpacing | Space
) => {
  [x: string]: number | 'none' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | undefined
}
