import React, { useEffect, useState } from 'react'
import { getallproducts } from '../../shared/services/products/apiproducts'
import ProductCard from '../../shared/components/ProductCard/ProductCard';
import useCart from '../../shared/hooks/useCart.js';


export default function Products() {

  const[products,setproducts]= useState([]);
  const {inc,dec} = useCart();
  const getproducts = async() =>{
    const res = await getallproducts()
    setproducts(res.products)
  }

  useEffect(()=>{
    getproducts();
  },[])

  return (
    <div className='mt-3'>
      <ProductCard products={products} inc={inc} dec={dec}/>
    </div>
  )
}
