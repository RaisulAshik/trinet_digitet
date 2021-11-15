import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import Link from 'next/link';

const contact = () => {
    return (
        <div>
            <Head>
                <title>Contacts</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Trinet Digital offers free proposals for all of our clients, fill out the form below and one of our representatives will contact you shortly. Stay with us." />
            </Head>
            <Layout>
                {/* <!-- Page Banner --> */}
                <section className="page-banner page-bgOne">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="page-title text-center">
                                    <div className="h1">Contact</div>
                                    <p>Fill out the form below to get your Free Proposal.</p>
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
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#" className="breadcrumbs-shap"></a>
                </div>

                {/* <!-- Contact --> */}
                <section className="containers-area pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="contact-form">
                                    <form action="" className="row">
                                        <div className="col-lg-6">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <input type="text" className="contact--box" placeholder="First Name *" />
                                                </div>
                                                <div className="col-md-12">
                                                    <input type="text" className="contact--box" placeholder="Last Name *" />
                                                </div>
                                                <div className="col-md-12">
                                                    <input type="email" className="contact--box" placeholder="Email *" />
                                                </div>
                                                <div className="col-md-12">
                                                    <input type="number" className="contact--box" placeholder="Phone *" />
                                                </div>
                                                <div className="col-md-12">
                                                    <input type="text" className="contact--box"
                                                        placeholder="Company/Organization *" />
                                                </div>
                                                <div className="col-md-12">
                                                    <input type="text" className="contact--box" placeholder="Website (Optional) *" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="h6">What services can we provide you?*</div>
                                                    <div className="services-check cols-4">
                                                        <div className="services-check-item">
                                                            <input id="a11y-issue-1" type="checkbox" value="no-issues" />
                                                            <label for="a11y-issue-1">Optimization (SEO)</label>
                                                        </div>
                                                        <div className="services-check-item">
                                                            <input id="a11y-issue-2" type="checkbox" value="no-issues" />
                                                            <label for="a11y-issue-2">Web Design</label>
                                                        </div>
                                                        <div className="services-check-item">
                                                            <input id="a11y-issue-3" type="checkbox" value="no-issues" />
                                                            <label for="a11y-issue-3">Reputation / Reviews Management</label>
                                                        </div>
                                                        <div className="services-check-item">
                                                            <input id="a11y-issue-4" type="checkbox" value="no-issues" />
                                                            <label for="a11y-issue-4">Web Hosting / Maintenance</label>
                                                        </div>
                                                        <div className="services-check-item">
                                                            <input id="a11y-issue-5" type="checkbox" value="no-issues" />
                                                            <label for="a11y-issue-5">ADA Compliance</label>
                                                        </div>
                                                        <div className="services-check-item">
                                                            <input id="a11y-issue-6" type="checkbox" value="no-issues" />
                                                            <label for="a11y-issue-6">Pay Per Click (PPC)</label>
                                                        </div>
                                                        <div className="services-check-item">
                                                            <input id="a11y-issue-7" type="checkbox" value="no-issues" />
                                                            <label for="a11y-issue-7">eCommerce Optimization</label>
                                                        </div>
                                                        <div className="services-check-item">
                                                            <input id="a11y-issue-8" type="checkbox" value="no-issues" />
                                                            <label for="a11y-issue-8">Content Writing</label>
                                                        </div>
                                                        <div className="services-check-item">
                                                            <input id="a11y-issue-9" type="checkbox" value="no-issues" />
                                                            <label for="a11y-issue-9">Amazon Marketing</label>
                                                        </div>
                                                        <div className="services-check-item">
                                                            <input id="a11y-issue-10" type="checkbox" value="no-issues" />
                                                            <label for="a11y-issue-10">Link Building</label>
                                                        </div>
                                                        <div className="services-check-item">
                                                            <input id="a11y-issue-11" type="checkbox" value="no-issues" />
                                                            <label for="a11y-issue-11">Social Media</label>
                                                        </div>
                                                        <div className="services-check-item">
                                                            <input id="a11y-issue-12" type="checkbox" value="no-issues" />
                                                            <label for="a11y-issue-12">Conversion Rate Optimization
                                                                (CRO)</label>
                                                        </div>
                                                        <div className="services-check-item">
                                                            <input id="a11y-issue-13" type="checkbox" value="no-issues" />
                                                            <label for="a11y-issue-13">Photography / Video</label>
                                                        </div>
                                                        <div className="services-check-item">
                                                            <input id="a11y-issue-14" type="checkbox" value="no-issues" />
                                                            <label for="a11y-issue-14">Email Marketing</label>
                                                        </div>
                                                        <div className="services-check-item">
                                                            <input id="a11y-issue-15" type="checkbox" value="no-issues" />
                                                            <label for="a11y-issue-15">Search Engine Marketing </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <textarea name="message" id="message" placeholder="Message *"></textarea>
                                        </div>
                                        <div className="col-lg-12">
                                            <button type="submit" className="theme-btn btn-md">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="contact-info">
                                    <div className="contact-adders">
                                        <div className="h4">Contact <span>Information</span></div>
                                        <p>
                                            <strong>Address:</strong> Lorem Ipsum is simply dummy text of the printing
                                            and typesetting industry.
                                        </p>
                                        <p>
                                            <strong>Email:</strong> <a href="mailto:info@trinetdigital.com"
                                                target="_top">info@trinetdigital.com</a>
                                        </p>
                                        <p><strong>Tel.:</strong> +123-456-4789</p>
                                        <p><strong>Fax:</strong> +123-456-7890</p>
                                        <p><strong>Working Hours:</strong> 9 AM - 6 PM (Mon to Sat)</p>
                                    </div>
                                    <div className="contact-map">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26361549.332264338!2d-113.76110095522786!3d36.24040333011455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited+States!5e0!3m2!1sen!2sin!4v1515759135269"
                                            width="100%" height="270" frameborder="0" style={{ border: "0" }}
                                            allowfullscreen=""></iframe>
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

export default contact;