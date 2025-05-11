import { Breakpoint, ResponsiveProp } from 'utils/theme'

export declare const getResponsiveProp: <T>({
  breakpoint,
  prop
}: {
  breakpoint: Breakpoint
  prop?: ResponsiveProp<T>
}) => T | undefined
