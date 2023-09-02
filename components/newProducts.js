import "./styles/newProducts.css"
export default function NewProducts({products}){
    console.log('INSIDE THE NEWPRODCUTS THE PRODUCTS ARE',products)
    return(
        <div className="flex flex-col second__container">
            <h1>New Arrivals</h1>
            <div className=" product__container flex flex-wrap">
                {products && products.length>0 && products.map((p)=>{
                  return <div className="flex flex-col ">
                    <div className="product__image__container"><img className="product__image" src={p.images[0]}></img></div>
                    <div className="flex p-2 flex-col">
                    <div className="font-bold">{p.name}</div>
                    <div className="flex gap-x-2 items-center justify-between mt-1"> 
                      <div className="font-extrabold text-xl">₹{p.price}</div>
                      <button className="cart__btn">Add to cart</button>
                    </div>
                    </div>
                  </div>  
                })}
            </div>
        </div>
    )
}