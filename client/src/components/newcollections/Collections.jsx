import React from 'react'
import './newcollection.css'
import Items from '../item/items'
import new_collections from '../assets/newcollections'

function Collections() {
  return (
    <div className='new-collection'>
        <h1>New Collections</h1>
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
            }) }
        </div>

    </div>
  )
}

export default Collections