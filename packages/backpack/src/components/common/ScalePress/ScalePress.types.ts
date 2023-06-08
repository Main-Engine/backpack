interface StyleProp {
	transform: { scale: number }[]
}

export interface ScalePressProps {
	children: (style: StyleProp) => JSX.Element
	onPress?: () => void
}
