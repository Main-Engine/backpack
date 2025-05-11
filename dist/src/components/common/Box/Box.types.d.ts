import { ViewProps } from 'react-native'
import { BaseAnimationBuilder, EntryExitAnimationFunction } from 'react-native-reanimated'
import {
  AnimationProps,
  ContainerProps,
  DisplayProps,
  FlexProps,
  PositionProps,
  SizeProps,
  SpacingProps
} from 'types/theme'
import { UnwrappedResponsiveProps } from 'utils/theme'

type LayoutAnimationPropsProps = {
  exiting?:
    | BaseAnimationBuilder
    | typeof BaseAnimationBuilder
    | EntryExitAnimationFunction
    | Keyframe
    | undefined
  entering?:
    | BaseAnimationBuilder
    | typeof BaseAnimationBuilder
    | EntryExitAnimationFunction
    | Keyframe
    | undefined
}
export type BoxProps = {
  children?: React.ReactNode
} & DisplayProps &
  FlexProps &
  PositionProps &
  SizeProps &
  SpacingProps &
  ContainerProps &
  AnimationProps &
  ViewProps &
  LayoutAnimationPropsProps
export type StyledBoxProps = UnwrappedResponsiveProps<BoxProps>
export {}
