import React from 'react'
import TripCSS from './../Trips/Trips.module.css'
import trip1 from './../../assets/trip1.jpg'
import trip2 from './../../assets/trip2.jpg'
import trip3 from './../../assets/trip3.jpg'
import trip4 from './../../assets/trip4.jpg'
import trip5 from './../../assets/trip5.png'
import trip6 from './../../assets/trip6.jpg'
import trip7 from './../../assets/trip7.jpg'
import trip8 from './../../assets/trip8.jpg'

function Trips() {
    return (
        <div className={`${TripCSS.trips_wrapper} section`} id="trips">
            <h2>Popular Trips</h2>
            <div className={TripCSS.cards}>
                <div className={TripCSS.card}>
                    <img src={trip1} alt="" />
                    <div className={TripCSS.TripContent}>
                        <div className={TripCSS.rating}>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-half-fill'></i>
                        </div>
                        <h3>Kashmeeeeer</h3>
                        <div className={TripCSS.TripDetails}>
                            <span><i className='ri-calendar-line'></i>7 days</span>
                            <span><i className='ri-map-pin-line'></i>5 places</span>
                            <span><i className='ri-flag-line'></i>Kashmir</span>
                        </div>
                        <div className={TripCSS.Pricing}>
                            <span className={TripCSS.price}>Rs. 25,000/-</span>
                            <button className={TripCSS.book}>Book Now</button>
                        </div>
                    </div>
                </div>
                <div className={TripCSS.card}>
                    <img src={trip2} alt="" />
                    <div className={TripCSS.TripContent}>
                        <div className={TripCSS.rating}>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-fill'></i>
                        </div>
                        <h3>Manali</h3>
                        <div className={TripCSS.TripDetails}>
                            <span><i className='ri-calendar-line'></i>5 days</span>
                            <span><i className='ri-map-pin-line'></i>5 places</span>
                            <span><i className='ri-flag-line'></i>Manali</span>
                        </div>
                        <div className={TripCSS.Pricing}>
                            <span className={TripCSS.price}>Rs. 20,000/-</span>
                            <button className={TripCSS.book}>Book Now</button>
                        </div>
                    </div>
                </div>
                <div className={TripCSS.card}>
                    <img src={trip3} alt="" />
                    <div className={TripCSS.TripContent}>
                        <div className={TripCSS.rating}>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-half-fill'></i>
                            <i className='ri-star-line'></i>
                        </div>
                        <h3>Meghalaya</h3>
                        <div className={TripCSS.TripDetails}>
                            <span><i className='ri-calendar-line'></i>9 days</span>
                            <span><i className='ri-map-pin-line'></i>6 places</span>
                            <span><i className='ri-flag-line'></i>Meghalaya</span>
                        </div>
                        <div className={TripCSS.Pricing}>
                            <span className={TripCSS.price}>Rs. 35,000/-</span>
                            <button className={TripCSS.book}>Book Now</button>
                        </div>
                    </div>
                </div>
                <div className={TripCSS.card}>
                    <img src={trip4} alt="" />
                    <div className={TripCSS.TripContent}>
                        <div className={TripCSS.rating}>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-line'></i>
                            <i className='ri-star-line'></i>
                        </div>
                        <h3>Mathura</h3>
                        <div className={TripCSS.TripDetails}>
                            <span><i className='ri-calendar-line'></i>3 days</span>
                            <span><i className='ri-map-pin-line'></i>5 places</span>
                            <span><i className='ri-flag-line'></i>Mathura</span>
                        </div>
                        <div className={TripCSS.Pricing}>
                            <span className={TripCSS.price}>Rs. 10,000/-</span>
                            <button className={TripCSS.book}>Book Now</button>
                        </div>
                    </div>
                </div>
                <div className={TripCSS.card}>
                    <img src={trip5} alt="" />
                    <div className={TripCSS.TripContent}>
                        <div className={TripCSS.rating}>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-line'></i>
                        </div>
                        <h3>Goa</h3>
                        <div className={TripCSS.TripDetails}>
                            <span><i className='ri-calendar-line'></i>7 days</span>
                            <span><i className='ri-map-pin-line'></i>4 places</span>
                            <span><i className='ri-flag-line'></i>Goa</span>
                        </div>
                        <div className={TripCSS.Pricing}>
                            <span className={TripCSS.price}>Rs. 50,000/-</span>
                            <button className={TripCSS.book}>Book Now</button>
                        </div>
                    </div>
                </div>
                <div className={TripCSS.card}>
                    <img src={trip6} alt="" />
                    <div className={TripCSS.TripContent}>
                        <div className={TripCSS.rating}>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-half-fill'></i>
                        </div>
                        <h3>Vanarasi</h3>
                        <div className={TripCSS.TripDetails}>
                            <span><i className='ri-calendar-line'></i>5 days</span>
                            <span><i className='ri-map-pin-line'></i>5 places</span>
                            <span><i className='ri-flag-line'></i>Banaras</span>
                        </div>
                        <div className={TripCSS.Pricing}>
                            <span className={TripCSS.price}>Rs. 17,000/-</span>
                            <button className={TripCSS.book}>Book Now</button>
                        </div>
                    </div> 
                </div>
                <div className={TripCSS.card}>
                    <img src={trip7} alt="" />
                    <div className={TripCSS.TripContent}>
                        <div className={TripCSS.rating}>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-half-fill'></i>
                            <i className='ri-star-line'></i>
                        </div>
                        <h3>Jaipur</h3>
                        <div className={TripCSS.TripDetails}>
                            <span><i className='ri-calendar-line'></i>7 days</span>
                            <span><i className='ri-map-pin-line'></i>5 places</span>
                            <span><i className='ri-flag-line'></i>Jipur</span>
                        </div>
                        <div className={TripCSS.Pricing}>
                            <span className={TripCSS.price}>Rs. 27,000/-</span>
                            <button className={TripCSS.book}>Book Now</button>
                        </div>
                    </div>
                </div>
                <div className={TripCSS.card}>
                    <img src={trip8} alt="" />
                    <div className={TripCSS.TripContent}>
                        <div className={TripCSS.rating}>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-half-fill'></i>
                        </div>
                        <h3>Kedarnath</h3>
                        <div className={TripCSS.TripDetails}>
                            <span><i className='ri-calendar-line'></i>10 days</span>
                            <span><i className='ri-map-pin-line'></i>7 places</span>
                            <span><i className='ri-flag-line'></i>Kedarnath</span>
                        </div>
                        <div className={TripCSS.Pricing}>
                            <span className={TripCSS.price}>Rs. 45,000/-</span>
                            <button className={TripCSS.book}>Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trips
