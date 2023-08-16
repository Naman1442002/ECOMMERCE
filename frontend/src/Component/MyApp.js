import React from 'react';
import { Outlet } from 'react-router';
import NavScrollExample from './AppNavbar';
import  Footer from './Footer';

function MyApp() {
  return (
    <>
          <nav style={{position:'fixed',top:'0px ', width:'100vw' , zIndex:'999'}}>
            <NavScrollExample />
          </nav>
           <Outlet/>
          <Footer/>

    </>
  )
}

export default MyApp