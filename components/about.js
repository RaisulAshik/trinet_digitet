import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

const AboutUs = (aboutData) => {
    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
    return (
        <section className="about-area pt-100 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 about-col">
                        <div className="about-bd">
                            <Image src="/assets/img/about-2.png" alt="Two people are planning on digital marketing strategy. One is working on Pc, Other’s suggesting. " title="Digital marketing strategy" height="750" width="500" layout="intrinsic" />
                        </div>
                        <div className="solution-video">
                            <a href="#" className="video-btn popup-youtube">
                                <i className="fas fa-play"></i>
                            </a>
                        </div>

                    </div>
                    <div className="col-lg-7 about-col">
                        <div className="about-text">
                            {renderHTML(aboutData.aboutData.text)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;