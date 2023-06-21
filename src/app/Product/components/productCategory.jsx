"use client"
import React, {useState, useEffect} from 'react'
// import Button from "../../Util/Button"
import Link from 'next/link';

const ProductCategory = ({product,setProduct,filterProduct}) => {
    const [filterProductData, setFilterProductData] = useState([]);

    const filterCategory = () => {
        const fetchFilterProduct =  product.filter(cat => {
            return cat.category === filterProduct;
        })
        setFilterProductData(fetchFilterProduct);
    }
    useEffect(() => {
        filterCategory();
    },[filterProduct])

    const getProduct = (id) => {
        const fetchCartItem = product.find(item => item.id === id);
        setCart(prevValue => [...prevValue, fetchCartItem]);
    }
    
  return (
    <>
        {
            filterProductData.map(singleProduct => {
                const {id,title, description: desc,image:img,price,rating,category:cat} = singleProduct;

                return (
                    <div key={id} className='card'>
                        <Link href={`/Product/${id}`}>
                        <div className="m-auto w-48 max-h-44 mb-4 p-4">
                            <img className="block h-44 object-cover w-full" src={img} alt="" />
                        </div>
                        <div className='px-4 text-gray-700 pt-2 pb-4 z-20'>
                            <div>
                                <h2>Name : {title}</h2>
                            </div>
                            <div className='flex items-center justify-between gap-4 py-2'>
                                <h2>Price : <span className='font-bold text-yellow-400'>{price}$</span></h2>
                                <p>Rating : <span className='font-bold text-yellow-400'>{rating.rate}</span></p>
                            </div>
                                <h2>Category : {cat}</h2>
                                {/* <p>Detail : {desc}$</p> */}
                        </div>
                        <div className='flex items-center justify-between px-2 pb-4'>
                            {/* <Button actionType="add to card" />
                            <Button actionType="buy now" /> */}

<button type='button' onClick={() => getProduct(id)} className='capitalize font-bold text-sm text-gray-100 bg-blue-600 cursor-pointer py-2 px-4 rounded-md hover:drop-shadow-md transition-all duration-200 ease-in-out hover:text-slate-50 hover:bg-blue-700'>add to cart</button>
                        </div>
                        </Link>

                    </div>
                )
            })
            
        }
    </>
  )
}

export default ProductCategory

// <>
//         {
//             filterProductData.map(singleProduct => {
//                 const {id,title, description: desc,image:img,price,rating,category:cat} = singleProduct;

//                 return (
//                     <div key={id} className='card'>
//                         <div className="m-auto w-48 max-h-44 mb-4 p-4">
//                             <img className="block h-44 object-cover w-full" src={img} alt="" />
//                         </div>
//                         <div className='px-4 text-gray-700 pt-2 pb-4 z-20'>
//                             <div>
//                                 <h2>Name : {title}</h2>
//                             </div>
//                             <div className='flex items-center justify-between gap-4 py-2'>
//                                 <h2>Price : <span className='font-bold text-yellow-400'>{price}$</span></h2>
//                                 <p>Rating : <span className='font-bold text-yellow-400'>{rating.rate}</span></p>
//                             </div>
//                                 <h2>Category : {cat}</h2>
//                                 {/* <p>Detail : {desc}$</p> */}
//                         </div>
//                         <div className='flex items-center justify-between px-2 pb-4'>
//                             <button type='button' onClick={() => getProduct(id)} className='capitalize font-bold text-sm text-gray-100 bg-blue-600 cursor-pointer py-2 px-4 rounded-md hover:drop-shadow-md transition-all duration-200 ease-in-out hover:text-slate-50 hover:bg-blue-700'>add to cart</button>
//                         </div>
//                     </div>
//                 )
//             })
//         }
    // </>