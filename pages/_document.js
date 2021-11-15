import Document, { Html, Head, Main, Body, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="msvalidate.01" content="C47FCF084CD542188D00D5F2D27D60EE" />


                    {/* favicon icon */}
                    <link rel="icon" href="/assets/img/favicon.ico" type="favicon" />

                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css" />

                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>




                    {/* <!-- Style CSS --> */}
                    <link rel="stylesheet" href="/assets/css/style.css" />
                    <link rel="stylesheet" href="/assets/css/responsive.css" />


                    {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
                    <script strategy="lazyOnload" async src="https://www.googletagmanager.com/gtag/js?id=G-QJHH96X1Z5"></script>
                    <script strategy="lazyOnload">
                        {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-QJHH96X1Z5', {
                            page_path: window.location.pathname,
                        });
                    `}
                    </script>

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>

            </Html>
        );
    }
}

export default MyDocument;