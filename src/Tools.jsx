import React from 'react'
import Hammer  from "./assets/hammer.png"
import Tool from "./assets/tools.png"
import paint from "./assets/paint.png"
export default function Tools() {
  return (
    <div>
     <div className='hammer'>
         <img src={Hammer} width="400px" alt="" />
     </div>

       <div className='Tool'>
         <img src={Tool} width="400px" alt="" />
     </div>

      <div className='Paint'>
         <img src={paint} width="400px" alt="" />
     </div>

      <div className='Tool-1'>
         <img src={Tool} width="400px" alt="" />
     </div>

    </div>
  )
}
