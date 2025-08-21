import React from 'react'
import Tree from "./assets/tree.png"
import pool from "./assets/pool.png"
import sprink from "./assets/sprink.png"
import fence from "./assets/fence.png"
import build from "./assets/build.png"
import world from "./assets/world.png"
import glove from "./assets/glove.png"
import car from "./assets/car.png"
export default function Repair() {
  return (
    <div className='repair-card'>
        <div className='repair-1]'>
           <div className='repair-2'> Over 100 repair</div> 
             <div className='repair-3'>services to fix it right,</div>
            <div className='repair-4'>  right now!</div>  
      </div>

        <div className="repair-card-1">

             {/* repair-flex-1 */}
           <div className="repair-flex">
             <div className='repair-card-2 '>
                <img src={Tree} alt=""  width="40px"/>
                <div className='repair-card-2-text'>Tree & Shrub</div>
                <div className='repair-card-3-text'>Service</div>
            </div>

               <div className='repair-card-3 '>
                <img src={pool} alt=""  width="40px"/>
                <div className='repair-card-2-text'>Pools & Water </div>
                <div className='repair-card-3-text'>Features</div>
            </div>
           </div>

           {/* repair-flex-1 */}

             {/* repair-flex-2 */}
           <div className="repair-flex-2">
             <div className='repair-card-2 '>
                <img src={sprink} alt=""  width="40px"/>
                <div className='repair-card-2-text'>Landscaping-Sprinkler </div>
                <div className='repair-card-3-text'>System</div>
            </div>

               <div className='repair-card-3 '>
                <img src={fence} alt=""  width="40px"/>
                <div className='repair-card-2-text'> </div>
                <div className='repair-card-3-text'>Fences</div>
            </div>
           </div>

           {/* repair-flex-2 */}


            {/* repair-flex-3 */}
           <div className="repair-flex-3">
             <div className='repair-card-2 '>
                <img src={build} alt=""  width="40px"/>
                <div className='repair-card-2-text'>Outdoor Patios </div>
                <div className='repair-card-3-text'> &Walkways</div>
            </div>

               <div className='repair-card-3 '>
                <img src={world} alt=""  width="40px"/>
                <div className='repair-card-2-text'>Landscaping-</div>
                <div className='repair-card-3-text'>Mainteance of Lawn</div>
            </div>
           </div>

           {/* repair-flex-3 */}


            {/* repair-flex-4 */}
           <div className="repair-flex-4">
             <div className='repair-card-2 '>
                <img src={glove} alt=""  width="40px"/>
                <div className='repair-card-2-text'>Home Garden  </div>
                <div className='repair-card-3-text'>Tools</div>
            </div>

               <div className='repair-card-3 '>
                <img src={car} alt=""  width="40px"/>
                <div className='repair-card-2-text'></div>
                <div className='repair-card-3-text'>Deliverables</div>
            </div>
           </div>

           {/* repair-flex-4 */}


        </div>
        
    </div>
  )
}
