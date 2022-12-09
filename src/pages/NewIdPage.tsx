import { firebaseAuthAtom } from '@/atoms/firebaseAtom'
import { userWalletAtom } from '@/atoms/userWalletAtom'
import classNames from 'classnames'
import { RecaptchaVerifier } from 'firebase/auth'
import { useAtomValue } from 'jotai'
import { useEffect, useRef, useState } from 'react'

export function NewIdPage() {
  const { publicKey } = useAtomValue(userWalletAtom)
  const auth = useAtomValue(firebaseAuthAtom)
  const [disabled, setDisabled] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [recaptchaToken, setRecaptchaToken] = useState('')
  const containerRef = useRef(null)
  const recaptchaVerifier = useRef<RecaptchaVerifier | null>(null)

  useEffect(() => {
    if (!recaptchaVerifier.current && auth && containerRef.current) {
      auth.useDeviceLanguage()
      recaptchaVerifier.current = new RecaptchaVerifier(
        containerRef.current,
        {
          size: 'normal',
          callback: (response: any) => {
            setRecaptchaToken(response)
          },
          'expired-callback': () => {
            setRecaptchaToken('')
          },
        },
        auth,
      )

      recaptchaVerifier.current.render()
    }
  }, [auth])

  const submitDisabled = disabled || !phoneNumber || !recaptchaToken

  return (
    <>
      <h2 className='p-5 text-lg text-center w-full'>Create New ID</h2>
      <div className='flex flex-col gap-3 mx-auto mb-10 p-5 max-w-sm w-full rounded-xl bg-zinc-200 text-zinc-900'>
        <p>You are about to associate this wallet address:</p>
        <div className='break-words font-bold'>{publicKey?.toBase58()}</div>
        <p>To this phone number:</p>
        <label
          className={classNames(
            'flex',
            disabled && 'pointer-events-none select-none opacity-60',
          )}
        >
          <div className='px-3 py-2 rounded-l-lg bg-white flex-none font-bold'>
            +63
          </div>
          <input
            autoFocus
            disabled={disabled}
            type='text'
            value={phoneNumber}
            onInput={(e) => setPhoneNumber((e.target as any).value)}
            className={classNames(
              'w-full px-3 py-2 rounded-r-lg flex-auto bg-white',
            )}
            placeholder='Enter your phone number'
          />
        </label>
        <div className='flex items-center justify-center'>
          <div id='recaptcha-container' ref={containerRef}></div>
          <p className='text-center italic opacity-25 text-sm'>
            A reCAPTCHA should appear here. If it fails to load, try refreshing
            the page.
          </p>
        </div>
        <button
          type='button'
          className={classNames(
            submitDisabled && 'pointer-events-none select-none opacity-60',
            'transition-all rounded-lg',
            'px-4 py-2 hover:px-5 hover:py-3 hover:-m-1',
            'bg-zinc-900 hover:bg-zinc-800 text-zinc-100 hover:text-white',
          )}
        >
          Create My New ID
        </button>
      </div>
    </>
  )
}
