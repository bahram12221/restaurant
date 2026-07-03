import Navbar from "../Navbar"
import style from "./footer.module.css"
import { NavLink } from "react-router-dom"


function Footer(){
    return(
        <div className={style.container}>
            <div className={style.contactWays}>
                <div className={style.foodExpress}>
                    <i style={{color:"lightgreen"}} className="fa-solid fa-leaf"></i>
                    <h2>FoodExpress</h2>
                    <ul>
                        <li><i class="fa-solid fa-envelope"></i>  restaurant12212@gmail.com</li>
                        <li><i className="fa-solid fa-phone"></i>  +93734 567 890</li>
                        <li><i className="fa-solid fa-location-dot"></i>  123 Restaurant Street, Downtown</li>
                    </ul>
                </div>
            </div>
            <div className={style.menu}>
                <h3>Our Menu</h3>
                <NavLink to="/menu">Breakfast</NavLink>
                <NavLink to="/menu">Lunch</NavLink>
                <NavLink to="/menu">Dinner</NavLink>
            </div>
            <div className={style.information}>
                <h3>Information</h3>
                <NavLink to="/about">About</NavLink>

                <NavLink to="/gallery">Gallery</NavLink>
                <NavLink to="/testimonials">Testimonials</NavLink>
            </div>
            <div className={style.useFulLinks}>
                <h3>UseFul Links</h3>
                <NavLink to="/services">Service</NavLink>
                <NavLink to="/">Home</NavLink>
            </div>
            <div className={style.social}>
                <h3>Social</h3>
                <ul>
                    <li><i className="fa-brands fa-facebook"></i>   Facebook</li>
                    <li><i className="fa-brands fa-instagram"></i>   Instagram</li>
                    <li><i className="fa-brands fa-youtube"></i>   Youtube</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer