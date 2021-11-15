import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head'
import Layout from '../../components/layout';
import Accordion from 'react-bootstrap/Accordion';
import AwardsCertification from './Awards-certification';

const index = () => {
    const [showAnswer, setShowAnswer] = useState(false);
    const [id, setId] = useState();

    const handleClick = (id, value) => {
        value = !value
        setShowAnswer(value);
        setId(id);
    }

    return (
        <div>
            <Head>
                <title>SEO</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Trinet Digital is an SEO company that offers services to clients throughout USA. For affordable & effective search engine optimization, contact our team today." />
                <meta name="keywords" content="seo agency" />
            </Head>
            <Layout>
                {/* <!-- Page Banner --> */}
                <section className="page-banner page-bgOne">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="page-title text-center">
                                    <div className="h1"><h1>SEO - (SEARCH ENGINE OPTIMIZATION)</h1></div>
                                    <p>Completely Change the Dynamic and Convert Your Business Status Like a Pro with Trinet Digital</p>
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
                                        <li><a href="#">seo</a></li>
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
                                <div className="seo--img position-relative pt-0">
                                    <div className="about-bd2">
                                        <img src="/assets/img/about-22.png" alt="Field of SEO where 3 experts are doing their particular job for an optimized action." title="Field of SEO" width="100%" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 seo-col align-self-center">
                                <div className="section-title seo-titles">
                                    <div className="h6">SEO Is the Way</div>
                                    <div className="h2"><h2>Treat Your Website With SEO To Create A Brand Of Success</h2></div>
                                    <div className="section-bar2"></div>
                                </div>
                                <div className="seo--text">
                                    <p>
                                        The world is going through a hard time and the business sector has been suffering
                                        the hardest. In this situation of staying at home, online platforms have seen a
                                        surge in business. The “new normal” is that people getting everything done in the
                                        internet. So, having an online platform of your service or business can be a
                                        blessing in disguise.
                                    </p>
                                    <ul>
                                        <li className="seo-tts pt-4">
                                            <h5><i class="fas fa-check-circle text-primary"></i>  Why it's Important?</h5>
                                            <p>But it isn’t so easy as it seems. As everyone is having their go on the internet, you
                                                need to stay above all to achieve the best result. And having your website on the
                                                top of the search engine is the first step towards the right direction. </p>
                                        </li>
                                        <li className="seo-tts pt-4">
                                            <h5><i class="fas fa-check-circle text-primary"></i>  Why Choose Us?</h5>
                                            <p>Trinet Digital is a dedicated SEO agency where we have a combination of expertise and
                                                experience in search engine optimization or SEO, that is capable of bringing you
                                                to your destination. We don’t boast about ourselves to our clients, rather show
                                                them proofs and results of our previous successful campaigns. So, if you want to
                                                improve your business, work with us and we promise to give you the best
                                                guidance.</p>
                                        </li>
                                    </ul>

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
                                <div className="section-title text-center">
                                    <div className="text-primary h6">Our Services</div>
                                    <div className="h2"><h1>Fully Dedicated SEO Service To Give You The Ultimate Experience And Satisfaction</h1></div>
                                    <div className="section-bar"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-2">
                            <div className="col-lg-12">
                                <div className="things-content cols-4">
                                    <div className="things-do-item">
                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/seoImg/local-seo.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">Local SEO</div>
                                            <p>
                                                Local business is the most arbitrary place for the marketers and needs to attract
                                                genuine people to the website. Statistics showed that more than 50% of the local
                                                businesses are searched online and more than 90% of people like to get their
                                                service from the first page. So, we offer thorough research and extensive service
                                                on your local business profile so that your site and google my business (GMB)
                                                stays on top all the time.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="things-do-item">
                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/seoImg/on-page-seo.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">On-Page SEO</div>
                                            <p>
                                                Improve your page visibility and many other technical attributes by enhancing the
                                                on-page fundamentals. At Trinet Digital, we provide high-quality on-page SEO
                                                service which will make your website very responsive, greatly attractive, and filled
                                                with “hooks” for the customers to stay and more to visit. We bring a user-friendly
                                                atmosphere to your website with high-quality HTML tags, exclusive articles and
                                                images, and an elegant vibe.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="things-do-item">
                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/seoImg/off-page-seo.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">Off-Page SEO</div>
                                            <p>
                                                Like the on-page SEO, it requires great care to build up the off-page SEO as they
                                                are reciprocal to each other. A proper off-page SEO will persuade Google to give
                                                you more attention and a better ranking in SERP. Trinet Digital will give you the
                                                best off-page treatment with high-quality backlinks, great leads from social media
                                                marketing, and “juice” from quality websites. We also improve your website’s
                                                credibility and user-friendliness to give the visitors a soothing experience.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="things-do-item">
                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/seoImg/shopify-seo.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">Shopify SEO</div>
                                            <p>
                                                Shopify is one of the most alluring online business platforms where more and
                                                more people are doing business every day. The eCommerce SEO for Shopify is a
                                                great way to improve your online sales and engagement. We do everything like
                                                SEO audit, link building, on-page SEO, off-page SEO, social media marketing, etc.
                                                to upgrade your Shopify account with positive feedbacks from many customers.
                                                Our SEO team will provide you 24/7 service with consistent support.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="things-do-item">
                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/seoImg/amazon-seo.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">Amazon SEO</div>
                                            <p>
                                                When it comes to the biggest marketplace in the world, we give our utmost
                                                expertise and attention. Amazon SEO has become very competitive and more
                                                people are taking the help of an expert to reach the top. So, you should not lag
                                                behind and take our professional service to boost your Amazon account. We do everything there can be done to make your Amazon account flourish. We will
                                                publish review articles, maximize ad placements, and promote it properly.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="things-do-item">
                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/seoImg/e-commerce-seo.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">Ecommerce SEO</div>
                                            <p>
                                                Trinet Digital has profound experience with eCommerce sites and the way they
                                                work. We can share our expertise with you and give you a great service to
                                                improve your eCommerce store and accounts. We have experts to do regular
                                                tasks like target email marketing, social media engagement, blog posting, product
                                                reviews, etc. We also have some “secret incense” that we only share with our
                                                clients which is more effective than any other strategies on the web.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="things-do-item">
                                        <div className="things-do-icon">
                                            <i className="s">
                                                <img src="/assets/img/seoImg/content-writing.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">Content Writing</div>
                                            <p>
                                                Content is the face of your website that will give your first impression to the
                                                visitors. We have meticulous content writers who can write excellent articles
                                                providing high-quality keywords and unique phrases. Google loves unique content
                                                with good information and user-friendly attributes. In recent Google updates,
                                                they rated website content highly and declared quality content alone can improve
                                                the SERP. So, make sure to improve your content with our expertise.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="things-do-item">
                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/seoImg/keyword-reaserch-&-strategy.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">Keyword Research & Strategy</div>
                                            <p>
                                                Trinet Digital is an SEO specialist that has immense experience in niche-based
                                                keyword research. We develop different strategies and research techniques to
                                                rank your website and grind you out the most effective and exclusive keywords.
                                                We also take your suggestions and give you a list of good quality keywords for you
                                                to choose from. We also study all the competitors and try to provide you the best
                                                and competitive keywords for your niche.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="things-do-item">
                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/seoImg/link-building.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">Link Building</div>
                                            <p>
                                                Backlinks are the backbones of a website. But you must bring backlinks from
                                                reliable and healthy websites. After several Google updates, backlinks with quality
                                                are more effective than quantity. A salubrious backlink will help you rank better
                                                than 100+ spammy ones. We bring backlinks from renowned and healthy
                                                websites that match our algorithm to provide you the maximum “juice”. The
                                                higher the quality of the backlink, the better are the chances to rank.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Awards Certifications --> */}
                <AwardsCertification />

                {/* <!-- Client Reactions --> */}
                {/* <section className="client-reaction-area pt-5 pb-5">
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

                {/* <!-- Things That We Do --> */}
                <section className="things-that-area section-bgOne pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="section-title text-center">
                                    <div className="h2">Why You Should Work with us</div>
                                    <p>
                                        Relationships build on trust and it is the most important factor when you start
                                        something new. If you choose Trinet Digital as your SEO specialist, you will have
                                        the most positive experience as we give our utmost to keep our clients satisfied
                                        and content. Some of our promises and qualities are-
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-2">
                            <div className="col-lg-12">
                                <div className="things-content services-det cols-4">
                                    <div className="things-do-item">
                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/things/Expertise.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">Expertise</div>
                                            <p>
                                                We believe that “Experience is the best teacher”. Our SEO
                                                specialist team is greatly experienced in their own fields. We have worked
                                                on different projects in various circumstances and regions to confidently
                                                state that, yes, we can do.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="things-do-item">
                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/things/More-Customer-injection.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">More Customer injection</div>
                                            <p>
                                                We do extensive research on every project and
                                                provide unique strategies for more people to visit your website. Not only
                                                that, our special algorithm pulls buying customers, not just visitors. So you
                                                will get the maximum value out of everything.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="things-do-item">
                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/things/Client-Accessibility.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">Client Accessibility</div>
                                            <p>
                                                <h3>Trinet Digital is a user-friendly agency where our clients are always welcome to share their thoughts and give their inputs.</h3>
                                                Unlike other agencies, we listen to our clients’ every need and try to fulfill their
                                                desires with our expertise.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="things-do-item">
                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/things/Transparency.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">Transparency</div>
                                            <p>
                                                We like to keep everything transparent and available to our
                                                clients. We never keep them in the fog and try to keep them updated as we
                                                go. Our clients can access the Google analytics of their site anytime to
                                                check the progress and everything else.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="things-do-item">
                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/things/Speed-Optimization.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">Speed Optimization</div>
                                            <p>
                                                Our developers will give their utmost effort to
                                                maximize the speed of your website. Speed is an important factor to
                                                improve the ranking search result and will keep every client hooked as most
                                                people do not want to wait around a loading screen.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="things-do-item">
                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/things/247-support.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">24/7 support</div>
                                            <p>
                                                We work in different regions, dealing with our clients when
                                                they are able. So, we are always ready to hear our clients and work on it as
                                                soon as we can. Our customer service is also experienced and ready to help
                                                our clients in an instant.
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
                        <div className="row seo-col">
                            <div className="col-lg-6 align-self-center">
                                <img src="/assets/img/seo-home1.png" alt="2 people are working on Search Engine Optimization & another one is standing behind the SEO icon." title="Working on SEO" />
                            </div>
                            <div className="col-lg-6 align-self-center">
                                <div className="seo--text">
                                    <div class="section-title seo-titles">
                                        <div className="h6">Hiring A SEO Agency</div>
                                        <div className="h2">A Good Investment or Not?</div>
                                        <div class="section-bar2"></div>
                                    </div>
                                    <p>
                                        SEO is such an important tool of our modern era that whoever takes the help of
                                        SEO to enhance their business has made a great fortune.
                                        <h4>SEO is the prime way to make your products and services familiar with online customers by bringing your business to the top of Google search.</h4>
                                        Now is the time of modernization where
                                        everybody is searching for anything that crossed their mind on the internet.
                                        People will examine and look for products online and will only stay on the top
                                        page to reach a conclusion about the product or service. So, if you don’t stay at
                                        the top of the Google SERP, then your service will not be seen by the customers
                                        and hence you will not do any business.
                                    </p>
                                    <p>
                                        But SEO will get hold of your website and gradually bring it to the top with many
                                        strategies and tactics that only a good SEO agency can pull off. When you stay on
                                        the top, you will get many leads with actual customers who are looking for your service. So, let us do the “heavy-lifting” of bringing more people to you by giving
                                        you the best SEO treatment and put a smile on your face.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="things-that-area section-bgOne pt-100 pb-100">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6 align-self-center">
                                <div className="seo--text">
                                    <div class="section-title seo-titles">
                                        <div className="h6">Now Is The Time </div>
                                        <div className="h2">So Are You Ready to be Search Engine Optimized or Not</div>
                                        <div class="section-bar2"></div>
                                    </div>
                                    <p>
                                        <h5>Trinet Digital is providing SEO service for a long time with dedication, honesty, and determination.</h5>
                                        We have achieved tremendous success in many of those
                                        projects and floundered in some of them. But, success or not, we have learned
                                        new strategies and techniques that significantly improve our future projects. We
                                        also vet our projects before we start working on them and calculate the outcome
                                        and success possibilities. You will also have a clear understanding of your project's
                                        future and anticipate the odds of your project. So, with Trinet Digital, you can sit
                                        back and let us evaluate your project. And if it has a potentiality, we are very
                                        confident to bring you the ultimate result.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 align-self-center">
                                <img src="/assets/img/content_thumb.png" alt="4 SEO experts are planning on an effective SEO strategy" title="Planning on effective SEO strategy." />
                            </div>

                        </div>
                    </div>
                </section>


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
                                        <Accordion.Header className="faq-title">How do you fix the price of a project?</Accordion.Header>
                                        <Accordion.Body className="faq-title-content">
                                            <p>We do not have any fixed price tag for any project. First, we evaluate and examine
                                                the project and determine its possible outcomes. Then, we give provide a report
                                                to our clients assessing all the potential opportunities and costs regarding the
                                                project. After that, we negotiate with our clients and reach a conclusion.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header className="faq-title">How long will it take to finish my project?</Accordion.Header>
                                        <Accordion.Body className="faq-title-content">
                                            <p>
                                                SEO is generally a long-term approach. In our preliminary report regarding your
                                                project, we plan out a timeframe to finish the job. Although we may not be able to give the surety of your project's finishing time, we will certainly inform you about the
                                                possible stretch of time we will need to do your project right.
                                            </p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header className="faq-title">How surely can you guaranty the success of my project?</Accordion.Header>
                                        <Accordion.Body className="faq-title-content">
                                            <p>Success is all about achieving the best outcome of a subject. It is very challenging
                                                in many projects to get the desired result due to many factors like the demographic and competition on the market. But we never back down from a
                                                challenge and try to fight our way forward with precise and strategic steps.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                </Accordion>

                            </div>
                            <div className="col-lg-6">
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className="faq-title">What are the services Trinet Digital gives in their SEO service? </Accordion.Header>
                                        <Accordion.Body className="faq-title-content">
                                            <p>
                                                SEO is a complicated and lengthy strategy and needs help from a lot of sources to
                                                reach its goal. We also give our clients every possible assistance we can provide.
                                                We evaluate an audit on the client's project and describe the things required to
                                                do the job correctly. We do everything there is and some more for the success of
                                                our clients.
                                            </p>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header className="faq-title">Is SEO the best strategy to improve my business?</Accordion.Header>
                                        <Accordion.Body className="faq-title-content">
                                            <p>Actually, all the possible strategies to improve your business on the internet are
                                                essential and give different outcomes. But if we need to compare them,
                                                <h6>SEO is by far the most effective and result oriented optimization.</h6>
                                                It reaps the benefits in
                                                front of your eyes and generates actual and genuine leads. SEO takes a longer
                                                time than others but gives the best outcome without a doubt for most businesses.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header className="faq-title">Do you work on local SEO services?</Accordion.Header>
                                        <Accordion.Body className="faq-title-content">
                                            <p>Yes, and we have a whole team dedicated to the local SEO. Local businesses are
                                                generally overlooked by many business owners. But they have great potential to
                                                improve the business by enhancing the Google SERP. So, we give our extra care to
                                                the local SEO jobs and do them meticulously.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>


                                </Accordion>

                            </div>
                        </div>
                    </div>
                </section>

                {/* <section className="things-that-area section-bgOne pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <div class="section-title text-center">
                                    <h6 className="text-primary">Schedule</h6>
                                    <h2></h2>

                                    <p>
                                        -
                                    </p>
                                    <div class="section-bar"></div>
                                </div>
                            </div>
                            <div className="col-lg-12 seo-col">
                                <div className="seo--text">

                                    <ul className="shape-6-seo">
                                        <li>Give you guidance about the outlook of your website</li>
                                        <li>Test your website with our tools to see the current situation</li>
                                        <li>Give you tips on digital commercial strategies</li>
                                        <li>Do a thorough audit and discuss the improvement strategies</li>
                                        <li>Analyze your competitors and discuss your position</li>
                                        <li>Make an overall report about things should be done.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}


                {/* <!-- Schedul Strategy --> */}
                <section className="schedul-streategy-area pt-5 pb-5 section-bgTwo">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 schedul-col align-self-center">
                                <div className="schedul-streategy-text">
                                    <div className="h2">Make A Schedule with us and Discuss our Strategies</div>
                                    <p>
                                        A proper session with us before we start our work will greatly help us to
                                        understand your requirements and give us clear goals to pursue. We will
                                    </p>
                                    <ul>
                                        <li>Give you guidance about the outlook of your website</li>
                                        <li>Test your website with our tools to see the current situation</li>
                                        <li>Give you tips on digital commercial strategies</li>
                                        <li>Do a thorough audit and discuss the improvement strategies</li>
                                        <li>Analyze your competitors and discuss your position</li>
                                        <li>Make an overall report about things should be done.</li>
                                    </ul>
                                    <button className="theme-btn btn-md">Book My Call</button>
                                </div>
                            </div>
                            <div className="col-lg-6 schedul-col align-self-center">
                                <div className="schedul-streategy-img">
                                    <img src="/assets/img/shedule.png" alt="A call representative is discussing SEO strategy with a potential client." title="Discussion on SEO strategy to the client" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </div>
    );
};

export default index;