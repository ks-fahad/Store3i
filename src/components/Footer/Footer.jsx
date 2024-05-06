import React from 'react';
import { Container } from 'react-bootstrap';
import About from './About';



function Footer() {
  return (
    <>
      <About />
      
      <Container fluid className='bg-black m-0 p-0 w-100 text-center text-white'>
        Copyright © 2023
        <a href="http://" target="_blank" >Store3i</a>
        || All rights reserved.
      </Container>
    </>
  )
}

export default Footer;