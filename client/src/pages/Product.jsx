import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import Bread from '../components/bread/Bread';
import ProductDis from '../components/productDisplay/ProductDis';
import DescriptionBox from '../components/description/DescriptionBox';
import Relatedproduct from '../components/relatedproduct/Relatedproduct';

function Product() {
  const { all_products} = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_products.find((e) => e.id === Number(productId));
    

  return (
    <div >
      <Bread  product={product}/>
      <ProductDis product={product} />
      <DescriptionBox/>
      <Relatedproduct />
      
    </div>
    
  )
}

export default Product