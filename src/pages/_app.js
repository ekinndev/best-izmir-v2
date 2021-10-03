import '../styles/globals.scss';
import { Provider } from 'react-redux';
import { appWithTranslation } from 'next-i18next';
import store from '../store/store';
import 'antd/dist/antd.css';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default appWithTranslation(MyApp);
