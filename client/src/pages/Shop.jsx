import React from 'react'
import Home from '../components/home/Home'
import Popular from '../components/popular/Popular'
import Offers from '../components/Offers/Offers'
import Collections from '../components/newcollections/Collections'



// import Items from '../components/item/items'

function Shop() {
  return (
    <div>
      <Home />
      <Popular/>
      <Offers />
      <Collections />
   
      
    </div>
  )
}

export default Shop