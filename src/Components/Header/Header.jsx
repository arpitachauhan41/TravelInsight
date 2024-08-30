import React from "react";
import headerCSS from './../Header/Header.module.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import {Autoplay} from 'swiper/modules'
import destination1 from './../../assets/pic1.jpg'
import destination2 from './../../assets/pic2.jpg'
import destination3 from './../../assets/pic3.jpeg'
import destination4 from './../../assets/pic4.jpg'
import destination5 from './../../assets/pic5.jpeg'
import destination6 from './../../assets/pic6.jpeg'

function Header(){
    return(
        <div className={`${headerCSS.header_wrapper} section`} id="home">
            <div className={headerCSS.imageContainer}>
                <h2>Explore the world, <br></br>with US.</h2>
            </div>
            <Swiper 
                spaceBetween={30}
                slidesPerView={5}
                loop={true}
                autoplay={{ delay: 1500,}}
                breakpoints={{
                    0:{
                        slidesPerView: 1,
                    },
                    500:{
                        slidesPerView: 1,
                    },
                    768:{
                        slidesPerView: 2,
                    },
                    1024:{
                        slidesPerView: 3,
                    },
                    1200:{
                        slidesPerView: 5,
                    }
                }}
                modules={[Autoplay]}
            className={headerCSS.swiper}>
                <SwiperSlide>
                    <div className={headerCSS.DestinationsCard}>
                        <img src={destination1} alt="" />
                        <h3>Ladakh</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={headerCSS.DestinationsCard}>
                        <img src={destination2} alt="" />
                        <h3>Manali</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={headerCSS.DestinationsCard}>
                        <img src={destination3} alt="" />
                        <h3>Goa</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={headerCSS.DestinationsCard}>
                        <img src={destination4} alt="" />
                        <h3>Meghalaya</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={headerCSS.DestinationsCard}>
                        <img src={destination5} alt="" />
                        <h3>Kashmir</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={headerCSS.DestinationsCard}>
                        <img src={destination6} alt="" />
                        <h3>Udaipur</h3>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Header