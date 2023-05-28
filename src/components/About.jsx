import React from 'react'

function About() {
    return (
        <div className="home-about">
            <div className="home-max-content-width-container">
                <div className="home-heading-container1">
                    <h1 className="home-text11 Section-Heading">
                        Professional experience
                    </h1>
                </div>
                <div className="home-content-container3">
                    <div className="home-about-1">
                        <div className="home-container03">
                            <svg viewBox="0 0 1024 1024" className="home-icon10">
                                <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                            </svg>
                            <span className="home-text12">
                                Our Web Developers are proficient in their respective
                                Technologies.
                            </span>
                        </div>
                        <div className="home-container04">
                            <svg viewBox="0 0 1024 1024" className="home-icon12">
                                <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                            </svg>
                            <span className="home-text13">
                                <span>
                                    Our UI/UX Designer have been designing Logos, Thumbnails as
                                    Freelancing Projects
                                </span>
                                <br></br>
                            </span>
                        </div>
                        <div className="home-container05">
                            <svg viewBox="0 0 1024 1024" className="home-icon14">
                                <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                            </svg>
                            <span className="home-text16">
                                <span>
                                    Deployed some best responsive sites including in the domains
                                    of News Media, Crypto Trading Bot etc.
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: ' ',
                                        }}
                                    />
                                </span>
                                <br></br>
                            </span>
                        </div>
                    </div>
                    <div className="home-about-11">
                        <div className="home-container06">
                            <svg viewBox="0 0 1024 1024" className="home-icon16">
                                <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                            </svg>
                            <span className="home-text19">
                                More than a Dozen Dynamic Pages made in ReactJS!
                            </span>
                        </div>
                        <div className="home-container07">
                            <svg viewBox="0 0 1024 1024" className="home-icon18">
                                <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                            </svg>
                            <span className="home-text20 Card-Text">
                                Starting to enter domains like Software Developent for Windows
                                &amp; Linux.
                            </span>
                        </div>
                        <div className="home-container08">
                            <svg viewBox="0 0 1024 1024" className="home-icon20">
                                <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                            </svg>
                            <span className="home-text21 Card-Text">
                                We also have experience in Product Development Management from
                                the Scratch till its Production Stage.
                            </span>
                        </div>
                    </div>
                </div>
                <Link to='/portfolio'>
                    <button className="home-button button Anchor checkWorkBtn">CHECK OUR WORK</button>
                </Link>
            </div>
        </div>)
}

export default About