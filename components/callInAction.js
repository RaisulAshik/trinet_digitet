import React from 'react';
import Link from 'next/link'

const CallInAction = () => {
    return (
        <div>
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
        </div>
    );
};

export default CallInAction;