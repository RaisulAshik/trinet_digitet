import React, { useState, useEffect } from 'react';



const Faq = (data) => {
    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
    const [showAnswer, setShowAnswer] = useState();
    const [showAnswerId, setShowAnswerId] = useState();

    useEffect(() => {
        data.faqData.map((res, key) => {
            if (key === 0) {
                setShowAnswer(res.answer)
                setShowAnswerId(res._id)
            }
        })
    }, [])

    const handleShowAnswer = (id) => {
        data.faqData.map(res => {
            if (res._id === id) {
                setShowAnswer(res.answer)
                setShowAnswerId(id)
            }
        })
    }

    return (
        <div>
            <section className="faq-accordion-area section-bgOne pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 m-auto">
                            <div className="section-title text-center">
                                <div className="h6">FAQ</div>
                                <div className="pb-3 h2">Frequently asked questions</div>
                                <p>We always try to deal with our clients in person. But in case you want to know something or want to get familiar with our methods, here are some frequently asked questions to satisfy your interest.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-4 ">
                        <div className="col-lg-6 align-self-center">
                            <div className="faq-img">
                                <img src="/assets/img/faq.png" alt="3 people from the same team are planning & researching the effective digital marketing approach. One is researching & two are discussing" title="Discussion on the digital marketing approach." />
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center">

                            <div className="faq-content accordion-faq">
                                {data.faqData.map(res =>
                                    <div className="faq-item" key={res._id}>
                                        <div className="faq-title" onClick={() => handleShowAnswer(res._id)} >{res.question}</div>
                                        {showAnswerId === res._id ?
                                            <div className="faq-title-content">
                                                <p>{renderHTML(showAnswer)}</p>
                                            </div> : <></>}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;