import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import NavBar from '../components/navComponents/navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div style={{position : "fixed", top: "0" , left: "0", zIndex: '10'}}>
        <NavBar/>
      </div>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
