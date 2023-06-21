import React, { useState } from 'react'

const Counter = () => {
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
        <div className='flex items-center flex-col md:flex-row gap-2'>
            <button type='button' onClick={decrementItem} className='text-2xl flex items-center justify-center overflow-hidden font-bold cursor-pointer'><span>-</span></button>
            <h2 className='text-base lg:text-xl font-bold font-mono'>{itemCount < 10 ? `0${itemCount}`: itemCount}</h2>
            <button type='button' onClick={incrementItem} className='text-2xl flex items-center justify-center overflow-hidden font-bold cursor-pointer'><span>+</span></button>
        </div>
    </div>
  )
}

export default Counter