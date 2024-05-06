import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Products from '../Products/Products';
import NavBar from '../Header/NavBar';
import Footer from '../Footer/Footer';
import View from '../View/View';
import { Container, Image, Row, Col } from 'react-bootstrap';

function Category() {
  const { id } = useParams();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, [id]);
  let currentCategory = {};
  categories.map((category) => { if (category.id == id) currentCategory = { ...category } });
  return (
    <div>
      <NavBar />
      <div className='bg-light bg-opacity-50'>
        <Container fluid className='w-100 m-0 p-3' id='Categorybody'>
          <Row>
            <Col className='m-auto text-center' style={{fontWeight:'bolder'}}>
              <div className='text-uppercase display-5'>
                {currentCategory.name}</div>
              <div className='h4 p-2'>Here, you can find different types of <span className='text-lowercase'>{currentCategory.name}</span> with exclusive design and
                discount. So, explore here and find your <span className='text-lowercase'>{currentCategory.name}</span> according to your choice.</div>
            </Col>
            <Col  className='m-auto text-center'><Image src={currentCategory.image} style={{
              maxHeight: '85vh', width: '100%',
              borderRadius: '25px', boxShadow: "8px 8px 3px black"
            }} /></Col>
          </Row>
        </Container>
        <View category={id} />
      </div>
      <Footer />
    </div>
  )
}

export default Category;