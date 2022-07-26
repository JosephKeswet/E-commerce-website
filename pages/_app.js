import '../styles/globals.css'
import { store } from '../store'
import { Provider } from 'react-redux'
import { ToastContainer} from 'react-toastify';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <ToastContainer
        autoClose={4000}
      />

    </Provider>
  )
}

export default MyApp
