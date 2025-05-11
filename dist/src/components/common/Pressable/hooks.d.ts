export declare const useHover: () => {
  hoverProps: {
    onHoverIn: () => void
    onHoverOut: () => void
  }
  isHovered: boolean
}
export declare const useFocus: () => {
  focusProps: {
    onFocus: () => void
    onBlur: () => void
  }
  isFocused: boolean
}
export declare const useIsPressed: () => {
  pressableProps: {
    onPressIn: () => void
    onPressOut: () => void
  }
  isPressed: boolean
}
