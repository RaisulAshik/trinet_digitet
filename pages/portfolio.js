import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/dist/next-server/lib/head';
// import  MaginificPopup   from 'react-magnific-popup'
// import 'magnific-popup/dist/jquery.magnific-popup';
// import { LightBoxGallery, GalleryItem } from 'react-magnific-popup';
import Layout from '../components/layout';
import { portfolio } from '../lib/api/portfolio';
import commonApi from '../lib/api/commonApi';
import PortfolioSlider from '../components/portfolioSlider';

const Portfolio = (data) => {

    const [filterData, setFilterData] = useState([])
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalData, setModalData] = useState();


    useEffect(() => {
        setFilterData(data.allPortfolios)
    }, [])




    return (
        <div>
            <Head>
                <title>Porfolio</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Trinet Digital specializes in web design and development, SEO, social media marketing, and more. Check out our portfolio to see how we can help you." />
                <meta name="keywords" content="ecommerce portfolio" />
            </Head>

            <Layout>


                {/* <!-- Page Banner --> */}
                <section className="page-banner page-bgOne">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="page-title text-center">
                                    <div className="h1"><h1>Portfolio</h1></div>
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
                                        <li><a href="#">Portfolio</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#" className="breadcrumbs-shap"></a>
                </div>

                {/* <!-- Portfolio --> */}

                <section className="portfolio-area">
                    {/* <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <div className="section-title seo-titles text-center">
                                    <div className="h6">Social Media Marketing</div>
                                    <div className="h2">A full portfolio of web design & digital marketing strategy showcasing the work of Trinet digital</div>
                                    <div className="section-bar"></div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* {console.log("before map",data.allPortfolios, data.allPortfoliosName)} */}
                    {data.allPortfoliosName.map(nameProfile =>

                        <div key={nameProfile._id} className="portfolio-slide-items">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 offset-lg-3">
                                        <div className="section-title seo-titles text-center">
                                            <div className="h6">{nameProfile}</div>
                                            <div className="h2"><h2>A Full Portfolio Of SEO Showcasing The Work Of Trinet Digital</h2></div>
                                            <div className="section-bar"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <PortfolioSlider portfolioListData={data.allPortfolios.filter(portfolioItem => portfolioItem.filter === nameProfile)} />
                        </div>
                    )}
                </section>

            </Layout>
        </div>
    );
};

export default Portfolio;

export async function getStaticProps() {
    const allPortfolios = await portfolio.allPortfolios().then(res => res.data)
    const allPortfoliosName = await portfolio.allPortfoliosName().then(res => res.data)
    return {
        props: {
            allPortfolios,
            allPortfoliosName
        }
    }
}