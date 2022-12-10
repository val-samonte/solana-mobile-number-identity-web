import { GlowingTitle } from '@/components/GlowingTitle'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import classNames from 'classnames'

export function FrontPage() {
  const { setVisible } = useWalletModal()

  return (
    <div className='flex flex-col p-5 landscape:py-10 gap-10 items-center justify-center portrait:min-h-screen relative bg-zinc-900'>
      <div className='flex flex-col landscape:flex-row landscape:items-center portrait:gap-5'>
        <div className='landscape:flex-auto flex items-center justify-center'>
          <img
            className='h-64 2xl:h-80 aspect-square'
            src='/identity.svg'
            alt='identity logo'
          />
        </div>
        <div className='flex-auto flex flex-col'>
          <small className='text-base 2xl:text-lg opacity-50'>
            mythrilsoft
          </small>
          <h1 className='text-4xl 2xl:text-6xl font-bold'>
            <GlowingTitle text='identity' />
          </h1>
          <hr className='my-3 opacity-20' />
          <p className='md:text-lg 2xl:text-xl max-w-xs'>
            Easily link your phone number to your Solana wallet address with
            privacy
          </p>
        </div>
      </div>
      <button
        type='button'
        onClick={() => setVisible(true)}
        className={classNames(
          'transition-all rounded-lg',
          'px-4 py-2 hover:px-5 hover:py-3 hover:-m-1',
          'text-zinc-900 bg-zinc-200 hover:bg-white',
        )}
      >
        Get Started
      </button>
    </div>
  )
}
