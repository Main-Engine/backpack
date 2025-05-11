import { ResponsiveView } from 'common/ResponsiveView'
import { Skeleton } from 'common/Skeleton'

import { useTheme } from 'contexts/theme'

import { useThemeProps } from 'hooks/theme/useThemeProps'

import { createTypographyStyles } from './Typography.styles'
import { TypographyProps } from './Typography.types'
import { getVariant } from './Typography.variants'
import { LibText } from './lib'

export const Typography = ({ style, children, variant = 'body', ...props }: TypographyProps) => {
  const { theme } = useTheme()
  const variantProps = getVariant(variant)
  const themeProps = useThemeProps({ ...variantProps, ...props })
  const styles = createTypographyStyles(theme, { ...themeProps, children })

  // Load in a skeleton state
  if (props.isLoading) {
    return <Skeleton {...themeProps.skeleton} />
  }

  return (
    <ResponsiveView visible={themeProps.visible}>
      <LibText {...themeProps} style={[styles.text, style]}>
        {children}
      </LibText>
    </ResponsiveView>
  )
}
