import React from 'react'
import { EdgeInsets } from 'utils/safeArea'
import { Breakpoint, ResponsiveObject } from 'utils/theme'

type Dimensions = {
  width: number
  height: number
  ratio: number
  isHorizontal: boolean
  isVertical: boolean
}
type WindowContextState = {
  dimensions: Dimensions
  breakpoint: Breakpoint
  breakpoints: ResponsiveObject<boolean>
  insets: EdgeInsets
}
declare const WindowProvider: ({
  children
}: {
  children: React.ReactNode
}) => import('react/jsx-runtime').JSX.Element
declare const useWindow: () => WindowContextState
export { WindowProvider, useWindow }
