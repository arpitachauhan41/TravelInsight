import React from 'react'
import destinationCSS from './../Destinations/Destination.module.css'
import destination1 from './../../assets/dest1.jpg'
import destination2 from './../../assets/dest2.jpg'
import destination3 from './../../assets/dest3.jpg'
import destination4 from './../../assets/dest4.jpg'
import destination5 from './../../assets/dest5.jpg'
import destination6 from './../../assets/dest7.jpg'
import destination7 from './../../assets/dest7.jpg'
import destination8 from './../../assets/dest8.jpg'

function Destination() {
  return (
    <div className={`${destinationCSS.Destination_Wrapper} section`} id="populardestinations">
        <h2>Popular Destinations</h2>
        <div className={destinationCSS.DestinationCards}>
            <div className={destinationCSS.DestinationCard}>
                <img src={destination1} alt="destination" />
                <div className={destinationCSS.DestinationDetails}>
                    <h2>Uttarakhand</h2>
                    <div className={destinationCSS.btns}>
                        <a href="#">All Destinations</a>
                        <a href="#">Deals</a>
                    </div>
                </div>
            </div>
            <div className={destinationCSS.DestinationCard}>
                <img src={destination2} alt="destination" />
                <div className={destinationCSS.DestinationDetails}>
                    <h2>Rajasthan</h2>
                    <div className={destinationCSS.btns}>
                        <a href="#">All Destinations</a>
                        <a href="#">Deals</a>
                    </div>
                </div>
            </div>
            <div className={destinationCSS.DestinationCard}>
                <img src={destination3} alt="destination" />
                <div className={destinationCSS.DestinationDetails}>
                    <h2>Uttar Pradesh</h2>
                    <div className={destinationCSS.btns}>
                        <a href="#">All Destinations</a>
                        <a href="#">Deals</a>
                    </div>
                </div>
            </div>
            <div className={destinationCSS.DestinationCard}>
                <img src={destination4} alt="destination" />
                <div className={destinationCSS.DestinationDetails}>
                    <h2>Meghalaya</h2>
                    <div className={destinationCSS.btns}>
                        <a href="#">All Destinations</a>
                        <a href="#">Deals</a>
                    </div>
                </div>
            </div>
            <div className={destinationCSS.DestinationCard}>
                <img src={destination5} alt="destination" />
                <div className={destinationCSS.DestinationDetails}>
                    <h2>Goa</h2>
                    <div className={destinationCSS.btns}>
                        <a href="#">All Destinations</a>
                        <a href="#">Deals</a>
                    </div>
                </div>
            </div>
            <div className={destinationCSS.DestinationCard}>
                <img src={destination6} alt="destination" />
                <div className={destinationCSS.DestinationDetails}>
                    <h2>Kerela</h2>
                    <div className={destinationCSS.btns}>
                        <a href="#">All Destinations</a>
                        <a href="#">Deals</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Destination
