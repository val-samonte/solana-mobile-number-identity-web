import { firebaseAuthAtom } from '@/atoms/firebaseAtom'
import { userWalletAtom } from '@/atoms/userWalletAtom'
import classNames from 'classnames'
import {
  ConfirmationResult,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from 'firebase/auth'
import { useAtomValue } from 'jotai'
import { FormEvent, useEffect, useRef, useState } from 'react'

export function NewIdPage() {
  const { publicKey } = useAtomValue(userWalletAtom)
  const auth = useAtomValue(firebaseAuthAtom)

  const [disabled, setDisabled] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('')

  const containerRef = useRef<HTMLDivElement>(null)
  const recaptchaVerifier = useRef<RecaptchaVerifier | null>(null)

  const [recaptchaToken, setRecaptchaToken] = useState('')
  const [confirmationResult, setConfirmationResult] =
    useState<ConfirmationResult | null>(null)
  const [confirmationCode, setConfirmationCode] = useState('')

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

  const resetRecaptcha = () => {
    setRecaptchaToken('')
    setConfirmationResult(null)
    setConfirmationCode('')
    if ((recaptchaVerifier.current as any)?.widgetId) {
      ;(window as any).grecaptcha.reset()
    }
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!phoneNumber || !recaptchaVerifier.current) return
    setDisabled(true)

    try {
      setConfirmationResult(
        await signInWithPhoneNumber(
          auth,
          '+63' + phoneNumber,
          recaptchaVerifier.current,
        ),
      )
    } catch (e) {
      resetRecaptcha()
    }

    setDisabled(false)
  }

  const onConfirm = async (e: FormEvent) => {
    e.preventDefault()

    if (!confirmationResult || !confirmationCode) return

    const userCredential = await confirmationResult.confirm(confirmationCode)

    console.log(userCredential.user.phoneNumber)
  }

  const submitDisabled = disabled || !phoneNumber || !recaptchaToken

  return (
    <>
      <h2 className='p-5 text-lg text-center w-full'>Create New ID</h2>
      {!confirmationResult ? (
        <form
          onSubmit={onSubmit}
          className='flex flex-col gap-2 mx-auto mb-10 p-5 max-w-sm w-full rounded-xl bg-zinc-200 text-zinc-900'
        >
          <p>You are about to link this wallet address:</p>
          <div className='break-words font-bold mb-3 px-3 py-2 bg-white rounded-lg'>
            {publicKey?.toBase58()}
          </div>
          <p>To this phone number:</p>
          <label
            className={classNames(
              'flex mb-3',
              disabled && 'pointer-events-none select-none opacity-60',
            )}
          >
            <div className='px-3 py-2 rounded-l-lg bg-white flex-none font-bold'>
              +63
            </div>
            <input
              autoFocus
              disabled={disabled}
              type='tel'
              value={phoneNumber}
              onInput={(e) => setPhoneNumber((e.target as any).value)}
              className={classNames(
                'w-full px-3 py-2 rounded-r-lg flex-auto bg-white',
              )}
              placeholder='Enter your phone number'
            />
          </label>
          <div className='mb-3 flex items-center justify-center'>
            <div id='recaptcha-container' ref={containerRef}></div>
            <p className='text-center italic opacity-50 text-sm'>
              A reCAPTCHA should appear here. If it fails to load, try
              refreshing the page.
            </p>
          </div>
          <button
            type='submit'
            className={classNames(
              submitDisabled && 'pointer-events-none select-none opacity-60',
              'transition-all rounded-lg',
              'px-4 py-2 hover:px-5 hover:py-3 hover:-m-1',
              'bg-zinc-900 hover:bg-zinc-800 text-zinc-100 hover:text-white',
            )}
          >
            Get Confirmation Code
          </button>
        </form>
      ) : (
        <form
          onSubmit={onConfirm}
          className='flex flex-col gap-2 mx-auto mb-10 p-5 max-w-sm w-full rounded-xl bg-zinc-200 text-zinc-900'
        >
          <p>Enter the confirmation code sent via SMS:</p>
          <label className={classNames('flex mb-3')}>
            <input
              autoFocus
              type='tel'
              value={confirmationCode}
              onInput={(e) => setConfirmationCode((e.target as any).value)}
              className={classNames(
                'w-full px-3 py-2 rounded-lg flex-auto bg-white',
              )}
              placeholder='Enter confirmation code'
            />
          </label>
          <button
            type='submit'
            className={classNames(
              confirmationCode.length < 6 &&
                'pointer-events-none select-none opacity-60',
              'transition-all rounded-lg',
              'px-4 py-2 hover:px-5 hover:py-3 hover:-m-1',
              'bg-zinc-900 hover:bg-zinc-800 text-zinc-100 hover:text-white',
            )}
          >
            Create My New ID
          </button>
        </form>
      )}
    </>
  )
}
