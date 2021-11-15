import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { headerApi } from '../lib/api/headerApi';
import { useRouter } from "next/router";
import Logo from './logo';

const NavBar = () => {

    const routeArray = ["/seo/local-seo", "/seo", "/seo/ecommerce-seo", "/seo/shopify-seo", "/web-design", "/web-design/custom-web-design", "/web-design/wordpress-web-design", "/web-design/email-marketing", "/social-media-marketing", "/social-media-marketing/social-media-management", "/social-media-marketing/social-media-paid-advertising", "/social-media-marketing/social-media-brand-management"]
    const router = useRouter();

    const serviceCategoriesList = headerApi.serviceCategories();
    const serviceSubCategoriesList = headerApi.serviceSubCategories();
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 1);
        });
    }, []);

    return (
        <div>
            <nav className={scroll ? "navbar navbar-expand-lg nabActive" : "navbar navbar-expand-lg"} id="topNab">
                <div className="container">
                    <Logo />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className={router.pathname == "/" ? "nav-item active" : ""}>
                                <Link href="/">
                                    <a className="nav-link">home</a>
                                </Link>
                            </li>

                            {/* <li className={router.pathname == "/seo/local-seo" ? "nav-item dropdown has-megamenu active" : "nav-item dropdown has-megamenu "}> */}
                            <li className={routeArray.includes(router.pathname) ? "nav-item dropdown has-megamenu active" : "nav-item dropdown has-megamenu "}>
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"> Services </a>
                                <div className="dropdown-menu megamenu container fade-down" role="menu">
                                    <div className="row g-4">

                                        <div className="col-lg-4 col-sm-6 col-nav">
                                            <div className="col-megamenu">
                                                <div className="title h6">
                                                    <a href="/seo">SEO <span>(Search Engine Optimization)</span></a>
                                                </div>
                                                <ul className="list-unstyled">
                                                    <li>
                                                        <Link href="/seo/local-seo">
                                                            <a className={router.pathname == "/seo/local-seo" ? "nav-link active" : ""}>Local SEO Services</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/seo/ecommerce-seo">
                                                            <a className={router.pathname == "/seo/ecommerce-seo" ? "nav-link active" : ""}>Ecommerce SEO Service</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/seo/shopify-seo">
                                                            <a className={router.pathname == "/seo/shopify-seo" ? "nav-link active" : ""}>Shopify SEO</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 col-nav">
                                            <div className="col-megamenu">
                                                <div className="title h6">
                                                    <a href="/web-design">Web Design</a>
                                                </div>
                                                <ul className="list-unstyled">
                                                    <li>
                                                        <Link href="/web-design/custom-web-design">
                                                            <a className={router.pathname == "/web-design/custom-web-design" ? "nav-link active" : ""}>Custom Website Design</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/web-design/wordpress-web-design">
                                                            <a className={router.pathname == "/web-design/wordpress-web-design" ? "nav-link active" : ""}>WordPress Website Design</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/web-design/email-marketing">
                                                            <a className={router.pathname == "/web-design/email-marketing" ? "nav-link active" : ""}>Email Marketing Services</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 col-nav">
                                            <div className="col-megamenu">
                                                <div className="title h6">
                                                    <Link href="/social-media-marketing">Social Media Marketing</Link>
                                                </div>
                                                <ul className="list-unstyled">
                                                    <li>
                                                        <Link href="/social-media-marketing/social-media-management">
                                                            <a className={router.pathname == "/social-media-marketing/social-media-management" ? "nav-link active" : ""}>Social Media Management</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/social-media-marketing/social-media-paid-advertising">
                                                            <a className={router.pathname == "/social-media-marketing/social-media-paid-advertising" ? "nav-link active" : ""}>Social Media Paid Advertising</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/social-media-marketing/social-media-brand-management">
                                                            <a className={router.pathname == "/social-media-marketing/social-media-brand-management" ? "nav-link active" : ""}>Social Media Brand Management</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className={router.pathname == "/portfolio" ? "nav-item active" : ""}>
                                <Link href="/portfolio">
                                    <a className="nav-link">Portfolio</a>
                                </Link>
                            </li>
                            <li className={router.pathname == "/team" ? "nav-item active" : ""} >
                                <Link href="/team">
                                    <a className="nav-link" href="#">Team</a>
                                </Link>
                            </li>
                            <li className={router.pathname == "/blogs" ? "nav-item active" : ""} >
                                <Link href="/blogs">
                                    <a className="nav-link" href="#">Blog</a>
                                </Link>
                            </li>
                            <li className={router.pathname == "/contact" ? "nav-item active" : ""}>
                                <Link href="/contact">
                                    <a className="nav-link" href="#">Contact</a>
                                </Link>
                            </li>
                        </ul>
                        <div className="desktop-none">

                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit"><i className="fas fa-search"></i></button>
                            </form>
                        </div>
                    </div>
                    <div className="top-call-btn phone-none">
                        <a href="tel:+1 234 456 7890" type="tel" className="theme-btn btn-md"><i className="fas fa-phone-alt"></i> <span className="call-number">866.908.4748</span></a>
                        <div className="search-dropdown">
                            <button type="button" className="icon-btn" data-bs-toggle="dropdown">
                                <i className="fas fa-search"></i>
                            </button>
                            <form className="dropdown-menu" role="dropdown">
                                <input className="search-input " name="search" placeholder="Search " aria-label="Search " />
                                <button className="search-btn " type="submit"><i className="fas fa-search "></i> </button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav >
        </div >
    );
};

export default NavBar;