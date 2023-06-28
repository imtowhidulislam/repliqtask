"use client"
import React, { createContext, useState } from 'react'
const CartContextProvider = createContext();

export const CartProvider = ({children}) => {
    const [cart,setCart] = useState([]);
  return (
    <CartContextProvider.Provider value={{cart:[cart, setCart]}}>
        {children}
    </CartContextProvider.Provider>
  )
}

export default CartContextProvider;