import React, { useEffect } from "react";
import Box from "./assets/box.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BoxSection() {
  useEffect(() => {
    AOS.init({
      duration: 1200,    // animation duration
      easing: "ease-out-cubic", 
      once: false,       // animate every time you scroll back
    });
  }, []);

  return (
    <div className="img-bg-1" data-aos="fade-up">
      <div className="box-1">
        <img src={Box} width="500px" alt="Box" />
      </div>
    </div>
  );
}
