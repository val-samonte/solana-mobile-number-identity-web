import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import classNames from 'classnames'

export function App() {
  const { setVisible } = useWalletModal()

  return (
    <div className='flex flex-col p-5 landscape:py-10 gap-10 items-center justify-center portrait:min-h-screen'>
      <div className='flex flex-col landscape:flex-row landscape:items-center portrait:gap-5'>
        <div className='landscape:flex-auto flex items-center justify-center'>
          <img
            className='h-64 aspect-square'
            src='/identity.svg'
            alt='identity logo'
          />
        </div>
        <div className='flex-auto flex flex-col'>
          <small className='text-base opacity-50'>mythrilsoft</small>
          <h1 className='text-4xl font-bold'>identity</h1>
          <hr className='my-3 opacity-20' />
          <p className='md:text-lg max-w-xs'>
            Easily associate your phone number to your Solana wallet address
            with privacy
          </p>
        </div>
      </div>
      <button
        type='button'
        onClick={() => setVisible(true)}
        className={classNames(
          'transition-all rounded-full',
          'py-3 px-5 hover:py-5 hover:px-7 hover:-m-2',
          'text-zinc-900 bg-zinc-200 hover:bg-white',
        )}
      >
        Connect to Get Started
      </button>
    </div>
  )
}
