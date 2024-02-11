import React from 'react'
import './bread.css'
import { IoIosArrowForward } from "react-icons/io";

function Bread(props) {
    const {product} = props;
  return (
    <div className='bread'>
        HOME <IoIosArrowForward/> SHOP <IoIosArrowForward/> {product.category} <IoIosArrowForward/> {product.name}
    </div>
  )
}

export default Bread

