import React from 'react';
import Head from 'next/dist/next-server/lib/head';
import Layout from '../components/layout';
import { footerApi } from '../lib/api/footerApi';
import Link from 'next/link'

const privacyPolicy = (data) => {
    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
    return (
        <div>
            <Head>
                <title>Praivacy & Policy</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="The privacy policy of Trinet Digital is available for review. Please contact us if you have any questions or concerns regarding this." />
            </Head>
            <Layout>
                {/* <!-- Page Banner --> */}
                <section className="page-banner page-bgOne">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="page-title text-center">
                                    <div className="h1">Privacy Policy</div>
                                    <button className="theme-btn btn-md">get my free proposal </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Breadcrumbs --> */}
                <div className="breadcrumbs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumbs-content">
                                    <ul>
                                        <li><Link href="/">Home</Link></li>
                                        <li><a href="#">Privacy Policy </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#" className="breadcrumbs-shap"></a>
                </div>

                {/* <!-- Note Content --> */}
                <section className="note-content-area pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="note-content-text">
                                    {renderHTML(data.data[0].description)}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    );
};

export default privacyPolicy

export async function getStaticProps() {
    const data = await footerApi.praivacyAndPolicy().then(res => res.data)
    return {
        props: {
            data
        }
    }
}