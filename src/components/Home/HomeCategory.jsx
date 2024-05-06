import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomeCategory() {
  const [categories, setCategories] = useState([]);
  const [showcategory, setShowcategory] = useState(null);
  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);
  const scrollCategory = sideNam => {
    const container = document.getElementById('categoryDiv');
    const widthTake = (window.innerWidth / 3) * 2;
    if (sideNam === 'right') container.scrollBy({ left: -widthTake, behavior: 'smooth' });
    else if (sideNam === 'left') container.scrollBy({ left: +widthTake, behavior: 'smooth' });
  }
  const categoryShow = current => setShowcategory(current);
  const categoryNotShow = () => setShowcategory(null);
  return (
    <Container fluid className='p-3 pt-5 m-0 bg-light'>
      <h3 className='text-center text-black'><strong >Categories</strong></h3>
      <div className='d-flex rounded m-3' id='HomeCategory' style={{ boxShadow: "3px 3px 8px black" }}>
        <Button variant='light' className='my-auto rounded-circle p-3' id='right'
          style={{ marginLeft: '-25px' }} onClick={() => scrollCategory('right')}>
          <svg fill="#000000" height="24px" width="24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 492 492" xml: space="preserve">
            <g>
              <g>
                <path d="M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124
			c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844
			L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412
			c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008
			c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788
			C492,219.198,479.172,207.418,464.344,207.418z"/>
              </g>
            </g>
          </svg>
        </Button>
        <div className='d-flex overflow-hidden m-2' id='categoryDiv'>
          {categories.map(category => (
            <div className='my-3 me-4'  onMouseEnter={() => categoryShow(category.id)} onMouseLeave={() => categoryNotShow} >
              <Card style={{ width: '16rem', boxShadow: "1px 1px 6px black", backgroundColor: (showcategory === category.id ? 'grey' : 'white')}}
               key={category.id} as={Link} to={`/category/${category.id}`}
                className='text-black text-decoration-none'>
                <Card.Img variant="top" style={{ height: '200px' }} src={category.image} />
                <Card.Body id={category.id}>
                  <Card.Title className='text-center text-uppercase' style={{color: (showcategory === category.id ? 'white' : 'black') }}>
                    <strong>{category.name}</strong></Card.Title>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
        <Button variant='light' className='shadow-lg my-auto rounded-circle p-3' id='left'
          style={{ marginRight: '-25px' }} onClick={() => scrollCategory('left')}>
          <svg fill="#000000" height="24px" width="24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 492.004 492.004" xml: space="preserve">
            <g>
              <g>
                <path d="M484.14,226.886L306.46,49.202c-5.072-5.072-11.832-7.856-19.04-7.856c-7.216,0-13.972,2.788-19.044,7.856l-16.132,16.136
			c-5.068,5.064-7.86,11.828-7.86,19.04c0,7.208,2.792,14.2,7.86,19.264L355.9,207.526H26.58C11.732,207.526,0,219.15,0,234.002
			v22.812c0,14.852,11.732,27.648,26.58,27.648h330.496L252.248,388.926c-5.068,5.072-7.86,11.652-7.86,18.864
			c0,7.204,2.792,13.88,7.86,18.948l16.132,16.084c5.072,5.072,11.828,7.836,19.044,7.836c7.208,0,13.968-2.8,19.04-7.872
			l177.68-177.68c5.084-5.088,7.88-11.88,7.86-19.1C492.02,238.762,489.228,231.966,484.14,226.886z"/>
              </g>
            </g>
          </svg>
        </Button>
      </div>
    </Container>
  )
}

export default HomeCategory