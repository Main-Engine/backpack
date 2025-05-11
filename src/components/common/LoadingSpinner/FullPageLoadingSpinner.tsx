import { LoadingSpinner } from 'common/LoadingSpinner'
import { Stack } from 'common/Stack'

import { FullPageLoadingSpinnerProps } from './LoadingSpinner.types'

export const FullPageLoadingSpinner = ({ color }: FullPageLoadingSpinnerProps) => {
  return (
    <Stack flex={1} align='center' justify='center' background='base'>
      <LoadingSpinner color={color} isLoading size='xxl' />
    </Stack>
  )
}
