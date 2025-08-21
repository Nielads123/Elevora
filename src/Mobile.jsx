import React from 'react'
import Phone from "./assets/Mobile 1.png"
import frame from "./assets/Frames.png"
import file from "./assets/file.png"
import calendar from "./assets/calendar.png"
import date from "./assets/date.png"

export default function Mobile() {
  return (
    <>
      
      <div className="mobile ">
        
        <div className="mobile-1">
            <div>How the Elevora <br/>can help you?</div>
            
        </div>
        
        <div className="mobile-2 mt-[30px] px-[70px] ">
       <div className='mobile-4 '>
         <div className='mobile-5 '><img  width="240px" src={Phone} alt="" /></div>
       <div className='mobile-6'><img src={frame} width="290px" height=""  alt="" /></div>
       </div>
        </div>

       <div className=' main px-[10px] block space-y-10 mt-14'>
                 <div className="mobile-3">
        
                <div><img src={file} width="30px" height="30px" alt="" /></div>
               <div className='block'>
                 <div className='file-1 text-[20px]  text-white ml-[5px] font-Lato'>On-demand</div>
                <div className='text-[20px] text-white ml-[5px] mt-[-10px] font-Lato'>handyman services</div>
               </div>
       
        </div>

         <div className="mobile-10">
        
                <div><img src={calendar} width="30px" height="30px" alt="" /></div>
               <div className='block'>
                 <div className='file-1 text-[20px]  text-white ml-[5px] font-Lato'>Service tracking and </div>
                <div className='text-[20px] text-white ml-[5px] mt-[-10px] font-Lato'>history</div>
               </div>
      
        </div>

          <div className="mobile-11">
        
                <div><img src={date} width="30px" height="30px" alt="" /></div>
               <div className='block'>
                 <div className='file-1 text-[20px]  text-white ml-[5px] font-Lato'>Task scheduling and </div>
                <div className='text-[20px] text-white ml-[5px] mt-[-10px] font-Lato'>reminders</div>
               </div>
      
        </div>

       </div>


        

      </div>
    </>
  )
}
