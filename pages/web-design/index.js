import Link from 'next/link';
import Head from 'next/head'
import React from 'react';
import Layout from '../../components/layout';

const index = () => {
    return (
        <div>
            <Head>
                <title>Web design</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="We provide web design services. Our team of professionals will work with every step of the way to ensure your website meets all your needs and expectations." />
                <meta name="keywords" content="web design and development company" />

            </Head>
            <Layout>

                {/* <!-- Page Banner --> */}
                <section className="page-banner page-bgOne">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="page-title text-center">
                                    <div className="h1"><h1>WEBSITE DESIGN SERVICES</h1> </div>
                                    <p>Bring out the true identity of your website with an eye-catching and userfriendly layout</p>
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
                                        <li><a href="#">Website Design Services</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#" className="breadcrumbs-shap"></a>
                </div>

                {/* <!-- SEO --> */}
                <section className="seo--area pt-100 pb-100">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6 seo-col align-self-center">
                                <div className="seo--text">
                                    <div className="section-title seo-titles">
                                        <div className="h6">Web Design</div>
                                        <div className="h2">Why website is necessary for business?</div>
                                        <div className="section-bar2"></div>
                                    </div>
                                    <p>
                                        Websites are the first step to any online excursion. When it comes to business, a good-looking website values same as a well-decorated shop. As any business owner would want their shop to be informative, customer-friendly, and attractive on the first impression. Online stores and websites also aim at those types of factors to make a quality marketplace. Every website is different in its own way, and visitors tend to build their trust in any place only after going through it. As more and more people are using the internet, people are more aware of everything and always choose the best from the lot. According to a survey, almost half the population of the world is using the internet actively. Also, 70% of the customers in the US like to inspect and oversee a product before approaching it.
                                    </p>
                                    <p>
                                        With this growing online business trend and customer injection, a properly built website is a must to stay afloat against this super competition. If you do not have a well-designed website, many customers, as well as Google, will refuse to acknowledge you. To alleviate this situation, Trinet Digital offers you a “one-stop to reach the top” solution where you can extract the best potential of your business with a super website. Our web design and development company will work  on different platforms so that you can have the ultimate experience. We also will make it SEO-friendly as we need the blessings of Google to have a proper rank in the SERP. So, from building a gorgeous website from scratch and making it to the top of the results- our web design company will take the helm.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 seo-col align-self-center">
                                <div className="seo--img position-relative pt-0">
                                    <div className="about-bd2">
                                        <img src="/assets/img/web-design/Websites-Design.png" alt="Team members are helping each other to build an optimized website." title="Team members are designing the website." width="100%" />
                                    </div>
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
                                <div className="seo--img position-relative pt-0">
                                    <div className="about-bd2">
                                        <img src="/assets/img/web-design/Fast-And-Trust-This-Duo-Is-A-Must.png" alt="Optimized design for better user experience." title="Design optimization" width="100%" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 seo-col align-self-center">
                                <div className="seo--text">
                                    <div className="section-title seo-titles">
                                        <h6>Our Web Design Principal</h6>
                                        <div className="h2">Fast and Trust-This Duo is a Must</div>
                                        <div className="section-bar2"></div>
                                    </div>
                                    <p>
                                        The most negative impression arises to any visitor when browsing online is the high loading time. According to a statistic, a website with a slower loading speed is less visited by a customer after the first interaction, and Google also tends to sort them in the lower end of the ranking. This brings the demand for a faster website that will not keep visitors waiting for not even a second. Trinet Digital exclusively works on this factor and prioritizes website loading time over anything. It brings a relaxing experience to the customer and encourages them to check more pages and products of the website without any irritation.
                                    </p>
                                    <p>
                                        Building trust with the customers and visitors is also very rewarding. This trust develops when your website is appropriately ratioed, without any spammy content, and has a neat outlook. Google always gives an upper hand to websites that fill the security requirement for its visitors. At Trinet Digital, you will get a fully developed and encrypted web page design with many features for the customers. Our web design company will also try to do everything that you require with great enthusiasm. With these two significant factors covered, your website can be upgraded in a blink of an eye.
                                    </p>
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

                {/* <!-- Design Projects --> */}
                <section className="design-projects-area section-bgOne pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center pb-4">
                                    <div className="h2">Our Latest Web Design Projects</div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="projects-slid">
                                    <div className="projects-slid-item">
                                        <div className="box">
                                            <img src="/assets/img/pr1.jpg" alt="Lintense all in all landing page, build with novi builder" />
                                            <div className="box-content">
                                                <div className="content">
                                                    <h3 className="title">Sound Fighter Systems</h3>
                                                    <span className="post">Web designer</span>
                                                    <ul className="icon">
                                                        <li><a href="#"><i className="fa fa-link"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="projects-slid-item">
                                        <div className="box">
                                            <img src="/assets/img/pr1.jpg" alt="Lintense all in all landing page, build with novi builder" />
                                            <div className="box-content">
                                                <div className="content">
                                                    <h3 className="title">Sound Fighter Systems</h3>
                                                    <span className="post">Web designer</span>
                                                    <ul className="icon">
                                                        <li><a href="#"><i className="fa fa-link"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="projects-slid-item">
                                        <div className="box">
                                            <img src="/assets/img/pr1.jpg" alt="Lintense all in all landing page, build with novi builder" />
                                            <div className="box-content">
                                                <div className="content">
                                                    <h3 className="title">Sound Fighter Systems</h3>
                                                    <span className="post">Web designer</span>
                                                    <ul className="icon">
                                                        <li><a href="#"><i className="fa fa-link"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="projects-slid-item">
                                        <div className="box">
                                            <img src="/assets/img/pr1.jpg" alt="Lintense all in all landing page, build with novi builder" />
                                            <div className="box-content">
                                                <div className="content">
                                                    <h3 className="title">Sound Fighter Systems</h3>
                                                    <span className="post">Web designer</span>
                                                    <ul className="icon">
                                                        <li><a href="#"><i className="fa fa-link"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-btn text-center pt-5">
                                    <a href="#" className="theme-btn btn-lg">LET’S GET STARTED</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- How Going --> */}
                <section className="how-going-area pt-100 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <div className="section-title seo-titles text-center">
                                    <h6>How it is Going</h6>
                                    <div className="h2">Here Are the Possible Steps We take to Complete a Successful Website Design</div>
                                    <div className="section-bar"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="how-going-content">
                                    <div className="how-going-item">
                                        <div className="going-number">
                                            01
                                        </div>
                                        <div className="going-icon">
                                            <img src="/assets/img/information.png" alt="‘I’ means information" />
                                        </div>
                                        <div className="going-text">
                                            <div className="h5">Analysis</div>
                                            <p>We analyze the products and content of your website and evaluate a probable design.</p>
                                        </div>
                                    </div>
                                    <div className="how-going-item">
                                        <div className="going-number">
                                            02
                                        </div>
                                        <div className="going-icon">
                                            <img src="/assets/img/clipboard.png" alt="White clipboard" />
                                        </div>
                                        <div className="going-text">
                                            <div className="h5">Planning</div>
                                            <p>We brain-storm all the sections that can be improved and apply your opinion.</p>
                                        </div>
                                    </div>
                                    <div className="how-going-item">
                                        <div className="going-number">
                                            03
                                        </div>
                                        <div className="going-icon">
                                            <img src="/assets/img/creativity.png" alt="White cloud pencil and color" />
                                        </div>
                                        <div className="going-text">
                                            <div className="h5">Development and Testing</div>
                                            <p>We have hosting sites where we will test your website for possible errors and problems.</p>
                                        </div>
                                    </div>
                                    <div className="how-going-item">
                                        <div className="going-number">
                                            04
                                        </div>
                                        <div className="going-icon">
                                            <img src="/assets/img/startup.png" alt="Sky rocket is cruising" />
                                        </div>
                                        <div className="going-text">
                                            <div className="h5">Tweaking</div>
                                            <p>
                                                We then resolve all the issues and make adjustments for a perfect website.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="how-going-item">
                                        <div className="going-number">
                                            05
                                        </div>
                                        <div className="going-icon">
                                            <img src="/assets/img/domain.png" alt="Globe with world wide web" />
                                        </div>
                                        <div className="going-text">
                                            <div className="h5">Submit and Revise</div>
                                            <p>We submit the project but also keep in touch for any future improvements.</p>
                                        </div>
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
                                    <h6>Our Web Design Service</h6>
                                    <div className="h2">We provide an array of website design services while working on your website for an ultimate look</div>
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
                                                <img src="/assets/img/web-design/Improve-Site-Quality.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">Improve Site Quality</div>
                                            <p>
                                                We significantly improve the website quality by adding
                                                various vital features and also subtract many unnecessary things that may disrupt
                                                the quality of the website. We have different specialists for different sections who
                                                come together to make an improved website. We set up a particular target score
                                                for every factor and try to reach it by any means.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="things-do-item">
                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/web-design/Boost-Site-Speed.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">Boost Site Speed</div>
                                            <p>
                                                Our specialization is to make your website the fastest among
                                                your competitors. Google has introduced Core Web Vitals, where they give
                                                loading speed as one of the highest priorities. High responsive websites are the
                                                ‘hot cake” of the internet, and we can guarantee the speed to your satisfaction.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="things-do-item">
                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/web-design/Mobile-Responsive.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">Mobile Responsive</div>
                                            <p>
                                                All our developed websites are mobile responsive. It
                                                improves lead generation and also adds easy-to-navigate features for the page.Smartphones are the most used device on the market to look for a product. Our
                                                mobile version website would have similar characteristics and layout.
                                            </p>
                                        </div>

                                    </div>
                                    <div className="things-do-item">
                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/web-design/Low-Cost-High-Quality.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">Low-Cost High Quality</div>
                                            <p>
                                                Website maintenance cost is one of the most significant
                                                setbacks for the owners as they contain unnecessary plugins and stuff. We will
                                                deliver a website that will be an inevitable upgrade of your previous site and
                                                reduce the maintenance cost. A mobile responsive web page will also reduce the
                                                extra cost significantly.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="things-do-item">
                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/web-design/Brighten-up-your-Brand-Image.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">Brighten up your Brand Image</div>
                                            <p>
                                                Nowadays, brand image is very significant to go
                                                viral on the online market. People put more trust and affection if it can create a
                                                positive impression on people’s minds. We will build your site like existing super
                                                brands on the market. We also have an SEO strategy that will devote buying
                                                customers to your website.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="things-do-item">
                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/web-design/Diverse-Content-and-Features.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">Diverse Content and Features</div>
                                            <p>
                                                Our website developers include all the features to
                                                include all kinds of people. We include spaces for sufficient videos and images so
                                                that disabled people can understand everything correctly. Also, every tool and
                                                custom feature that you require can also be managed with our professional web
                                                developers.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* <!-- Design Pro -->*/}
                <section className="seo--area pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 seo-col align-self-center">
                                <div className="seo--img position-relative pt-0">
                                    <div className="about-bd2">
                                        <img src="/assets/img/web-design/Most-Intriguing-Feature-Today.png" alt="6 people are working to Build exceptional features for the website." title="Building features for the website." width="100%" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 seo-col align-self-center">
                                <div className="seo--text">
                                    <div className="section-title seo-titles">
                                        <h6>Mobile Responsive Website</h6>
                                        <div className="h2">Most Intriguing Feature Today</div>
                                        <div className="section-bar2"></div>
                                    </div>
                                    <p>
                                        Most Americans use smartphones to look for anything on the internet. According
                                        to a study, online search is dominated mainly by mobile users, and the number is
                                        increasing day by day. So, every website that does not have a responsive mobile
                                        platform is losing more than half of the juice here. Our primary goal is to make
                                        every website that we design mobile responsive. It increases the customer’s
                                        ability to access your service quickly and remotely. Mobile responsive websites
                                        are also very user-friendly, with a higher loading speed and easy-to-access
                                        features. Our web design and marketing service automatically covers the mobile responsive strategy and do our web design compatible with mobile.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Design Pro -->*/}
                <section className="things-that-area section-bgOne pt-5 pb-5">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6 seo-col align-self-center">
                                <div className="seo--text">
                                    <div className="section-title seo-titles">
                                        <h6>Catch The Trend</h6>
                                        <div className="h2">Get an aesthetic website that is compatible for present and the future</div>
                                        <div className="section-bar2"></div>
                                    </div>
                                    <p>
                                        Every website is unique and functions its endeavor in its own way. All the features
                                        in a particular site are entirely different from another one. Trinet Digital has an
                                        experienced and well-guided team of web developers who can satisfy all therequirements of our clients. We make custom layouts, graphics layouts, color
                                        schemes, fonts, different buttons, call to action, etc., for every different website
                                        according to the client’s desire. Our web developers take help from our SEO
                                        specialists to make it more visible to Google and add features that enhance the
                                        SERP. So, to get an all-around treatment of your precious website, reach out to
                                        Trinet Digital, and we will create an amazing website that is better than any of
                                        your competition.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 seo-col align-self-center">
                                <div className="seo--img position-relative pt-0">
                                    <div className="about-bd2">
                                        <img src="/assets/img/web-design/MOBILE-RESPONSIVE-WEBSITE.png" alt="Generate ideas for implementation" title="Generating ideas" width="100%" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/*<!-- Schedul Strategy --> */}
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
                                    <img src="/assets/img/faq-1.png" alt="3 people are transferring information among one another." title="Transferring information." />
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