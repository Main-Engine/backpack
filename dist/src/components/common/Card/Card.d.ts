import { BoxProps } from 'common/Box'

type CardProps = BoxProps & {
  children: React.ReactNode
}
export declare const Card: ({
  children,
  background,
  padding,
  margin,
  borderRadius,
  border,
  width,
  ...other
}: CardProps) => import('react/jsx-runtime').JSX.Element
export {}
