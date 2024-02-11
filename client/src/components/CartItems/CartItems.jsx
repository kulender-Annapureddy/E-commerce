import React, { useContext } from 'react'
import './cartitem.css'
import { ShopContext } from '../../context/ShopContext'
import { RxCross1 } from "react-icons/rx";

function CartItems() {
    const {all_products, cartItem,getTotal, removeFromCart} = useContext(ShopContext);
    
  return (
    <div className='cartitems'>
        <div className="cartitem-main">
            <p>Products</p>
            <p>Title</p>
            <p>price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_products.map((e) => {
            if(cartItem[e.id] > 0)
            {
             return    <div>
             <div className='cartitems-format'>
                 <img  src={e.image} alt='' className='carticon-product-icon' />
                 <p>{e.name}</p>
                 <p>${e.new_price}</p>
                 <button className='cartitems-quantity'>{cartItem[e.id]}</button>
                 <p style={{color:"green"}}>${e.new_price *cartItem[e.id]}  </p>
                 <RxCross1 className='rmvicon' onClick={() =>{removeFromCart(e.id)}} />
             </div>
             <hr/>
             </div> 
              
            }
            return null;
        })}
        <div className="cartitem-down">
            <div className="cartitem-total">
                <h1>Cart Total</h1>
                <div>
                    <div className="cartitmes-totalitems">
                        <p>Subtotal</p>
                        <p>${getTotal()}</p>
                    </div>
                    <hr />
                    <div className="cartitmes-totalitems">
                        <p>Shipping fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitmes-totalitems">
                       <h3>Total</h3> 
                       <h3>${getTotal()}</h3>
                    </div>
                    <button className='butns'>Proceed To Checkout</button>
                </div>       
            </div>
            <div className='cartitems-promo'>
                    <p>
                       If you have a promo code, Enter it here 
                    </p>
                    <div className='cartitem-promobox'>
                        <input type='text' placeholder='promo code..' />
                        <button>Submit</button>
                    </div>
                 </div>     
        </div>
      
    </div>
  )
}

export default CartItems

