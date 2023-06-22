"use client"
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa';

const ProductDetailsPage = ({params}) => {
    console.log(+params.id);
    const productId = +params.id;
    const [product, setProduct] = useState([]);
    const [uniqueItem, setUniqueItem] = useState([]);

    const fetchData = async () => {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        if(!res.ok) throw Error("Url might be not found.");

        const fetchSingleProduct = data.find(item => item.id === productId);
        console.log(fetchSingleProduct);
        setUniqueItem([fetchSingleProduct])
    
        return data;
      }
    const {isLoading,error,data} = useQuery({queryKey:['singleProduct'],queryFn:fetchData})

    if(error) return "Product not Found!!" + error.message;

    const getProduct = (id) => {
        const fetchCartItem = product.find(item => item.id === productId);
        console.log(fetchCartItem);
        setUniqueItem([fetchCartItem])
        // setCart(prevValue => [...prevValue, fetchCartItem]);
    }
    console.log(uniqueItem);
  return (
    
    <div className='my-20'>
        <h2 className='mb-24 text-center text-3xl font-bold font-sans capitalize first-letter:text-blue-600'>let know about the product</h2>
        {
            uniqueItem.map(itemId => {
                const {id,category,image,title , description , price, rating} = itemId;
                return(
                <div key={id} className='container grid grid-cols-homepageLayoutHero1 place-items-center gap-6'>
                    <div className=''>
                        <div className='singleItmeImg'>
                            <img src={image} alt="image" />
                        </div>
                    </div>
                    <div className='text-left capitalize'>
                        <h2 className='text-lg sm:text-base font-bold pb-2'>{title}</h2>
                        <h2 className='text-base sm:text-base font-semibold pb-2'>{category}</h2>
                        <h2 className='text-sm sm:text-base font-light pb-4'>{description}</h2>
                        <h2 className='text-sm sm:text-base font-bold pb-4 text-lime-600'>Price ${price} USD</h2>
                        <h2 className='text-sm sm:text-base flex items-center justify-start font-bold pb-4 text-yellow-800'><span className='mr-2'><FaStar /></span> {rating.rate}<span className='pl-2 text-sm sm:text-base font-bold text-lime-600'>({rating.count})</span></h2>
                        <div className='w-full'><button onClick={() => getProduct(id)} className='bg-lime-transparent text-lime-900 border-2 border-lime-500 py-2 px-8 rounded-full drop-shadow-md cursor-pointer hover:bg-lime-700 hover:text-lime-100 hover:border-transparent transition-all duration-200 ease-in-out capitalize mt-6'>add to cart</button></div>
                    </div>
                </div>
                )
            })
        } 
    </div>
  )
}

export default ProductDetailsPage