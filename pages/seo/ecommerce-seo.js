import React from 'react';
import Head from 'next/head'
import Layout from '../../components/layout';
import Link from 'next/link';
import AwardsCertification from './Awards-certification';

const ecommerceSeo = () => {
    return (
        <>

            <Head>
                <title>E-commerce seo</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Trinet Digital is a leading provider of eCommerce SEO services. We offer an array of solutions that will help you achieve your goals. Contact us today." />
                <meta name="keywords" content="ecommerce seo packages" />

            </Head>

            <Layout>

                {/* <!-- Page Banner --> */}
                <section className="page-banner page-bgOne">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="page-title text-center">
                                    <div className="h1">eCommerce Search Engine Optimization </div>
                                    <p>Take control of your market from your competitors and run it by yourself</p>
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
                                        <li><a href="#">eCommerce Search Engine Optimization</a></li>
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
                                        <img src="/assets/img/ecommerce-top.png" alt="2 guys are promoting eCommerce website through various channels." title="Promoting eCommerece website." width="100%" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 seo-col align-self-center">
                                <div className="section-title seo-titles">
                                    <div className="h6">ECommerce SEO</div>
                                    <div className="h2"><h2>Improve Your Business With A Strategic ECommerce SEO Boost Today</h2></div>
                                    <div className="section-bar2"></div>
                                </div>
                                <div className="seo--text">
                                    <p>
                                        Digital marketing has reached a new height where people can do everything you can imagine online. And this makes people turn their attention to online marketing more often than before. Having a business today requires greater engagement and customer attraction among the plethora of online shops. Both new and veteran entrepreneurs need a good amount of effort to do a successful business online. An online study found that 65% of people go online before purchasing a product or taking a service. Among them, most use Google to get their products. So, it is a certainty that the online marketplace and eCommerce will grow exponentially in the future.
                                    </p>
                                    <p>
                                        Now the most crucial question is, “Will everyone who is in the eCommerce sector make a fortune?” The bitter but straightforward answer is “NO.” If you want your business to be visible, you need to keep it inside the Google SERP (Search Engine Ranking Position), aka the 1st page of the search. SEO (search engine optimization) can make your page rank higher and eventually make it to the top. An eCommerce SEO company like Trinet Digital can take care of this job by doing a full-on SEO on your website to rank it among the top results. We have experienced SEO experts who can help you in every possible way to make things possible within a convenient time.
                                    </p>

                                    <div className="seo-btn mt-5">
                                        <a href="#" className="theme-btn btn-lg">Contact Us</a>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                </section>

                <section className="section-bgOne pt-100 pb-100">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6 seo-col align-self-center">
                                <div className="section-title seo-titles">
                                    <div className="h6">SEO for Ecommerce</div>
                                    <div className="h2">Ecommerce is the present and the future, and SEO is the answer.</div>
                                    <div className="section-bar2"></div>
                                </div>
                                <div className="seo--text">
                                    <p>
                                        Ecommerce is nothing new to people. As digitization is overcoming everything, people use digital markets more often than conventional stores to buy or review their products. They don’t want to buy a product among the possible five varieties in a local store but instead choose from hundreds of online options. But everyone has an online website of their business, not getting customers uniformly. Most people choose their products from the first few searches, and these top results of a search tend to get 90% of the leads. So only the leading competitors are doing the actual business; others are feeding off the scraps. If the top search result is to be obtained, SEO is the only answer.

                                    </p>
                                    <p>
                                        As an examiner gives a rank to a student from their exam paper, Google also gives you a rank after examining almost 300+ factors. A proper SEO will satisfy these factors and eventually gives you the top spot. And for a real and comprehensive SEO job, you can lean towards Trinet Digital as we know to answer everything Google asks and likes. Most of the websites do not get the importance of a good SEO and lag behind. If you do not want to be one of them, let us help you to mix eCommerce with SEO and get the highest rank and flourish the true potential of your business.
                                    </p>

                                </div>
                            </div>
                            <div className="col-lg-6 seo-col align-self-center">
                                <div className="seo--img position-relative pt-0">
                                    <div className="about-bd2">
                                        <img src="/assets/img/ecommerce-midle.png" alt="Reach out to your business by E-commerce Search engine optimization." title="Reachout business by eCommereece SEO." width="100%" />
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>

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

                {/* <!-- Things That We Do --> */}
                <section className="things-that-area section-bgOne pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="section-title seo-titles text-center">
                                    <div className="h6">Our Ecommerce SEO Services</div>
                                    <div className="h2"><h3>Covering Every Section With Professional Service For The Highest Possible Growth Of Your ECommerce Website</h3></div>
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
                                                <img src="/assets/img/ecommerce-seo/Website-Audit-and-analysis.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">Website Audit and analysis</div>
                                            <p>
                                                Our first step of the campaign is to make a thorough audit of your existing website. We check your site on different aspects and rate it in various factors on its current state. We find the possible “weak spots” and things that should be added for optimization. Then, we lay out the plans and strategies to work on in the future with a possible boundary of improvement that can be achieved.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="things-do-item">

                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/ecommerce-seo/Keyword-Research-Optimization.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">Keyword Research Optimization</div>
                                            <p>
                                                Keyword is the most important ranking factor which determines your website’s position in search. An excellent competitive keyword with good search intent and conversion is considered a “Golden Key” to unlock your potential. We will find out such keywords for you for more visibility and better conversion. We will ensure a healthy keyword ratio and not clutter the website with unnecessary ones.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="things-do-item">
                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/ecommerce-seo/on-Page-Optimization.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">On-Page Optimization</div>
                                            <p>
                                                On-page optimization is the key to impress the Google bot. Your eCommerce website may look alright to the naked eye, but the Google bot has different views and preferences on a website page. We can match the appetite of the “bot” and include everything it prefers to find in a website. We will work on many on-page factors that may seem minuscule but bear significant value to change its perspective towards Google.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="things-do-item">
                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/ecommerce-seo/Technical-and-Off-page-SEO.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">Technical and Off-page SEO</div>
                                            <p>
                                                Technical SEO is as crucial as any other optimization. It improves the structure of your website online and implements everything necessary to convince Google. Things like GMB, Google 3 packs, Schema markup, listing your site with proper backlink ratio, etc., have vastly increased the site’s performance. Also, we will improve the speed of your website, which is very impactful on the customers to gain their trust.

                                            </p>
                                        </div>
                                    </div>
                                    <div className="things-do-item">
                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/ecommerce-seo/Competitor-Analysis.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">Competitor Analysis</div>
                                            <p>
                                                After your website goes live, you are competing with other eCommerce sites. Everyone that is your competitor may contain certain traits that make them better than everyone. So, to be the best, you need to consider everything. We will help you to improve on every aspect possible to be better than your competitors. We thoroughly go through their whole enchilada and find out where we can make a betterment.

                                            </p>
                                        </div>
                                    </div>
                                    <div className="things-do-item">
                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/ecommerce-seo/High-quality-Content.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">High-quality Content</div>
                                            <p>
                                                In digital marketing, it is said that content is king. Your content on the website is the most critical factor in your sale. Properly written content with reasonable amounts of keywords, backlinks, and hyperlinks can solely manage a high-ranking score from Google and a good amount of buying from visitors. Our exclusive content writer team is always there to make adjustments and write new content to satisfy your needs.

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Client Reactions --> */}
                {/*  */}

                {/* <!-- Custom eCommerce --> */}
                <div className="custom-ecommerce-aera pt-5 pb-5">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6 align-self-center">
                                <div className="seo--img position-relative pt-0">
                                    <div className="about-bd2">
                                        <img src="/assets/img/ecommerce-footer.png" alt="Searching for a products on eCommerce store." title="Searching for products." width="100%" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 align-self-center">
                                <div className="custom-ecommerce-content">
                                    <div className="section-title seo-titles">
                                        <div className="h6">Ecommerce SEO</div>
                                        <div className="h2">For Newcomers or for the Old Veterans?</div>
                                        <div className="section-bar2"></div>
                                    </div>
                                    <p>
                                        Ecommerce is a significant sector in online business, and many new eCommerce websites are opening every day. Also, thousands of existing eCommerce websites are there to compete with every niche in the market. So, this age-old question remains, “who will benefit from SEO, the new or the old?” Our simple answer is everyone.
                                    </p>
                                    <br />
                                    <p>
                                        <h4>SEO will significantly improve the visibility of your website</h4>, be it a new one or an old one. As the policy of Google is ever-changing, no one can’t constantly keep their place at the top. It needs continuous rotations and new ideas to be consistent in Google SERP, and this can only be achieved by implementing extensive SEO by an eCommerce SEO consultant on the website. So, the question should not be “who” should apply the SEO treatment to improve their website, instead “how” to get a proven eCommerce SEO agency like Trinet Digital and do the SEO magic as soon as possible.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <section className="seo--area section-bgOne pt-100 pb-100">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6 align-self-center">
                                <div className="pt-2">
                                    <div className="section-title seo-titles">
                                        <div className="h6">Boost your eCommerce website</div>
                                        <div className="h2"><h1>Build A Super-Brand With A Proper ECommerce SEO Service</h1></div>
                                        <div className="section-bar2"></div>
                                    </div>
                                    <p>
                                        The online marketplace has become a choice for
                                        everyone to both look for and sells any product. Getting
                                        a high ranking on the Google SERP is so valuable that it
                                        will return its worth in weight of gold. As everyone is still
                                        not aware of it, simple SEO jobs will merely improve your
                                        SERP on a minimum scale.
                                        <h5>But only an extensive eCommerce SEO expert will make it inside the top page on the search result fighting for the 1st spot.</h5>
                                        This cannot be done without the
                                        knowledge of the various factors about the ranking. Also,
                                        it is a must to maintain a great conversion rate to get the
                                        appropriate sale. To tie every end, you need a
                                        trustworthy and experienced SEO agency like Trinet Digital on your watch that can deliver your results in a
                                        comfortable and straight forward way
                                    </p>

                                </div>

                            </div>
                            <div className="col-lg-6 align-self-center">
                                <div className="seo--img p-0">
                                    <img src="/assets/img/ecommerce-seo/Build-A-Super-Brand-With-A-Proper-ECommerce-SEO-Service.png" alt="Individuals are promoting brands through organized effort." title="Promoting brands." />
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
                                    <img src="/assets/img/faq-1.png" alt="3 peopleTransferring information among one another." title="Transferring information." />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default ecommerceSeo;