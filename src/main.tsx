import '@solana/wallet-adapter-react-ui/styles.css'
import './index.css'

import { WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets'
import React, { ReactNode, Suspense, useMemo } from 'react'
import ReactDOM from 'react-dom/client'
import { Root } from './pages/Root'
import { InitAtom } from './atoms/InitAtom'
import { LoadingIndicator } from './components/LoadingIndicator'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Main>
      <Root />
    </Main>
  </React.StrictMode>,
)

function Main({ children }: { children: ReactNode }) {
  const wallets = useMemo(() => [new PhantomWalletAdapter()], [])

  return (
    <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>
        <InitAtom />
        <Suspense fallback={<LoadingIndicator />}>{children}</Suspense>
      </WalletModalProvider>
    </WalletProvider>
  )
}
