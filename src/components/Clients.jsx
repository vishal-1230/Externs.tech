import React from 'react'

function Clients() {
    return (
        <div className="home-clients" id='clients'>
            <div className="home-heading-container2">
                <h1 className="home-text22 Section-Heading">Previous Clients</h1>
                <span className="home-text23 Section-Text">
                    Our Track Record with previous Clients.
                </span>
            </div>
            <div className="home-logo-container">
                <a>
                    <img
                        alt="image"
                        src="/playground_assets/yar-logo-without-background-01-200h.png"
                        className="home-logo"
                    />
                </a>
                <a>
                    <img
                        alt="image"
                        src="/playground_assets/cbc0231e90fa21eb67a10aca06c255e2-200h.webp"
                        className="home-logo1"
                    />
                </a>
                <a href='https://sibss.org.in/' target='_blank' className="">
                    <img
                        alt="SIBSS"
                        src="/playground_assets/download.png"
                        className="home-logo3"
                    />
                </a>
                <img
                    alt="image"
                    src="/playground_assets/default-img.svg"
                    className="home-logo2"
                />
            </div>
        </div>)
}

export default Clients