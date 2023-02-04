import React from 'react'
import './home.css'
import './portfolio.css'
import { Link } from 'react-router-dom'

function portfolio() {

  function onImgClick(img){
    document.getElementById('full-image').src=img
    document.getElementById('full-image').style.display='block'
    document.getElementById('image-viewer').style.display='block'
    document.getElementById('close').style.display='block'
  }

  function onCrossClick(){
    document.getElementById('image-viewer').style.display='none'
    document.getElementById('full-image').style.display='none'
    document.getElementById('close').style.display='none'
  }

  return (
    <div>
      <div data-role="Header" className="home-navbar-container">
        <div className="home-navbar">
        <Link to='/'>
          <img
            alt="image"
            src="/playground_assets/externsonly.svg"
            className="home-image"
          />
        </Link>
          <span className="home-heading">Externs</span>
          <div className="home-links-container">
            <Link to='/'>
              <span className="home-link02 Navbar-Link">Home</span>
            </Link>
            <a href="/#deliverables" className='home-link02 Navbar-Link'>Services</a>
              <a href="/#clients" className='home-link02 Navbar-Link'>Clients</a>
            <a className="home-link06 Navbar-Link" href='/#contact'>Contact</a>
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
              <Link to='/'>
              <span className="home-link04 Navbar-Link">Home</span>
              </Link>
              <a href='/#deliverables' className="home-link05 Navbar-Link">Services</a>
              <Link to='/#clients'>
              <span href="/#clients" className='home-link06 Navbar-Link'>Clients</span>
              </Link>
              <a href="/#contact" className="home-link07 Navbar-Link">Contact</a>
            </div>
          </div>
        </div>
      </div>
    <div className="image-content">
        <div className="images">
            <img src="/projImages/yar1.png" className="portfolio-img" onClick={()=>{onImgClick("/projImages/yar1.png")}} alt="" width="300" />
            <img src="/projImages/yar2.png" className="portfolio-img" onClick={()=>{onImgClick("/projImages/yar2.png")}} alt="" width="300" />
            <img src="/projImages/yar3.png" className="portfolio-img" onClick={()=>{onImgClick("/projImages/yar3.png")}} alt="" width="300" />
            <img src="/projImages/yar4.png" className="portfolio-img" onClick={()=>{onImgClick("/projImages/yar4.png")}} alt="" width="300" />
            <img src="/projImages/crypto1.png" className="portfolio-img" onClick={()=>{onImgClick("/projImages/crypto1.png")}} alt="" width="300" />
            <img src="/projImages/crypto2.png" className="portfolio-img" onClick={()=>{onImgClick("/projImages/crypto2.png")}} alt="" width="300" />
            <img src="/projImages/crypto3.png" className="portfolio-img" onClick={()=>{onImgClick("/projImages/crypto3.png")}} alt="" width="300" />
            <img src="/projImages/qr1.jpeg" className="portfolio-img" onClick={()=>{onImgClick("/projImages/qr1.jpeg")}} alt="" width="300" />
            <img src="/projImages/qr2.jpeg" className="portfolio-img" onClick={()=>{onImgClick("/projImages/qr2.jpeg")}} alt="" width="300" />
            <img src="/projImages/crypto4.png" className="portfolio-img" onClick={()=>{onImgClick("/projImages/crypto4.png")}} alt="" width="300" />
            <img src="/projImages/cms1.jpeg" className="portfolio-img" onClick={()=>{onImgClick("/projImages/cms1.jpeg")}} alt="" width="300" />
            <img src="/projImages/cms2.jpeg" className="portfolio-img" onClick={()=>{onImgClick("/projImages/cms2.jpeg")}} alt="" width="300" />
            <img src="/projImages/mtech1.jpeg" className="portfolio-img" onClick={()=>{onImgClick("/projImages/mtech1.jpeg")}} alt="" width="300" />
            <img src="/projImages/mtech2.jpeg" className="portfolio-img" onClick={()=>{onImgClick("/projImages/mtech2.jpeg")}} alt="" width="300" />
        </div>
        <div id="image-viewer">
            <span className="close" id="close" onClick={onCrossClick}>&times;</span>
            <img className="modal-content" id="full-image" />
        </div>
    </div>
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

export default portfolio