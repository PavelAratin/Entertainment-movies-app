import Layout from '@/components/layout/Layout';
import { Provider } from 'react-redux';
import store from '../store';
import '../firebase/firebase';
import '../styles/main.scss';
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
