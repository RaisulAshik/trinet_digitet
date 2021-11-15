import React from 'react';
import Link from 'next/link';


const callAction = () => {
    return (
        <div className="callAction-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="callAction-content text-xs-center">
                            <div className="align-self-center h2">Have anything in mind? Contact us to <br /> turn your imagination into reality</div>
                            <div className="link-box align-self-center ms-auto">
                                <Link href="/contact">
                                    <a className="theme-btn btn-lg">
                                        <i className="btn-curve"></i>
                                        <span className="btn-title">Contact with us</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default callAction;
