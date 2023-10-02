import React from 'react'
import banner from '../../images/banner.jpg'
import { AiOutlineArrowRight } from 'react-icons/ai';




function Banner() {
    return (
        <section className='banner'>
            <div className="container d-flex">
                <div className="col-lg-8 banner-text ">
                    <h1>Explore Worlds Unseen, Immerse in Stories, and Find Your Next Literary Adventure Here</h1>
                    <button className='dark-btn'>Explore Now   <AiOutlineArrowRight /> </button>


                </div>
                <div className="col-4 banner-img">
                    <img src={banner} alt='-' />
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <hr />
            </div>
        </section>
    )
}

export default Banner
