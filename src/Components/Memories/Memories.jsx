import React from "react"
import memoriesCSS from './../Memories/Memories.module.css'
import memory1 from './../../assets/memory1.jpeg'
import memory2 from './../../assets/memory2.jpeg'
import memory3 from './../../assets/memory3.jpg'
import memory4 from './../../assets/memory4.jpg'
import memory5 from './../../assets/memory5.jpg'
import memory6 from './../../assets/memory6.jpg'
import memory7 from './../../assets/memory7.jpg'

function Memories(){
    return(
        <div className={`${memoriesCSS.Memories_wrapper} section`} id="memories">
            <div className={memoriesCSS.MemoriesCard}>
                <img src={memory1} alt="Memories" />
                <div className={memoriesCSS.content}>
                    <h3>Breathtaking Perspectives</h3>
                    <a href="#">View Tours</a>
                </div>
            </div>
            <div className={memoriesCSS.MemoriesCard}>
                <img src={memory2} alt="Memories" />
                <div className={memoriesCSS.content}>
                    <h3>Small Groups Departure</h3>
                    <a href="#">View Tours</a>
                </div>
            </div>
            <div className={memoriesCSS.MemoriesCard}>
                <img src={memory3} alt="Memories" />
                <div className={memoriesCSS.content}>
                    <h3>Solo Travel</h3>
                    <a href="#">View Tours</a>
                </div>
            </div>
            <div className={memoriesCSS.MemoriesCard}>
                <img src={memory4} alt="Memories" />
                <div className={memoriesCSS.content}>
                    <h3>Religious Tours</h3>
                    <a href="#">View Tours</a>
                </div>
            </div>
            <div className={memoriesCSS.MemoriesCard}>
                <img src={memory5} alt="Memories" />
                <div className={memoriesCSS.content}>
                    <h3>Let Our Experts Plan<br/> Your 2024 Journey</h3>
                    <button>View Tours</button>
                </div>
            </div>
            
            <div className={memoriesCSS.MemoriesCard}>
                <img src={memory6} alt="Memories" />
                <div className={memoriesCSS.content}>
                    <h3>Sacred Heights</h3>
                    <a href="#">View Tours</a>
                </div>
            </div>
            <div className={memoriesCSS.MemoriesCard}>
                <img src={memory7} alt="Memories" />
                <div className={memoriesCSS.content}>
                    <h3>Private Touring</h3>
                    <a href="#">View Tours</a>
                </div>
            </div>
        </div>
    )
}

export default Memories