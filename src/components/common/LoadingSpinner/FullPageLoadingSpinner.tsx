import { LoadingSpinner } from 'common/LoadingSpinner'
import { Box } from 'common/Box'

import { FullPageLoadingSpinnerProps } from './LoadingSpinner.types'

export const FullPageLoadingSpinner = ({ color }: FullPageLoadingSpinnerProps) => {
  return (
    <Box flex={1} align='center' justify='center' background='base'>
      <LoadingSpinner color={color} isLoading size='xxl' />
    </Box>
  )
}
