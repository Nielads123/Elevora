import React, { useEffect } from "react";
import Hammer  from "./assets/hammer.png"
import Tool from "./assets/tools.png"
import paint from "./assets/paint.png"
import AOS from "aos";
import "aos/dist/aos.css";
export default function Tools() {
   useEffect(() => {
       AOS.init({
         duration: 1500,
         once: false,
         easing: "ease-out-cubic",
       });
   
       // Refresh on scroll to make sure it keeps working
       AOS.refresh();
     }, []);
  return (
    <div>
     <div className='hammer'>
         <img src={Hammer} width="400px" alt=""  />
     </div>

       <div className='Tool'>
         <img src={Tool} width="400px" alt="" />
     </div>

      <div className='Paint'>
         <img src={paint} width="400px" alt="" />
     </div>

      <div className='Tool-1' data-aos="fade-up">
         <img src={Tool} width="400px" alt="" />
     </div>

    </div>
  )
}
