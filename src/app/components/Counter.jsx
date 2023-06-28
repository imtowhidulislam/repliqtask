import React, { useContext, useState } from 'react'
import CartContextProvider from '../context/cartContext';
import {HiChevronDown, HiChevronUp} from "react-icons/hi"

const Counter = () => {
    const {cart} = useContext(CartContextProvider);
    const [cartValue,setCartValue] = cart;
    
    const [itemCount, setItemCount] = useState(1);

    const decrementItem = () => {
        setItemCount(prevCount => prevCount - 1);
        if(!itemCount > 0) setItemCount(0);
    }
    const incrementItem = () => {
        setItemCount(prevCount => prevCount + 1);
    }
  return (
    <div>
        <div className='flex items-center flex-col gap-2'>
            <button type='button' onClick={incrementItem} className='text-2xl flex items-center justify-center overflow-hidden font-bold cursor-pointer'><HiChevronUp /></button>
            <h2 className='text-base lg:text-xl font-bold font-mono'>{itemCount < 1 ? `0${itemCount}`: itemCount}</h2>
            <button type='button' onClick={decrementItem} className='text-2xl flex items-center justify-center overflow-hidden font-bold cursor-pointer'><HiChevronDown/></button>
        </div>
    </div>
  )
}

export default Counter