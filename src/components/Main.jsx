import React from 'react'

function Main() {
    return (
        <div className="home-container">
            <div className="home-container02">
                <div className="home-hero">
                    <div className="home-hero-text-container">
                        <h1 className="home-heading2 Section-Heading">
                            We help Startups build Their Products from Scratch
                        </h1>
                        <span className="home-text !text-white">
                            <span>
                                We are a Digital Product Development Team, Aimed at Providing
                                you the Best Website, Android/IOS Development, Custom
                                Software, UI/UX Designing Services Possible. Our Tech Team include
                                skilled developers in ReactJS, NodeJS, MongoDB, Flutter, React Native.
                            </span>
                            <br></br>
                            <br></br>
                        </span>
                        <div className="home-cta-btn-container">
                            <Link to='/portfolio'>
                                <button className="home-cta-btn button Anchor">OUR WORK</button>
                            </Link>
                            {/* <Link to='/'> */}
                            <a href="#deliverables">
                                <button className="home-cta-btn1 button Anchor">SERVICES</button>
                            </a>
                            {/* </Link> */}
                        </div>
                    </div>
                    <img
                        alt="image"
                        src="playground_assets/website-mockup-template_68185-389-1500w.webp"
                        className="home-image1"
                    />
                </div>
            </div>


            <div className="home-section-separator2"></div>

            <div className="home-section-separator3"></div>
            <div className="home-section-separator4"></div>

            <div className="home-section-separator5"></div>

            <div className="home-section-separator6"></div>
        </div>
    )
}

export default Main