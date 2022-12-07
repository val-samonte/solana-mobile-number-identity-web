import { ReactNode } from 'react'

export function LoadingIndicator({ children }: { children?: ReactNode }) {
  return (
    <div className='absolute inset-0 flex items-center justify-center'>
      {children ?? 'Loading...'}
    </div>
  )
}
