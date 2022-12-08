import { userWalletAtom } from '@/atoms/userWalletAtom'
import { GlowingTitle } from '@/components/GlowingTitle'
import { trimAddress } from '@/utils/trimAddress'
import classNames from 'classnames'
import { useAtomValue } from 'jotai'

export function App() {
  const { publicKey } = useAtomValue(userWalletAtom)
  const { disconnect } = useAtomValue(userWalletAtom)

  if (!publicKey) return null

  return (
    <div className='lg:landscape:w-square mx-auto min-h-screen relative flex flex-col'>
      <nav className='px-5 py-3 flex items-center justify-between gap-5 sticky top-0 bg-zinc-900 z-10'>
        <h1 className='text-2xl 2xl:text-4xl font-bold'>
          <GlowingTitle text='identity' />
        </h1>
        <ul className='flex items-center gap-3'>
          <li className='hidden landscape:block'>
            <button className='landscape:px-2 underline'>New ID</button>
          </li>
          <li className='hidden landscape:block'>
            <button className='landscape:px-2'>My IDs</button>
          </li>
          <li className='hidden landscape:block'>
            <button className='landscape:px-2'>Documentation</button>
          </li>
          <li>
            <button
              className='landscape:px-2 flex items-center'
              onClick={disconnect}
            >
              <span className='mr-2'>Disconnect</span>{' '}
              <span className='font-bold'>
                {trimAddress(publicKey.toBase58())}
              </span>
            </button>
          </li>
        </ul>
      </nav>
      <div className='flex-auto p-5 relative'></div>
      <nav className='hidden portrait:flex sticky bottom-0 w-full bg-zinc-900 inset-x-0'>
        <ul className='grid grid-cols-3 w-full'>
          <li>
            <button
              className={classNames(
                'w-full h-12 flex items-center justify-center',
                'bg-black/10 text-zinc-400',
              )}
            >
              New ID
            </button>
          </li>
          <li>
            <button className='w-full h-12 flex items-center justify-center'>
              My IDs
            </button>
          </li>
          <li>
            <button
              className={classNames(
                'w-full h-12 flex items-center justify-center',
                'bg-black/10 text-zinc-400',
              )}
            >
              Docs
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}
