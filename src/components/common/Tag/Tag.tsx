import { BoxProps } from 'common/Box'
import { Icon, IconKey } from 'common/Icon'
import { Box } from 'common/Box'
import { Typography } from 'common/Typography'

import { Color, IconFontWeight, Size } from 'utils/theme'

type Props = BoxProps & {
  title?: string
  size?: Size
  icon?: IconKey
  color?: Color
  background?: Color
  weight?: IconFontWeight
}

export const Tag = ({
  title = '',
  color = 'base',
  background,
  icon,
  size = 'xs',
  weight = 'regular',
  borderRadius = 'md',
  margin = { bottom: 'xs' },
  padding = { horizontal: 'sm', vertical: 'xxs' },
  border
}: Props) => {
  return (
    <Box
      flexDirection='row'
      borderRadius={borderRadius}
      background={background || color}
      gap={size}
      margin={margin}
      justify='center'
      align='center'
      padding={padding}
      alignSelf='flex-start'
      border={border}
    >
      {icon ? <Icon name={icon} size={size} color={color} weight={weight} /> : null}
      {title ? (
        <Typography size={size} textAlign='center' color={color} weight='medium' numberOfLines={1}>
          {title}
        </Typography>
      ) : null}
    </Box>
  )
}
