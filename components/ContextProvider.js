

'use client'
import { CartContextProvider } from "./cartContext"
export default function useContextProvider({children}){
    

    return <CartContextProvider>
        {children}
    </CartContextProvider>

}