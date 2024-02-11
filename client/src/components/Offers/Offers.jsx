import React from 'react'
import '../Offers/offers.css';
import offer1 from '../assets/offer1.jpg'

function Offers() {
  return (
    <div className='offers'>
      <div className='offers-left'>
           <h1>Exclusive </h1>
           <h1>Offers For You</h1>
           <p>ONLY ON BEST SELLER PRODUCTS</p>
           <button>Check Now</button>
      </div>
      <div className='offers-right'>
        <img src={offer1} alt=''></img>
        
        
        
      </div>
    </div>
  )
}

export default Offers