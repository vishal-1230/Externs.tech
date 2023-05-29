import React from 'react'
import { Helmet } from 'react-helmet'
import { IoIosCall, IoIosMail } from 'react-icons/io'
import { Link, Route } from 'react-router-dom'
import Header from '../components/Header'
import '../index.css'
import ParticlesBackground from '../components/ParticlesBackgrounf'
import Footer from '../components/Footer'
import Faqs from '../components/Faqs'
import Contact from '../components/Contact'
const Home = (props) => {
  return (
    <>
      <Helmet>
        <title>Externs Software Technologies</title>
        <meta property="og:title" content="Portfolio Page" />
      </Helmet>
      <Header />
      <Faqs />
      <Footer />
      <Contact />
    </>
  )
}
export default Home
