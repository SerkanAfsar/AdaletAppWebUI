import NProgress from 'nprogress';
import 'react-toastify/dist/ReactToastify.css';
import 'nprogress/nprogress.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import "aos/dist/aos.css";
import '../styles/globals.scss'
import Router from 'next/router';
import { SessionProvider } from "next-auth/react"
import AOS from 'aos'
import { useEffect } from 'react';

Router.onRouteChangeStart = () => {
  NProgress.start();
}

Router.onRouteChangeComplete = () => {
  NProgress.done();
}


function MyApp({ Component, pageProps: { session, ...pageProps }, }) {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 500
    });
  }, [])
  return (
    <SessionProvider session={session}>
      <Component  {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp
