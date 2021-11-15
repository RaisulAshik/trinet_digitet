import React from 'react';
import Head from 'next/head'
import Layout from '../../components/layout';
import Link from 'next/link';

const customWebDesign = () => {
    return (
        <div>
            <Head>
                <title>Custom web design</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="We offer top-of-the-line custom web design services in the USA. Our professionals are prepared to cater to all your custom web design needs. Contact us!" />
                <meta name="keywords" content="affordable custom web design" />

            </Head>
            <Layout>

                {/* <!-- Page Banner --> */}
                <section className="page-banner page-bgOne">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="page-title text-center">
                                    <div className="h1"><h1>CUSTOM WEBSITE DESIGN SERVICES</h1></div>
                                    <p>Make a flawless website with a custom design with your unique concepts</p>
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
                                        <li><a href="#">WordPress Website Design</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#" className="breadcrumbs-shap"></a>
                </div>

                {/* <!-- SEO --> */}
                <section className="seo--area pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 seo-col align-self-center">
                                <div className="seo--img position-relative pt-0">
                                    <div className="about-bd2">
                                        <img src="/assets/img/custom-website/Most-Intriguing-Feature-Today.png" alt="Building custom websites by HTML, JAVA, C++, PHP." title="Using different languages to build custom site." width="100%" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 seo-col align-self-center">
                                <div className="seo--text">
                                    <div className="section-title seo-titles">
                                        <div className="h6">Your Wish Our Action</div>
                                        <div className="h2"><h2>Get Yourself A Website That Will Be Designed Only With Your Concept And Dream</h2></div>
                                        <div className="section-bar2"></div>
                                    </div>
                                    <p>
                                        In this virtual era, the first priority of everyone is to get noticed online. To achieve this visibility, one has to get a proper website to describe their identity. Almost 95% of people, who come across a website on the internet, make up their first impression after getting a look at the website. So, it should be in the utmost interest of every website owner to have an entire website that will create a brand image for their business. A website will create the company’s brand image and tell the customer about everything the site is all about. To set a good impression on visitors minds with a fresh look and further building his trust with an interactive user interface is the pinnacle of all websites.
                                    </p>
                                    <p>
                                        According to a survey done by the Ecommerce Foundation, 88% of United States citizens who buy one or more products online on a monthly basis do some online research before purchasing a product or going to a local shop. Consumers also find products with a good brand image trustworthy. They also like to buy a product that speaks for itself in uniqueness. <h4>Trinet Digital aims at creating such an affordable custom website that can satisfy our customers' every desire and some more</h4>. We know every human being has different tastes, so any customization is imminent for our website developers. We have an exclusive set of themes for different platforms made by our own website developers. You can pick any of the themes, and we can work on it to shape it to your liking. If you want to flourish your website, give us a try, and we are confident to cover your every need.

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

                {/* <!-- How Going --> */}
                <section className="how-going-area section-bgOne pt-100 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="section-title text-center">
                                    <div className="h2">How it is Going</div>
                                    <p>To create a custom website design, we follow a proper path. By doing so, it will help you in depicting your business online. his insight helps us to design a website on your ideas</p>
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
                                            <img src="/assets/img/information.png" />
                                        </div>
                                        <div className="going-text">
                                            <div className="h5">Analyzing Your Plan </div>
                                            <p>We analyze the possible design in your mind and evaluate what should be done.</p>
                                        </div>
                                    </div>
                                    <div className="how-going-item">
                                        <div className="going-number">
                                            02
                                        </div>
                                        <div className="going-icon">
                                            <img src="/assets/img/clipboard.png" />
                                        </div>
                                        <div className="going-text">
                                            <div className="h5">Planning</div>
                                            <p>We brain-storm all the factors to adjust your planning with proper coding structure.</p>
                                        </div>
                                    </div>
                                    <div className="how-going-item">
                                        <div className="going-number">
                                            03
                                        </div>
                                        <div className="going-icon">
                                            <img src="/assets/img/creativity.png" />
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
                                            <img src="/assets/img/startup.png" />
                                        </div>
                                        <div className="going-text">
                                            <div className="h5">Tweaking</div>
                                            <p>
                                                We will tweak the possible changes that cannot be implemented in the first phase.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="how-going-item">
                                        <div className="going-number">
                                            05
                                        </div>
                                        <div className="going-icon">
                                            <img src="/assets/img/domain.png" />
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

                {/* <!-- Design Projects --> */}
                <section className="design-projects-area pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="section-title seo-titles text-center">
                                    <div className="h6">Mobile Responsive Website</div>
                                    <div className="h2">Our Latest WordPress Web Design Projects</div>
                                    <div className="section-bar"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-5">
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

                {/* <!-- Things That We Do --> */}
                <section className="things-that-area section-bgOne pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="section-title seo-titles text-center">
                                    <div className="h6">custom Website Design</div>
                                    <div className="h2"><h3>Things We Do On Custom Website Design</h3></div>
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
                                                <img src="/assets/img/custom-website/Analyze-Your-Brand.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">Analyze Your Brand</div>
                                            <p>
                                                We will analyze everything about your product and do extensive research on the
                                                internet. We will take inspiration from your competitors and large mother sites on your niche. Our main
                                                goal is to make a website that can knock out all the contests around it. We guarantee that we will give
                                                you the top spot in the Google SERP and definitely can promise a drastic improvement in the result. Our
                                                rigorous analysis thus set us with definite goals in mind.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="things-do-item">
                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/custom-website/WordPress-and-JavaScript-Based-Website.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">WordPress and JavaScript Website</div>
                                            <p>
                                                It is not wise to create a generic website that looks like
                                                another one in the market. It will not improve your brand and also creates a negative impression on the
                                                visitors' minds. Our custom website builders are consist of developers who are experienced in different
                                                platforms. You can reliably choose any of them and enjoy the whole experience of that platform. Our
                                                developers will go further to make a unique layout and plug-ins for your website.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="things-do-item">
                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/custom-website/Custom-Video.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">Custom Video</div>
                                            <p>
                                                Videos are the most interactive way to engage a customer. A video can clearly send your
                                                products to the minds of the visitors without much effort. Interactive and interesting videos can convert
                                                the most traffic into sales. Our animators and web developers insert a perfect ratio of images and videosto keep the customers interested but keep it in a reasonable amount. We can insert videos of your
                                                choice or create new ones with eye-striking animations for your website.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="things-do-item">
                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/custom-website/Suitable-Content.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">Suitable Content</div>
                                            <p>
                                                Website content as well as articles are significant for product descriptions. Our
                                                content writing team can constitute perfect content and blog posts for any brand. It is crucial to keep
                                                the content with flexibility so that people wouldn't get bored with pages full of writings only. Our
                                                content team develops creative ideas to keep the page from top to bottom with variant content. We
                                                also make it SEO specialized, which helps to increase the visibility and Google ranking.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="things-do-item">
                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/custom-website/Website-Management.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">Website Management</div>
                                            <p>
                                                A custom website needs proper management for every step. We do various
                                                HTML and CSS codes to keep your website in perfect shape. So it needs integrated management all the
                                                time to keep everything in order. We also customize various plug-ins and themes to make them suitable
                                                for your site. An eCommerce website needs extra care as it requires multiple interacting buttons and
                                                layouts for a successful transaction. With everything kept in mind, we continuously evaluate your
                                                website until it reaches its final stage.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="things-do-item">
                                        <div className="things-do-icon">
                                            <i className="things-i">
                                                <img src="/assets/img/custom-website/Responsive-in-all-Platforms.png" />
                                            </i>
                                        </div>
                                        <div className="things-do-text">
                                            <div className="h5">Responsive in all Platforms</div>
                                            <p>
                                                Trinet Digital has overcome the most fundamental problem every website
                                                faces when it starts its journey. Website speed and responsiveness are unavoidable factors that need to
                                                be addressed. We develop websites that are faster than most other websites on the internet. We also
                                                use customization to make it mobile-friendly so that most of the customers can get proper access to
                                                your website. Slow-loading websites are mostly overlooked by visitors. So create a custom website with
                                                the lightning-fast speed with Trinet Digital today.
                                            </p>
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
                            <div className="col-lg-6 seo-col align-self-center">
                                <div className="seo--img position-relative pt-0">
                                    <div className="about-bd2">
                                        <img src="/assets/img/custom-website/footer.png" alt="Generate ideas for implementation" title="Generating ideas" width="100%" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 seo-col align-self-center">
                                <div className="seo--text">
                                    <div className="section-title seo-titles">
                                        <div className="h6">Unique Website for Unique Business</div>
                                        <div className="h2"><h2>Make A Custom Website That Justify Your Ideas And Prosper On Your Own Path</h2></div>
                                        <div className="section-bar2"></div>
                                    </div>
                                    <p>
                                        Internet is so widely used for eCommerce today that it will surpass offline stores and replace many of them in the long run.  Having a proper website is the starting step to build a trustworthy site
                                        for a business. Also, other than business, websites are helpful for almost anything from blogging to
                                        voluntary works. Every website is unique and shouts out its own identity in the form of its structure and
                                        theme.
                                    </p>
                                    <p>
                                        <h5>Trinet Digital can be your authentic custom web design company where you can be at ease with your website</h5>. We have separate teams for every action, and together we make the team like no other.
                                        Our website developers have experience in building different websites for different clients. We always
                                        make sure that our clients are satisfied. Custom websites can be very demanding as they require
                                        multiple limit-testing and going over a thing repeatedly to make it perfect. We will tirelessly do this as
                                        long as we do not get the satisfaction out of our customers. <h6>So you should not hesitate to reach us for your custom web design and development and start sooner than later</h6>.
                                    </p>
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

export default customWebDesign;