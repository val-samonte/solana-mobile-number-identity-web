import { userWalletAtom } from '@/atoms/userWalletAtom'
import { useAtomValue } from 'jotai'

export function App() {
  const { disconnect } = useAtomValue(userWalletAtom)
  return <div>{/* <button onClick={disconnect}>Disconnect</button> */}</div>
}
