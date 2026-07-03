import style from "./gallery.module.css"
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";


function Gallery() {
     const [show, setShow] = useState(false);
     const location = useLocation()
     const isHome = location.pathname === "/"

    const images = []
    for(let i = 1; i <= 9; i++){
      images.push(require(`./galleryImgs/gallery${i}.jpg`))
    }


     useEffect(() => {
        setShow(true)
     }, [])

  return (
    <div className={style.container}>
      <h1 className={`${style.ourGallery} ${isHome ? style.block : ""}`}>Our Gallery</h1>
      <div className={`${style.gallery} ${isHome ? style.hidden : ""}`}>
        <div className={`${style.h1} ${show ? style.showText : ""}`}>
          <h1>Our Gallery</h1>
        </div>
      </div>
      <div className={style.photos}>
        {images.map((img, index) => (
          <img key={index} src={img} alt="gallery" />
        ))}
      </div>
    </div>
  );
}


export default Gallery;