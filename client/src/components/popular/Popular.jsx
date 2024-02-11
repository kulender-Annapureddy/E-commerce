import React from 'react'
import '../popular/popular.css';
import data_popular from '../assets/data';
import Items from '../item/items';


function Popular() {
  return (
    <div className='popular'>
       <h1>Popular in Women</h1> 
       <hr/>
       <div className='popular-item'>
        { data_popular.map((item, i) => {
            return <Items key={i}
             id={item.id}
             name={item.name}
             image={item.image}
             new_price={item.new_price}
             old_price={item.old_price}
            />
        } )}
       </div>
    </div>
  )
}

export default Popular