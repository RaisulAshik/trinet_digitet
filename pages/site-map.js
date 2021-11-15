import React from 'react';
import Head from 'next/dist/next-server/lib/head';
import Layout from '../components/layout';
import Link from 'next/link';
import { footerApi } from '../lib/api/footerApi';

const siteMap = () => {
    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
    return (
        <div>
            <Head>
                <title>Site Map</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="A detailed and comprehensive site map that shows the content on each page of the Trinet Digital website. Find out what’s in there." />
            </Head>
            <Layout>
                {/* <!-- Page Banner --> */}
                <section className="page-banner page-bgOne">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="page-title text-center">
                                    <h1>Site Map</h1>
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
                                        <li><a href="/">Home</a></li>
                                        <li><a href="#">Site Map</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Site Map --> */}
                <section className="site-map-area">
                    <div className="container">
                        <div className="site-map-content">
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="site-map-item">
                                        <h4>Information</h4>
                                        <ul>
                                            <li><a href="/">Home</a></li>
                                            <li><a href="#">Recruiters</a></li>
                                            <li><a href="#">Companies</a></li>
                                            <li><a href="#">Services</a></li>
                                            <li><a href="#">About Us</a></li>
                                            <li><a href="#">Terms &amp; Conditions</a></li>
                                            <li><a href="#">Privacy Policy</a></li>
                                            <li><a href="#">Careers with Us</a></li>
                                            <li><a href="#">Sitemap</a></li>
                                            <li><a href="#">Contact Us</a></li>
                                            <li><a href="#">FAQs</a></li>
                                            <li><a href="#">Summons / Notices</a></li>
                                            <li><a href="#">Grievances</a></li>
                                            <li><a href="#">Fraud Alert</a></li>
                                            <li><a href="#"> Login </a></li>
                                            <li><a href="#">Signup</a></li>
                                            <li><a href="#">More</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="site-map-item">
                                        <h4> Jobseekers</h4>
                                        <ul>
                                            <li><a href="#">Register Now</a></li>
                                            <li><a href="#">Search Jobs</a></li>
                                            <li><a href="#">Login</a></li>
                                            <li><a href="#">Create Job Alert</a></li>
                                            <li><a href="#">Report a Problem</a></li>
                                            <li><a href="#">Blogs</a></li>
                                            <li><a href="#">Security Advice</a></li>
                                            <li><a href="#">Mobile Site</a></li>
                                        </ul>
                                        <h4>Fast Forward</h4>
                                        <ul>
                                            <li><a href="#">Resume Writing</a></li>
                                            <li><a href="#">Profile Enhancement</a></li>
                                            <li><a href="#">Recruiter Reach</a></li>
                                            <li><a href="#">Jobs For You</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="site-map-item">
                                        <h4>Browse Jobs</h4>
                                        <ul>
                                            <li><a href="#">Browse All Jobs</a></li>
                                            <li><a href="#">Premium MBA Jobs</a></li>
                                            <li><a href="#">Premium Engineering Jobs</a></li>
                                            <li><a href="#">Govt. Jobs</a></li>
                                            <li><a href="#">International Jobs</a></li>
                                            <li><a href="#">Jobs in Gulf</a></li>
                                            <li><a href="#">Jobs by Company</a></li>
                                            <li><a href="#"> Jobs by Category</a></li>
                                            <li><a href="#">Jobs by Designation</a></li>
                                            <li><a href="#">Jobs by Location</a></li>
                                            <li><a href="#">Jobs by Skill</a></li>
                                        </ul>
                                        <h4> Jobs on Mobile</h4>
                                        <ul>
                                            <li><a href="#">Get it on Google Play</a></li>
                                            <li><a href="#">Download on App Store</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="site-map-item">
                                        <h4>Employers</h4>
                                        <ul>
                                            <li><a href="#">Post Jobs</a></li>
                                            <li><a href="#">Access Database</a></li>
                                            <li><a href="#">Manage Responses</a></li>
                                            <li><a href="#">Jobs RMS</a></li>
                                            <li><a href="#">Buy Online</a></li>
                                            <li><a href="#">Report a Problem</a></li>
                                            <li><a href="#">Recruiters from USA, call</a></li>
                                            <li><a href="#">Toll Free # 1866-557-3340</a></li>
                                        </ul>
                                        <h4>Ambition Box</h4>
                                        <ul>
                                            <li><a href="#"> Interview Questions</a></li>
                                            <li><a href="#">About Companies</a></li>
                                            <li><a href="#">Share Interview Story</a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    );
};

export default siteMap;

export async function getStaticProps() {
    const data = await footerApi.termsAndConditions().then(res => res.data)
    return {
        props: {
            data
        }
    }
}