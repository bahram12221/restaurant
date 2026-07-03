import style from "./testimonialsComponent.module.css"
import { useState, useEffect } from "react"

function CustomerTestimonials(props){

    const [show, setShow] = useState(false)

    useEffect(() => {
        setShow(true)
    }, [])

    return(
        <div>
            <div className={`${style.container} ${show ? style.big : ""}`}>
                <div className={style.photoAndName}>
                    <img className={style.customerPhoto} src={props.img} alt="img" />
                    <div className={style.nameAndStars}>
                        <h4>{props.name}</h4>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                </div>
                <p>{props.testimonialsOfCustomer}</p>
            </div>
        </div>
    )
}


export default CustomerTestimonials