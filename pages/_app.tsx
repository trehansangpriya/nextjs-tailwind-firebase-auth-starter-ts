import '../src/styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '@/contexts'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <AuthProvider>
    <Component {...pageProps} />
    // </AuthProvider>
  )
}

export default MyApp
