import NProgress from 'nprogress';
import 'react-toastify/dist/ReactToastify.css';
import 'nprogress/nprogress.css';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import '../styles/globals.scss'
import Router from 'next/router';
import Head from 'next/head';

Router.onRouteChangeStart = () => {
  NProgress.start();
}

Router.onRouteChangeComplete = () => {
  NProgress.done();
}

function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
    </Head>
    <Component {...pageProps} />
  </>
  );
}

export default MyApp
