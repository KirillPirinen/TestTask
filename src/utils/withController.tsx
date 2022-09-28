import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'
import type { SliceResponce } from '../redux/types'
import { Loader } from '../components'

type HocProps = Pick<SliceResponce<unknown>, 'error' | 'loading'>

export const withController = <P extends object>(
  Component: React.ComponentType<P>
) => ({ error, loading, ...wrappedProps }: P & HocProps) => {
 
  if(loading) {
    return <Loader />
  }

  if(error) {
    return (
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity={error.code < 500 ? 'warning' : 'error'}>
          {error.message}
        </Alert>
      </Stack>
    )
  }

  return <Component {...wrappedProps as P} />
}
