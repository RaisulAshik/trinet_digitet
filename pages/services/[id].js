import React from 'react';
import Layout from '../../components/layout';
import { homeApi } from '../../lib/api/homeApi';
import { serviceDetailsApi } from '../../lib/api/serviceDetailsApi';
import pageStyles from '../../styles/PageBanner.module.css';
import Link from 'next/link';
const serviceDetails = (data) => {
    return (
        <Layout>
            {/* <!-- Page Banner --> */}
            <section className={`${pageStyles.page_bgOne} ${pageStyles.page_banner}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className={`${pageStyles.page_title} 'text-center'`}>
                                <div className="h1">{data.data.title} </div>
                                <p>Invest in Your Future with an eCommerce SEO Company that Gets Results</p>
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
                                    <li><a href="#">{data.data.title}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- SEO --> */}
            <section className="seo--area pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 seo-col">
                            <div className="seo--text">
                                <div className="h2">Introduction about {data.data.title} in a passage</div>
                                <p>
                                    Local businesses have gone a new dimension in the current era. People just don’t want to confine to the
                                    same old brand all the time that is around their block anymore. Most customers want to get the best
                                    service out of everything and compare all the possibilities they can get their hands on. And the internet
                                    has made the comparison easier as everyone is looking at everything on the web. So, a business can
                                    grow exponentially if it has an engaging and properly guided website. Here, local SEO will come to your
                                    rescue.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6 seo-col">
                            <div className="seo--img">
                                <img src="/assets/img/seo-img.png" />
                            </div>
                        </div>
                        <div className="col-lg-6 seo-col">
                            <div className="seo--text">
                                <p>
                                    {data.data.longDescription}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* <!-- Awards Certifications --> */}
            <section className="awards-certification-area pt-5 pb-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="awards-certification-content">
                                <div className="h2">Awards, Accreditations, and Certifications</div>
                                <p>
                                    Trinet Digital is an award-winning, digital marketing company that partners with businesses to meet their goals. Over the years, we have earned many accolades from clients and peers alike for our creativity, design excellence, and top-notch services
                                </p>
                                <div className="carouselContainer">
                                    <div className="leftCarousel" style={{ animationDuration: '20s' }}>
                                        <div className="company-logo">
                                            <img src="/assets/img/awards1.png" />
                                        </div>
                                        <div className="company-logo">
                                            <img src="/assets/img/awards2.png" />
                                        </div>
                                        <div className="company-logo">
                                            <img src="/assets/img/awards3.png" />
                                        </div>
                                        <div className="company-logo">
                                            <img src="/assets/img/awards4.png" />
                                        </div>
                                        <div className="company-logo">
                                            <img src="/assets/img/awards5.png" />
                                        </div>
                                        <div className="company-logo">
                                            <img src="/assets/img/awards6.png" />
                                        </div>
                                        <div className="company-logo">
                                            <img src="/assets/img/awards7.png" />
                                        </div>
                                    </div>
                                    <div className="leftCarousel" style={{ animationDuration: '20s' }}>
                                        <div className="company-logo">
                                            <img src="/assets/img/awards1.png" />
                                        </div>
                                        <div className="company-logo">
                                            <img src="/assets/img/awards2.png" />
                                        </div>
                                        <div className="company-logo">
                                            <img src="/assets/img/awards3.png" />
                                        </div>
                                        <div className="company-logo">
                                            <img src="/assets/img/awards4.png" />
                                        </div>
                                        <div className="company-logo">
                                            <img src="/assets/img/awards5.png" />
                                        </div>
                                        <div className="company-logo">
                                            <img src="/assets/img/awards6.png" />
                                        </div>
                                        <div className="company-logo">
                                            <img src="/assets/img/awards7.png" />
                                        </div>
                                    </div>
                                    <div className="leftCarousel" style={{ animationDuration: '20s' }}>
                                        <div className="company-logo">
                                            <img src="/assets/img/awards1.png" />
                                        </div>
                                        <div className="company-logo">
                                            <img src="/assets/img/awards2.png" />
                                        </div>
                                        <div className="company-logo">
                                            <img src="/assets/img/awards3.png" />
                                        </div>
                                        <div className="company-logo">
                                            <img src="/assets/img/awards4.png" />
                                        </div>
                                        <div className="company-logo">
                                            <img src="/assets/img/awards5.png" />
                                        </div>
                                        <div className="company-logo">
                                            <img src="/assets/img/awards6.png" />
                                        </div>
                                        <div className="company-logo">
                                            <img src="/assets/img/awards7.png" />
                                        </div>
                                    </div>
                                    {/* <!--</div>--> */}
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
                                <div className="h2">Are You Ready? Let's Get <br /> To Work!</div>
                                <ul>
                                    <li>
                                        <a href="#" className="theme-btn btn-md"><i className="far fa-comment-alt"></i>
                                            GET FREE PROPOSAL
                                        </a>
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

            {/* <!-- Things That We Do --> */}
            <section className="things-that-area section-bgOne pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="section-title text-center">
                                <div className="h2">Things That We Do</div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi necessitatibus est,
                                    perspiciatis praesentium exercitationem corrupti? Quia aspernatur dolorum error!
                                    Incidunt?</p>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-2">
                        <div className="col-lg-12">
                            <div className="things-content cols-4">
                                <div className="things-do-item">
                                    <div className="things-do-icon">
                                        <i className="far fa-eye"></i>
                                    </div>
                                    <div className="things-do-text">
                                        <div className="h5">Local SEO Audit</div>
                                        <p>
                                            Local SEO is very tricky in many situations as it changes its requirement and
                                            preferences according to different regions. So, we do an extensive audit on every project about the
                                            possibilities that can be achieved. We examine your website and give you a report on the things that we
                                            will work on. We also give you a “final report” after our job to show how much the site has improved
                                        </p>
                                    </div>
                                </div>
                                <div className="things-do-item">
                                    <div className="things-do-icon">
                                        <i className="fas fa-globe-europe"></i>
                                    </div>
                                    <div className="things-do-text">
                                        <div className="h5">Keyword Research & Strategy</div>
                                        <p>
                                            Keyword research is the first and significant step of local SEO. At Trinet
                                            Digital, we cover a wide range of keywords for each and every page and find out high-value keywords.
                                            Our special keyword algorithm will test every keyword with a geo-specific and targeted audience to seek
                                            out the most suitable one for your business and to have the most engagement.
                                        </p>
                                    </div>
                                </div>
                                <div className="things-do-item">
                                    <div className="things-do-icon">
                                        <i className="fas fa-bullhorn"></i>
                                    </div>
                                    <div className="things-do-text">
                                        <div className="h5">Google My Business SEO</div>
                                        <p>
                                            Managing Google My Business is a must nowadays to stay competitive in
                                            Google. Google has updated its policy on local businesses and give more emphasis on websites that are
                                            GMB listed. Our local SEO team will provide you a completed GMB with proper audit and analysis and
                                            help your brand to reach the market where you want it to be
                                        </p>
                                    </div>
                                </div>
                                <div className="things-do-item">
                                    <div className="things-do-icon">
                                        <i className="fas fa-file-signature"></i>
                                    </div>
                                    <div className="things-do-text">
                                        <div className="h5">Content Writing</div>
                                        <p>
                                            The content of your website is the first thing a client will observe. So, rich and
                                            engaging content will attract and hold more customers. Our content writer team has great experience in
                                            the local market, and we always keep our research going on to find the latest trend. Our team also does
                                            local keyword research, product reviews, and blog posts to get the most local traffic.
                                        </p>
                                    </div>
                                </div>
                                <div className="things-do-item">
                                    <div className="things-do-icon">
                                        <i className="fas fa-comments-dollar"></i>
                                    </div>
                                    <div className="things-do-text">
                                        <div className="h5">On-page optimization</div>
                                        <p>
                                            A fully optimized website in every algorithm of Google is very important to rank
                                            and reach your target audience. Our local SEO service will take care of numerous factors like external
                                            links, target keywords, engaging content, high-speed loading, social media, etc., and many more. We
                                            also input other tactics to get ahead of your competitors by a great margin
                                        </p>
                                    </div>
                                </div>
                                <div className="things-do-item">
                                    <div className="things-do-icon">
                                        <i className="fas fa-cogs"></i>
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
            <section className="client-reaction-area pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="section-title text-center">
                                <div className="h2">Client Reactions</div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi necessitatibus est,
                                    perspiciatis praesentium exercitationem corrupti? Quia aspernatur dolorum error!
                                    Incidunt?</p>
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
                                        <div className="h6">From the Client:</div>
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
                                        <div className="h6">From the Client:</div>
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
                                        <div className="h6">From the Client:</div>
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
            </section>

            <section className="seo--area pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 seo-col">
                            <div className="seo--text">
                                <div className="h2">How leads grow from local SEO </div>
                                <p>
                                    Local SEO is different in many factors from traditional SEO. In traditional SEO, the competition is mainly
                                    global, and boosting the brand in many different ways is important to get a good SERP (Search Engine
                                    Result Pages). But in local SEO, we need to focus on local markets, the local trends and etiquettes, and
                                    competitors on the same demographics. It is more about geo-specific search queries about any product
                                    or service people are looking after in their locality.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6 seo-col">
                            <div className="seo--text">
                                <p>
                                    In the local market, the conversion rate is generally higher as people tend to buy the product service
                                    they are searching for. So, the website should be properly structured and designed to keep the attention
                                    and trust of the visitor. Google algorithm also has a big part on your local service website. It has
                                    different requirements and unique formulae for ranking the local SERP. So, everything should be kept in
                                    mind while working on the local SEO
                                </p>
                                <p>
                                    The things that are pivotal to engage more local customers are
                                </p>
                                <p>

                                    <ul>
                                        <li style={{ padding: '5px' }}>
                                            * Google My Business approved
                                        </li>
                                        <li style={{ padding: '5px' }}>
                                            * A high-speed website with low loading time
                                        </li>
                                        <li style={{ padding: '5px' }}>
                                            * Small paragraphs and interactive UI
                                        </li >
                                        <li style={{ padding: '5px' }}>
                                            * The proper ratio of hyperlinks
                                        </li>
                                        <li style={{ padding: '5px' }}>
                                            * Proper citations and domain authority
                                        </li>
                                        <li style={{ padding: '5px' }}>
                                            * High-value keywords
                                        </li>
                                    </ul>
                                </p>
                                <p>
                                    A Junto survey on the local digital market shows that one out of every two business-to-business
                                    marketers believes that internet marketing has the most effects on local digital marketing. If all thefactors are revised properly, an effective local SEO can increase the conversion rate by almost 20
                                    percent.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 seo-col">
                            <div className="seo--img">
                                <img src="/assets/img/seo-img.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="things-that-area section-bgOne pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="section-title text-center">
                                <div className="h2">What makes Us a Go to Local SEO Agency for your Business</div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi necessitatibus est,
                                    perspiciatis praesentium exercitationem corrupti? Quia aspernatur dolorum error!
                                    Incidunt?</p>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-2">
                        <div className="col-lg-12">
                            <div className="things-content cols-4">
                                <div className="things-do-item">
                                    <div className="things-do-icon">
                                        <i className="far fa-eye"></i>
                                    </div>
                                    <div className="things-do-text">
                                        <div className="h5">Consult with Experts</div>
                                        <p>
                                            Our local SEO team will consult you before starting the project about any potential changes and factors
                                            that we will work on the project. We study the other local websites and give feedback on everything
                                            that can be improved. We also keep our clients updated throughout the whole project
                                        </p>
                                    </div>
                                </div>
                                <div className="things-do-item">
                                    <div className="things-do-icon">
                                        <i className="fas fa-globe-europe"></i>
                                    </div>
                                    <div className="things-do-text">
                                        <div className="h5">Affordable Service</div>
                                        <p>
                                            Our goal is not only to do business with our clients but also to make them a presentable website. There
                                            is common negligence from the local entrepreneurs on spending anything on local SEO. So, we keep an
                                            affordable price on our service so that nobody misses these large online-based customers.
                                        </p>
                                    </div>
                                </div>
                                <div className="things-do-item">
                                    <div className="things-do-icon">
                                        <i className="fas fa-bullhorn"></i>
                                    </div>
                                    <div className="things-do-text">
                                        <div className="h5">Best Outlook of your Website</div>
                                        <p>
                                            According to an online study, more than 50% of local business owners either do not have any website at
                                            all or have lackluster ones that most people do not trust. Trustworthy and esthetically beautiful
                                            websites are very important for the conversion rate. We put our highest effort into improving that.
                                        </p>
                                    </div>
                                </div>
                                <div className="things-do-item">
                                    <div className="things-do-icon">
                                        <i className="fas fa-file-signature"></i>
                                    </div>
                                    <div className="things-do-text">
                                        <div className="h5">Keep you updated</div>
                                        <p>
                                            We like to keep our clients updated about what’s going on in the project. We extract Google analytics
                                            reports and many other reports on different sections to show the progress. That’s why our clients can
                                            get the first-hand experience on their website’s evolution in real-time
                                        </p>
                                    </div>
                                </div>
                                <div className="things-do-item">
                                    <div className="things-do-icon">
                                        <i className="fas fa-comments-dollar"></i>
                                    </div>
                                    <div className="things-do-text">
                                        <div className="h5">We Are Constantly Improving</div>
                                        <p>
                                            We like to work with different clients on different services and demographics so that we can gather
                                            experience in every project. Our team consists of experienced people who have knowledge about many
                                            types of projects and still eagerly learning from new ones.
                                        </p>
                                    </div>
                                </div>
                                <div className="things-do-item">
                                    <div className="things-do-icon">
                                        <i className="fas fa-cogs"></i>
                                    </div>
                                    <div className="things-do-text">
                                        <div className="h5">Help you with Digital Marketing</div>
                                        <p>
                                            Digital marketing is one of the most important tools to engage people in your service and products.
                                            People are constantly getting advertisements of products around them in digital media. Our digital
                                            marketing experts can help your products also to reach the destined customer in social media with
                                            perfection.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="seo--area pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 seo-col">
                            <div className="seo--text">
                                <div className="h2">Google My Business- The important factor that is usually overlooked</div>
                                <p>
                                    Google My Business or GMB is a core factor nowadays to get the approval of Google on your website
                                    SERP. A well-built GMB will aid you in many ways. Google likes to know more about your business. If you
                                    have a properly structured GMB attached to your website, then Google will provide you with a good
                                    ranking. By unlocking GMB for your business, you can also strengthen your brand value and your
                                    business’s existence.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6 seo-col">
                            <div className="seo--img">
                                <img src="/assets/img/seo-img.png" height="280" width="100px" />
                            </div>
                        </div>
                        <div className="col-lg-6 seo-col">
                            <div className="seo--text">

                                <p>
                                    Google My Business can also get you in the “local 3 packs” of google, where your business will stay on
                                    the top of google search without much effort. Also, it will increase the trust flow of your customers and
                                    boost your visibility. It also helps to build the image of your brand and get you exposed to many
                                    targeted audiences. It can drive customers from the outside and increase your reputation. So, a properly
                                    constructed GMB profile can do wonders in your business.
                                </p>

                            </div>
                        </div>
                        <div className="col-lg-12 seo-col pb-4">
                            <p>
                                In this new era of communication, local business has evolved drastically, and people who are adapting to
                                the changes can reap the best out of the situation. If you want to be one of those who have changed
                                their fortune from online business, you can always rely on the relentless and trustworthy service of
                                Trinet Digital to take you all the way to the top.
                            </p>
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
                                <img src="/assets/img/faq-1.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default serviceDetails;

export async function getStaticPaths() {
    const services = await homeApi.service().then(res => res.data);
    const paths = services.map(res => {
        return { params: { id: res._id.toString() } }
    });
    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps(contex) {
    const id = contex.params.id;
    const data = await serviceDetailsApi.servicesDetails(id).then(res => res.data)
    return {
        props: {
            data
        }
    }
}