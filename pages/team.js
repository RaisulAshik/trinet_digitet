import Link from 'next/link';
import Head from 'next/dist/next-server/lib/head';
import React from 'react';
import Layout from '../components/layout';

const team = () => {
    return (
        <div>
            <Head>
                <title>Team</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Here is our team, full of professionals who are experts in their respective fields. We have web designers, developers, content writers, and SEO experts." />
            </Head>
            <Layout>
                {/* <!-- Page Banner --> */}
                <section className="page-banner page-bgOne">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="page-title text-center">
                                    <div className="h1">Our Team</div>
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
                                        <li><a href="#">Team</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#" className="breadcrumbs-shap"></a>
                </div>

                {/* <!-- Team --> */}
                <section className="team-area pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="section-title seo-titles text-center">
                                    <div className="h6">Our Team</div>
                                    <div className="h2">A perfect blend of creativity and hard work put together by the best-in-class professionals. Check out our team members</div>
                                    <div className="section-bar"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-4">
                            <div className="col-lg-3 col-md-6">
                                <div className="team-item">
                                    <div className="thumbnail">
                                        <img src="/assets/img/t1.jpg" alt="team Images" />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Jone Due</h4>
                                        <p className="designation">Sr. Web Developer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="team-item">
                                    <div className="thumbnail"><img src="/assets/img/t1.jpg" alt="team Images" /></div>
                                    <div className="content">
                                        <h4 className="title">Jone Due</h4>
                                        <p className="designation">Sr. Web Developer</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="team-item">
                                    <div className="thumbnail"><img src="/assets/img/t1.jpg" alt="team Images" /></div>
                                    <div className="content">
                                        <h4 className="title">Jone Due</h4>
                                        <p className="designation">Sr. Web Developer</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="team-item">
                                    <div className="thumbnail"><img src="/assets/img/t1.jpg" alt="team Images" /></div>
                                    <div className="content">
                                        <h4 className="title">Jone Due</h4>
                                        <p className="designation">Sr. Web Developer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="team-item">
                                    <div className="thumbnail"><img src="/assets/img/t1.jpg" alt="team Images" /></div>
                                    <div className="content">
                                        <h4 className="title">Jone Due</h4>
                                        <p className="designation">Sr. Web Developer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="team-item">
                                    <div className="thumbnail"><img src="/assets/img/t1.jpg" alt="team Images" /></div>
                                    <div className="content">
                                        <h4 className="title">Jone Due</h4>
                                        <p className="designation">Sr. Web Developer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="team-item">
                                    <div className="thumbnail"><img src="/assets/img/t1.jpg" alt="team Images" /></div>
                                    <div className="content">
                                        <h4 className="title">Jone Due</h4>
                                        <p className="designation">Sr. Web Developer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="team-item">
                                    <div className="thumbnail"><img src="/assets/img/t1.jpg" alt="team Images" /></div>
                                    <div className="content">
                                        <h4 className="title">Jone Due</h4>
                                        <p className="designation">Sr. Web Developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="contact-area section-bgOne pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="section-title seo-titles text-center">
                                    <div className="h6">Let's connect!</div>
                                    <div className="h2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos</div>
                                    <div className="section-bar"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-4">
                            <div className="col-lg-5 pt-4 ">
                                <div className="team-info-ff d-grid gap-4">
                                    <div className="contact-info-item">
                                        <i className="fas fa-phone"></i>
                                        <a href="#">+89 (0) 2354 5470091</a>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    </div>
                                    <div className="contact-info-item">
                                        <i className="fas fa-envelope-open-text"></i>
                                        <a href="#">mail@company.com</a>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 pt-4 offset-lg-1">
                                <form method="" action="" className="team-form">
                                    <input type="text" className="w-100" name="name" placeholder="Name" />
                                    <input type="text" className="w-100" name="company" placeholder="Company Name" />
                                    <input type="email" className="w-100" name="email" placeholder="Email" />
                                    <input type="text" className="w-100" name="pnoe" placeholder="Phone" />
                                    <textarea className="w-100" placeholder="Message"></textarea>
                                    <button className="theme-btn btn-lg">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Call to Action --> */}

                <section className="call-to-action section-bgGradient pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="call-to-action-text text-center">
                                    <div className="h5">WHAT IS NEXT?</div>
                                    <div className="h2">Are You Ready? Let's Get <br /> To Work!</div>
                                    <ul>
                                        <li>
                                            <Link href="/contact">
                                                <a className="theme-btn btn-md"><i className="far fa-comment-alt"></i>
                                                    GET FREE PROPOSAL
                                                </a>
                                            </Link>
                                        </li>
                                        <li>Or</li>
                                        <li>
                                            <a href="tel:+1 234 456 7890" className="theme-btn btn-md">
                                                <i className="fas fa-phone-alt"></i>
                                                CALL 866.908.4748
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </Layout>
        </div>
    );
};

export default team;