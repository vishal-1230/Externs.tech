import React from 'react'
import { Link } from "react-router-dom";
function Main() {
    return (
        <div className="">
            <div className="">
                <div className='flex'>
                    <div className="m-auto">
                        <h1 className='font-bold text-5xl font-Raleways text-center p-8'>
                            We help Startups build Their Products from Scratch
                        </h1>
                        <span className='text-xl'>
                            <span>
                                We are a Digital Product Development Team, Aimed at Providing
                                you the Best Website, Android/IOS Development, Custom
                                Software, UI/UX Designing Services Possible. Our Tech Team include
                                skilled developers in ReactJS, NodeJS, MongoDB, Flutter, React Native.
                            </span>
                            <br></br>
                            <br></br>
                        </span>
                        <div className="flex justify-center">
                            <Link to='/portfolio'>
                                <button className='bg-black text-white border-2 drop-shadow-xl text-3xl p-4 rounded-xl m-4'>OUR WORK</button>
                            </Link>
                            <a href="">
                                <button className='border-black border-2 drop-shadow-xl text-3xl p-4 rounded-xl m-4  font-semibold'>SERVICES</button>
                            </a>
                        </div>
                    </div>
                    <div className='p-4'>
                        <img
                            alt="image"
                            src="playground_assets/website-mockup-template_68185-389-1500w.webp"
                            className="w-3/4 m-auto rounded-xl "
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main