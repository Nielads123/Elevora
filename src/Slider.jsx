import React from 'react'
import Huge from "./assets/huge.png";
import Sphere from "./assets/sphere.png"
import Iphone from "./assets/iphone.png"
import SphereTwo from "./assets/sphere2.png"
import PurpleSphere from "./assets/purple.png"
import IphoneTwo from "./assets/iPhone 16 Pro Max.png"
import IphoneThree from "./assets/iphone3.png"
import PurpleTwo from "./assets/purple2.png"
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <div className='main-text'>
        <div className='text-1'>Just 4 simple steps away from </div>
        <div className='text-2'>joining Elevora Journey.</div>
      </div>

      <div className="slider-container">
        {/* Swiper replaces your old .slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className='slider'>
              <div className='slider-1'>
                <div className="slider-item-1">
                  <img src={Huge} width="40px" alt="" />
                  <div className="slider-text">
                    Our app connects you <br /> with trusted professionals <br /> 
                    to handle all your home <br /> maintenance needs.
                  </div>
                </div>

                <div className="slider-item-2">
                  <div className='profile'>Create your profile</div>
                  <div className='signup'>
                    Sign up and create your profile. <br />
                    Tell us a bit about your home and <br /> what services you need. 
                    This helps <br /> us match you with the best professionals.
                  </div>
                  <div className='slider-sphere'>
                    <img src={Sphere} width="100px" alt="" />
                  </div>
                  <div className="slider-number">01</div>
                  <div className='iphone'>
                    <img src={Iphone} width="49px" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 (example) */}
          <SwiperSlide>
            <div className='slider'>
              <div className='slider-12'>

                <div className="slider-item-3">
                  <div className='profile'>Create your profile</div>
                  <div className='signup'>
                    Sign up and create your profile. <br />
                    Tell us a bit about your home and <br /> what services you need. 
                    This helps <br /> us match you with the best professionals.
                  </div>
                  <div className='slider-sphere-2'>
                    <img src={SphereTwo} width="300px" alt="" />
                  </div>
                  <div className="slider-number">01</div>
                  <div className='iphone-1'>
                    <img src={IphoneTwo} width="200px" alt="" />
                  </div>
                </div>

                <div className="slider-item-11">
                  <img src={Huge} width="40px" alt="" />
                  <div className="slider-text">
                    Our app conne <br /> trusted profess 
                  </div>
                </div>

                
              </div>
            </div>
          </SwiperSlide>

            
          
         <SwiperSlide>
            <div className='slider'>
              <div className='slider-1'>
                <div className="slider-item-1">
                  <img src={Huge} width="40px" alt="" />
                  <div className="slider-text">
                    Our app connects you <br /> with trusted professionals <br /> 
                    to handle all your home <br /> maintenance needs.
                  </div>
                </div>

                <div className="slider-item-7">
                  <div className='profile'>Create your profile</div>
                  <div className='signup'>
                    Sign up and create your profile. <br />
                    Tell us a bit about your home and <br /> what services you need. 
                    This helps <br /> us match you with the best professionals.
                  </div>
                  <div className='slider-sphere'>
                    <img src={PurpleSphere} width="200px" alt="" />
                  </div>
                  <div className="slider-number">01</div>
                  <div className='iphoneThree'>
                    <img src={IphoneThree} width="130px" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className='slider'>
              <div className='slider-12'>

                <div className="slider-item-17">
                  <div className='profile'>Create your profile</div>
                  <div className='signup'>
                    Sign up and create your profile. <br />
                    Tell us a bit about your home and <br /> what services you need. 
                    This helps <br /> us match you with the best professionals.
                  </div>
                  <div className='slider-sphere-2'>
                    <img src={PurpleTwo} width="300px" alt="" />
                  </div>
                  <div className="slider-number">01</div>
                  <div className='iphone-1'>
                    <img src={IphoneTwo} width="200px" alt="" />
                  </div>
                </div>

                {/* <div className="slider-item-11">
                  <img src={Huge} width="40px" alt="" />
                  <div className="slider-text">
                    Our app conne <br /> trusted profess 
                  </div>
                </div> */}

                
              </div>
            </div>
          </SwiperSlide>

          {/* You can add Slide 3, Slide 4 here */}
        </Swiper>
      </div>

  
    </>
  )
}
