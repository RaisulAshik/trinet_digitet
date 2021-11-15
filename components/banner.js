import React from 'react';
import Image from 'next/image'
import Link from 'next/link'


const Banner = (data) => {
    // const data = homeApi.banner();
    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

    return (
        <div>
            <section className="hero-banner-area loopscroll">
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-lg-7 col-md-7 hero-col hero-order-1">
                            <div className="hero-text">
                                <div className="cd-headline zoom h1">
                                    {renderHTML(data.data.text)}
                                </div>
                                <Link href="/contact" >
                                    <a className="theme-btn btn-md"> LEARN MORE </a>
                                </Link>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-5 offset-lg-1 hero-col ">
                            <div className="hero-rocket">
                                <Image src="/assets/img/rocket3.gif" alt="A rocket is moving in the space" title="Blow rocket" height="530" width="500" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;

