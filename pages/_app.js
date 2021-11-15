import Head from 'next/head';
import Script from 'next/script';
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../public/assets/css/style.css';
// import '../public/assets/css/magnific-popup.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// const DynamicComponentWithNoSSR = dynamic(
//   () => import('../components/admin/src/index'),
//   { ssr: false }
// );

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Script strategy="lazyOnload" async src="https://www.googletagmanager.com/gtag/js?id=G-QJHH96X1Z5"></Script>
      <Script strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QJHH96X1Z5', {
                page_path: window.location.pathname,
            });
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
