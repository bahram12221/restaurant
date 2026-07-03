import style from "./about.module.css";
import img1 from "../../img/1.png"
import img2 from "../../img/2.png"
import img3 from "../../img/3.png"
import img4 from "../../img/4.png"
import { useState, useEffect } from "react";
import cheff1 from '../../img/cheff1.png'
import cheff2 from '../../img/cheff2.png'
import cheff3 from '../../img/cheff3.png'
import { useLocation } from "react-router-dom";


function About() {
const [show, setShow] = useState(false)
const location = useLocation()
const isHome = location.pathname === '/'



useEffect(() => {
  setShow(true)
}, [])


  return (
    <div className={style.container}>
      <div className={`${style.aboutUs} ${isHome ? style.hidden : ""}`}>
            <div className={`${style.h1} ${show ? style.show : ""}`}><h1>About Us</h1></div>
      </div>
      <div className={style.parent}>
         <h1 className={style.welcome}>Welcome To Restaurant</h1>
        <div className={style.introdaction}>
            <h2 className={style.who}>Who We Are?</h2>
          <p className={style.introText}>
            We are a family-owned restaurant dedicated to serving fresh and
            delicious meals since 2015.
          </p> 
        </div>
        <div className={style.story}>
            <h2 className={style.ourStory}>Our Story</h2>
            <div className={style.imgText}>
                <div className={style.imgs}>
                    <img className={`${style.img} ${show ? style.big : ""}`} src={img1} alt="" />
                    <img className={`${style.img} ${show ? style.big : ""}`} src={img2} alt="" />
                    <img className={`${style.img} ${show ? style.big : ""}`} src={img3} alt="" />
                    <img className={`${style.img} ${show ? style.big : ""}`} src={img4} alt="" />
                </div>
                 <p className={style.text}>Our journey began with a passion for bringing authentic flavors to our community.</p>
            </div>
        </div>
        <div className={style.cards}>
          <div className={style.card1}>
            <h1>+10</h1>
            <h4>Years Experience</h4>
          </div>
          <div className={style.card2}>
            <h1>+50</h1>
            <h4>Menu Items</h4>
          </div>
          <div className={style.card3}>
            <h1>+5000</h1>
            <h4>Huppy Customers</h4>
          </div>
          <div className={style.card4}>
            <h1>+20</h1>
            <h4>Professinal Staff</h4>
          </div>
        </div>
        <div className={style.chefs}>
          <h1>Our Master Chefs</h1>
          <div className={style.chefsParent}>
            <div className={style.one}>
              <img src={cheff1} alt="" />
              <h2>Full Name</h2>
              <p>Gordon Ramsay</p>
              <div className={style.icons}>
                <i class="fa-brands fa-twitter"></i>
               <i class="fa-brands fa-instagram"></i>
               <i class="fa-brands fa-linkedin"></i>
               </div>
            </div>
            <div className={style.two}>
              <img src={cheff2} alt="" />
              <h2>Full Name</h2>
              <p>Guy Fieri</p>
               <div className={style.icons}>
                <i class="fa-brands fa-twitter"></i>
               <i class="fa-brands fa-instagram"></i>
               <i class="fa-brands fa-linkedin"></i>
               </div>
            </div>
            <div className={style.three}>
              <img src={cheff3} alt="" />
              <h2>Full Name</h2>
              <p>Alain Ducasse</p>
              <div className={style.icons}>
                <i class="fa-brands fa-twitter"></i>
               <i class="fa-brands fa-instagram"></i>
               <i class="fa-brands fa-linkedin"></i>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




export default About