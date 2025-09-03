import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Install from "./assets/install.png";
import woman from "./assets/woman.png";
import handy from "./assets/handy.png";
import man from "./assets/man.png";
import hammerimg from "./assets/hammerimg.png";
import sprinkler from "./assets/sprinkler.png";
import flower from "./assets/flower.png";
import maid from "./assets/maid.png";
import clock from "./assets/clock.png";
import rate from "./assets/rate.png";
import plum from "./assets/plum.png";
import PhoneTwo from "./assets/big iphone.png";
import Appleicon from "./assets/whiteappleicon.png";
import Playstore from "./assets/whiteplaystoreicon.png";
import Orange from "./assets/orange.png";
import Yellow from "./assets/yellow2.png";
import pink from "./assets/second orange.png";
import purple from "./assets/purpletwo.png";
import DeepPurple from "./assets/darkpurple.png";
import lightpurple from "./assets/purpleone.png";

gsap.registerPlugin(ScrollTrigger);

export default function Clickaway() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
gsap.fromTo(
  ".flip-item",
  {
    opacity: 0,
    scale: 0.5,
    rotateX: 0,
    transformOrigin: "center center",
  },
  {
    opacity: 1,
    scale: 1,
    rotateX: 360, // just 1 flip
    duration: 1.5,
    ease: "power2.out", // smooth in and out
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 80%",
      toggleActions: "restart none none restart",
    },
  }
);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="main-fix" ref={sectionRef}>
      <div className="fixed">
        <div className="fixed-text">Fixing made easy,</div>
        <div className="fixed-text-1">one clickaway.</div>
        <div className="fixed-text-2">
          From seasonal specials to bundled packages, we’ve <br />
          got everything you need to keep your home in tip- <br />
          top shape without breaking the bank.
        </div>

        {/* install */}
        <div className="flip-item fixed-text-3 inline-block">
          <img src={Install} width="150px" alt="" />
          <div className="fixed-install">
            Install a<div className="mt-[-10px]">shower</div>
          </div>
          <div className="fixed-amount">Average $8,615</div>
        </div>

        {/* woman */}
        <div className="flip-item woman inline-block">
          <img src={woman} width="100px" alt="" />
        </div>

        {/* handy */}
        <div className="flip-item handy inline-block">
          <img src={handy} width="150px" alt="" />
          <div className="handy-install">
            Hire a<div className="mt-[-10px]">handyman</div>
          </div>
          <div className="fixed-amount">Average $755</div>
        </div>

        {/* man */}
        <div className="flip-item man inline-block">
          <img src={man} width="100px" alt="" />
        </div>

        {/* hammer */}
        <div className="flip-item hammer-img inline-block">
          <img src={hammerimg} width="100px" alt="" />
        </div>

        {/* sprinkler */}
        <div className="flip-item sprink inline-block">
          <img src={sprinkler} width="150px" alt="" />
          <div className="handy-install">
            Install a<div className="mt-[-10px]">sprinkler sys</div>
          </div>
          <div className="fixed-amount">Average $755</div>
        </div>

        {/* flower */}
        <div className="flip-item flower inline-block">
          <img src={flower} width="100px" alt="" />
        </div>

        {/* maid */}
        <div className="flip-item maid inline-block">
          <img src={maid} width="150px" alt="" />
          <div className="maid-install">
            Hire a<div className="mt-[-10px]">maid</div>
          </div>
          <div className="fixed-amount">Average $956</div>
        </div>
      </div>

      {/* headings */}
      <div className="text-[40px] mt-[350px] text-white font-semibold font-Lato text-center items-center">
        Over a 100 repairs services to fix it
      </div>
      <div className="text-[40px] mt-[-20px] text-white font-semibold font-Lato text-center items-center">
        right, right now!
      </div>

      {/* boxes */}
      <div className="main-box gap-x-14">
        <div className="box-1-main">
          <div className="box-img">
            <img src={clock} width="100px" alt="clock" />
          </div>
          <div className="box-1-main-textOne">
            Expert technicians <br /> available 24/7 for all <br /> your repair
            needs.
          </div>
          <div className="box-1-main-textTwo">
            We guarantee prompt, reliable <br /> service with a smile.
          </div>
        </div>

        <div className="box-1-main">
          <div className="box-img">
            <img src={rate} width="100px" alt="rate" />
          </div>
          <div className="box-1-main-textOne">
            Affordable rates with <br /> transparent pricing, no <br /> hidden
            fees.
          </div>
          <div className="box-1-main-textTwo">
            Quality workmanship backed by <br /> our satisfaction guarantee.
          </div>
        </div>

        <div className="box-1-main">
          <div className="box-img">
            <img src={plum} width="100px" alt="plum" />
          </div>
          <div className="box-1-main-textOne">
            From plumbing to <br /> eletrical, we’ve got all <br /> your repairs
            covered.
          </div>
          <div className="box-1-main-textTwo">
            Trustworthy professionals ready <br /> to tackle only job, big or
            small.
          </div>
        </div>
      </div>

      {/* card */}
      <div className="card">
        <div className="card-one">
          <img src={PhoneTwo} width="200px" alt="" />
        </div>

        <div className="card-two">
          <div className="one">Fixed made easy,</div>
          <div className="two"> one click away.</div>
          <div className="three">
            From seasonal specials to bundled <br /> packages, we’ve got
            everything you <br /> need to keep your home in tip-top <br /> shape
            without breaking the bank.
          </div>

          {/* store */}
          <div className="store ml-[-80px] gap-7 my-[30px]">
            <div className="store-11 flex">
              <img width="30px" src={Appleicon} alt="" />
              <div className="pl-2">
                <div className="text-[12px] font-semibold text-[white] mb-[-6px] font-Montserrat">
                  Download on the
                </div>
                <div className="text-[white] text-[16px] font-Montserrat font-semibold">
                  App Store
                </div>
              </div>
            </div>

            <div className="store-12 flex">
              <img width="30px" src={Playstore} alt="" />
              <div className="pl-2">
                <div className="text-[12px] font-semibold text-[white] mb-[-6px] font-Montserrat">
                  Get on the
                </div>
                <div className="text-[white] text-[16px] font-Montserrat font-semibold">
                  Google Play
                </div>
              </div>
            </div>
          </div>

          <div className="yellow">
            <img src={Yellow} width="115px" alt="" />
          </div>
          <div className="pink">
            <img src={pink} width="110px" alt="" />
          </div>
          <div className="purpleimg">
            <img src={purple} width="70px" alt="" />
          </div>
          <div className="DeepPurple">
            <img src={DeepPurple} width="140px" alt="" />
          </div>
          <div className="Orange">
            <img src={Orange} width="110px" alt="" />
          </div>
          <div className="lightpurple">
            <img src={lightpurple} width="70px" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
