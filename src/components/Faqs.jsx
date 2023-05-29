import React from 'react'

function Faqs() {
    return (
        <div className="w-5/6 m-auto">
            <h2 className="font-bold text-5xl font-Raleways text-center p-8">
                Checkout the most common questions
            </h2>
            <div className="p-2">
                <div className="p2 rounded-lg border-2 border-gray-300 drop-shadow-2xl">
                    <div className="bg-gray-300">
                        <span className="font-bold text-2xl p-2">What is Externs?</span>
                    </div>
                    <div className="p-2">
                        <span className="text-xl">
                            Externs is a software solutions or Product Creation & Management company
                            that specializes in providing custom software development, Web
                            Design & Development, Android/IOS Development and Logo & UI/UX design services to
                            businesses of all sizes. We love to work on a Product from
                            Scratch to End.
                        </span>
                    </div>
                </div>
                <br />
                <div className="rounded-lg border-2 border-gray-300 drop-shadow-2xl">
                <div className="bg-gray-300">
                        <span className="font-bold text-2xl p-2 ">
                            What services does We offer?
                        </span>
                    </div>
                    <div className="p-2">
                        <span className="text-xl">
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
                <br />
                <div className="rounded-lg border-2 border-gray-300 drop-shadow-2xl">
                <div className="bg-gray-300">
                        <span className="font-bold text-2xl p-2 ">
                            What industries do We serve?
                        </span>
                    </div>
                    <div className="p-2 ">
                        <span className=" text-xl">
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
                <br />
            </div>
        </div>)
}

export default Faqs