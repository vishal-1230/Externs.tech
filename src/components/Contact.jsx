import React from 'react'

function Contact() {
    return (
        <div className="home-subscribe" id='contact'>
            <img
                alt="image"
                src="/playground_assets/website-mockup-1500w.webp"
                className="home-image2"
            />
            <div className="home-container09" id="contact">
                <div className="home-heading-container3">
                    <h1 className="home-text28 Section-Heading" id='contact'>
                        Get our guide to crafting digital products
                    </h1>
                    <span className="Section-Text home-text29">
                        Reach out to Us &amp; We&apos;ll guide you How can we both take
                        your Product up to the moon.
                    </span>
                </div>
                <input
                    type="text"
                    required="true"
                    placeholder="E-mail"
                    className="home-textinput Section-Text input"
                />
                <button className="home-button1 Anchor button">SEND</button>
                <div className='contact-icons'>
                    <a href="tel:+919304882841" className='contact-link'><IoIosCall className='contact-icon' /><span style={{ marginTop: '5px', fontWeight: 700 }}> Call Us <span className='num'>&nbsp;&nbsp;+91 9304882841</span></span></a>
                    <a href="mailto:mail@externs.tech" className='contact-link'><IoIosMail className='contact-icon' /><span style={{ marginTop: '5px', fontWeight: 700 }}> Mail Us <span className='mail'>&nbsp;&nbsp;mail@externs.tech</span></span></a>
                </div>
            </div>
        </div>)
}

export default Contact