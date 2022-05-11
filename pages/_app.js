import NProgress from 'nprogress';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'nprogress/nprogress.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import '../styles/globals.scss'
import Router from 'next/router';


Router.onRouteChangeStart = () => {
  NProgress.start();
}

Router.onRouteChangeComplete = () => {
  NProgress.done();
}




function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
