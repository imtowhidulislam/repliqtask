"use client"
import React, { createContext, useState } from 'react'
const CartContextProvider = createContext();

export const CartProvider = ({children}) => {
    const [cart,setCart] = useState([]);
    const [user,setUser] = useState([]);
  return (
    <CartContextProvider.Provider value={{user:[user,setUser],cart:[cart, setCart]}}>
        {children}
    </CartContextProvider.Provider>
  )
}

export default CartContextProvider;