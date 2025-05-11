import * as React from 'react'
import {
  ErrorBoundaryProps,
  ErrorBoundaryPropsWithComponent,
  ErrorBoundaryPropsWithFallback,
  ErrorBoundaryPropsWithRender,
  ErrorBoundaryState,
  FallbackProps
} from './ErrorBoundary.types'

declare class ErrorBoundary extends React.Component<
  React.PropsWithRef<React.PropsWithChildren<ErrorBoundaryProps>>,
  ErrorBoundaryState
> {
  static getDerivedStateFromError(error: Error): {
    error: Error
  }
  constructor(props: ErrorBoundaryProps)
  componentDidUpdate(prevProps: ErrorBoundaryProps, prevState: ErrorBoundaryState): void
  componentDidCatch(error: Error, info: React.ErrorInfo): void
  resetErrorBoundary: (...args: Array<unknown>) => void
  reset(): void
  render():
    | string
    | number
    | boolean
    | Iterable<React.ReactNode>
    | import('react/jsx-runtime').JSX.Element
    | null
    | undefined
}
declare function useErrorHandler(givenError?: unknown): (error: unknown) => void
export { ErrorBoundary, useErrorHandler }
export type {
  FallbackProps,
  ErrorBoundaryPropsWithComponent,
  ErrorBoundaryPropsWithRender,
  ErrorBoundaryPropsWithFallback,
  ErrorBoundaryProps
}
