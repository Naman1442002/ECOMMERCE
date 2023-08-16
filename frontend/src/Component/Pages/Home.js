import React from 'react'
import Header from '../SubComponent/Home/Header'
import CardGrid from '../CardGrid'
import { useSelector } from 'react-redux';

function Home() {
  const ProductList = useSelector(state => state.Product.items); 
  
  return (
    <>
       
        <Header/>
        <h1 style={{textAlign:'center', paddingTop:'2rem', textDecoration:'overline'}}>Product Catelog</h1>
        <CardGrid products={ProductList} cart_btn={false}/>
    </>
  )
}

export default Home