import style from "./contact.module.css";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser"
import { useForm } from "react-hook-form"
import { useLocation } from "react-router-dom";

function Contact() {
  const [show, setShow] = useState(false);
  const location = useLocation()
  const isHome = location.pathname === "/"
  useEffect(() => {
    setShow(true);
  }, [])


  const {
      register,
      handleSubmit,
      formState: {errors, isValid},
      reset,
    } = useForm({
      mode: "onChange"
    })

  function sendEmail(data) {

    emailjs.send(
      "service_i5i80na",
      "template_2sji2h9",
       data,
      "U5lhFdQ2eB8RJ06ql"
    ).then(() => { 
      alert("sended message successfully")
      reset();
    }).catch((error) => {
      console.log(error);
      alert("error")
    })
  }

  return (
    <div className={style.containerr}>
        
      <div className={`${style.contact} ${isHome ? style.hidden : ""}`}>
        <div className={`${style.h1} ${show ? style.showText : ""}`}>
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className={`${style.hContactParent} ${isHome ? style.block : ""}`}><h1 className={style.hContact}>Contact Us</h1></div>
      <div className={style.container}>
        <form onSubmit={handleSubmit(sendEmail)} className={style.conatctform}>
            <h1>Send Message</h1>
            <input 
            type="text" 
            placeholder="Enter Your Name"
            {...register("name", {
                required: "Name is required",
                minLength: {
                    value: 3,
                    message: "Name must be at 3 characters"
                }
            })}
            />
            {errors.name &&(
                <p style={{color: "red", fontSize: "14px"}}>{errors.name.message}</p>
            )}
            <input 
            type="email" 
            placeholder="Enter Your Email"
            {...register("email",{
                required: "Email is required",
                minLength: {
                    value: 10,
                    message: "Email is not valid"
                }
            })}
            />
            {errors.email && (
                <p style={{color: 'red', fontSize: '14px'}}>{errors.email.message}</p>
            )}
            <textarea 
             placeholder="subject"
             {...register("subject", {
                required: "Subject is required",
                minLength: {
                    value: 5,
                    message: "Subject must be at 5 characters"
                }
             })}
             ></textarea>
             {errors.subject && (
                <p style={{color: "red", fontSize: "14px"}}>{errors.subject.message}</p>
             )}
            <button type="submit">Send Message</button>
        </form>
        <div className={style.contactInfo}>
            <div className={style.address}>
                <i className="fa-solid fa-location-dot"></i>
                <p>123 Restaurant Street, Downtown</p>
            </div>
            <div className={style.phoneNumber}>
                <i className="fa-solid fa-phone"></i>
                <p>+93734 567 890</p>
            </div>
            <div className={style.email}>
              <i className="fa-solid fa-envelope"></i>
              <p>restaurant12212@gmail.com</p>
            </div>
            <div className={style.map}>
                <img src="https://biographypoints.com/bio_content/uploads/2023/10/Dasht-Kharan.webp" alt="map" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
