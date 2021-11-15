import React from 'react';
import Head from 'next/dist/next-server/lib/head';
import Layout from '../components/layout';
import Link from 'next/link';
import { footerApi } from '../lib/api/footerApi';

const termsAndCondition = (data) => {
    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
    return (
        <div>
            <Head>
                <title>Terms & Conditions</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="The following are the terms and conditions of Trinet Digital. By accessing this website, you agree to be bound by these terms and conditions." />
            </Head>
            <Layout>
                {/* <!-- Page Banner --> */}
                <section className="page-banner page-bgOne">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="page-title text-center">
                                    <div className="h1">Terms & Conditions</div>
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
                                        <li><a href="#">Terms & Conditions</a></li>
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

export default termsAndCondition;

export async function getStaticProps() {
    const data = await footerApi.termsAndConditions().then(res => res.data)
    return {
        props: {
            data
        }
    }
}