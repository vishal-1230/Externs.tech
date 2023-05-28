import React from 'react'

function Faqs() {
    return (
        <div className="home-faqs">
            <h2 className="home-text24 Section-Heading">
                Checkout the most common questions
            </h2>
            <div className="home-content-container4">
                <div className="home-faq">
                    <div className="home-question-container">
                        <span className="home-question">What is Externs?</span>
                    </div>
                    <div className="home-answer-container">
                        <span className="home-answer">
                            Externs is a software solutions or Product Creation & Management company
                            that specializes in providing custom software development, Web
                            Design & Development, Android/IOS Development and Logo & UI/UX design services to
                            businesses of all sizes. We love to work on a Product from
                            Scratch to End.
                        </span>
                    </div>
                </div>
                <div className="home-faq1">
                    <div className="home-question-container1">
                        <span className="home-question1">
                            What services does We offer?
                        </span>
                    </div>
                    <div className="home-answer-container1">
                        <span className="home-answer1">
                            {' '}
                            In addition to custom software development, web design &amp;
                            development, logo &amp; UI/UX design, Externs also offers a
                            range of other services, including software maintenance and
                            support, deployment to the Cloud, software integration and
                            deployment, branding and identity design, graphic design, and
                            social media management.
                        </span>
                    </div>
                </div>
                <div className="home-faq2">
                    <div className="home-question-container2">
                        <span className="home-question2">
                            What industries do We serve?
                        </span>
                    </div>
                    <div className="home-answer-container2">
                        <span className="home-answer2">
                            <span>
                                Externs has experience serving clients in a variety of
                                industries, including finance, healthcare, retail, e-commerce,
                                fashion, and entertainment.
                            </span>
                            <br className="home-text26 Card-Text"></br>
                            <br className="home-text27 Card-Text"></br>
                        </span>
                    </div>
                </div>
            </div>
        </div>)
}

export default Faqs