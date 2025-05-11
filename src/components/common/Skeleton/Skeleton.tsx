import { useMemo } from 'react'

import { Box } from 'common/Box'

import { useThemeProps } from 'hooks/theme/useThemeProps'

import { randomIntFromInterval } from 'utils/numbers'
import { SkeletonProps } from 'utils/theme'

const SkeletonRow = (initialProps: SkeletonProps) => {
  const {
    minWidth = 45,
    maxWidth = 90,
    width,
    height = 15,
    color = 'base',
    colorKey = 'base',
    ...rest
  } = useThemeProps(initialProps)

  const memoWidth = useMemo(() => {
    return width || `${randomIntFromInterval(minWidth, maxWidth)}%`
  }, [minWidth, maxWidth, width])

  return (
    <Box
      width={memoWidth}
      height={height}
      margin={{ bottom: 'xxs' }}
      borderRadius='xxs'
      background={color}
      backgroundColorKey={colorKey}
      {...rest}
    />
  )
}

export const Skeleton = (initialProps: SkeletonProps) => {
  const { lines = 1, ...props } = useThemeProps(initialProps)

  const SkeletonRows = []

  for (let i = 0; i < lines; i += 1) {
    SkeletonRows.push(<SkeletonRow key={i} {...props} />)
  }

  return <>{SkeletonRows}</>
}
