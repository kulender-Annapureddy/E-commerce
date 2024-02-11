import React from 'react'
import './home.css'

import home from '../assets/home1.png'

function Home() {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <img src={home} alt='' className='homeimg'></img>
      </div>
      <div className='hero-right'>
       
        <div className='container-1'>
          <div className='container-2'>
           <div className='container-3'>
           <h3>NEW ARRIVALS</h3>
        <h1>JUST FOR</h1>
        <h1>YOU</h1>
        <button>Shop Now</button>
            </div> 
          </div>
        </div>
        
      

      </div>
      <div className='for-mobile'>
        <h3>NEW ARRIVALS</h3>
        <h1>Just For</h1>
        <h2>you</h2>
        <button>Shop Now</button>

      </div>
      <div className='for-medium'>
      <h3>NEW ARRIVALS</h3>
        <h1>JUST FOR</h1>
        <h2>YOU</h2>
        <button>Shop Now</button>
      </div>
        
    </div>
  )
}

export default Home

// <div className='hero-left'>
//         <img src={Homeimg} className='homeimg' alt=''></img>
        
        
//         </div>
//         <div className='hero-right'>
//             <div>
//             <div className='home-hand'>
//               <p>Kick you're life with
//               Unique styles</p>
//             </div>
//            </div>
//            <div className='shop-btn'>
//             <button>Shop Now</button>
//            </div>
//         </div>