import React from 'react'
import AboutBreadCrumb from '../components/about/AboutBreadCrumb';
import Brands from '../components/about/Brands';
import Capabalities from '../components/about/Capabalities';
import Testimonial from '../components/about/Testimonial';
import Footer from '../components/Generic/Footer';
import Navbar from '../components/Generic/Navbar';
import Banner from '../components/home/Banner';
import TopBar from '../components/home/TopBar';
import Carousel from '../components/about/Carousol';

function about() {
  return (
    <>
        <TopBar />
        <Navbar />
        <div className='max-w-[1440px] mx-auto px-12'>
          <AboutBreadCrumb />
        </div>
        <Capabalities />
        
        <Testimonial />

        <Carousel />
        <Brands />

        <Banner/>
        <Footer />
    </>
  )
}

export default about;