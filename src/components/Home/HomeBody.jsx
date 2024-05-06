import React, { useState, useEffect } from 'react';
import { Carousel, Image, Container } from 'react-bootstrap';
import Logo from '../../assets/logo/logo_2.jpg';
import axios from 'axios';

function HomeBody() {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/products')
            .then(response => setProduct(response.data))
    }, []);
    return (
        <Container fluid className='p-5 pt-0' id='home_body'>
            <Carousel className='w-100' id='View'>
                <Carousel.Item>
                    <Image src={Logo} style={{ maxHeight: '85vh', width: '100%', borderRadius: '25px' }} />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                {products.map((product) => (
                    <Carousel.Item>
                        <Image src={product.images[0]} style={{ maxHeight: '85vh', width: '100%', borderRadius: '25px' }} />
                        <Carousel.Caption>
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}


            </Carousel>
        </Container>
    )
}

export default HomeBody;