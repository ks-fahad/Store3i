import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button, Container, Collapse } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Search() {
    const [products, setProduct] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/products')
            .then(response => setProduct(response.data))
    }, []);
    return (
        <Container className='fixed-top bg-black bg-opacity-50 rounded-5 p-2'
            style={{ marginTop: '70px' }} >
            <Form className="d-flex m-1">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="rounded-pill pe-5"
                    aria-label="Search"
                    style={{ height: '50px', fontSize: '17px'}}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <Button variant="primary" className="rounded-circle my-auto p-0 py-auto" style={{ marginLeft: '-50px', height: '40px', width: '40px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                </Button>
            </Form>
            <div className='p-3 text-light'>
                {products.filter(name => { return search.toLowerCase() === ''
                        ? name
                        : name.title.toLowerCase().includes(search.toLowerCase())
                }).map((product) => (
                    <Button variant='secondary' className='d-flex mb-1 px-2' as={Link} to={`/product/${product.id}`}>
                        <div className='me-auto'>{product.title}</div>
                        <div className='ms-auto'>$ {product.price}</div>
                    </Button>
                ))}
            </div>
        </Container>
    )
}

export default Search;