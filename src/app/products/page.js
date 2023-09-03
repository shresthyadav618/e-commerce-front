"use client"
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../components/cartContext";
import Header from "../../../components/header";
import "../../../components/styles/newProducts.css";
export default function page(){
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        async function getProducts(){
            const response =  await fetch('/api/products',{
                method : 'GET',
            });
            if(response.ok){
                const data = await response.json();
                setProducts(data.products);
            }
        }
        getProducts();
    },[]);
    const {addToCart} = useContext(CartContext);
    return(
        <div className="flex flex-col w-full h-[100vh]">
            <Header/>
            <div className="w-[100%] h-[100vh] bg-[#f0f0f0] flex flex-col">
            <h1 className="font-bold text-xl">All Products</h1>
            <div className=" product__container flex flex-wrap">
                {products && products.length>0 && products.map((p)=>{
                  return <div className="flex flex-col ">
                    <div className="product__image__container"><img className="product__image" src={p.images[0]}></img></div>
                    <div className="flex p-2 flex-col">
                    <div className="font-bold">{p.name}</div>
                    <div className="flex gap-x-2 items-center justify-between mt-1"> 
                      <div className="font-extrabold text-xl">₹{p.price}</div>
                      <button className="cart__btn" onClick={()=>{addToCart(p._id)}}>Add to cart</button>
                    </div>
                    </div>
                  </div>  
                })}
            </div>
            </div>
        </div>
    )
}