import { userWalletAtom } from '@/atoms/userWalletAtom'
import { LoadingIndicator } from '@/components/LoadingIndicator'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import classNames from 'classnames'
import { useAtomValue } from 'jotai'
import { Suspense } from 'react'
import { App } from './App'
import { FrontPage } from './FrontPage'

export function Root() {
  const { publicKey } = useAtomValue(userWalletAtom)

  return (
    <div className='fixed inset-0 overflow-x-hidden overflow-y-auto'>
      <div className={classNames('w-full min-h-full', 'mx-auto flex flex-col')}>
        <main className='flex-auto relative'>
          <Suspense fallback={<LoadingIndicator />}>
            <div className='absolute inset-0 flex landscape:items-center landscape:justify-center'>
              <div className='mx-auto landscape:my-auto w-full max-h-full overflow-auto'>
                {publicKey ? <App /> : <FrontPage />}
              </div>
            </div>
          </Suspense>
        </main>
      </div>
    </div>
  )
}
