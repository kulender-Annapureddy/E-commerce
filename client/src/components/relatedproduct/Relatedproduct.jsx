import React from 'react'
import './relatedprod.css'
import new_collections from '../assets/newcollections'
import Items from '../item/items'

function Relatedproduct() {
  return (
    <div className='relatedprod'>
        <h1>Related Products</h1>
        <hr />
        <div className='collections'>
            {new_collections.map((item, i) => {
                return <Items 
                key={i}
             id={item.id}
             name={item.name}
             image={item.image}
             new_price={item.new_price}
             old_price={item.old_price}
                />
            })}
        </div>
    </div>
  )
}

export default Relatedproduct