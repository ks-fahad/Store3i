import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import NavBar from '../Header/NavBar';
import Upclick from '../View/Upclick';
import Footer from '../Footer/Footer';
import { Container, Spinner, Image, Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import PagePath from '../PagesHandle/PagePath';
import Products from '../Products/Products';

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/products')
      .then((response) => {
        const responseData = response.data;
        responseData.map(current => current.id == id ? setProduct(current) : null);
      }
      )
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  if (Object.keys(product).length == 0) {
    return (
      <Container fluid className='d-flex m-0 p-0 w-100 h-100 bg-dark'>
        <Spinner animation="border" role="status" className='m-auto'>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }
  const scrollProductImage = sideNam => {
    const container = document.getElementById('ImagesDiv');
    const widthTake = (window.innerWidth / 3) * 2;
    if (sideNam === 'right') container.scrollBy({ left: -widthTake, behavior: 'smooth' });
    else if (sideNam === 'left') container.scrollBy({ left: +widthTake, behavior: 'smooth' });

  };

  const UpdateQuantity = value => {
    const Quantity = document.getElementById('quantity');
    let quantity = parseInt(Quantity.textContent);
    if (value == 'minus') {
      if (quantity == 1) { document.getElementById('minusButton').disabled = true; }
      else { quantity -= 1; document.getElementById('minusButton').disabled = false; }
    }
    else if (value == 'plus') { quantity += 1; document.getElementById('minusButton').disabled = false; }
    else { quantity = 1; document.getElementById('minusButton').disabled = false; }
    Quantity.textContent = `${quantity}`;
    document.getElementById('updatedPrice').textContent = `$ ${(quantity * product.price).toFixed(2)}`
  };
  const changeImage = imageLink => {
    const ImageDiv = document.getElementById("CurrentImage");
    if (ImageDiv != null) { ImageDiv.src = `${imageLink}`; };
  };

  function updateCart(productId) {
    let cardNowProduct = window.localStorage.getItem("cartItem");
    const cartNav = document.getElementById("totalCart");
    const Quantity = parseInt(document.getElementById('quantity').textContent);
    let productTotal = []
    for (let i = 0; i < Quantity; i++) productTotal.push(productId);
    if (cardNowProduct != null) window.localStorage.setItem("cartItem", [cardNowProduct, productTotal]);
    else window.localStorage.setItem("cartItem", [productId]);

    let cartCount = window.localStorage.getItem("cartItem");
    if (cartCount != null) cartNav.innerText = cartCount.split(',').length;
    else cartNav.innerText = "0";
  }
  // const images = ['https://i.imgur.com/ZANVnHE.jpeg', 'https://hh2.pigugroup.eu/colours/319/380/3/3193803/samsung-galaxy-watch-5-pro-bt-45-f79e1-halvempi_reference.jpg',
  //   'https://xelltechnology.com/wp-content/uploads/2022/04/dummy4.jpg', 'https://i.imgur.com/qNOjJje.jpeg']
  return (
    <>
      <NavBar />
      <Container fluid className='m-0 w-100 p-5 pt-2 bg-light bg-opacity-50' id='View'>
        <PagePath />
        <Upclick />
        <Row>
          <Col md='5' className='px-3'>
            <div className='d-flex m-2' style={{ width: 'auto', height: '350px' }}>
              <Image fluid src={product.images[0]} className='rounded mx-auto' id='CurrentImage' />
            </div>
            <div className='d-flex m-2 rounded border border-black' id='ProductImages'>
              <Button variant='light' className='my-auto rounded-circle p-2' id='right'
                style={{ marginLeft: '-20px' }} onClick={() => scrollProductImage('right')}>
                <svg fill="#000000" height="16px" width="16px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 492 492" xml:space="preserve">
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

              <div className='d-flex overflow-hidden m-2 w-100' id='ImagesDiv'>
                {product.images.map(image => (
                  <div className='m-1 p-0 btn' onClick={() => changeImage(image)}>
                    <Image src={image} width='80px' height='100%' className='rounded border border-black' />
                  </div>
                ))}
              </div>
              <Button variant='light' className='shadow-lg my-auto rounded-circle p-2' id='left'
                style={{ marginRight: '-20px' }} onClick={() => scrollProductImage('left')}>
                <svg fill="#000000" height="16px" width="16px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 492.004 492.004" xml:space="preserve">
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
          </Col>

          <Col className='w-100 rounded p-3 text-black'>
            <h3><strong>{product.title.toUpperCase()}</strong></h3>
            <h5><strong>${product.price.toFixed(2)}</strong></h5>
            <h5 style={{ textAlign: 'justify' }}>{product.description}</h5>
            <div>Category: <Button as={Link} to={`/category/${product.category.id}`} className='p-1' variant='secondary'>{product.category.name}</Button></div>
            <h5><strong>Order Price: </strong><span id='updatedPrice'>${product.price.toFixed(2)}</span></h5>

            <Row className='mt-2'>
              <Col className='p-1 mb-2' md='4'>
                <ButtonGroup className='border border-secondary w-100 bg-warning' style={{ fontSize: '18px' }}>
                  <Button variant='light' onClick={() => UpdateQuantity('minus')} id='minusButton'><strong>-</strong></Button>
                  <div className='my-auto mx-3'><strong id='quantity'>1</strong></div>
                  <Button variant='light' onClick={() => UpdateQuantity('plus')}><strong>+</strong></Button>
                </ButtonGroup>
              </Col>
              <Col className='mb-2 p-1' md='4'><Button id='cartButton' variant="outline-secondary" className='h-auto w-100' onClick={() => updateCart(product.id)}>
                <strong>ADD TO CART</strong>
              </Button></Col>
              <Col className='mb-2 p-1'><Button className='m-auto w-100 bg-danger' onClick={() => UpdateQuantity('no')}><strong>CLEAR</strong></Button></Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container fluid className='m-0 w-100 bg-success bg-opacity-50 p-1 py-5'>
        <h3 className='w-100 text-center text-light'><strong>See Other Collection</strong></h3>
        <Products total={5} category_id={product.category.id} showType={true} />
      </Container>
      <Footer />
    </>
  )
}

export default Product;