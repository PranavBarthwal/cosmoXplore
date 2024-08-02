import React, { useState, useEffect } from "react";
import Styles from "./ScrollToTop.module.css";
import { TbArrowBigUpLineFilled } from "react-icons/tb";

function ScrollToTop() {
  const [isHover, setIsHover] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        // adjust the scroll amount as needed
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      {isScroll && (
        <div
          className={Styles["btn"]}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <button className={Styles["scroll-btn"]} onClick={handleClick}>
            <TbArrowBigUpLineFilled
              size={25}
              color={isHover ? "white" : "#8400ff"}
            />
          </button>
        </div>
      )}
    </>
  );
}

export default ScrollToTop;
