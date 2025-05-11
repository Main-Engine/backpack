import { Color, ResponsivePropWrapper } from 'utils/theme'

interface _SkeletonProps {
  width?: ResponsivePropWrapper<number | string>
  height?: ResponsivePropWrapper<number | string>
  minWidth?: ResponsivePropWrapper<number>
  maxWidth?: ResponsivePropWrapper<number>
  color?: ResponsivePropWrapper<Color>
  lines?: ResponsivePropWrapper<number>
}

export type SkeletonProps = ResponsivePropWrapper<_SkeletonProps>
