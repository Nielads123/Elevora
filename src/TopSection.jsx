import React from 'react'
import Background from "./assets/bg.png"
import Appleicon from "./assets/appleicon.svg"
import Playstore from "./assets/playstore.svg"

export default function TopSection() {
  return (
    <>
      <div className='img-bg'>
      <div>
          <div className='top-1'>Find top rated certified</div>
          <div className='top-2'>props in your area</div>
      <div className='top-3'>Seamless care with cutting-edge solutions.</div>
        </div>            

      <div className='store gap-10 my-[30px]'>
          <div className="store-1">
           <div>
             <img width="40px" src={Appleicon} alt="" />
           </div>

             <div className='pl-2'>
                <div className='text-[12px] font-semibold text-[#4A306D] mb-[-6px] font-Montserrat'>Download on the</div>
               <div className='text-[#4A306D] text-[18px] font-Montserrat font-semibold' >App Store</div>
             </div>

          </div>

          <div className="store-2">
            
              <div>
             <img width="40px" src={Playstore} alt="" />
           </div>

             <div className='pl-2'>
                <div className='text-[12px] font-semibold text-[#4A306D] mb-[-6px] font-Montserrat'>Get on the</div>
               <div className='text-[#4A306D] text-[18px] font-Montserrat font-semibold' >Goggle Play</div>
             </div>

          </div>

      </div>

    </div>
    </>
  )
}
