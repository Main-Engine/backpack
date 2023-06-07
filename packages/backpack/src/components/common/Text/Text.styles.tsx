import { Text } from 'react-native'

import { styled } from '@backpack/utils/styled'
import { getDisplayStyles, getSpacingStyles, getTypographyStyles } from '@backpack/utils/styles'

import { StyledTextProps } from './Text.types'

// @ts-expect-error: Jase, can you help here?
export const StyledText = styled(Text)<StyledTextProps>`
	${({ theme, ...props }) => `
			${getDisplayStyles(props)}
			${getSpacingStyles(theme, props)}
			${getTypographyStyles(theme, props)}
    `}
`
