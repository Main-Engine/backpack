import { LayoutChangeEvent, StyleProp, ViewStyle } from 'types/react'

import { Box } from 'common/Box'
import { ScrollView } from 'common/ScrollView'

import { usePage } from 'contexts/page'
import { useTheme } from 'contexts/theme'
import { useWindow } from 'contexts/window'

import { platform } from 'utils/constants'
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

export const Page = ({
  hasMarketingNav = false,
  hasScroll = true,
  children,
  background,
  hasInset = false,
  style = {},
  onLayout
}: PageProps) => {
  const { insets } = useWindow()
  const { theme } = useTheme()
  const { navHeight } = usePage()

  const MainContent = children

  let marginTop = 0
  let paddingTop = 0

  if (hasInset) {
    paddingTop = insets.top + theme.space.base.xs
  } else if (hasMarketingNav) {
    marginTop = navHeight
  }

  return (
    <Box
      flex={1}
      background={background}
      style={hasInset ? { marginTop, paddingTop } : {}}
      onLayout={onLayout}
    >
      {hasScroll ? (
        <ScrollView
          showsVerticalScrollIndicator={platform.isWeb}
          showsHorizontalScrollIndicator={platform.isWeb}
          style={[{ marginTop, paddingTop }, style]}
        >
          {MainContent}
        </ScrollView>
      ) : (
        MainContent
      )}
    </Box>
  )
}
