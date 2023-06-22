"use client"
import { useEffect, useContext, useState } from 'react'
import ProductCategory from './components/productCategory';
import ProductOfList from './components/ProductOfList';
import { useQuery } from '@tanstack/react-query';

const Page = () => {

    // const [cartValue, setCartValue] = cart;
    const [productValue, setProductValue] = useState([]);
    const [button, setButton] = useState([]);
    const [filterProduct , setFilterProduct] = useState("All");

    const fetchData = async () => {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        if(!res.ok) throw Error("Url might be not found.");
    
        setProductValue([...data]);
        return data;
      }
    
    const productList = useQuery({queryKey:['productData'], queryFn:fetchData});

        // !! Fetching the Unique Category>>>
        const handleClick = e => {
            setFilterProduct(e.target.dataset.name);
        }
        console.log(productValue);
        const fetchCat = () => {
            let unique = productValue.map(but => but.category);
            unique = [...new Set(unique)]
            console.log(unique);
            setButton(unique);
        }
        useEffect(() => {
            fetchCat();
        },[filterProduct])
        console.log(productValue);
        console.log(button);
  return (
    <div className='container py-24 px-8 md:px-0'>
        <div className='btn_container'>
        <button className='btn' onClick={handleClick} data-name="All">All</button>
            <div className='flex items-center justify-center flex-wrap gap-2'>
                {
                    button.map(btns => {
                        return (
                            <>
                            
                                <button key={btns.id} className='btn' onClick={handleClick} data-name={btns}>{btns}</button>
                            </>
                        )
                    })
                }
            </div>
        </div>
        <div className='grid grid-cols-productLayout gap-4 mt-10'>
            {   
                filterProduct === "All" ? <ProductOfList filterProduct={filterProduct} product={productValue} setProduct={setProductValue} /> : <ProductCategory filterProduct={filterProduct} 
 product={productValue} setProduct={setProductValue} />
            }
        </div>
    </div>
  )
}

export default Page