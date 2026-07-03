import CustomerTestimonials from "../../components/testimonialsConponent/testimonialsComponent";
import style from "./testimonials.module.css";
import { useState, useEffect } from "react";
import customer1 from "./img/customer1.jpg";
import customer2 from "./img/customer2.jpg";
import customer3 from "./img/customer3.jpg";
import customer4 from "./img/customer4.jpg";
import customer5 from "./img/customer5.jpg";
import customer6 from "./img/customer6.jpg";
import customer7 from "./img/customer7.jpg";
import customer8 from "./img/customer8.jpg";
import { useLocation } from "react-router-dom";

function Testimonials() {
  const [show, setShow] = useState(false);
  const location = useLocation()
  const isHome = location.pathname === "/"

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className={style.container}>
      <div className={`${style.testimonials} ${isHome ? style.hidden : ""}`}>
        <div className={`${style.h1} ${show ? style.showText : ""}`}>
          <h1>Customer Testimonials</h1>
        </div>
      </div>
      <h1 className={`${style.hTestimonials} ${isHome ? style.block : ""}`}>Customer Testimonials</h1>
      <h3 className={style.explanaton}>
        Hear what our valued customers have to say about their dining
        experience, food quality, and exceptional service.
      </h3>

      <div className={style.cards}>
        <CustomerTestimonials
          name=" Emma Johnson"
          img={customer1}
          testimonialsOfCustomer="The food was fresh, tasty, and beautifully served. I really enjoyed the experience."
        />
        <CustomerTestimonials
          name=" John Smith"
          img={customer2}
          testimonialsOfCustomer="Excellent service and very friendly staff. The atmosphere was perfect for dinner."
        />
        <CustomerTestimonials
          name=" Michael Brown"
          img={customer3}
          testimonialsOfCustomer="One of the best restaurants I’ve visited. Everything was clean and well organized."
        />
        <CustomerTestimonials
          name=" David Miller"
          img={customer4}
          testimonialsOfCustomer="Fast service and delicious meals. I will definitely come back again."
        />
        <CustomerTestimonials
          name="Sarah Williams"
          img={customer5}
          testimonialsOfCustomer="The flavors were amazing and the presentation was top-notch."
        />
        <CustomerTestimonials
          name=" Daniel Wilson"
          img={customer6}
          testimonialsOfCustomer="Great place for family dinner. Everyone enjoyed the food."
        />
        <CustomerTestimonials
          name=" Sophia Davis"
          img={customer7}
          testimonialsOfCustomer="Affordable prices with high-quality food. Highly recommended!"
        />
        <CustomerTestimonials
          name="Olivia Taylor"
          img={customer8}
          testimonialsOfCustomer="Perfect experience from start to finish. Loved the dessert menu!"
        />
      </div>
    </div>
  );
}

export default Testimonials;
