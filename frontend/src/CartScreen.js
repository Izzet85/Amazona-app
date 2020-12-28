import React, { useEffect } from "react"

export default function CartScreen(){
    const productId = props.match.params.id;
    const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;

    useEffect(() =>{
        if(productId) {
            dispatchEvent(addToCart(productId, qty));
        }
    },)
    return(
        <div>
            <h1>Cart Screen</h1>
            <p> ADD TO CART : ProductID: {productId} Qty {qty} </p>
        </div>
    )
}