import React from 'react'

function Contact() {
    return (
        <div >
            <img
                alt="image"
                src="/playground_assets/website-mockup-1500w.webp"

            />
            <div>
                <div >
                    <h1 >
                        Get our guide to crafting digital products
                    </h1>
                    <span >
                        Reach out to Us &amp; We&apos;ll guide you How can we both take
                        your Product up to the moon.
                    </span>
                </div>
                <input
                    type="text"
                    required="true"
                    placeholder="E-mail"

                />
                <button >SEND</button>
                <div>
                    <a href="tel:+919304882841"><IoIosCall /><span style={{ marginTop: '5px', fontWeight: 700 }}> Call Us <span className='num'>&nbsp;&nbsp;+91 9304882841</span></span></a>
                    <a href="mailto:mail@externs.tech" ><IoIosMail /><span style={{ marginTop: '5px', fontWeight: 700 }}> Mail Us <span className='mail'>&nbsp;&nbsp;mail@externs.tech</span></span></a>
                </div>
            </div>
        </div>)
}

export default Contact