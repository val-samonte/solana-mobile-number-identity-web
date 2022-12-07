import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import classNames from 'classnames'

export function App() {
  const { setVisible } = useWalletModal()

  return (
    <div className='flex flex-col landscape:flex-row m-5 landscape:my-10 gap-5 items-center'>
      <div className='flex-auto flex flex-col'>
        <small className='text-base opacity-50'>Mythrilsoft</small>
        <h1 className='text-4xl font-bold'>identity</h1>
        <hr className='my-3 opacity-20' />
        <p className='md:text-lg max-w-sm'>
          Easily associate your phone number to your Solana wallet address with
          privacy
        </p>
      </div>
      <div className='flex flex-col gap-5 1flex-none w-full landscape:max-w-sm p-5 bg-zinc-100 text-zinc-900 rounded-xl min-h-[50vh]'>
        <div className='flex-auto gap-5 flex flex-col items-center justify-center'>
          <img className='h-64' src='/identity.svg' alt='identity promo art' />
        </div>
        <button
          type='button'
          onClick={() => setVisible(true)}
          className={classNames(
            'transition-all rounded-full',
            'p-2 hover:p-3 hover:-m-1',
            'text-zinc-100 bg-zinc-900 hover:bg-zinc-800',
          )}
        >
          Connect to Get Started
        </button>
      </div>
    </div>
  )
}
