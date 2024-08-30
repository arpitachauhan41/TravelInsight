import React, {useRef} from "react";
import navCSS from './../Nav/Nav.module.css'
function Nav(){
    const menu = useRef();
    const MenuHandler = () => {
        menu.current.classList.toggle(navCSS.activeMenu);
    }
    return(
        <div className={navCSS.Nav_wrapper}>
            <div className={navCSS.logo}>
                <a href="#">TravelInsight <span>.</span></a>
            </div>
            <ul ref={menu}>
                <li><a href="#home">Home</a></li>
                <li><a href="#trips">Trips</a></li>
                <li><a href="#searches">Searches</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#populardestinations">Popular Destinations</a></li>
            </ul>
            <div className={navCSS.nav_btns}>
                <div className={navCSS.search_wrapper}>
                    <i className="ri-search-line"></i>
                    <input type="text" placeholder="Search Places"/>
                </div>
                <div className={navCSS.CallBtn}>
                    <i className="ri-phone-line"></i>
                    <p>+91-1234567890 <small>Call Your Travel Agent</small></p>
                </div>
                <i className="ri-menu-2-line" onClick={MenuHandler} id={navCSS.bars}></i>
            </div>
        </div>
    )
}

export default Nav