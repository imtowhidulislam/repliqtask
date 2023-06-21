"use client"
import { useState } from 'react'
import Image from 'next/image'
import { RiH2 } from 'react-icons/ri'
import ImageOne from "../../public/imageOne.svg"
// import ImageTwo from "../assets/imageTwo.svg"
import Link from 'next/link'
import TopratedProduct from './components/TopratedProduct'
import { useQuery } from '@tanstack/react-query'
// import { fetchData } from './Data/fetchingShopdata'

export default function Home() {
  const [product, setProduct] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    if(!res.ok) throw Error("Url might be not found.");

    setProduct([...data]);
  }
  
  const storeQuery = useQuery({queryKey:['shopData'], queryFn: fetchData}) ;
  console.log(product);
  
  return (
    <>
    <div>
      <div>
        <div className='bg-[#b0a8f8] py-12'>
          <header className='container grid grid-cols-homepageLayoutHero1 place-items-center gap-12 md:gap-16 lg:gap-20'>
            <div>
              <h2 className='capitalize text-4xl sm:text-5xl lg:text-7xl font-bold font-mono text-left text-[#1c1760]'>shopping and department store</h2>
              <p className='text-sm sm:text-base md:text-base text-[#0a0a1c] py-4 text-left'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores eaque eligendi animi accusamus voluptatibus cupiditate consequuntur doloribus repudiandae adipisci temporibus?</p>
              <p className='text-sm sm:text-base md:text-base text-[#0a0a1c] pb-4 text-left'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, voluptatem!</p>
              <div className=''>
                <li className=' flex justify-start w-max bg-green-500 text-gray-100 font-bold cursor-pointer py-3 px-8 rounded-full'>
                  <Link href="/Product">
                    <button className='capitalize'>shop now</button>
                  </Link>
                </li>
              </div>
            </div>
            <div className='md:m-8 lg:m-12'><Image src={ImageOne} alt="" width={700} height={700} /></div>
          </header>
        </div>
        <TopratedProduct product={product} />
      </div>
    </div>
    </>
  )
}
