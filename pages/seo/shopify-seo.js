import React from 'react';
import Head from 'next/head'
import Layout from '../../components/layout';
import Link from 'next/link';
import AwardsCertification from './Awards-certification';

import { Tab, Row, Col, Nav, Accordion } from 'react-bootstrap';


const shopifySeo = () => {
    return (
        <div>
            <Head>
                <title>Shopify-SEO</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Trinet Digital is a full-service digital agency that specializes in Shopify SEO services. We provide top-notch SEO services for businesses of all sizes." />
                <meta name="keywords" content="shopify seo expert" />
                <meta name="googlebot" content="noindex" />

            </Head>
            <Layout>

                {/* <!-- Page Banner --> */}
                <section className="page-banner page-bgOne">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="page-title text-center">
                                    <div className="h1">Shopify Search Engine Optimization </div>
                                    <p><h2>Give a major boost to your Shopify online store with our proven strategy</h2></p>
                                    <Link href="/contact" > 
                                        <button className="theme-btn btn-md">get my free proposal </button> 
                                    </Link>
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
                                        <li><a href="#">Shopify Search Engine Optimization</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="pt-100 pb-100">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6 align-self-center">
                                <div className="seo--text">
                                    <div className="section-title">
                                        <div className="text-primary h6">Shopify Dropshipping</div>
                                        <div className="h2">Skyrocket your business with a convenient and competitive Dropshipping store </div>
                                        <div className="section-bar2"></div>
                                    </div>
                                    <p>
                                        Dropshipping is the new phenomenon in Shopify which has created vast opportunity for stores. Most of the Shopify sellers are turning their heads in this sector but few are truly reaping the benefit. It seems very lucrative from the outside but without proper management, Dropshipping any product is very hard. Trinet Digital has exclusive service for stores that are interested in Dropshipping.
                                    </p>
                                    <ul className="choose-content">
                                        <li>
                                            <i class="fas fa-check"></i>
                                            <div className="texts">
                                                <div className="h5">Creating Dropshipping Store</div>
                                                <p>We will cover every part of setting up your Dropshipping store and use all the necessary extensions so that it never loses its relevancy.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <i class="fas fa-check"></i>
                                            <div className="texts">
                                                <div className="h5">Research The Market</div>
                                                <p>We will extensively research the products and platforms that are suitable for your store and also find out exclusive niches that are more profitable in your business. </p>
                                            </div>
                                        </li>
                                        <li>
                                            <i class="fas fa-check"></i>
                                            <div className="texts">
                                                <div className="h5">Application of SEO</div>
                                                <p>We apply SEO and other marketing strategies to promote your product in the right audience. All in all, we will make a competitive and professional Dropshipping store for your business.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 align-self-center">
                                <div className="seo--img position-relative pt-0 ps-lg-3">
                                    
                                    <div className="about-bd2">
                                        <img src="/assets/img/shopify/Outstanding-Digital-Experience.png" width="100%" />
                                    </div>
                                         
                                </div>
                            </div>
                        </div>
                    </div>
                </section>




                <section className="section-bgOne pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="section-title text-center seo-titles">
                                    <div className="h6">Improve your Shopify Store</div>
                                    <div className="h2">Besides SEO, we also work on many more important services for the Shopify store owners that will help them to reach their peak</div>
                                    <div className="section-bar"></div>

                                </div>
                            </div>
                        </div>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                            <Row className="pt-5">
                                <Col sm={12}>
                                    <Nav variant="pills" className="serTitles">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">
                                                <div className="tabItem">
                                                    <img src="/assets/img/shopify/Supplier-and-Niche-Research-icon.png" />
                                                    <div className="h6">Niche Research</div>
                                                </div>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">
                                                <div className="tabItem">
                                                    <img src="/assets/img/shopify/Shopify-Theme-Customization-icon.png" />
                                                    <div className="h6">Theme Customization</div>
                                                </div>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">
                                                <div className="tabItem">
                                                    <img src="/assets/img/shopify/Speed-Optimization-icon.png" />
                                                    <div className="h6">Speed Optimization</div>
                                                </div>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="fourth">
                                                <div className="tabItem">
                                                    <img src="/assets/img/shopify/Professional-Brand-Logo-icon.png" />
                                                    <div className="h6">Professional Brand</div>
                                                </div>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="fifth">
                                                <div className="tabItem">
                                                    <img src="/assets/img/shopify/Custom-Video-Production-icon.png" />
                                                    <div className="h6">Video Production</div>
                                                </div>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="sixth">
                                                <div className="tabItem">
                                                    <img src="/assets/img/shopify/Product-Upload-and-Integration-icon.png" />
                                                    <div className="h6">Product Upload</div>
                                                </div>
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>

                                    <Tab.Content className="tabContents">
                                        <Tab.Pane eventKey="first">
                                            <Row>
                                                <Col lg={5} className="align-self-center">
                                                    <div className="tabImg">
                                                        <img src="/assets/img/shopify/Supplier-and-Niche-Research.png" />
                                                    </div>
                                                </Col>
                                                <Col lg={7} className="align-self-center">
                                                    <div class="content">
                                                        <div className="h4 pb-3">Supplier and Niche Research</div>
                                                        <p>Starting a Shopify store is greatly correlated with a perfect niche for your business. Everybody start their business with a definite goal but some able to achieve it prudently. It happens due to lack of research on supplier and product niche. We will vet individual products to find the perfect niche for you and get you the proper supplier concerning demography, delivery time, security etc. any everything else.</p>
                                                    </div>
                                                    <Row className="pt-5">
                                                        <Col md={6}>
                                                            <div class="tab-text-content">
                                                                <i class="fas fa-caret-right"></i>
                                                                <p>Find a trustworthy supplier for quality products</p>
                                                            </div>
                                                        </Col>
                                                        <Col md={6}>
                                                            <div class="tab-text-content">
                                                                <i class="fas fa-caret-right"></i>
                                                                <p>Research a suitable niche that is perfect for you</p>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <Row>
                                                <Col lg={7} className="align-self-center">
                                                    <div class="content">
                                                        <div className="h4 pb-3">Shopify Theme Customization</div>
                                                        <p>Shopify generally provides a basic theme for every website but they are not suitable for most of the stores. We can work on the theme to make it a professional one that will not only be aesthetically improved but also very responsive to the customers. From color grading to unique buttons- we got it all covered. Our theme customization also maintains the speed and site mass so that it never bothers a single visitor.</p>
                                                    </div>
                                                    <Row className="pt-5">
                                                        <Col md={6}>
                                                            <div class="tab-text-content">
                                                                <i class="fas fa-caret-right"></i>
                                                                <p>A customized theme that will represent your business</p>
                                                            </div>
                                                        </Col>
                                                        <Col md={6}>
                                                            <div class="tab-text-content">
                                                                <i class="fas fa-caret-right"></i>
                                                                <p>Easy to navigate website for better User-interaction</p>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col lg={5} className="align-self-center">
                                                    <div className="tabImg">
                                                        <img src="/assets/img/shopify/Shopify-Theme-Customization.png" />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <Row>
                                                <Col lg={5} className="align-self-center">
                                                    <div className="tabImg">
                                                        <img src="/assets/img/shopify/Speed-Optimization.png" />
                                                    </div>
                                                </Col>
                                                <Col lg={7} className="align-self-center">
                                                    <div class="content">
                                                        <div className="h4 pb-3">Speed Optimization</div>
                                                        <p>High-loading speed is a great nuisance for the customers and it can be very detrimental to your business. We exclusively focus on the loading speed of our clients and try to reach the perfect score. Every one more second it takes to load, will result substantial loss of potential customers. We work on all the factors like image optimization, html, JavaScript etc.  that help to lower the loading speed and minimize the bounce rate. </p>
                                                    </div>
                                                    <Row className="pt-5">
                                                        <Col md={6}>
                                                            <div class="tab-text-content">
                                                                <i class="fas fa-caret-right"></i>
                                                                <p>Fast loading website with on-page improvement</p>
                                                            </div>
                                                        </Col>
                                                        <Col md={6}>
                                                            <div class="tab-text-content">
                                                                <i class="fas fa-caret-right"></i>
                                                                <p>Reduce the bounce rate and increase product sell</p>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fourth">
                                            <Row>
                                                <Col lg={7} className="align-self-center">
                                                    <div class="content">
                                                        <div className="h4 pb-3">Professional Brand Logo</div>
                                                        <p>Branding is the key to the success of any business. In case of online business platforms like Shopify stores, the importance is boundless. With a unique and sophisticate brand logo, you can create a permanent impression on any customers. We make unique brand logos with perfect combination of color, theme, ratio to give it a professional look. This will create a permanent identity of your store in the marketplace. </p>
                                                    </div>
                                                    <Row className="pt-5">
                                                        <Col md={6}>
                                                            <div class="tab-text-content">
                                                                <i class="fas fa-caret-right"></i>
                                                                <p>Create a dedicated and unique brand and logo</p>
                                                            </div>
                                                        </Col>
                                                        <Col md={6}>
                                                            <div class="tab-text-content">
                                                                <i class="fas fa-caret-right"></i>
                                                                <p>Use branding to build your store an identity</p>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col lg={5} className="align-self-center">
                                                    <div className="tabImg">
                                                        <img src="/assets/img/shopify/Professional-Brand-Logo.png" />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fifth">
                                            <Row>
                                                <Col lg={5} className="align-self-center">
                                                    <div className="tabImg">
                                                        <img src="/assets/img/shopify/Custom-Video-Production.png" />
                                                    </div>
                                                </Col>
                                                <Col lg={7} className="align-self-center">
                                                    <div class="content">
                                                        <div className="h4 pb-3">Custom Video Production</div>
                                                        <p>Custom videos are one of the most assured way of advertisement on various social platforms. This videos need to be unique, short but detail-oriented and engaging; so that everyone finds it interesting and trustworthy. We will make such videos and use SEO and social campaigns to promote your Shopify store with these videos. Our production team will make a script, get your approval and then make the video with utmost quality.</p>
                                                    </div>
                                                    <Row className="pt-5">
                                                        <Col md={6}>
                                                            <div class="tab-text-content">
                                                                <i class="fas fa-caret-right"></i>
                                                                <p>Custom video for describing your product and store</p>
                                                            </div>
                                                        </Col>
                                                        <Col md={6}>
                                                            <div class="tab-text-content">
                                                                <i class="fas fa-caret-right"></i>
                                                                <p>Both animated and live videos of your preference</p>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="sixth">
                                            <Row>
                                                <Col lg={7} className="align-self-center">
                                                    <div class="content">
                                                        <div className="h4 pb-3">Product Upload and Integration</div>
                                                        <p>We will carry the heavy load of your product listing and integration. It requires proper optimization and many factors play a role when a product is listed to rank it in Shopify. We will give a proper description of your product, make adjustments to the product image and videos and apply all the components that help to boost your product in the ranking. We also implement SEO to make the product reach to the potential customers.</p>
                                                    </div>
                                                    <Row className="pt-5">
                                                        <Col md={6}>
                                                            <div class="tab-text-content">
                                                                <i class="fas fa-caret-right"></i>
                                                                <p>Save your hassle of product listing and integration </p>
                                                            </div>
                                                        </Col>
                                                        <Col md={6}>
                                                            <div class="tab-text-content">
                                                                <i class="fas fa-caret-right"></i>
                                                                <p>Efficient product listing for reaching the top page</p>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col lg={5} className="align-self-center">
                                                    <div className="tabImg">
                                                        <img src="/assets/img/shopify/Product-Upload-and-Integration.png" />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>


                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>

                    </div>
                </section>

                <section className="pt-100 pb-100">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6 align-self-center">
                                <div className="seo--img position-relative pt-0">

                                    <div className="about-bd2">
                                        <img src="/assets/img/shopify/shopify-middle.png" alt="Analyzing sales growth of Shopify store." title="Analyze sales growth." width="100%" />
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-6 align-self-center">
                                <div className="seo--text">
                                    <div className="section-title">
                                        <div className="text-primary h6">Shopify SEO</div>
                                        <div className="h2">Shopify SEO to do Wonders</div>
                                        <div className="section-bar2"></div>
                                    </div>
                                    <p>
                                        <h5>Shopify is the go-to marketplace due to its many user-friendly features for both parties.</h5> But many vendors are not getting enough sales and customer visits as they aspire. The main reason behind this is the lack of knowledge and strategies of how to boost the Shopify hosted platform. Most of the time, many small but significant mistakes and steps that seem less impactful in the public eye can be the game-changer to rank the Shopify account. Only high-quality Shopify SEO experts  can reduce these mistakes and apply the necessary steps to improve the quality of your shop and make a dramatic leap in the rankings.
                                    </p>
                                    <br />
                                    <ul className="pt-4 local-seo-pointe">
                                        <li><i class="fas fa-check-circle text-primary"></i> More client visits than other business and product websites</li>
                                        <li><i class="fas fa-check-circle text-primary"></i> Targeted customers with a reasonable conversion rate </li>
                                        <li><i class="fas fa-check-circle text-primary"></i> Your products and website to queue in the higher position on Google</li>
                                        <li><i class="fas fa-check-circle text-primary"></i> A quicker crawl from the Google bot and a faster index time</li>
                                        <li><i class="fas fa-check-circle text-primary"></i> The unique and attractive features for the customers</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <div className="callAction-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="callAction-content d-lg-flex text-xs-center">
                                    <div className="align-self-center h2">Want To Grow Your Business? Let Us Improve <br /> The Situaton With A Perfect Solution</div>
                                    <div className="link-box align-self-center ms-auto">
                                        <Link href="/contact" >
                                            <a className="theme-btn btn-lg" href="#">
                                                <i className="btn-curve"></i>
                                                <span className="btn-title">Contact with us</span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <!-- Faq Accordion --> */}
                <section className="faq-accordion-area pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="section-title seo-titles text-center pb-4">
                                    <div className="h6">Frequently asked questions</div>
                                    <div className="h2">Here are some explanations about the frequently asked questions about our operation and strategic implementations </div>
                                    <div class="section-bar"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-4 faq-area">

                            <div className="col-lg-6">
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className="faq-title">Can you build a store from scratch?</Accordion.Header>
                                        <Accordion.Body className="faq-title-content">
                                            <p>Yes, we can make you a store will all the customizations required. We also will do all the audit and experiments required and select the best niche for your store. We will also convert your subdomain (remove “myshopify” from your url) and make a main domain that contains your store name for better branding.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header className="faq-title">How will you customize my store?</Accordion.Header>
                                        <Accordion.Body className="faq-title-content">
                                            <p>
                                                We will make customization of your store according to its need. Website theme is very important to express your product and professionalism. We will customize the default theme that Shopify gave you. We will also add all the essential widget, add-ons, buttons, forms, lists, pricing forms, call to action buttons etc. that are essential and suitable for your store.
                                            </p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header className="faq-title">How long you will provide service?</Accordion.Header>
                                        <Accordion.Body className="faq-title-content">
                                            <p>
                                                Trinet Digital has the reputation to keep that clients for eternity. We like to work with our clients as long as they need us. Our clients also return to us whenever they want and we try to solve any problems and issues that they are facing anytime. In most cases, we will completely make the store and deliver it to you. After that, we keep the store in constant observation for six months. We will also give you a free consultation on any future issues.
                                            </p>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                </Accordion>

                            </div>
                            <div className="col-lg-6">
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className="faq-title">Do I need a domain?</Accordion.Header>
                                        <Accordion.Body className="faq-title-content">
                                            <p>
                                                Shopify generally gives you a free hosting and a subdomain for 25$. But, we highly recommend you to buy a domain for yourself. It will give your brand and store a unique identity and customers will find your Shopify store more trustworthy. We will help you to choose a suitable domain for your business if you require any help.
                                            </p>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header className="faq-title">Why should I sell some specific products, not much more?</Accordion.Header>
                                        <Accordion.Body className="faq-title-content">
                                            <p>
                                                Many of our clients are asking this same question. We can research a wide variety of products for you and find you many niches. But we usually discourage you to choose hundreds of products; rather work with a chosen few that converts more. This give you more options and resources to spend on a respective product, than providing them in fits and starts. It is always the better options to work with a few and make the most out of it.
                                            </p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header className="faq-title">How trustworthy is Dropshipping?</Accordion.Header>
                                        <Accordion.Body className="faq-title-content">
                                            <p>Dropshipping stores are gaining popularity day by day. It is easy to start and the income is very tempting. But, some unethical vendors can ruin your shop by providing low-quality products or scamming the customers. You generally do not hold the control of the product in Dropshipping. So, trusted and vetted merchants are important for you store. We have vetted a lot of merchants on different niches so you can place your bet on us regarding Dropshipping stores.   </p>
                                        </Accordion.Body>
                                    </Accordion.Item>


                                </Accordion>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-bgOne  pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="section-title text-center seo-titles">
                                    <div className="h6">PROJECTS</div>
                                    <div className="h2">Our Projects For Client</div>
                                    <div className="section-bar"></div>

                                </div>
                            </div>
                        </div>
                        <div className="row pt-45">
                            <div className="col-lg-4 col-md-6">
                                <Link href="/shopify-seo-case-study-how-joseph-richardson-ranked-his-shopify-store-1"> 
                                    <a target="_blank" className="project-item">
                                        <img src="/assets/img/project/1.jpg" alt="" />
                                        <div className="project-text">
                                            <Link href="/shopify-seo-case-study-how-joseph-richardson-ranked-his-shopify-store-1">
                                                <a target="_blank">Branding</a>
                                            </Link>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <a href="https://kyliecosmetics.com/en-us" target="_blank" rel="nofollow" className="project-item">
                                    <img src="/assets/img/project/2.jpg" alt="" />
                                    <div className="project-text">
                                        <a href="https://kyliecosmetics.com/en-us" target="_blank" rel="nofollow">Branding</a>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <a href="https://popchart.co/" target="_blank" rel="nofollow" className="project-item">
                                    <img src="/assets/img/project/3.jpg" alt="" />
                                    <div className="project-text">
                                        <a href="https://popchart.co/" target="_blank" rel="nofollow">Branding</a>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <a href="https://helmboots.com/" target="_blank" rel="nofollow" className="project-item">
                                    <img src="/assets/img/project/4.jpg" alt="" />
                                    <div className="project-text">
                                        <a href="https://helmboots.com/" target="_blank" rel="nofollow">Branding</a>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <a href="https://skinny-teatox.com/" target="_blank" rel="nofollow" className="project-item">
                                    <img src="/assets/img/project/5.jpg" alt="" />
                                    <div className="project-text">
                                        <a href="https://skinny-teatox.com/" target="_blank" rel="nofollow">Branding</a>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <a href="https://www.holstee.com/collections/all-product-types" target="_blank" rel="nofollow" className="project-item">
                                    <img src="/assets/img/project/6.jpg" alt="" />
                                    <div className="project-text">
                                        <a href="https://www.holstee.com/collections/all-product-types" target="_blank" rel="nofollow">Branding</a>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
 

                {/* <!-- Awards Certifications --> */}
                <AwardsCertification />


                {/* <!-- Things That We Do --> */}
                <section className="things-that-area section-bgOne pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <div className="section-title seo-titles text-center">
                                    <div className="h6">Shopify SEO Services</div>
                                    <div className="h2">Have your website built like a pro with our excellent services</div>
                                    <div className="section-bar"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-3">
                            <div className="col-lg-12">
                                <div className="things-content cols-4">
                                    <div className="things-do-item">
                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/shopify/Shopify-Website-Audit.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">Shopify Website Audit</div>
                                            <p>
                                                Our first work is to know the condition of your website before we start our job. We examine the website on different scales and units and determine a primary score. We then try to evaluate the estimated improvement we can work on the website. We make a detailed report on this and our Shopify SEO specialist starts working on the issues that we identified.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="things-do-item">
                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/shopify/Keyword-Research.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">Keyword Research</div>
                                            <p>
                                                Search engine optimization of any website or platform is directly related to keyword research and improving the strategy. Trinet Digital will determine your target customers and pluck out the best keywords to drive the customers to your website. We also analyze the potential search terms of your product online and make keywords on those to improve your keyword quality.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="things-do-item">
                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/shopify/Complete-Website-Optimization.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">Complete Website Optimization</div>
                                            <p>
                                                A properly built website is important to make it viable to Google and make them presentable for the customers. To do this, website optimization is essential both on and off-page. Most of the works in on-page optimization seem little, but they are essential to rank higher. Also, a lot of work needs to be done on off-page optimization too.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="things-do-item">
                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/shopify/High-Quality-and-Unique-Content.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">High Quality and Unique Content</div>
                                            <p>
                                                Unique content is the most critical factor in Shopify SEO. As many vendors sell the same types of products, it is important to have a unique and attractive description for every product on your website. That way, Google will give your product a higher spot among your competitors, and customers can also engage with more buying intent.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="things-do-item">
                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/shopify/Build-Proper-Stature-of-Your-Product.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">Build Proper Stature of Your Product</div>
                                            <p>
                                                A survey report shows that almost 70 percent of online customers like to read a proper review of their product before they intend to buy. Building a proper image in front of your customers can make your website more credible. We provide an in-depth description of your website and connect different social accounts and reviews to make your Shopify website more acceptable.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="things-do-item">
                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/shopify/High-Conversion-Rate.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">High Conversion Rate</div>
                                            <p>
                                                Your business only thrives if it turns your website visitors into buyers. A potential buyer is always careful about his choices and doesn’t buy anything without concrete confidence. We use algorithms to make it trustworthy for your customers so they don’t hesitate before buying anything from your website. Everything on your page needs to be diverted according to our algorithm to reach this position.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Call to Action --> */}
                <section className="call-to-action section-bgGradient pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="call-to-action-text text-center">
                                    <div className="h5">WHAT IS NEXT?</div>
                                    <div className="h2">Have anything in mind? Contact us to turn your imagination into reality</div>
                                    <ul>
                                        <li>
                                            <Link href="/contact" >
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


                <section className="pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 align-self-center">
                                <div className="seo--img position-relative pt-0">
                                    <div className="about-bd2">
                                        <img src="/assets/img/shopify/shopify-botom.png" alt="The man sits in the chair & enjoying business to go skyrocket." title="Business goes skyrocket." width="100%" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 align-self-center">
                                <div className="seo--text">
                                    <div className="section-title">
                                        <div className="text-primary h6">Boost Your Shopify</div>
                                        <div className="h2"><h3>Flourish Your Shopify And Make It To The Top</h3></div>
                                        <div className="section-bar2"></div>
                                    </div>
                                    <p>
                                        Shopify has become a very easy-to-build platform for your online business, which provides many benefits for your website. They maintain an easy-to-set-up scenario where you can make your website without any hassle. But, if you truly want to shine and make a good amount of profit in your online shop, you need to optimize it accordingly as your competitors are doing.
                                    </p>
                                    <br />
                                    <p>
                                        Choosing a Shopify SEO company like Trinet Digital can take you to the next level with this optimization. <h4>Our experience and result-based solution have been imminent for many small startups to reach great potential quickly.</h4>  So, to improve your business potential, you can take help from our amazing Shopify SEO team and make a guaranteed improvement of your business website overnight.
                                        made,

                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* <!-- SEO --> */}
                <section className="seo--area section-bgOne pt-100 pb-100">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6 seo-col align-self-center">
                                <div className="section-title seo-titles">
                                    <div className="h6">Own The Marketplace</div>
                                    <div className="h2"><h1>Get The Best Out Of Your Shopify Marketplace With Our Expert Help</h1></div>
                                    <div className="section-bar2"></div>
                                </div>
                                <div className="seo--text">
                                    <p>
                                        Shopify is becoming the most cherished marketplace for business marketers. It has many features and benefits that can enable a business entrepreneur from the ground up. But, having increased popularity, it has become a bit complex in the case of newer and oddly optimized Shopify websites to get the targeted conversion.
                                    </p>
                                    <p>
                                        To rectify this situation, Trinet Digital will offer the best solution by working on every different aspect of your Shopify website. Our Shopify SEO expert team is composed of experts in different Shopify platforms and marketing fields. We promise to give your business platform a boost that will eject you from your current position to the very top with our combined effort.

                                    </p>

                                    {/* <div className="seo-btn mt-5">
                                        <a href="/" className="theme-btn btn-lg">Contact Us</a>
                                    </div> */}

                                </div>
                            </div>
                            <div className="col-lg-6 seo-col align-self-center">
                                <div className="seo--img position-relative pt-0">
                                    <div className="about-bd2">
                                        <img src="/assets/img/shopify/shopify-top.png" alt="The girl is sending information & collecting information." title="Sendig & collecting information." width="100%" />
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>

                {/* <!-- Schedul Strategy --> */}
                <section className="schedul-streategy-area pt-5 pb-5 section-bgTwo">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 schedul-col">
                                <div className="schedul-streategy-text">
                                    <div className="h2">Schedule a Strategy Session With Us</div>
                                    <p>
                                        Get a clear strategy on how to grow your digital presence, outrank your competitors, and
                                        make more money.
                                    </p>
                                    <ul>
                                        <li>Advice on your website design & functionality</li>
                                        <li>A look into your organic SEO presence</li>
                                        <li>Advice on your digital advertising strategy</li>
                                        <li>A comprehensive competitive analysis</li>
                                        <li>A keyword rankings report on how well your SEO is doing</li>
                                        <li>Consultation on conversion ideas for your website</li>
                                    </ul>
                                    <button className="theme-btn btn-md">Book My Call</button>
                                </div>
                            </div>
                            <div className="col-lg-6 schedul-col">
                                <div className="schedul-streategy-img">
                                    <img src="/assets/img/faq-1.png" alt="Transferring information among one another." title="Transferring information" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



            </Layout>
        </div>
    );
};

export default shopifySeo;