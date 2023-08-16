import React from 'react';
import { useSelector } from 'react-redux';
import CardGrid from '../CardGrid';
function Cart() {
  const CartProducts=useSelector(state=>state.Cart.cartItem)
  console.log("cartProducts",CartProducts);
       if (CartProducts.length==0) {
        return(
          <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>
            <h1>Cart is Empty Now!!!</h1>
          </div>
        )
       }
       else{
       return( <>
            <div style={{marginTop:'13vh', textAlign:'center'}}>
            <h1>Product in your cart</h1>
          </div>
            <CardGrid products={CartProducts}  cart_btn={true}/>
        </>
       )
       }
}

export default Cart