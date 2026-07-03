import food from "../img/food.png"
import About from "../pages/about/about";
import style from "./home.module.css"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Services from "../pages/services/services";
import Menu from "../pages/menu/menu";
import Gallery from "../pages/gallery/gallery";
import Testimonials from "../pages/testimonials/testimonials";
import Contact from "../pages/contact/contact";
import Footer from "../components/footer/footer";
function Home(){
const [show, setShow] = useState(false)

useEffect(() => {
    setShow(true)
},[])

    return(
        <div>
        <div className={style.container}>

            <div className={style.parent}>
                <div className={`${style.left} ${show ? style.show : ""}`}>
                    <h1 className={style.h1}>Enjoy Our Delicious Meal</h1>
                    <p className={style.p}>Fresh ingredients, Delicious Flavors, and unforgettable moments</p>
                    <Link to="/book"><p className={style.book}>BOOK A TABLE</p></Link>
                </div>
                <div className={style.right}>
                    <img className={style.img} src={food} alt="ff" />
                </div>
                
            </div>
        </div>
        <About />
        <Services />
        <Menu />
        <Gallery />
        <Testimonials />
        <Contact />
        
        </div>
       
    )
}

export default Home