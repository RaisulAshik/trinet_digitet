import React from 'react';
import Head from 'next/head'
import Link from 'next/link';
import Layout from '../../components/layout';
import AwardsCertification from './Awards-certification';
// import pageStyles from '../../styles/PageBanner.module.css';
const localSeo = () => {
    return (
        <>
            <Head>
                <title>Local-SEO</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="If you are looking for a local SEO agency that delivers results, call us now! We have helped countless small businesses with their online marketing strategy." />
                <meta name="keywords" content="affordable local seo services" />
            </Head>
            <Layout>
                {/* <!-- Page Banner --> */}
                <section className="page-banner page-bgOne">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="page-title text-center">
                                    <div className="h1">LOCAL SEARCH ENGINE OPTIMIZATION </div>
                                    <p>Get Ahead of the Local Competitors and enhance your Business Outcome</p>
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
                                        <li><Link href={'/'} >Home</Link></li>
                                        <li><a href="#">LOCAL SEARCH ENGINE OPTIMIZATION</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- SEO --> */}
                <section className="seo--area pt-100 pb-100">
                    <div className="container">
                        <div className="row">


                            <div className="col-lg-6 seo-col align-self-center">
                                <div className="section-title seo-titles">
                                    <div className="h6">Local SEO</div>
                                    <div className="h2"><h1>Invest In Your Future With An Local SEO Company That Gets Results</h1></div>
                                    <div className="section-bar2"></div>
                                </div>
                                <div className="seo--text">
                                    <p>
                                        Local businesses have gone a new dimension in the current era. People just don’t want to confine themselves to the same old brand all the time that is around their block anymore. Most customers want to get the best service out of everything and compare all the possibilities they can get their hands on. And the internet has made the comparison easier as everyone is looking at everything on the web. So, a business can grow exponentially if it has an engaging and properly guided website. Here, local SEO will come to your rescue.
                                    </p>
                                    <p>
                                        Trinet Digital has a long and successful experience in local markets and how to improve a local business by doing unique local SEO. Research has shown that more than 90% of the customers search on the local web before buying or taking service. And almost 70% of mobile search about any product on the local websites will convert into a visit to the store or a phone call within a day. So, it is essential to lure your customers to your website and convince them to do business with you, not your competitors. And to make sure you succeed in doing so, Trinet Digital will aid you in every way possible.
                                    </p>
                                    <div className="seo-btn mt-5">
                                        <a href="#" className="theme-btn btn-lg">Contact Us</a>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-6 seo-col align-self-center">
                                <div className="seo--img position-relative pt-0">
                                    <div className="about-bd2">
                                        <img src="/assets/img/localSeo/local-about-seo.png" alt="Standing top in the local search results." title="Top in local search" width="100%" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                {/* <!-- Things That We Do --> */}
                <section className="things-that-area section-bgOne pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="section-title seo-titles text-center">
                                    <div className="h6">Things That We Do</div>
                                    <div className="h2">See the tactics we use every day to get your business ranking on Google by local SEO</div>
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
                                                <img src="/assets/img/localSeo/local-SEO-Audit.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">Local SEO Audit</div>
                                            <p>
                                                Local SEO is tricky in many situations as it changes its requirements and preferences according to different regions. So, we do an extensive audit on every project about the possibilities that can be achieved. We examine your website and give you a report on the things that we will work on. We also give you a “final report” after our job to show how much the site has improved.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="things-do-item">
                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/localSeo/Keyword-Research-&-Strategy.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">Keyword Research & Strategy</div>
                                            <p>
                                                Keyword research is the first and significant step of local SEO. At Trinet Digital, we cover a wide range of keywords for every page and find high-value keywords. Our special keyword algorithm will test every keyword with a geo-specific and targeted audience to seek out the most suitable one for your business and to have the most engagement.

                                            </p>
                                        </div>
                                    </div>
                                    <div className="things-do-item">
                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/localSeo/Google-My-Business-SEO.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">Google My Business SEO</div>
                                            <p>
                                                Managing Google My Business is a must nowadays to stay competitive in Google. Google has updated its policy on local businesses and gives more emphasis on websites that are GMB listed. Our affordable local SEO services will provide you with a completed GMB with proper audit and analysis and help your brand reach the market where you want it to be.

                                            </p>
                                        </div>
                                    </div>
                                    <div className="things-do-item">
                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/localSeo/Content-Writing.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">Content Writing</div>
                                            <p>
                                                The content of your website is the first thing a client will observe. So, rich and engaging content will attract and hold more customers. Our content writer team has excellent experience in the local market, and we always keep our research going on to find the latest trend. Our team also does local keyword research, product reviews, and blog posts to get local traffic.

                                            </p>
                                        </div>
                                    </div>
                                    <div className="things-do-item">
                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/localSeo/On-page-optimization.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">On-Page optimization</div>
                                            <p>
                                                A fully optimized website in every algorithm of Google is essential to rank and reach your target audience. Our local SEO service will take care of numerous factors like external links, target keywords, engaging content, high-speed loading, social media, etc., and many more. We also input other tactics to get ahead of your competitors by a significant margin.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="things-do-item">
                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/localSeo/Business-Citation.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">Business Citation</div>
                                            <p>
                                                Business citation is very important to get your website familiar with the web. At
                                                Trinet Digital, we give inputs to various local directories to build a good impression on your business.
                                                Local directories Angielist, Yelp, Mojopages, etc., can give you a “good link juice,” which helps Google to
                                                recognize your business properly and will rank you higher in the SERP.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Client Reactions --> */}
                {/* <section className="client-reaction-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="section-title text-center">
                                <h2>Client Reactions</h2>
                                <p>Let’s take a quick look about the things some of our clients have to say about Trinet Digital</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="client-reaction-content cols-4">
                                <div className="client-reaction-item">
                                    <div className="client-reaction-img">
                                        <img src="/assets/img/bi-1.jpg" />
                                        <div className="reaction-title">
                                            <a href="#">CONSTRUCTION COMPANY</a>
                                        </div>
                                    </div>
                                    <div className="client-reaction-text">
                                        <div className="client-reaction-pp">
                                            <ul>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                            </ul>
                                            <div className="client-rev">
                                                <img src="/assets/img/google.png" />
                                            </div>
                                        </div>
                                        <h6>From the Client:</h6>
                                        <p>“Thrive has gone above and beyond and it’s allowed me to focus on other aspects
                                            of
                                            business development. Thrive understands the intricate needs of what we want to
                                            accomplish.”</p>
                                    </div>
                                </div>
                                <div className="client-reaction-item">
                                    <div className="client-reaction-img">
                                        <img src="/assets/img/bi-2.jpg" />
                                        <div className="reaction-title">
                                            <a href="#">CONSTRUCTION COMPANY</a>
                                        </div>
                                    </div>
                                    <div className="client-reaction-text">
                                        <div className="client-reaction-pp">
                                            <ul>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                            </ul>
                                            <div className="client-rev">
                                                <img src="/assets/img/facebook.png" />
                                            </div>
                                        </div>
                                        <h6>From the Client:</h6>
                                        <p>“Thrive has gone above and beyond and it’s allowed me to focus on other aspects
                                            of
                                            business development. Thrive understands the intricate needs of what we want to
                                            accomplish.”</p>
                                    </div>
                                </div>
                                <div className="client-reaction-item">
                                    <div className="client-reaction-img">
                                        <img src="/assets/img/bi-3.jpg" />
                                        <div className="reaction-title">
                                            <a href="#">CONSTRUCTION COMPANY</a>
                                        </div>
                                    </div>
                                    <div className="client-reaction-text">
                                        <div className="client-reaction-pp">
                                            <ul>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                            </ul>
                                            <div className="client-rev">
                                                <img src="/assets/img/google.png" />
                                            </div>
                                        </div>
                                        <h6>From the Client:</h6>
                                        <p>“Thrive has gone above and beyond and it’s allowed me to focus on other aspects
                                            of
                                            business development. Thrive understands the intricate needs of what we want to
                                            accomplish.”</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}


                {/* <!-- Awards Certifications --> */}
                <AwardsCertification />
                {/* <!-- Call to Action --> */}

                <section className="call-to-action section-bgGradient pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="call-to-action-text text-center">
                                    <div className="h5">WHAT IS NEXT?</div>
                                    <div className="h2">Want to grow your business? let us improve the situaton with a perfect solution</div>
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

                <section className="seo--area pt-100 pb-100">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6 align-self-center">
                                <div className="section-title ">
                                    <div className="text-primary h6">LEAD GENERATION</div>
                                    <div className="h2">How leads grow from local SEO</div>
                                    <div className="section-bar2"></div>
                                </div>
                                <div className="py-4">
                                    <p>
                                        Local SEO is different in many factors from traditional SEO. In traditional SEO, the competition is mainly global, and boosting the brand in many ways is vital to getting a good SERP (Search Engine Result Pages). But in local SEO, we need to focus on local markets, the local trends and etiquettes, and competitors with the same demographics. It is more about geo-specific search queries about any product or service people are looking for in their locality.
                                    </p>
                                    <br />
                                    <p>
                                        In the local market, the conversion rate is generally higher as people tend to buy the product or service they are searching for. So, the website should be appropriately structured and designed to keep the attention and trust of the visitor. Google algorithm also has a big part in your local service website. It has different requirements and unique formulae for ranking the local SERP. So, everything should be kept in mind while working on the local SEO

                                    </p>
                                    <br />
                                    <div className="fs text-primary h4">
                                        <h5>The things that are pivotal to engage more local customers</h5>
                                    </div>
                                    <ul className="pt-4 local-seo-pointe">
                                        <li><i class="fas fa-check-circle text-primary"></i> Google My Business approved</li>
                                        <li><i class="fas fa-check-circle text-primary"></i> A high-speed website with low loading time</li>
                                        <li><i class="fas fa-check-circle text-primary"></i> Small paragraphs and interactive UI</li>
                                        <li><i class="fas fa-check-circle text-primary"></i> The proper ratio of hyperlinks</li>
                                        <li><i class="fas fa-check-circle text-primary"></i> Proper citations and domain authority</li>
                                        <li><i class="fas fa-check-circle text-primary"></i> High-value keywords</li>
                                    </ul>
                                    <p className="pt-4">
                                        A Junto survey on the local digital market shows that one out of every two business-to-business marketers believes that internet marketing has the most effects on local digital marketing. If all the factors are appropriately revised, <h3>an effective local SEO marketing can increase the conversion rate</h3> by almost 20 percent.
                                    </p>
                                </div>


                            </div>
                            <div className="col-lg-6 align-self-center">
                                <div className="seo--img">
                                    <img src="/assets/img/localSeo/How-Leads-Grow-From-Local-SEO.png" alt="Grow your business with local SEO services" title="Grow local business." />
                                </div>
                            </div>


                        </div>

                    </div>
                </section>


                <section className="things-that-area section-bgOne pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="section-title text-center">
                                    <div className="h2"><h6>What Makes Us A Go To Local SEO Agency For Your Business</h6></div>
                                    <p>Here are the compiled list of things that we're doing at local SEO to take care of our clients.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-2">
                            <div className="col-lg-12">
                                <div className="things-content cols-4">
                                    <div className="things-do-item">
                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/localSeo/Consult-with-Experts.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">Consult with Experts</div>
                                            <p>
                                                Our local SEO team will consult you before starting the project about any potential changes and factors that we will work on. We study the other local websites and give feedback on everything that can be improved. We also keep our clients updated throughout the whole project.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="things-do-item">

                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/localSeo/Affordable-Service.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">Affordable Service</div>
                                            <p>
                                                Our goal is not only to do business with our clients but also to make them a presentable website. There is common negligence from local entrepreneurs on spending anything on local SEO. So, <h2>we keep local SEO pricing inexpensive on our service</h2> so that nobody misses these large online-based customers.

                                            </p>
                                        </div>
                                    </div>
                                    <div className="things-do-item">

                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/localSeo/Best-Outlook-of-your-Website.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">Best Outlook of your Website</div>
                                            <p>
                                                According to an online study, more than 50% of local business owners either do not have any website at all or have lackluster ones that most people do not trust. Trustworthy and aesthetically beautiful websites are significant for the conversion rate. We put our highest effort into improving that.

                                            </p>
                                        </div>
                                    </div>
                                    <div className="things-do-item">
                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/localSeo/Keep-you-updated.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">Keep you updated</div>
                                            <p>
                                                We like to keep our clients updated about what’s going on in the project. We extract Google analytics reports and many other reports on different sections to show the progress. That’s why our clients can get first-hand experience on their website’s evolution in real-time.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="things-do-item">

                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/localSeo/We-Are-Constantly-Improving.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">We Are Constantly Improving</div>
                                            <p>
                                                We like to work with different clients on different services and demographics to gather experience in every project. We have worked on many local SEO packages. So, our team consisting of experienced people, have knowledge about many types of projects and still eagerly learning from new ones.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="things-do-item">

                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/localSeo/Help-you-with-Digital-Marketing.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">Help you with Digital Marketing</div>
                                            <p>
                                                Digital marketing is one of the most important tools to engage people in your service and products. People are constantly getting advertisements of products around them in digital media. Our digital marketing experts can also help your products reach the destined customer in social media with perfection.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="seo--area pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 align-self-center">
                                <div className="seo--img p-0">
                                    <img src="/assets/img/localSeo/Google-My-Business--The-Important-Factor-That-Is-Usually-Overlooked.png" alt="Individuals are promoting brands through organized effort" title="Promoting brands" />
                                </div>
                            </div>
                            <div className="col-lg-6 align-self-center">
                                <div className="section-title ">
                                    <div className="text-primary h6">Google My Business</div>
                                    <div className="h2">The Important Factor That Is Usually Overlooked</div>
                                    <div className="section-bar2"></div>
                                </div>
                                <div className="pt-2">
                                    <p>
                                        Google My Business or GMB is a core factor nowadays to get the approval of Google on your website SERP. A well-built GMB will aid you in many ways. Google likes to know more about your business. If you have a properly structured GMB attached to your website, then Google will provide you with a good ranking. By unlocking GMB for your business, you can also strengthen your brand value and your business’s existence.
                                    </p>
                                    <br />
                                    <p>
                                        Google My Business is listed in a different section by Google and generally appears at the top of the page. If you can provide valid information of your business with an exact location, it will automatically place in the top of the GMB listing. When people search about anything related to your business in the local market, Google will give you a high-rank on the GMB provided you have completed all the requirements for GMB.
                                    </p>
                                </div>

                            </div>


                        </div>
                    </div>
                </section>

                <section className="seo--area section-bgOne pt-100 pb-100">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6 align-self-center">
                                <div className="pt-2">
                                    <div className="section-title ">
                                        <div className="text-primary h6">Get ahead of others</div>
                                        <div className="h2">Win the Local SEO Horse-Race With Trinet Digital</div>
                                        <div className="section-bar2"></div>
                                    </div>
                                    <p>
                                        In this new era of communication, local business has evolved drastically, and people who are adapting to the changes can reap the best out of the situation. <h4>Having a Local SEO marketing company can improve the direction of your business towards your goal.</h4> If you want to be one of those who have changed their fortune from online business, you can always rely on the relentless and trustworthy local SEO consultancy service. Shake off your anxiety and pressure of your local business improvement by reaching out to Trinet Digital to take you all the way to the top.
                                    </p>

                                </div>

                            </div>
                            <div className="col-lg-6 align-self-center">
                                <div className="seo--img p-0">
                                    <img src="/assets/img/localSeo/Win-The-Local-SEO-Horse-Race-With-Trinet-Digital.png" alt="A girl is routing through the main point of local SEO" title="Main point of local SEO" />
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
                                    <img src="/assets/img/faq-1.png" alt="3 people are transferring information among one another." title="Transferring information" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>

        </>
    );
};

export default localSeo;