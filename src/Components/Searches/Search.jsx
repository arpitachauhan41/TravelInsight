import React from 'react'
import searchCSS from './../Searches/Search.module.css'

function Search() {
  return (
    <div className={`${searchCSS.search_wrapper} section`} id="searches">
        <h2>Popular Searches</h2>
        <div className={searchCSS.Cards}>
            <div className={searchCSS.card}>
                <i className="ri-search-line"></i>
                <h3>Domestic Trips <span>See India In A New Light</span></h3>
                <div className={searchCSS.content}></div>
            </div>
            <div className={searchCSS.card}>
                <i className="ri-search-line"></i>
                <h3>Vacations in 14 days <span>Limited Availability</span></h3>
                <div className={searchCSS.content}></div>
            </div>
            <div className={searchCSS.card}>
                <i className="ri-search-line"></i>
                <h3>Traveling Groups <span>Save when you're 5+ guests</span></h3>
                <div className={searchCSS.content}></div>
            </div>
            <div className={searchCSS.card}>
                <i className="ri-search-line"></i>
                <h3>Tours Under Rs. 30,000/- <span>Browse Our Value Vacation Plans</span></h3>
                <div className={searchCSS.content}></div>
            </div>
            <div className={searchCSS.card}>
                <i className="ri-search-line"></i>
                <h3>Past Guest Benefits <span>Saving with every trip</span></h3>
                <div className={searchCSS.content}></div>
            </div>
            <div className={searchCSS.card}>
                <i className="ri-search-line"></i>
                <h3>International Getaway <span>Explore The World Beyond Borders</span></h3>
                <div className={searchCSS.content}></div>
            </div>
        </div>
    </div>
  )
}

export default Search
