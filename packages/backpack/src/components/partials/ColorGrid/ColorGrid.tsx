import { Box } from '@backpack/components/common/Box'
import { Stack } from '@backpack/components/common/Stack'
import { Text } from '@backpack/components/common/Text'
import { useTheme } from '@backpack/contexts/Theme'
import { Color } from '@backpack/utils/theme'
import { ColorObject } from '@backpack/utils/theme/template/colors'

const ColorBox = ({ title, color }: { title: keyof ColorObject; color: Color }) => {
	const isContrast = title === 'contrast'
	const isBase = title === 'base'

	return (
		<Box
			flex={1}
			border={{ width: 1, color: 'baseFlip' }}
			background={color}
			backgroundColorKey={title}
			padding={{ horizontal: 'xxs', vertical: 'sm' }}
			borderRadius='xxs'
			align='center'
		>
			<Box visible={{ xxs: false, lg: true }}>
				<Text
					numberOfLines={1}
					colorKey={isContrast ? 'base' : 'foreground'}
					color={color}
					weight={isBase ? 'bold' : 'normal'}
					size='xs'
					textAlign='center'
				>
					{title === 'base' ? color : title}
				</Text>
			</Box>
			<Box
				visible={{ xxs: true, lg: false }}
				background={color}
				backgroundColorKey={isContrast ? 'base' : 'foreground'}
				width={5}
				height={5}
				borderRadius='full'
			/>
		</Box>
	)
}

const ColorRow = ({ color = 'primary' }: { color: Color }) => {
	const row = [
		'shade75',
		'shade50',
		'shade25',
		'shade10',
		'base',
		'tint10',
		'tint25',
		'tint50',
		'tint75',
		'contrast',
	]

	return (
		<Stack flexDirection='row' space='sm'>
			{row.map((title) => (
				<ColorBox key={title} title={title as keyof ColorObject} color={color} />
			))}
		</Stack>
	)
}

export const ColorGrid = () => {
	const { theme } = useTheme()
	const colors = Object.keys(theme.color)

	const colorsWithoutTransparency = colors.filter((color) => !color.includes('transparent'))
	const primaryColors = colorsWithoutTransparency.filter((color) => !color.includes('Flip'))
	const flipColors = colorsWithoutTransparency.filter((color) => color.includes('Flip'))

	return (
		<Stack space='xs'>
			<Text>Base Colors</Text>
			<Stack space='xs'>
				{primaryColors.map((colorName) => (
					<ColorRow key={colorName} color={colorName as Color} />
				))}
			</Stack>
			<Stack flexDirection='row' space='sm' align='flex-end' flexWrap='wrap'>
				<Text>Flip Colors</Text>

				<Text size='xs'>Colors where the foreground becomes the base and vice versa</Text>
			</Stack>
			<Stack space='xs'>
				{flipColors.map((colorName) => (
					<ColorRow key={colorName} color={colorName as Color} />
				))}
			</Stack>
		</Stack>
	)
}
