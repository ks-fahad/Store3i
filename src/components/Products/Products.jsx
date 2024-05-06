import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Container, Button, ButtonGroup, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Products = ({ type, total, category_id, showType }) => {
    const [showItem, setShowItem] = useState(null);
    const [products, setProduct] = useState([]);
    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/products')
            .then(response => setProduct(response.data))
    }, []);

    const cardShow = current => setShowItem(current);
    const cardNotShow = () => setShowItem(null);
    let newProducts = [];
    const FindData = async () => {
        if (category_id === -1) newProducts = [...products];
        else {
            newProducts = [];
            products.map(product => { if (product.category.id == category_id) newProducts = [...newProducts, product]; });
            if (newProducts.length > total && total != null) newProducts = newProducts.slice(0, total);
        }
        if (type == 'New') {
            newProducts = newProducts.slice().sort((a, b) => b.creationAt - a.creationAt);
            if (newProducts.length > total) newProducts = newProducts.slice(0, total);
        } else if (type == 'High') {
            newProducts = newProducts.slice().sort((a, b) => b.price - a.price);

        } else if (type == 'Low') {
            newProducts = newProducts.slice().sort((a, b) => b.price - a.price);
            newProducts = newProducts.slice().reverse();
        }
        else if (type == 'All') newProducts = newProducts;

    };
    FindData();
    function updateCart(productId) {
        let cardNowProduct = window.localStorage.getItem("cartItem");
        const cartNav=document.getElementById("totalCart");
        if (cardNowProduct != null) window.localStorage.setItem("cartItem", [cardNowProduct, productId]);
        else window.localStorage.setItem("cartItem", [productId]);
        
        let cartCount = window.localStorage.getItem("cartItem");
        if (cartCount != null) cartNav.innerText=cartCount.split(',').length;
        else  cartNav.innerText="0";
    }
    return (
        <Container fluid className="d-flex flex-wrap m-auto py-2" id='cardProducts'>
            {showType && newProducts.map(product => (
                <Card style={{ width: '16rem', color: 'white', boxShadow: "3px 3px 10px black" }} key={product.id}
                    className='mt-4 mx-auto p-0 pb-1 border-0'>
                    <Card.Img variant="top" style={{ height: '250px', borderRadius: '5px' }} src={product.images[0]} onMouseEnter={() => cardShow(product.id)}
                        onMouseLeave={() => cardNotShow} />
                    <Card.Body id={product.id} className='bg-black bg-opacity-75 p-2 rounded text-white font-weight-bolder' style={{
                        marginTop: '-250px', height: '250px',
                        display: (showItem === product.id ? 'block' : 'none')
                    }}>
                        <Card.Title style={{ fontSize: '30px', marginTop: 'auto', textAlign: 'center' }}>{product.title}</Card.Title>
                        <Card.Subtitle style={{ fontSize: '20px', marginBottom: 'auto', textAlign: 'center' }}>{['price:', product.price, '$'].join(' ')}</Card.Subtitle>
                    </Card.Body>
                    <ButtonGroup className='mx-4 mb-2' style={{ marginTop: '-50px', boxShadow: '1px 1px 2px white' }}>
                        <Button variant="dark" as={Link} to={`/product/${product.id}`} ><strong>Details</strong></Button>
                        <Button variant='dark' onClick={() => updateCart(product.id)}><strong>Cart</strong></Button></ButtonGroup>
                </Card>
            ))
            }
            {!showType && newProducts.map(product => (
                <div className='d-flex w-100 m-1 border-bottom text-black'>
                    <div style={{ width: '150px' }} className='d-flex'> <Image className='my-auto' style={{ height: '150px' }} src={product.images[0]} /> </div>
                    <div className='p-2 pt-0'>
                        <h5>{product.title}
                            <Button as={Link} to={`/category/${product.category.id}`} className='mx-2 p-0 text-warning' variant='none'>{product.category.name}</Button>
                        </h5>
                        <div>{['$ ', product.price].join(' ')}</div>
                        <div>{product.description}</div>
                        <div className='m-2 ms-0'>
                            <Button variant="primary" as={Link} to={`/product/${product.id}`} className='me-2'><strong>Details</strong></Button>
                            <Button variant='warning' onClick={() => updateCart(product.id)}><strong>Cart</strong></Button>
                        </div>
                    </div>
                </div>
            ))
            }
        </Container >
    );
}

export default Products;