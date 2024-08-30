import React from 'react'
import testimonialCSS from './../Testimonial/Testimonial.module.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import {Autoplay} from 'swiper/modules'
import profile1 from './../../assets/picture.jpeg'
import profile2 from './../../assets/review2.jpg'
import profile3 from './../../assets/review3.jpg'
import profile4 from './../../assets/review4.jpg'
import profile5 from './../../assets/review5.jpg'

function Testimonial() {
  return (
    <div className={`${testimonialCSS.Testimonial_Wrapper} section`}>
        <h2>Exceptional Journey's with TravelInsight</h2>
        <Swiper 
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            breakpoints={{
                0:{ slidesPerView:1 },
                768:{ slidesPerView:2 },
                1200:{ slidesPerView:3 }
            }}
            autoplay={{delay:2200,}}
            modules={[Autoplay]}
            className={testimonialCSS.swiper}>
            <SwiperSlide>
                <div className={testimonialCSS.Testimonial_Container}>
                    <div className={testimonialCSS.profile}>
                        <img src={profile1} alt="" />
                        <div className={testimonialCSS.detail}>
                            <span>Arpita</span>
                            <div className={testimonialCSS.ratings}>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-half-fill"></i>
                                <i className="ri-star-line"></i>
                            </div>
                        </div>
                    </div>
                    <p>The destinations were thoughtfully selected, and we loved the variety of activities offered. 
                        While there were a few minor hiccups in the itinerary, they didn’t take away from the overall experience. 
                        The team was responsive and did their best to ensure we had a great time. 
                        Would definitely consider TravelInsight for future travels.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={testimonialCSS.Testimonial_Container}>
                    <div className={testimonialCSS.profile}>
                        <img src={profile5} alt="" />
                        <div className={testimonialCSS.detail}>
                            <span>Twincy</span>
                            <div className={testimonialCSS.ratings}>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-line"></i>
                                <i className="ri-star-line"></i>
                            </div>
                        </div>
                    </div>
                    <p>The itinerary was well-planned, but there were some logistical issues that caused unnecessary stress. 
                        While the team was helpful in resolving these problems, the trip didn’t go as smoothly as we had hoped. 
                        We still had a good time.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={testimonialCSS.Testimonial_Container}>
                    <div className={testimonialCSS.profile}>
                        <img src={profile2} alt="" />
                        <div className={testimonialCSS.detail}>
                            <span>Mamta</span>
                            <div className={testimonialCSS.ratings}>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-half-fill"></i>
                            </div>
                        </div>
                    </div>
                    <p>TravelInsight truly went above and beyond in planning our recent trip. 
                        The itinerary was thoughtfully designed, offering a perfect mix of adventure and relaxation. 
                        The team’s attention to detail and personal touches made the experience feel special.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={testimonialCSS.Testimonial_Container}>
                    <div className={testimonialCSS.profile}>
                        <img src={profile3} alt="" />
                        <div className={testimonialCSS.detail}>
                            <span>Himanshu</span>
                            <div className={testimonialCSS.ratings}>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-half-fill"></i>
                            </div>
                        </div>
                    </div>
                    <p>Our recent journey with TravelInsight was a delightful experience overall. 
                        The itinerary was well thought out, providing us with an excellent blend of cultural experiences and leisure time. 
                        There were a couple of minor delays in transportation, but they were handled professionally. 
                        We would definitely consider using TravelInsight for future trips.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={testimonialCSS.Testimonial_Container}>
                    <div className={testimonialCSS.profile}>
                        <img src={profile4} alt="" />
                        <div className={testimonialCSS.detail}>
                            <span>Pranjul</span>
                            <div className={testimonialCSS.ratings}>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                            </div>
                        </div>
                    </div>
                    <p>Our recent trip planned by TravelInsight was nothing short of spectacular. 
                        From the initial inquiry to the final drop-off, their team exhibited professionalism, attention to detail, 
                        and a genuine passion for creating memorable experiences. The itinerary was perfectly curated, offering a balanced
                         mix of sightseeing, relaxation, and adventure.</p>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Testimonial