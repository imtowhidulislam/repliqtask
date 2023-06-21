import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../context/productContext';
import { useParams } from 'react-router-dom';
import ProductDetailsPage from './ProductDetailsPage';

const ProductDetails = () => {
    const params = useParams();
    const {product,cart} = useContext(ProductContext);
    const [productValue, setProductValue] = product;
    const [cartValue, setCartValue] = cart;
    const [uniqueItem, setUniqueItem] = useState([]);
    const [pathName, setPathName] = useState(window.location.pathname);
    const [itemsId, setItemsId] = useState(1);
    
    // ?? Fething the data of the clicked Item.
    const singleItem = () => {
        const unique = productValue.find(item => item.id === itemsId)
        setUniqueItem([unique]);
     };

    useEffect(() => {
        const productId = +params.id; 
        setItemsId(productId)
    },[pathName])
    console.log(itemsId);

    useEffect(() => {
        singleItem();
    },[itemsId]);
    console.log(uniqueItem);

  return (
    <div className=''>
        <ProductDetailsPage product={productValue} setProduct={setProductValue} cart={cartValue} setCart={setCartValue} uniqueItem={uniqueItem} />
    </div>
  )
}

export default ProductDetails;