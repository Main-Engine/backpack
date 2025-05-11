import { LayoutChangeEvent, StyleProp, ViewStyle } from 'types/react'
import { Color } from 'utils/theme'

export type PageProps = {
  hasMarketingNav?: boolean
  hasScroll?: boolean
  hasFooter?: boolean
  hasInset?: boolean
  background?: Color
  style?: StyleProp<ViewStyle>
  children: React.ReactNode
  onLayout?: (event: LayoutChangeEvent) => void
}
export declare const Page: ({
  hasMarketingNav,
  hasScroll,
  children,
  background,
  hasInset,
  style,
  onLayout
}: PageProps) => import('react/jsx-runtime').JSX.Element
