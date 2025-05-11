/* 
  This component was pulled from https://github.com/bvaughn/react-error-boundary
*/
import * as React from 'react'

import {
  ErrorBoundaryProps,
  ErrorBoundaryPropsWithComponent,
  ErrorBoundaryPropsWithFallback,
  ErrorBoundaryPropsWithRender,
  ErrorBoundaryState,
  FallbackProps
} from './ErrorBoundary.types'

const changedArray = (a: Array<unknown> = [], b: Array<unknown> = []) =>
  a.length !== b.length || a.some((item, index) => !Object.is(item, b[index]))

const initialState: ErrorBoundaryState = { error: null }

class ErrorBoundary extends React.Component<
  React.PropsWithRef<React.PropsWithChildren<ErrorBoundaryProps>>,
  ErrorBoundaryState
> {
  static getDerivedStateFromError(error: Error) {
    return { error }
  }

  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = initialState
  }

  componentDidUpdate(prevProps: ErrorBoundaryProps, prevState: ErrorBoundaryState) {
    const { error } = this.state
    const { resetKeys } = this.props

    // There's an edge case where if the thing that triggered the error
    // happens to *also* be in the resetKeys array, we'd end up resetting
    // the error boundary immediately. This would likely trigger a second
    // error to be thrown.
    // So we make sure that we don't check the resetKeys on the first call
    // of cDU after the error is set

    if (
      error !== null &&
      prevState.error !== null &&
      changedArray(prevProps.resetKeys, resetKeys)
    ) {
      const { onResetKeysChange } = this.props
      onResetKeysChange?.(prevProps.resetKeys, resetKeys)
      this.reset()
    }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    const { onError } = this.props
    onError?.(error, { componentStack: info.componentStack || '' })
  }

  resetErrorBoundary = (...args: Array<unknown>) => {
    const { onReset } = this.props
    onReset?.(...args)
    this.reset()
  }

  reset() {
    this.setState(initialState)
  }

  render() {
    const { error } = this.state

    const { fallbackRender, FallbackComponent, fallback } = this.props

    if (error !== null) {
      const props = {
        error,
        resetErrorBoundary: this.resetErrorBoundary
      }
      if (React.isValidElement(fallback)) {
        return fallback
      }
      if (typeof fallbackRender === 'function') {
        return fallbackRender(props)
      }
      if (FallbackComponent) {
        return <FallbackComponent {...props} />
      }
      throw new Error(
        'ErrorBoundary requires either a fallback, fallbackRender, or FallbackComponent prop'
      )
    }

    const { children } = this.props
    return children
  }
}

function useErrorHandler(givenError?: unknown): (error: unknown) => void {
  const [error, setError] = React.useState<unknown>(null)
  // eslint-disable-next-line @typescript-eslint/no-throw-literal
  if (givenError != null) throw givenError
  // eslint-disable-next-line @typescript-eslint/no-throw-literal
  if (error != null) throw error
  return setError
}

export { ErrorBoundary, useErrorHandler }
export type {
  FallbackProps,
  ErrorBoundaryPropsWithComponent,
  ErrorBoundaryPropsWithRender,
  ErrorBoundaryPropsWithFallback,
  ErrorBoundaryProps
}
