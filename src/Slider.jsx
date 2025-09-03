"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Assets (make sure filenames are lowercase & no spaces!)
import Huge from "./assets/huge.png";
import Sphere from "./assets/sphere.png";
import Iphone from "./assets/iphone.png";
import SphereTwo from "./assets/sphere2.png";
import PurpleSphere from "./assets/purple.png";
import IphoneTwo from "./assets/iphone16promax.png";
import IphoneThree from "./assets/iphone3.png";
import PurpleTwo from "./assets/purple2.png";

gsap.registerPlugin(ScrollTrigger);

export default function Slider() {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const section = sectionRef.current;
    if (!container || !section) return;

    const totalWidth = section.scrollWidth;
    const viewportWidth = window.innerWidth;

    gsap.to(section, {
      x: -(totalWidth - viewportWidth),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${totalWidth - viewportWidth}`,
        scrub: true,
        pin: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* Intro Text */}
      <div className="text-center mt-12">
        <div className="text-[40px] md:text-[50px] font-lato font-bold">
          Just 4 simple steps away from
        </div>
        <div className="text-[35px] md:text-[45px] font-lato font-bold -mt-4 text-black-600">
          joining Elevora Journey.
        </div>
      </div>

      {/* Horizontal scroll section */}
      <section ref={containerRef} className="relative h-screen overflow-hidden">
        <div ref={sectionRef} className="flex h-screen">
          {/* Slide 1 */}
          <div className="flex-shrink-0 w-screen h-screen flex items-center justify-center">
            <div className="flex items-center">
              {/* Left text */}
              <div className="ml-[100px]">
                <img src={Huge} width="40" alt="" />
                <p className="font-lato font-bold text-[28px] mt-4 leading-snug">
                  Our app connects you <br /> with trusted professionals <br />
                  to handle all your home <br /> maintenance needs.
                </p>
              </div>

              {/* Right box */}
              <div className="bg-[#F87B53] w-[700px] h-[350px] text-white rounded-tl-[50px] rounded-bl-[50px] ml-[150px] relative">
                <div className="font-montserrat text-[38px] font-semibold mt-[100px] ml-[80px]">
                  Create your profile
                </div>
                <p className="ml-[80px] text-[17px] font-lato mt-3 leading-relaxed">
                  Sign up and create your profile. <br />
                  Tell us a bit about your home and <br /> what services you need. 
                  This helps <br /> us match you with the best professionals.
                </p>

                {/* Decorations */}
                <div className="absolute top-0 right-0">
                  <img src={Sphere} width="100" alt="" />
                </div>
                <div className="absolute top-[10%] left-[2%] bg-white w-[50px] h-[50px] rounded-full text-[#F87B53] flex items-center justify-center font-bold">
                  01
                </div>
                <div className="absolute top-[10%] right-0">
                  <img src={Iphone} width="49" alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="flex-shrink-0 w-screen h-screen flex items-center justify-center">
            <div className="flex items-center">
              {/* Left box */}
              <div className="bg-[#F87B53] w-[800px] h-[350px] text-white rounded-[50px] relative">
                <div className="font-montserrat text-[38px] font-semibold mt-[100px] ml-[80px]">
                  Create your profile
                </div>
                <p className="ml-[80px] text-[17px] font-lato mt-3 leading-relaxed">
                  Sign up and create your profile. <br />
                  Tell us a bit about your home and <br /> what services you need. 
                  This helps <br /> us match you with the best professionals.
                </p>

                {/* Decorations */}
                <div className="absolute top-0 right-0">
                  <img src={SphereTwo} width="250" alt="" />
                </div>
                <div className="absolute top-[10%] left-[2%] bg-white w-[50px] h-[50px] rounded-full text-[#F87B53] flex items-center justify-center font-bold">
                  02
                </div>
                <div className="absolute top-[10%] right-[10%]">
                  <img src={IphoneTwo} width="196" alt="" />
                </div>
              </div>

              {/* Right text */}
              <div className="ml-[50px]">
                <img src={Huge} width="40" alt="" />
                <p className="font-lato font-bold text-[28px] mt-2">
                  Our app connects <br /> trusted professionals
                </p>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="flex-shrink-0 w-screen h-screen flex items-center justify-center">
            <div className="flex items-center">
              {/* Left text */}
              <div className="ml-[-70px]">
                <img src={Huge} width="40" alt="" />
                <p className="font-lato font-bold text-[28px] mt-4 leading-snug">
                  Our app connects you <br /> with trusted professionals <br />
                  to handle all your home <br /> maintenance needs.
                </p>
              </div>

              {/* Right box */}
              <div className="bg-[#4A306D] w-[700px] h-[350px] text-white rounded-tl-[50px] rounded-bl-[50px] ml-[150px] relative">
                <div className="font-montserrat text-[38px] font-semibold mt-[100px] ml-[80px]">
                  Manage your tasks
                </div>
                <p className="ml-[80px] text-[18px] font-lato mt-3 leading-relaxed">
                  Easily manage requests, track <br />
                  progress, and stay in control <br />
                  of all your home projects.
                </p>

                {/* Decorations */}
                <div className="absolute top-0 right-0">
                  <img src={PurpleSphere} width="200" alt="" />
                </div>
                <div className="absolute top-[10%] left-[2%] bg-white w-[50px] h-[50px] rounded-full text-[#F87B53] flex items-center justify-center font-bold">
                  03
                </div>
                <div className="absolute top-[15%] right-0">
                  <img src={IphoneThree} width="127" alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* Slide 4 */}
          <div className="flex-shrink-0 w-screen h-screen flex items-center justify-center">
            <div className="flex items-center">
              <div className="bg-[#4A306D] w-[800px] h-[350px] text-white rounded-[50px] relative">
                <div className="font-montserrat text-[38px] font-semibold mt-[100px] ml-[80px]">
                  Get matched with pros
                </div>
                <p className="ml-[80px] text-[18px] font-lato mt-3 leading-relaxed">
                  We’ll connect you with the best <br />
                  professionals for your needs.
                </p>

                {/* Decorations */}
                <div className="absolute top-0 right-0">
                  <img src={PurpleTwo} width="250" alt="" />
                </div>
                <div className="absolute top-[10%] left-[2%] bg-white w-[50px] h-[50px] rounded-full text-[#F87B53] flex items-center justify-center font-bold">
                  04
                </div>
                <div className="absolute top-[10%] right-[10%]">
                  <img src={IphoneTwo} width="196" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
  
    </>
  );
}
