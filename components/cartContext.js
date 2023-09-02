"use client"
import { createContext, useState } from "react";
export const CartContext = createContext({});

export function CartContextProvider({children}){
    const [cartProducts,setCartProducts] = useState([]);
    console.log('INSIDE THE CONTEXT',cartProducts);
    function addToCart(productId){
        if(cartProducts.includes(productId)){
            return;
        }
        setCartProducts((prev)=>{
            return [...prev , productId];
        })
    }
    return(
        <CartContext.Provider value={{cartProducts,setCartProducts,addToCart}}>
            {children}
        </CartContext.Provider>
    )
}