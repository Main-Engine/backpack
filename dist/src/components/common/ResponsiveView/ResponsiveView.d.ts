import { ResponsiveProp } from 'utils/theme'

type ResponsiveViewProps = {
  children: JSX.Element
  visible?: ResponsiveProp<boolean>
}
export declare const ResponsiveView: ({
  children,
  visible
}: ResponsiveViewProps) => JSX.Element | null
export {}
