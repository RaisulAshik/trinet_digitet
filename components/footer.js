import React from 'react';
import Link from 'next/link'

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="footer-widget-area pt-3 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 footer-col">
                                <div className="footer-widget-item footer-widget-left">
                                    <a href="/" className="fooger-logo">
                                        <img src="/assets/img/logo2.png" alt="PNG logo of Trinet Digital" height="50" />
                                    </a>
                                    <ul className="social-icon-footer d-flex gap-4 mb-4">
                                        <li><Link href=""><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link href=""><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link href=""><i className="fab fa-linkedin-in"></i></Link></li>
                                        <li><Link href=""><i className="fab fa-instagram"></i></Link></li>

                                    </ul>

                                    <div className="footer-contact pt-0 pb-3">
                                        <a href="tel:+1 965 047 658 23">Call: +1 965 047 658 23</a>
                                        <a href="mailto:info@trinetdigital.com" target="_top">info@trinetdigital.com</a>
                                    </div>
                                    <p></p>
                                </div>
                            </div>
                            <div className="col-lg-3 footer-col">
                                <div className="footer-widget-item footer-widget-center">
                                    <div className="h4">Useful Link</div>
                                    <ul>
                                        <li><Link href="/">Home</Link></li>
                                        <li><a href="#">Locations</a></li>
                                        <li><Link href="/">Services </Link></li>
                                        <li><Link href="/terms&condition">Terms & Conditions</Link></li>
                                        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                        <li><a href="/site-map">Site Map</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 footer-col">
                                <div className="footer-widget-item footer-widget-center">
                                    <div className="h4">Our Services</div>
                                    <ul>
                                        <li><Link href="/seo">SEO</Link></li>
                                        <li><Link href="/seo/local-seo">Local SEO</Link></li>
                                        <li><Link href="/web-design">Web Design</Link></li>
                                        <li><Link href="/social-media-marketing">Social Media Marketing</Link></li>
                                        <li><Link href="/web-design/email-marketing">Email Marketing</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 footer-col">
                                <div className="footer-widget-item footer-widget-center">
                                    <div className="h4">Company</div>
                                    <ul>
                                        <li><a href="#">About Trinet Digital</a></li>
                                        <li><Link href="/team">Our Team</Link></li>
                                        <li><Link href="/blogs">Blog</Link></li>
                                        <li><a href="#">Newsletter</a></li>
                                        <li><a href="#">F . A . Q .</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 copy-col">
                                <div className="copyright-text text-center">
                                    <p>Copyrights © 2021. All rights reserved by Trinet Digital</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;