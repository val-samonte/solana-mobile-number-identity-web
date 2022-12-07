export function App() {
  return (
    <div className='flex flex-col landscape:flex-row m-5 landscape:my-10 gap-5'>
      <div className='flex-auto flex flex-col'>
        <small className='text-base opacity-50'>Mythrilsoft</small>
        <h1 className='text-4xl font-bold mb-5'>identity</h1>
        <p className='sm:text-lg max-w-sm'>
          Easily associate your phone number to your Solana wallet address with
          privacy
        </p>
      </div>
      <div className='flex-none w-full landscape:max-w-md p-5 bg-zinc-100 text-zinc-900 rounded-xl'></div>
    </div>
  )
}
