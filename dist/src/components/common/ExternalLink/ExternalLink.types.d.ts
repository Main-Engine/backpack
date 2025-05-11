import { PressableProps } from 'common/Pressable'

export interface Props extends PressableProps {
  children: React.ReactNode
  href: string
}
