import style from "./menu.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";


function Menu() {
  const [activeModal, setActiveModal] = useState(false);
  const location = useLocation()
  const isHome = location.pathname === "/"
  
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [closeModal, setCloseModal] = useState(false);
  const [successfully, setSuccessfully] = useState(false);

  useEffect(() => {
    setShow(true);
    setShowModal(true);
  }, []);

  const [breakfastCard, setBreakfastCard] = useState([]);
  const [launch, setLaunch] = useState([]);
  const [diner, setDiner] = useState([]);

  const [breakfast, setBreakfast] = useState(false);
  const [lanch, setLanch] = useState(false);
  const [dinner, setDinner] = useState(false);

  const [selectCard, setSelectCard] = useState(null);

  function Breakfast() {
    setBreakfast(true);
    setLanch(false);
    setDinner(false);
  }
  function Lanch() {
    setLanch(true);
    setBreakfast(false);
    setDinner(false);
  }
  function Dinner() {
    setDinner(true);
    setBreakfast(false);
    setLanch(false);
  }

  useEffect(() => {
    axios.get("http://localhost:1001/foods").then((result) => {
      setBreakfastCard(result.data);
    });
    axios.get("http://localhost:10000/lanch").then((launch) => {
      setLaunch(launch.data);
    });
    axios.get("http://localhost:2000/dinner").then((dinner) => {
      setDiner(dinner.data);
    });
  }, []);

  const [quantity, setQuantity] = useState(1);
  function addQuantity() {
    setQuantity(quantity + 1);
  }
  function removeQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div  className={style.container}>
      {selectCard && (
        <div
          key={selectCard.id}
          className={`${style.modal} ${showModal ? style.showmodal : ""}  ${closeModal ? style.hidden : ""} ${successfully ? style.hidden : ""}`}
        >
          <div className={style.imgAndMark}>
            <div
              className={style.imgg}
              style={{ backgroundImage: `url(${selectCard.imgUrl})` }}
            >
              <i
                onClick={() => {
                  setCloseModal(true);
                }}
                className="fa-solid fa-xmark"
              ></i>
            </div>
          </div>

          <h2>{selectCard.foodName}</h2>
          <h3>{selectCard.foodInfo}</h3>
          <p>Quantity</p>
          <div className={style.quantity}>
            <button onClick={removeQuantity}>-</button>
            <div className={style.totlePrice}>
              <p>{quantity}</p>
              <p>${quantity * selectCard.price}</p>
            </div>
            <button onClick={addQuantity}>+</button>
          </div>
          <button
            onClick={() => {
              setSuccessfully(true);
            }}
            className={style.order}
          >
            Order
          </button>
        </div>
      )}
      <p
        className={`${style.successfullyMessage} ${successfully ? style.showMessage : ""} ${successfully ? style.hiddenMessage : ""}`}
      >
        Order Was Successfully
      </p>
      <div className={`${style.menu} ${isHome ? style.hidden : ""}`}>
        <div className={`${style.h1} ${show ? style.showText : ""}`}>
          <h1>Our Menu</h1>
        </div>
      </div>
      <div className={style.menuContainer}>
        <br />
        <br />
        <br />
        <div className={style.menuNav}>
          <ul className={style.menuUl}>
            <li className={style.ech1} onClick={Breakfast}>
              <i class="fa-solid fa-mug-saucer"></i>Breakfast
            </li>
            <li className={style.ech2} onClick={Lanch}>
              <i class="fa-solid fa-burger"></i>Lanch
            </li>
            <li className={style.ech3} onClick={Dinner}>
              <i className="fa-solid fa-utensils"></i>Dinner
            </li>
          </ul>
        </div>
        <br />
        <br />
        <div
          className={`${style.breakfast} ${breakfast ? style.show : ""} ${lanch ? style.hidden : ""} ${dinner ? style.hidden : ""}`}
        >
          {breakfastCard.map((food) => (
            <div key={food.id} className={style.card}>
              <img src={food.imgUrl} alt="breakfast" />
              <div className={style.info}>
                <div className={style.namePrice}>
                  <h2>{food.foodName}</h2>
                  <h3>${food.price}</h3>
                </div>
                <p>{food.foodInfo}</p>
                <button
                  onClick={() => {
                    setActiveModal(true);
                    setSelectCard(food);
                    setCloseModal(false);
                    setSuccessfully(false);
                  }}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`${style.lanch} ${lanch ? style.show : ""} ${breakfast ? style.hidden : ""} ${dinner ? style.hidden : ""}`}
        >
          {launch.map((food) => (
            <div onClick={setActiveModal(true)} key={food.id} className={style.card}>
              <img src={food.imgUrl} alt="lunch" />
              <div className={style.info}>
                <div className={style.namePrice}>
                  <h2>{food.foodName}</h2>
                  <h3>${food.price}</h3>
                </div>
                <p>{food.foodInfo}</p>
                <button
                  onClick={() => {
                    setActiveModal(true);
                    setSelectCard(food);
                    setCloseModal(false);
                    setSuccessfully(false);
                  }}
                >Order Now</button>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`${style.dinner} ${dinner ? style.show : ""} ${breakfast ? style.hidden : ""} ${lanch ? style.hidden : ""}`}
        >
          {diner.map((food) => (
            <div onClick={setActiveModal(true)} key={food.id} className={style.card}>
              <img src={food.imgUrl} alt="dinner" />
              <div className={style.info}>
                <div className={style.namePrice}>
                  <h2>{food.foodName}</h2>
                  <h3>{food.price}</h3>
                </div>
                <p>${food.foodInfo}</p>
                <button
                  onClick={() => {
                    setActiveModal(true);
                    setSelectCard(food);
                    setCloseModal(false);
                    setSuccessfully(false);
                  }}
                >Order Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
