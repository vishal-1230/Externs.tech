import React from 'react'
import { IoIosCall, IoIosMail } from 'react-icons/io'
function Contact() {
    return (
        <div className='w-5/6 m-auto'>
            <img
                alt="image"
                src="/playground_assets/website-mockup-1500w.webp"

            />
            <div>
                <div >
                    <h1 className='font-bold text-5xl font-Raleways text-center p-8'>
                        Get our guide to crafting digital products
                    </h1>
                    <span className='text-xl'>
                        Reach out to Us &amp; We&apos;ll guide you How can we both take
                        your Product up to the moon.
                    </span>
                </div>
                <input
                className='w-3/4 h-12 p-4 rounded-lg shadow-lg drop-shadow-lg border-2'
                    type="text"
                    required="true"
                    placeholder="E-mail"

                />
                <button className='bg-sky-700 text-white rounded-lg shadow-lg drop-shadow-lg h-12' >
                    SEND
                    </button>
                <div>
                    <a href="tel:+919304882841">
                        <IoIosCall />
                        <span >
                            Call Us
                            <span className=''>
                                +91 9304882841
                            </span>
                        </span>
                    </a>
                    <a href="mailto:mail@externs.tech" ><IoIosMail /><span > Mail Us <span className='mail'>mail@externs.tech</span></span></a>
                </div>
            </div>
        </div>)
}

export default Contact