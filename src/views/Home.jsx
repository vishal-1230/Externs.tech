import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../components/Header'
import '../index.css'
// import ParticlesBackground from '../components/ParticlesBackgrounf'
import Footer from '../components/Footer'
import Faqs from '../components/Faqs'
import Contact from '../components/Contact'
import Main from '../components/Main'
const Home = (props) => {
  return (
    <>
      <Helmet>
        <title>Externs Software Technologies</title>
        <meta property="og:title" content="Portfolio Page" />
      </Helmet>
      <Header />
      <div className='bg-gray-200'>
        <Main />
        <Faqs />
        <Contact />
      </div>
      <Footer />
    </>
  )
}
export default Home
