import React from 'react'
import { Helmet } from 'react-helmet'
import { IoIosCall, IoIosMail } from 'react-icons/io'
import { Link, Route } from 'react-router-dom'
import Header from '../components/Header'
import '../index.css'
import ParticlesBackground from '../components/ParticlesBackgrounf'
const Home = (props) => {
  return (
    <>
      <Helmet>
        <title>Externs Software Technologies</title>
        <meta property="og:title" content="Portfolio Page" />
      </Helmet>
      <Header />
      <ParticlesBackground></ParticlesBackground>
      <div className='text-white'>
        <div className="container w-full h-full">

          <p>

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sed dignissimos vitae porro delectus nostrum itaque voluptate totam! Tempore ad, esse qui veritatis, delectus quaerat, distinctio minima aliquam numquam expedita soluta doloremque reiciendis. Quod?
          </p>
          <span className='w-14 h-20'>a</span>
          <span className='w-14 h-20'>a</span>
          <span className='w-14 h-20'>a</span>
          <span className='w-14 h-20'>a</span>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus quos, est qui doloribus alias quas veniam recusandae ipsa laborum aperiam facilis aut debitis. Unde consequatur provident eius tempore laudantium alias at? Libero architecto, quo vel ducimus veritatis recusandae aliquam in molestiae adipisci officiis vero voluptate velit laboriosam vitae nisi aspernatur ullam doloremque dolorem blanditiis quidem voluptates dolor autem similique? Ex, velit nostrum inventore, qui quisquam non voluptates excepturi dolore veniam odio quidem, cum aspernatur. Atque natus accusantium maiores eius ducimus labore repudiandae minus perferendis reiciendis deserunt praesentium recusandae ullam delectus illum quos, ad impedit consequuntur nesciunt aut debitis quae. Suscipit.</p>
        </div>
      </div>
    </>
  )
}
export default Home
