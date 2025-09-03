import React from 'react'
import tick from "./assets/Tick.png"
import IphoneTwo from "./assets/iphone16promax.png"
import arrow from "./assets/rightarrow.png"
import thumb from "./assets/thumb.png"
import ticktwo from "./assets/Tick2.png"
import star from "./assets/star.png"
import Appleicon from "./assets/lightapple.png"
import Playstore from "./assets/ligtstore.png"
export default function LastMobile() {
  return (
    <div>
      <div className='last-card'>
        <img src={IphoneTwo} width="250px" alt="" />
        {/* tick */}
        <div className='last-flex'> 
            <div>Run appliance clean cycles</div>
        </div>
         <img width="20px" src={tick} alt=""  className='tick' />
          <img width="20px" src={arrow} alt=""  className='arrow' />
  {/* tick */}
          {/* thumb */}
           <div className='last-flex-1'>
            <div>Walls and ceiling clean</div>
        </div>
         <img width="30px" src={thumb} alt=""  className='thumb' />
        {/* thumb */}

        {/* tick2 */}
        <div className='last-flex-2'> 
            <div>Power wash home exterior</div>
        </div>
         <img width="15px" src={ticktwo} alt=""  className='ticktwo' />
          <img width="15px" src={arrow} alt=""  className='arrowtwo' />
  {/* tick2 */}

  {/* star */}
             <div className='last-flex-3'>
            <div>We deliver  minimum of a  4-Star <br /> average rating </div>
        </div>
         <img width="30px" src={star} alt=""  className='star' />
   {/* star */}
      </div>

      <div className='join'>Join Elevora today.</div>
      <div className='join-2'>Become one of hundreds of happy users joining Elevora today</div>

      {/* store */}

       <div className='store gap-10 my-[30px]'>
                <div className="store-31 ">
                 <div>
                   <img width="40px" src={Appleicon} alt="" />
                 </div>
      
                   <div className='pl-2 '>
                      <div className='text-[12px]  font-semibold text-[#C89FFF] mb-[-6px] font-Montserrat'>Download on the</div>
                     <div className='text-[#C89FFF] text-[18px] font-Montserrat font-semibold' >App Store</div>
                   </div>
      
                </div>
      
                <div className="store-32">
                  
                    <div>
                   <img width="40px" src={Playstore} alt="" />
                 </div>
      
                   <div className='pl-2'>
                      <div className='text-[12px] font-semibold text-[#C89FFF] mb-[-6px] font-Montserrat'>Get on the</div>
                     <div className='text-[#C89FFF] text-[18px] font-Montserrat font-semibold' >Goggle Play</div>
                   </div>
      
                </div>
      
            </div>
    </div>
  )
}
