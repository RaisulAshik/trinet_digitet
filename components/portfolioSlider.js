import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from 'next/image';
import commonApi from '../lib/api/commonApi';


const PortfolioSlider = ({ portfolioListData }) => {
    const [listData, setListData] = useState(portfolioListData)


    const servicesCons = {
        dots: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    const externaImageLoader = ({ src }) =>
        `${commonApi.api + src}`;


    return (
        <div className="container-fluid">
            <div className="row pt-5">
                <div className="col-lg-12">

                    <Slider
                        {...servicesCons}
                    >
                        {listData.map((res, i = 0) =>
                            <div className="port-slid px-3">
                                <Image loader={externaImageLoader} src={res.image} height="400" width="600" className="ser-img" />
                            </div>
                        )}
                        {/* {navSlider} */}
                    </Slider>
                </div>
            </div>
        </div>

    )

};
export default PortfolioSlider;
