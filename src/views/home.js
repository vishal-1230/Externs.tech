import React from 'react'

import { Helmet } from 'react-helmet'
import { IoIosCall, IoIosMail } from 'react-icons/io'
import { Link, Route } from 'react-router-dom'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Externs Software Technologies</title>
        <meta property="og:title" content="Portfolio Page" />
      </Helmet>
      <div data-role="Header" className="home-navbar-container">
        <div className="home-navbar">
          <img
            alt="image"
            src="/playground_assets/externsonly.svg"
            className="home-image"
          />
          <span className="home-heading">Externs</span>
          <div className="home-links-container">
            <a href="#deliverables" className='home-link02 Navbar-Link'>Services</a>
            <Link to='/portfolio'>
              <span className="home-link02 Navbar-Link">Portofolio</span>
            </Link>
            <a href="#clients" className='home-link02 Navbar-Link'>Clients</a>
            <a className="home-link03 Navbar-Link" href='#contact'>Contact</a>
          </div>
          <div className="burgerContainer">
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-container01">
              <span className="Card-Heading home-heading1"><img src='/playground_assets/externsTechBlack.png' style={{width:'200px', height: '120px', marginLeft: '-40px', objectFit: 'cover'}} /></span>
              <div data-role="CloseMobileMenu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-links-container1">
              <a href='#deliverables' className="home-link04 Navbar-Link">Services</a>
              <Link to='/portfolio'>
              <span className="home-link05 Navbar-Link">Portofolio</span>
              </Link>
              <a href="#clients" className='home-link06 Navbar-Link'>Clients</a>
              <a href='#contact' className="home-link06 Navbar-Link">Contact</a>
            </div>
            <div data-role="Header" className="home-navbar-container">
        
      </div> </div>
        </div>
      </div>

      
      <div className="home-section-separator"></div>
      <div className="home-section-separator1"></div>
      <div className="home-container02">
        <div className="home-hero">
          <div className="home-hero-text-container">
            <h1 className="home-heading2 Section-Heading">
              We help Startups build Their Products from Scratch
            </h1>
            <span className="home-text">
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
      <div className="home-features" id='deliverables'>
        <div className="home-heading-container">
          <h2 className="home-text05 Section-Heading">Deliverables</h2>
        </div>
        <div className="home-cards-container">
          <div className="home-card">
            <div className="home-icon-container">
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon04">
                <path d="M838.857 217.143c21.143 21.143 38.857 63.429 38.857 93.714v658.286c0 30.286-24.571 54.857-54.857 54.857h-768c-30.286 0-54.857-24.571-54.857-54.857v-914.286c0-30.286 24.571-54.857 54.857-54.857h512c30.286 0 72.571 17.714 93.714 38.857zM585.143 77.714v214.857h214.857c-3.429-9.714-8.571-19.429-12.571-23.429l-178.857-178.857c-4-4-13.714-9.143-23.429-12.571zM804.571 950.857v-585.143h-237.714c-30.286 0-54.857-24.571-54.857-54.857v-237.714h-438.857v877.714h731.429zM274.286 438.857c6.286-8 17.714-9.714 25.714-3.429l29.143 21.714c8 6.286 9.714 17.714 3.429 25.714l-104 138.857 104 138.857c6.286 8 4.571 19.429-3.429 25.714l-29.143 21.714c-8 6.286-19.429 4.571-25.714-3.429l-129.143-172c-4.571-6.286-4.571-15.429 0-21.714zM732.571 610.857c4.571 6.286 4.571 15.429 0 21.714l-129.143 172c-6.286 8-17.714 9.714-25.714 3.429l-29.143-21.714c-8-6.286-9.714-17.714-3.429-25.714l104-138.857-104-138.857c-6.286-8-4.571-19.429 3.429-25.714l29.143-21.714c8-6.286 19.429-4.571 25.714 3.429zM378.286 874.286c-10.286-1.714-16.571-11.429-14.857-21.143l78.857-474.857c1.714-10.286 11.429-16.571 21.143-14.857l36 5.714c10.286 1.714 16.571 11.429 14.857 21.143l-78.857 474.857c-1.714 10.286-11.429 16.571-21.143 14.857z"></path>
              </svg>
            </div>
            <div className="home-content-container">
              <span className="home-heading3 Card-Heading">
                Website Development
              </span>
              <span className="home-text06">
                We use Major Industry Leading Web Technologies including MERN
                (MongoDB as a NoSQL DB, ExpressJS, ReactJS for Dynamic &amp;
                Quick Frontend Development, NodeJS for single-threaded, fast
                server sided applications.
              </span>
            </div>
          </div>
          <div className="home-card1">
            <div className="home-icon-container1">
              <svg viewBox="0 0 1024 1024" className="home-icon06">
                <path d="M736 0h-448c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h448c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM384 48h256v32h-256v-32zM512 960c-35.346 0-64-28.654-64-64s28.654-64 64-64 64 28.654 64 64-28.654 64-64 64zM768 768h-512v-640h512v640z"></path>
              </svg>
            </div>
            <div className="home-content-container1">
              <span className="home-heading4">Android/IOS Development</span>
              <span className="home-text07">
                <span className="home-text08">
                  Using Flutter and React Native, we are able to build cross
                  Platform Apps for Android & IOS with sleek, Elegant UI, saving our
                  clients the time and resources required to maintain separate
                  codebases for each platform.
                </span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-card2">
            <div className="home-icon-container2">
              <svg viewBox="0 0 865.7188571428571 1024" className="home-icon08">
                <path d="M207.429 877.714l52-52-134.286-134.286-52 52v61.143h73.143v73.143h61.143zM506.286 347.429c0-7.429-5.143-12.571-12.571-12.571-3.429 0-6.857 1.143-9.714 4l-309.714 309.714c-2.857 2.857-4 6.286-4 9.714 0 7.429 5.143 12.571 12.571 12.571 3.429 0 6.857-1.143 9.714-4l309.714-309.714c2.857-2.857 4-6.286 4-9.714zM475.429 237.714l237.714 237.714-475.429 475.429h-237.714v-237.714zM865.714 292.571c0 19.429-8 38.286-21.143 51.429l-94.857 94.857-237.714-237.714 94.857-94.286c13.143-13.714 32-21.714 51.429-21.714s38.286 8 52 21.714l134.286 133.714c13.143 13.714 21.143 32.571 21.143 52z"></path>
              </svg>
            </div>
            <div className="home-content-container2">
              <span className="home-heading5">Logo &amp; UI/UX Design</span>
              <span className="home-text10">
                Our logo &amp; UI/UX design services involve working closely
                with our clients to understand their brand identity and design
                needs, and creating custom logo concepts that effectively convey
                their message and values.
              </span>
            </div>
          </div>
        </div>
      </div>
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
      </div>
      <div className="home-section-separator2"></div>
      <div className="home-clients" id='clients'>
        <div className="home-heading-container2">
          <h1 className="home-text22 Section-Heading">Previous Clients</h1>
          <span className="home-text23 Section-Text">
            Our Track Record with previous Clients.
          </span>
        </div>
        <div className="home-logo-container">
          <img
            alt="image"
            src="/playground_assets/yar-logo-without-background-01-200h.png"
            className="home-logo"
          />
          <img
            alt="image"
            src="/playground_assets/cbc0231e90fa21eb67a10aca06c255e2-200h.webp"
            className="home-logo1"
          />
            <img
              alt="image"
              src="/playground_assets/download.png"
              className="home-logo3"
            />
          <img
            alt="image"
            src="/playground_assets/default-img.svg"
            className="home-logo2"
          />
        </div>
      </div>
      <div className="home-section-separator3"></div>
      <div className="home-section-separator4"></div>
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
      </div>
      <div className="home-section-separator5"></div>
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
            <a href="tel:+919304882841" className='contact-link'><IoIosCall className='contact-icon' /><span style={{marginTop: '5px', fontWeight: 700}}> Call Us <span className='num'>&nbsp;&nbsp;+91 9304882841</span></span></a>
            <a href="mailto:mail@externs.tech" className='contact-link'><IoIosMail className='contact-icon' /><span style={{marginTop: '5px', fontWeight: 700}}> Mail Us <span className='mail'>&nbsp;&nbsp;mail@externs.tech</span></span></a>
          </div>
        </div>
      </div>
      <div className="home-section-separator6"></div>
      <div className="home-footer-container">
        <div className="home-footer">
          <div className="home-social-links">
            <a
              href="https://twitter.com/nobodythisside"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link08"
            >
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon22">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/vishal-vishwajeet"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link09"
            >
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon24">
                <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
              </svg>
            </a>
            <a
              href="https://instagram.com/vishal._.vishwajeet"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link10"
            >
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon26">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
          </div>
          <div className="home-copyright-container">
            <svg viewBox="0 0 1024 1024" className="home-icon28">
              <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
            </svg>
            <span className="Anchor">Copyright, 2022</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
