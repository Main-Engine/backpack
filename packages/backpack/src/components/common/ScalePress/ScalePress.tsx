import { Pressable } from '@backpack/components/common/Pressable'
import {
	Gesture,
	GestureDetector,
	useAnimatedStyle,
	useSharedValue,
	withSpring,
} from '@backpack/utils/reanimated'

type StyleProp = { transform: { scale: number }[] }
export const ScalePress = ({
	children,
	onPress,
	activeScale = 0.95,
	disabled = false,
}: {
	activeScale?: number
	children: (style: StyleProp) => JSX.Element
	onPress?: () => void
	disabled?: boolean
}) => {
	const springConfig = {
		damping: 10,
		mass: 0.5,
		stiffness: 400,
	}

	const scale = useSharedValue(1)
	const animatedStyle = useAnimatedStyle(() => {
		return {
			transform: [
				{
					scale: withSpring(scale.value, springConfig),
				},
			],
		}
	})

	const tapGesture = Gesture.Tap()
		.onBegin(() => {
			scale.value = activeScale
		})
		.onTouchesMove(() => {
			scale.value = 1
		})
		.onFinalize(() => {
			scale.value = 1
		})

	return (
		<Pressable onPress={onPress} disabled={disabled}>
			{disabled ? (
				<>{children(animatedStyle)}</>
			) : (
				<GestureDetector gesture={tapGesture}>{children(animatedStyle)}</GestureDetector>
			)}
		</Pressable>
	)
}
