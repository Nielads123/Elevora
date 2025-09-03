import React, { useEffect } from "react";
import Background from "./assets/bg.png";
import Appleicon from "./assets/appleicon.svg";
import Playstore from "./assets/playstore.svg";
import "./App.css";
import { motion } from "framer-motion";
// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

export default function TopSection() {
  // Initialize AOS
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
    <>
      <div className="img-bg">
        <div >
         <motion.div   
          initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              y: { duration: 1.3, ease: "easeOut" },
              
            }}>

             <div
          
            className="top-1"
          >
            Find top rated certified
          </div>

          <div className="top-2">props in your area</div>

         </motion.div>

          <div className="top-3" data-aos="zoom-in" >
            Seamless care with cutting-edge solutions.
          </div>
        </div>

        {/* Store Buttons (with re-animating effects) */}
        <div className="store gap-10 my-[30px]">
          <div className="store-1"  data-aos="fade-right" data-aos-delay="600" >
            <div>
              <img width="40px" src={Appleicon} alt="" />
            </div>
            <div className="pl-2">
              <div className="text-[12px] font-semibold text-[#4A306D] mb-[-6px] font-Montserrat">
                Download on the
              </div>
              <div className="text-[#4A306D] text-[18px] font-Montserrat font-semibold">
                App Store
              </div>
            </div>
          </div>

          <div className="store-2" data-aos="fade-left" data-aos-delay="600">
            <div>
              <img width="40px" src={Playstore} alt="" />
            </div>
            <div className="pl-2">
              <div className="text-[12px] font-semibold text-[#4A306D] mb-[-6px] font-Montserrat">
                Get on the
              </div>
              <div className="text-[#4A306D] text-[18px] font-Montserrat font-semibold">
                Google Play
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
