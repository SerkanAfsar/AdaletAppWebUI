import NProgress from 'nprogress';
import 'react-toastify/dist/ReactToastify.css';
import 'nprogress/nprogress.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import "bootstrap-icons/font/bootstrap-icons.css";
import '../styles/globals.scss'
import Router from 'next/router';
import { SessionProvider } from "next-auth/react"

Router.onRouteChangeStart = () => {
  NProgress.start();
}

Router.onRouteChangeComplete = () => {
  NProgress.done();
}

function MyApp({ Component, pageProps: { session, ...pageProps }, }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>);
}

export default MyApp
