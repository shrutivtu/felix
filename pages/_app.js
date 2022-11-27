import '../styles/globals.css'
import Layout from '../components/Layout/Layout'
// import MyDayProvider from '../store/MyDayStore';

function MyApp({ Component, pageProps }) {
  return <><Layout><Component {...pageProps} /></Layout></>
}

export default MyApp
