import React, {useState, useEffect} from "react";
import "./NavB.css";



function NavB() {
    const [show, handleShow] = useState(false);
    
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
         });
         return () => {
             window.removeEventListener("scroll");
         };
    }, []);

  return (
    <div className={`navBar ${show && "nav_black"}`}>
        <img   
            className='netofliz_logo'
            src='./NTO.png'
            alt= 'netofliz logo'
        />

        <img 
            className='avatar_logoNav'
            src='./avatar.png'
            alt='avatar logo'
        /> 
    </div>
  );
}

export default NavB;