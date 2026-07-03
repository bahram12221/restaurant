import Navbar from "../../components/Navbar";
import style from "./services.module.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Services() {
  const [show, setShow] = useState(false);
  const location = useLocation()

  const isHome = location.pathname === "/"

  useEffect(() => {
    setShow(true);
  });

  return (
    <div className={style.container}>

      <div className={`${style.services} ${isHome ? style.hidden : ""}`}>
        <div className={`${style.h1} ${show ? style.show : ""}`}>
          <h1 >Services</h1>
        </div>
      </div>
      <h1 className={style.exp}>Explore Our Services</h1>
      <div className={style.cards}>
        <div className={style.parent}>
            <div className={style.card}>
                <div><i className="fa-solid fa-utensils"></i></div>
          <h2>Dine In</h2>
          <p>
            Enjoy a warm and welcoming atmosphere with freshly prepared dishes, attentive service, and a comfortable dining experience.
          </p>
        </div>
        <div className={style.card}>
            <div><i className="fa-solid fa-mobile-screen"></i></div>
          <h2>Online Ordering</h2>
          <p>
            Browse our menu online, place your order easily, and enjoy delicious meals from wherever you are.
          </p>
        </div>
        <div className={style.card}>
            <div><i className="fa-solid fa-truck-fast"></i></div>
          <h2>Fast Delivery</h2>
          <p>
          Receive your favorite meals quickly and efficiently, prepared fresh and delivered directly to your location.
          </p>
        </div>
        <div className={style.card}>
            <div><i className="fa-solid fa-calendar-check"></i></div>
          <h2>Table Reservation</h2>
          <p>
           Reserve your table in advance and enjoy a smooth dining experience with minimal waiting time.
          </p>
        </div>
        <div className={style.card}>
            <div><i className="fa-solid fa-bell-concierge"></i></div>
          <h2>Catering Services</h2>
          <p>
           We provide customized catering solutions for family gatherings, business meetings, and special celebrations.
          </p>
        </div>
        <div className={style.card}>
            <div><i className="fa-solid fa-champagne-glasses"></i></div>
          <h2>Private Events</h2>
          <p>
            Host memorable birthdays, anniversaries, and private gatherings in an elegant and comfortable setting.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
