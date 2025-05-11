import { LinkProps } from 'expo-router/build/link/Link'
import { Color, ResponsiveProp, Size } from 'utils/theme'

export type ButtonProps = {
  variant?: 'solid' | 'outline' | 'icon'
  withHaptics?: boolean
  size?: ResponsiveProp<Size>
  onPress?: () => void
  href?: LinkProps['href'] & {
    push?: boolean
  }
  icon?: React.ReactElement
  loading?: boolean
  disabled?: boolean
  color?: Color
}
