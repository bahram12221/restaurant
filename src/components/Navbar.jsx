import style from "./navbar.module.css"
import logo from "../img/logo.png"
import { useLocation } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"

function Navbar(){
 
  const location = useLocation()
  const [show, setShow] = useState(false)
  const [close, setClose] = useState(false)


  useEffect(() => {
    setShow(false)
  }, [])

  const isPage = location.pathname === "/about" || location.pathname === "/services" || location.pathname === "/menu" || location.pathname === "/gallery" || location.pathname === "/testimonials" || location.pathname === "/contact"
    return(
        <div>
            <div className={`${style.parent} ${isPage ? style.bgColor : ""}`}>
              <img className={style.img} src={logo} alt="logo" />


              <div className={`${style.bars} ${show ? style.hidden : ""} ${close ? style.flex : ""}`}><i onClick={() => {setShow(true); setClose(false)}} className="fa-solid fa-bars"></i></div>
              <div className={`${style.xmark} ${show ? style.flex : ""} ${close ? style.hidden : ""}`}><i onClick={() => {setClose(true); setShow(false)}} className="fa-solid fa-xmark"></i></div>


          <ul className={`${style.ul} ${show ? style.flex : ""} ${close ? style.hidden : ""}`}>


            <li>
              <NavLink className={({ isActive }) => (isActive ? style.activeLink : "")} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? style.activeLink : "")} to="/about">About</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? style.activeLink : "")} to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? style.activeLink : "")} to="/menu">Menu</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? style.activeLink : "")} to="/gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? style.activeLink : "")} to="/book" >Reservations</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? style.activeLink : "")} to="/testimonials">Testimonials</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? style.activeLink : "")} to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        </div>
    )
}

export default Navbar