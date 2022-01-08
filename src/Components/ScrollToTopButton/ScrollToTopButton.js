import React, { useEffect, useState } from "react";
import "./ScrollToTopButton.css";
import arrowUp from "../../images/arrow-up.svg";

const ScrollToTopButton = (props) => {
  //set the state for when the button starts to appear

  const [showButton, setShowButton] = useState(true);

  //useEffect to trigger the method - work in progress
  useEffect(() => {
   /*  window.addEventListener("scroll", () => { */
     /*  if (window.pageYOffset > 300) { */
        setShowButton(true);
       /*  document.getElementById("my-btn").style.opacity = "1"; */
      /* } else {
        setShowButton(false);
        document.getElementById("my-btn").style.opacity = "0";
      } */
    },[]);


  

  //scrolling to the top function
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {}
      {showButton && (
        <button onClick={scrollUp} className="to-Top" id="my-btn">
          <img src={arrowUp} alt="arrow-up" className="arrow-up" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
