import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from 'next/image';
import commonApi from '../lib/api/commonApi';


const ServicesSlider = ({ serviceListData }) => {
    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
    // const [serviceData, setServiceData] = useState({});
    const [listData, setListData] = useState(serviceListData)

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let slider1;
    let slider2;

    const servicesCons = {
        dots: false,
        slickNext: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        focusOnSelect: true,
        // centerMode: true,
        // centerPadding: "0px",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const servicesCons2 = {
        // vertical: true,
        speed: 700,
    }




    let slidesToDisplay = listData.map(
        item =>
        (
            <div className="row d-flex m-0 py-2">
                <div className="col-lg-6 services-col services-img p-0 align-self-center">
                    <div className="services-slid-img">
                        <img src={commonApi.api + item.bigImage} />
                    </div>
                </div>
                <div className="col-lg-6 services-col align-self-center">
                    <div className="services-slid-text">
                        <div className="h6">Our Services</div>
                        <h2>{item.title}</h2>
                        <p>
                            {renderHTML(item.shortDescription)}

                        </p>

                    </div>
                </div>
            </div>
        ));

    const externaImageLoader = ({ src }) =>
        `${commonApi.api + src}`;
    let navSlider = listData.map((res, i = 0) =>
        <div key={res._id}>
            <div className="services-slid-nav-item-text">
                <div className="ser-number">0{i + 1}</div>
                <Image loader={externaImageLoader} src={res.smallImage} height="95" width="100" className="ser-img" />
                <h6>{res.title}</h6>
            </div>
        </div>
    )

    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2);
    }, [slider1, slider2])



    return (
        <>
            <section className="services-area section-bgOne">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="section-title text-center seo-titles">
                                <div className="h6">Our Services</div>
                                <div className="h2">We have managed to bring you a wide range of digital marketing services to get everything in one place.</div>
                                <div className="section-bar"></div>

                            </div>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-lg-12">
                            <div className="services-slider">
                                <div className="services-slider-nav classes-tabs" style={{ marginRight: '0', marginLeft: '0' }} >


                                    <Slider
                                        asNavFor={nav1}
                                        ref={slider => (slider2 = slider)}
                                        {...servicesCons}
                                    >
                                        {navSlider}
                                    </Slider>

                                </div>
                                <div className="services-slider-for">
                                    <div className="services-slider-for-item">
                                        <div className="services-for-text">

                                            <Slider
                                                asNavFor={nav2}
                                                ref={slider => (slider1 = slider)}
                                                {...servicesCons2}
                                            >
                                                {slidesToDisplay}
                                            </Slider>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

};



export default ServicesSlider;