import React from 'react'
import aboutCSS from './../About/About.module.css'
import aboutImage from './../../assets/about-bg.jpg'

function About() {
  return (
    <div className={`${aboutCSS.about_wrapper} section`} id="about">
        <div className={aboutCSS.about_image}>
            <img src={aboutImage} alt="about-img" />
        </div>
        <div className={aboutCSS.about_content}>
            <h2>Discover Organized Adventures, <br/>the Ultimate Travel Hack</h2>
            <p>At TravelInsight, we believe that travel should be as effortless as it is exciting. 
              Our expertly organized adventures are designed to take the hassle out of planning, so you can focus on the thrill of 
              discovering new destinations. We offer everything you need for the perfect getaway, including:</p>
            <div className={aboutCSS.about}>
                <p><i className='ri-building-4-line'></i>Accomodation</p>
                <p><i className='ri-car-line'></i>Transportation Allowance</p>
                <p><i className='ri-magic-line'></i>Exclusive Experiences</p>
                <p><i className='ri-instance-line'></i>Local Recommendations</p>
                <p><i className='ri-pin-distance-line'></i>Personalised Trips</p>
                <p><i className='ri-phone-line'></i>24/7 Support</p>
            </div>
        </div>
    </div>
  )
}

export default About
