import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import commonApi from '../lib/api/commonApi';
import Slider from "react-slick";



const Service = (data) => {

    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
    const [serviceData, setServiceData] = useState({});
    const [selectId, setSelectId] = useState();




    useEffect(() => {
        setServiceData(data.serviceListData[0])
        setSelectId(data.serviceListData[0]._id)
    }, [])

    const handleData = (id) => {
        data.serviceListData.map(res => {
            if (res._id === id) {
                setServiceData(res);
                setSelectId(id)

            }
        })
    }

    const settings = {
        dots: false,
        slickNext: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
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



    const externaImageLoader = ({ src }) =>
        `${commonApi.api + src}`;
    const externalLargeImageLoader = ({ src, quality }) => {
        return `${commonApi.api + src}`;
    }
    return (
        <>
            <section className="services-area section-bgOne">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="section-title text-center seo-titles">
                                <div className="h6">Our Services</div>
                                <div className="h2">We have managed to bring you a wide range of digital marketing services so that you can get everything in one place.</div>
                                <div className="section-bar2"></div>

                            </div>
                        </div>
                    </div>

                    <div className="row pt-5">
                        <div className="col-lg-12">
                            <div className="services-slider">
                                <div className="services-slider-nav classes-tabs" style={{ marginRight: '0', marginLeft: '0' }} >
                                    <Slider
                                        {...settings}
                                    >
                                        {data.serviceListData.map((res, i = 0) =>
                                            <div className={selectId == res._id ? 'services-slid-nav-item services-nav current' : 'services-slid-nav-item services-nav'} key={res._id} onMouseOver={() => handleData(res._id)}>

                                                <div className="services-slid-nav-item-text">
                                                    <div className="ser-number">0{i + 1}</div>
                                                    <Image loader={externaImageLoader} src={res.smallImage} height="95" width="100" className="ser-img" />
                                                    <div className="h6">{res.title}</div>
                                                </div>
                                            </div>
                                        )}
                                    </Slider>
                                </div>
                                <div className="services-slider-for">
                                    <div className="services-slider-for-item">
                                        <div className="services-for-text">
                                            <div className="row px-3">
                                                <div className="col-lg-6 services-col">
                                                    <div className="services-slid-img">
                                                        {serviceData.bigImage && <Image loader={externalLargeImageLoader} src={serviceData.bigImage} height="500" width="800" />}
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 services-col">
                                                    <div className="services-slid-text">
                                                        <div className="h6">Our Services</div>
                                                        <div className="h2">{serviceData.title}</div>
                                                        <p>
                                                            {renderHTML(serviceData.shortDescription)}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Service;