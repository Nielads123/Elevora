import React from 'react'
import Install from "./assets/install.png"
import woman from "./assets/woman.png"
import handy from "./assets/handy.png"
import man from "./assets/man.png"
import hammerimg from "./assets/hammerimg.png"
import sprinkler from "./assets/sprinkler.png"
import flower from "./assets/flower.png"
import maid from "./assets/maid.png"
import clock from "./assets/clock.png"
import rate from "./assets/rate.png"
import plum from "./assets/plum.png"
import PhoneTwo from "./assets/big iphone.png"
import Appleicon from "./assets/whiteappleicon.png"
import Playstore from "./assets/whiteplaystoreicon.png"
import Orange from "./assets/orange.png"
import Yellow from "./assets/yellow2.png"
import pink from "./assets/second orange.png"
import purple from "./assets/purpletwo.png"
import DeepPurple from "./assets/darkpurple.png"
import lightpurple from "./assets/purpleone.png"
export default function clickaway() {
  return (
    <>
       <div className='main-fix'>
         <div className='fixed'>
            <div className='fixed-text'>Fixing made easy,</div>
            <div className='fixed-text-1'>one clickaway.</div>
            <div className='fixed-text-2'>
                <div>From seasonal specials to bundled packages, we’ve <br /> got everything you need to keep your home in tip- <br /> top shape without breaking the bank.</div>
            </div>

                        {/* install */}
            <div className='fixed-text-3'>
                <img src={Install} width="150px" alt="" />
                <div className='fixed-install'>Install a
                    <div className='mt-[-10px] '>shower</div>
                </div>
                <div className='fixed-amount'>Average $8,615</div>
                
                </div>
                {/* install */}

               {/* woman */}
            <div className='woman'>
                <img src={woman} width="100px" alt="" />
            </div>

                 {/* woman */}

            {/* handy */}
              <div className='handy'>
                <img src={handy} width="150px" alt="" />
                <div className='handy-install'>Hire a
                    <div className='mt-[-10px] '>handyman</div>
                </div>
                <div className='fixed-amount'>Average $755</div>
                
                </div>

                   {/* handy */}

                   {/* man */}

                    <div className='man'>
                <img src={man} width="100px" alt="" />
            </div>

              {/* man */}

              {/* hammer img */}

                <div className='hammer-img'>
                <img src={hammerimg} width="100px" alt="" />
            </div>

             {/* hammer img */}


              {/* sprinkler */}
              <div className='sprink'>
                <img src={sprinkler} width="150px" alt="" />
                <div className='handy-install'>Install a
                    <div className='mt-[-10px] '>sprinkler sys</div>
                </div>
                <div className='fixed-amount'>Average $755</div>
                
                </div>

                   {/* sprinkler */}

                  {/* flower img */}

                <div className='flower'>
                <img src={flower} width="100px" alt="" />
            </div>

             {/* flowee img */}

             {/* hire */}
              <div className='maid'>
                <img src={maid} width="150px" alt="" />
                <div className='maid-install'>Hire a
                    <div className='mt-[-10px] '>maid</div>
                </div>
                <div className='fixed-amount'>Average $956</div>
                
                </div>
                  {/* hire */}

        </div>

         <div className='text-[40px] mt-[350px] text-white font-semibold font-Lato  text-center items-center'>Over a 100 repairs services to fix it</div>
          <div className='text-[40px] mt-[-20px] text-white font-semibold font-Lato  text-center items-center'>right, right now!</div>
      

      {/* boxes */}
                <div className="main-box gap-x-14">
                   {/* box 1 */}

                    <div className="box-1-main">
                        <div className='box-img'><img src={clock} width="100px" alt="clock" /></div>
                        <div className='box-1-main-textOne'>Expert technicians <br /> available  24/7 for all <br /> your repair needs.</div>
                        <div className='box-1-main-textTwo'>We guarantee prompt, reliable <br /> service with a smile.</div>
                    </div>

                      {/* box 1 */}

                         {/* box 2 */}

                    <div className="box-1-main">
                        <div className='box-img'><img src={rate} width="100px" alt="clock" /></div>
                        <div className='box-1-main-textOne'>Affordable rates with <br /> transparent pricing, no <br /> hidden fees.</div>
                        <div className='box-1-main-textTwo'>Quality workmanship backed by <br /> our satisfaction guarantee.</div>
                    </div>

                      {/* box 2 */}

                         {/* box 3 */}

                    <div className="box-1-main">
                        <div className='box-img'><img src={plum} width="100px" alt="clock" /></div>
                        <div className='box-1-main-textOne'>From plumbing to <br /> eletrical, we’ve got all <br /> your repairs covered.</div>
                        <div className='box-1-main-textTwo'>Trustworthy professionals ready <br /> to tackle only job, big or small.</div>
                    </div>

                      {/* box 3 */}
                </div>
      {/* boxes */}

      <div className="card">
        <div className='card-one'>
            <img src={PhoneTwo} width="200px" alt="" />
        </div>

        <div className="card-two">
          <div className='one'>Fixed made easy,</div>
          <div className='two'> one click away.</div>
          <div className='three'>From seasonal specials to bundled <br /> packages, we’ve got everything you <br /> need to keep your home in tip-top <br /> shape without breaking the bank.</div>
      
            {/* store */}

                
                      <div className='store ml-[-80px] gap-7 my-[30px]'>
                          <div className="store-11">
                           <div>
                             <img width="30px" src={Appleicon} alt="" />
                           </div>
                
                             <div className='pl-2'>
                                <div className='text-[12px] font-semibold text-[white] mb-[-6px] font-Montserrat'>Download on the</div>
                               <div className='text-[white] text-[16px] font-Montserrat font-semibold' >App Store</div>
                             </div>
                
                          </div>
                
                          <div className="store-12">
                            
                              <div>
                             <img width="30px" src={Playstore} alt="" />
                           </div>
                
                             <div className='pl-2'>
                                <div className='text-[12px] font-semibold text-[white] mb-[-6px] font-Montserrat'>Get on the</div>
                               <div className='text-[white] text-[16px] font-Montserrat font-semibold' >Goggle Play</div>
                             </div>
                
                          </div>
                
                      </div>      
                      {/* store */}

                     <div className='yellow'><img src={Yellow}  width="115px" alt="" /></div>
                     <div className='pink'><img src={pink} width="110px" alt="" /></div> 
                      <div className='purpleimg'><img src={purple} width="70px" alt="" /></div>
                       <div className='DeepPurple'><img src={DeepPurple} width="140px" alt="" /></div>
                        <div className='Orange'><img src={Yellow} width="110px" alt="" /></div>
                          <div className='lightpurple'><img src={lightpurple} width="70px" alt="" /></div>
        </div>

        
      </div>
      
       </div>
    </>
  )
}
