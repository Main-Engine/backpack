import React from 'react'

export interface FallbackProps {
  error: Error
  resetErrorBoundary: (...args: Array<unknown>) => void
}
export interface ErrorBoundaryPropsWithComponent {
  onResetKeysChange?: (
    prevResetKeys: Array<unknown> | undefined,
    resetKeys: Array<unknown> | undefined
  ) => void
  onReset?: (...args: Array<unknown>) => void
  onError?: (
    error: Error,
    info: {
      componentStack: string
    }
  ) => void
  resetKeys?: Array<unknown>
  fallback?: never
  FallbackComponent: React.ComponentType<FallbackProps>
  fallbackRender?: never
}
export declare function FallbackRender(
  props: FallbackProps
): React.ReactElement<unknown, string | React.FunctionComponent | typeof React.Component> | null
export interface ErrorBoundaryPropsWithRender {
  onResetKeysChange?: (
    prevResetKeys: Array<unknown> | undefined,
    resetKeys: Array<unknown> | undefined
  ) => void
  onReset?: (...args: Array<unknown>) => void
  onError?: (
    error: Error,
    info: {
      componentStack: string
    }
  ) => void
  resetKeys?: Array<unknown>
  fallback?: never
  FallbackComponent?: never
  fallbackRender: typeof FallbackRender
}
export interface ErrorBoundaryPropsWithFallback {
  onResetKeysChange?: (
    prevResetKeys: Array<unknown> | undefined,
    resetKeys: Array<unknown> | undefined
  ) => void
  onReset?: (...args: Array<unknown>) => void
  onError?: (
    error: Error,
    info: {
      componentStack: string
    }
  ) => void
  resetKeys?: Array<unknown>
  fallback: React.ReactElement<
    unknown,
    string | React.FunctionComponent | typeof React.Component
  > | null
  FallbackComponent?: never
  fallbackRender?: never
}
export type ErrorBoundaryProps =
  | ErrorBoundaryPropsWithFallback
  | ErrorBoundaryPropsWithComponent
  | ErrorBoundaryPropsWithRender
export type ErrorBoundaryState = {
  error: Error | null
}
