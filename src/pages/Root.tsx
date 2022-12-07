import { LoadingIndicator } from '@/components/LoadingIndicator'
import classNames from 'classnames'
import { Suspense } from 'react'
import { App } from './App'

export function Root() {
  return (
    <div className='fixed inset-0 overflow-x-hidden overflow-y-auto'>
      <div
        className={classNames(
          'lg:landscape:w-square w-full min-h-full',
          'mx-auto flex flex-col',
        )}
      >
        <main className='flex-auto relative'>
          <Suspense fallback={<LoadingIndicator />}>
            <App />
          </Suspense>
        </main>
        {/* 
        <footer className='flex-none flex items-center justify-center p-5'>
          <div className='flex items-center'>
            <img className='h-6 mr-3 text-zinc-50' src='/discord.svg' />
            Join Our Community
          </div>
        </footer> 
        */}
      </div>
    </div>
  )
}
