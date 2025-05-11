import { Box, BoxProps } from 'common/Box'

import { useTheme } from 'contexts/theme'
import { useWindow } from 'contexts/window'

type ContainerProps = BoxProps

export const Container = ({ children, maxWidth, ...props }: ContainerProps) => {
  const { insets, breakpoint } = useWindow()
  const { theme } = useTheme()
  const { isMobile } = breakpoint

  return (
    <Box
      /* 
        This accounts for the notch on iOS devices, but if we're not on mobile, 
        then there is a sidebar, so we dont want to add margin here, 
        since we add it to the sidebar.
      */
      display='flex'
      padding={{ left: isMobile ? insets.left || 'md' : 'md', right: insets.right || 'md' }}
      width='100%'
      maxWidth={maxWidth || theme.maxWidth}
      {...props}
    >
      {children}
    </Box>
  )
}
