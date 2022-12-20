import '../styles/globals.css'
import Layout from '../components/Layout/Layout'
import FelixContextProvider from '../context'

function MyApp({ Component, pageProps }) {
  return <>
    <FelixContextProvider><Layout><Component {...pageProps} /></Layout></FelixContextProvider>
  </>
}

export default MyApp
