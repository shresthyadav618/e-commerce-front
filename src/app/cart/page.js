'use client'
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../../components/cartContext"
import Header from "../../../components/header"
import "../../styles/cart.css"
export default function page(){
    const windowType = typeof(window);
    if(windowType!=='undefined'){
        const cartSession = sessionStorage.getItem('cart');
        console.log('THE SESSION STORAGE CART',cartSession);
    }
    const {cartProducts} = useContext(CartContext);
    console.log('THE VALUE OF CART PRODUCTS ARE : ',cartProducts);
    const [products,setProducts] = useState([]);
    useEffect(()=>{
         async function getData(){
            if(cartProducts.length > 0){
                const response = axios.post('/api/getById',{ids : cartProducts});
                const responseJSON = await response.json();
                if(response.ok){
                    console.log('GOT THE RESPONSE',responseJSON);
                    setProducts(responseJSON);
                }else{
                    console.log('SOME ERROR , INSIDE CART PAGE',responseJSON);
                }
             }
         }
         getData();
    },[cartProducts])
return(
    <div className="flex flex-col w-full">
        <Header/>
        <div className="flex w-full gap-x-8 items-center justify-center bg-[#f0f0f0] p-6 cart__container">
           <div className="cart__first__container w-[50%] bg-white text-black p-4 rounded-lg">
            {cartProducts.length ?
                 <div> 
                  <h2 className="font-bold">Cart</h2>
                 </div>
                    :
                 <div>Your Cart is empty</div>}
           </div>
           {cartProducts && cartProducts.length>0 && 
           <div className="cart__second__container w-[30%] bg-white text-black flex flex-col p-4 rounded-lg gap-y-4">
            <h1 className="font-bold">Order Information</h1>
            <button className="new__cart__btn">Continue to payment</button>
           </div>
           }
        </div>
    </div>
)
}