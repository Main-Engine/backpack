import { Box, BoxProps } from 'common/Box'

type CardProps = BoxProps & {
  children: React.ReactNode
}

export const Card = ({
  children,
  background = 'base',
  padding = 'md',
  margin = { vertical: 'xs' },
  borderRadius = 'xs',
  border = { width: 0 },
  width = '100%',
  ...other
}: CardProps) => {
  return (
    <Box
      background={background}
      padding={padding}
      borderRadius={borderRadius}
      border={border}
      shadow='xxs'
      margin={margin}
      width={width}
      {...other}
    >
      {children}
    </Box>
  )
}
