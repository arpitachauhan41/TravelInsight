import React from 'react'
import calltoactionCSS from './../Footer/CallToAction.module.css'

function CallToAction() {
    return (
        <div className={`${calltoactionCSS.CallToAction_wrapper} section`}>
            <h2>Explore Iconic Popular Destination<br/>
                With Expert Insides</h2>
            <button>Book Adventure</button>
        </div>
    )
}

export default CallToAction