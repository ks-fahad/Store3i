import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, CloseButton, Image, Badge } from 'react-bootstrap';

const Cart = () => {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/products')
            .then(response => setProduct(response.data))
    }, []);
    const cartProducts = window.localStorage.getItem("cartItem");
    let filteredArray = [];
    let productNum = {};
    if (cartProducts != null) {
        let productArr = cartProducts.split(',').map(element => parseInt(element, 10));
        filteredArray = products.filter(item => productArr.includes(item.id));
        productNum = productArr.reduce((acc, number) => {
            acc[number] = (acc[number] || 0) + 1;
            return acc;
        }, {});
    };
    // const ModifyCart = (PID) => {
    //     const cartNav = document.getElementById("totalCart");
    //     let productArr = cartProducts.split(',').map(element => parseInt(element, 10));
    //     console.log(productArr);
    //     let modified = productArr.filter(element => element != PID);
    //     filteredArray = products.filter(item => modified.includes(item.id));
    //     window.localStorage.setItem("cartItem", [filteredArray]);
    //     if (filteredArray.length != 0) cartNav.innerText = modified.length;
    //     else cartNav.innerText = "0";
    // };
    let a = 0;
    const subtotal = (number, price) => {
        a += number * price;
        return number * price;
    }
    return (
        <Container fluid className='fixed-top d-flex pe-0' style={{ marginTop: "60px" }} scroll={false}>
            <div className='ms-auto bg-light scrollable-container overflow-auto pt-4' style={{ height: 'calc(100vh - 60px)' }}>
                <div className='d-flex pe-2 ps-4'>
                    <h3>Your Products</h3>
                    <CloseButton className='ms-auto' style={{ boxShadow: 'none' }} />
                </div>
                <div className='p-4'>
                    {filteredArray.map((product) => ((<Container fluid className='d-flex p-0 bg-secondary rounded m-1'>
                        <Image src={product.images[0]} fluid style={{ width: '60px', height: '60px', padding: '2px' }} />
                        <div className='text-white px-3'>
                            <div>{product.title} <Badge>{productNum[product.id]}</Badge></div>
                            <div>$ {subtotal(productNum[product.id], product.price)}</div>
                        </div>
                        {/* <CloseButton className='ms-auto my-auto me-2' variant='white' onClick={() => ModifyCart(product.id)} style={{ boxShadow: 'none' }} /> */}
                    </Container>)
                    ))}
                </div>
                <Container className='bg-success p-3 text-white text-center'>
                    Total Cost: $ {a}
                </Container>
            </div>
        </Container >
    );
}

export default Cart;