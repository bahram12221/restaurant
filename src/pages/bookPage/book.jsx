import style from "./book.module.css";
import emailjs from "@emailjs/browser"
import { useForm } from "react-hook-form"

function Book() {

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
      "template_5o6gook",
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

    <div style={{paddingTop:"100px"}} className={style.container}>
          <h1 className={style.h1}>Book a Table</h1>
      <div className={style.parent}>
        <form onSubmit={handleSubmit(sendEmail)} className={style.getInfo}>
            <p>Full Name <i className="fa-solid fa-user"></i></p>
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
           {errors.name && (
            <p style={{color:"red", fontSize:"14px"}}>{errors.name.message}</p>
           )}
          
          <p>Your Number <i className="fa-solid fa-phone"></i></p>
          <input 
          type="text"
          placeholder="Enter Your Number"
          {...register("number", {
            required: "Number is required",
            minLength: {
              value: 10,
              message: "The number is not valid"
            },
            pattern: {
              value: /^[0-9]+$/,
              message: "Please enter just number"
            }
          })}
          />
          {errors.number && (
            <p style={{color:"red", fontSize:"14px"}}>{errors.number.message}</p>
           )}
          
          <p>Date <i className="fa-solid fa-calendar-days"></i></p>
          <input
          type="date"
          {...register("date", {
            required: "Date is required"
          })}
          />
          {errors.date && (
            <p style={{color:"red", fontSize:"14px"}}>{errors.date.message}</p>
           )}
          <p>Time <i className="fa-solid fa-clock"></i></p>
          <input 
          type="time"
          {...register("time", {
            required: "Time is required"
           })}
          />
          {errors.time && (
            <p style={{color:"red", fontSize:"14px"}}>{errors.time.message}</p>
           )}
          <p>Guests <i className="fa-solid fa-users"></i></p>
          <input
           type="text"
           placeholder="Number of guests"
           {...register("guests", {
            required: "Number of guests is required",
            min: {
              value: 1,
              message: "minimum 1 guests"
            },
            max: {
              value: 20,
              message: "Maximum 20 guests"
            }
           })}
           />
           {errors.guests && (
            <p style={{color:"red", fontSize:"14px"}}>{errors.guests.message}</p>
           )}
          <p>message <i className="fa-solid fa-comment"></i></p>
          <input 
          type="text"
          placeholder="Enter your message (Optional)"
          {...register("message")}
          />
          <button type="submit" disabled={!isValid}>Reserve Table</button>
        </form>
        <div className={style.info}>
        
          Reserve your table and enjoy a comfortable dining experience without
          waiting.<br /><br /> At our restaurant, we believe your time is as important as
          your meal.<br /><br /> That’s why we make it easy for you to book a table in
          advance and enjoy a smooth, relaxing visit with us.<br /><br /> Whether you’re
          planning a family dinner, a romantic evening, or a casual meal with
          friends, we are ready to welcome you.<br /><br /> Simply choose your preferred
          date, time, and number of guests, and we will prepare everything for
          you. We look forward to serving you and making your experience
          memorable.
        </div>
      </div>
    </div>
  );
}


export default Book         








// function red(){
//     setIsRed(true)
//     setIsGreen(false)
//     setIsBlue(false)
    
    
//   }
//   function green(){
//     setIsGreen(true)
//     setIsBlue(false)
//     setIsRed(false)
    
//   }
//   function blue(){
//     setIsBlue(true)
//     setIsGreen(false)
//     setIsRed(false)
//   }
//    const [isRed, setIsRed] = useState(false)
//   const [isGreen, setIsGreen] = useState(false)
//   const [isBlue, setIsBlue] = useState(false)