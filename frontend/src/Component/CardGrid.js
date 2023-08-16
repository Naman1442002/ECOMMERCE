import React from 'react';
import BasicExample from './card';


function CardGrid({products, cart_btn}) {
 
   
  return (
    <>
   
    <div className='CardGridItems' style={{padding:'2%', margin:'2%', display:'grid',position:'relative'}}>
        {
            products.map((product)=>{
                return <BasicExample 
                thumbnail={product.thumbnail}
                category={product.category}
                title={product.title}
                price={`${product.price}`}
                // discount={`${discount}`}
                description={product.description}
                cart_btn ={cart_btn}
                />
            })
            
        }

    </div>
    </> 
  )
}

export default CardGrid

