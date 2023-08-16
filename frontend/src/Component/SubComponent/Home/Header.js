import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import headerImg from '../../../assests/img/4739023.jpg'

function Header() {


  return (
    <>

      <header>
        <section className='Header-Section' style={{ marginTop: '11vh', overflow: 'hidden' }}>
          <Carousel>
            <Carousel.Item interval={4500}>
            <img src={headerImg} style={{width:'100vw', height:'87vh'}}/>  
            </Carousel.Item>

            <Carousel.Item interval={4500}>
            <img src={headerImg} style={{width:'100vw', height:'87vh'}}/> 
            </Carousel.Item>

            <Carousel.Item interval={4500}>
            <img src={headerImg} style={{width:'100vw', height:'87vh'}}/>  
            </Carousel.Item>
          </Carousel>
        </section>
      </header>

    </>

  );

}

export default Header;
//  <img src={headerImg} style={{width:'100vw', height:''}}/>  