import { useMemo } from 'react'

import { Box } from '@backpack/components/common/Box'
import { useThemeProps } from '@backpack/hooks/theme/useThemeProps'
import { randomIntFromInterval } from '@backpack/utils/numbers'
import { SkeletonProps } from '@backpack/utils/theme'

export const SkeletonRow = (initialProps: SkeletonProps) => {
	const {
		minWidth = 45,
		maxWidth = 90,
		width,
		height = 15,
		color = 'base',
	} = useThemeProps(initialProps)

	const memoWidth = useMemo(() => {
		return width || `${randomIntFromInterval(minWidth, maxWidth)}%`
	}, [minWidth, maxWidth, width])

	return (
		<Box
			width={memoWidth}
			height={height}
			margin={{ vertical: 'xxs' }}
			borderRadius='xxs'
			background={color}
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
