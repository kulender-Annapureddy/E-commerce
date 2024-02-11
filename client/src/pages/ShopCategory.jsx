import React, { useContext } from 'react'
import './css/shopcategory.css';
import { ShopContext } from '../context/ShopContext'
import { FaChevronCircleDown } from "react-icons/fa";
import Items from '../components/item/items';
           
function ShopCategory(props) {
const { all_products} = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <img src={props.banner} className='ban-image' alt='' />
       <div className='shopcategory-indexSort' >
        <p>
          <span>Showing 1 - 12 </span> out of 36 Products
        </p>
          <div className='shopcategory-Sort'>
            sort by <FaChevronCircleDown />
          </div>
       </div>
       <div className='shopcategory_products'>
        {all_products.map((item, i) =>{
          if(props.category === item.category) {
            return <Items
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
            
            />
          } else {
            return null;
          }
        })}
       </div>
       <div className='shopcategory-loadmore'>
        Explore More
       </div>
    </div>
  )
}

export default ShopCategory