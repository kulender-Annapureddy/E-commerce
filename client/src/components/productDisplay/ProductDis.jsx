import React, { useContext } from 'react'
import './proDis.css'
import star from '../assets/star.png'
import { ShopContext } from '../../context/ShopContext';


function ProductDis(props) {
   const { product } = props;
   const {addToCart} = useContext(ShopContext);

   
  return (
    <div className='productdisplay' >
        <div className="productdis-left">
             <div className="productdis-img-list">
                <img src={product.image} className='side-img' alt="" />
                <img src={product.image}  className='side-img' alt="" />
                <img src={product.image}  className='side-img' alt="" />
                <img src={product.image}  className='side-img' alt="" />

             </div>
             <div className="productdis-img">
                 <img className='main-img'  src={product.image} alt=''>

                 </img>
             </div>
        </div>
        <div className="productdis-right">
             <h1>{product.name}</h1>
             <div className='productdis-right-star'>
                <img src={star} className='star'  alt="" />
                <img src={star} className='star' alt="" />
                <img src={star} className='star' alt="" />
                <img src={star}  className='star'alt="" />
                <img src={star} className='star' alt="" />
                <p>(150)</p>
             </div>
              <div className="prroductdis-prices">
                <div className="productdis-old">
                    ${product.old_price}
                </div>
                 <div className="productdis-new">
                    ${product.new_price}
                 </div>
                 </div>
                 <div className="productdis-desc">
                  A garment for the upper part of the body usually with a collar,
                  sleeves, a front opening, and a tail long enough to be tucked inside pants or a skirt.

                 </div>
                 <div className="productdis-size">
                  <h1>Select Size</h1>
                   <div className="productdis-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                   </div>
                 </div>
                 <button className='btn' onClick={() =>(addToCart(product.id))}>ADD TO CART</button>
                 <p className='productdis-category'>
                    <span>Category :</span>
                    Women, T-shirt, Crop top
                 </p>
                 <p className='productdis-category'>
                    <span>Tags :</span>
                    Modern, Latest, Fashionable
                 </p>
              </div>
        
    </div>
  )
}

export default ProductDis