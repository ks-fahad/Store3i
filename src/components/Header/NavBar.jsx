import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Nav, Navbar, Button, Dropdown, Badge, NavbarText } from 'react-bootstrap';
import Logo from '../../assets/logo/logo.png';
import Search from './Search';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import Upclick from '../View/Upclick';
import Account from '../Accounts/Account';

function NavBar() {
    const [categories, setCategories] = useState([]);
    const [bgColor, setBgColor] = useState(false);
    const [aboutText, setaboutText] = useState("white");
    const [color, setColor] = useState("#2F4F4F");
    const [color_1, setColor_1] = useState("rgb(0,0,0)");
    const [color_2, setColor_2] = useState("linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(13,9,60,1) 70%, rgba(9,11,126,1) 100%)");
    const [cartItem, setCartItem] = useState(0)
    //Search Show
    const [showSearch, setShowSearch] = useState(false);
    const [account, setAccount] = useState(false);
    const [cart, setCart] = useState(false);
    const searchShow = () => {
        setCart(false);
        setAccount(false);
        setShowSearch(!showSearch);
    };
    //Cart
    const handleCartShow = () => {
        setAccount(false);
        setShowSearch(false);
        setCart(!cart);
    };
    //Account
    const handleAccount = () => {
        setCart(false);
        setShowSearch(false);
        setAccount(!account);
    };
    function initValue() {
        let Color = window.localStorage.getItem("Color");
        if (Color === null) window.localStorage.setItem("Color", color);
        else setColor(() => Color);
    }
    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/categories')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, []);
    const bgColorSet = (change) => {
        initValue();
        if (change === 1) {
            color === "#F8F8FF" ? setColor(() => "#2F4F4F") : setColor(() => "#F8F8FF");
            window.localStorage.setItem("Color", color);
        };
        if (color === "#2F4F4F") {
            setBgColor(() => true);
            setaboutText(() => "black");
            setColor_1(() => "rgb(128,122,255)");
            setColor_2(() => "linear-gradient(90deg, rgba(128,122,255,1) 0%, rgba(232,232,232,1) 89%, rgba(243,244,255,1) 100%)");
        }
        else {
            setaboutText(() => "white");
            setBgColor(() => false);
            setColor_1(() => "rgb(0,0,0)");
            setColor_2(() => "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(13,9,60,1) 70%, rgba(9,11,126,1) 100%)");
        }
    };
    useEffect(() => {
        bgColorSet(0);
        let cartCount = window.localStorage.getItem("cartItem");
        if (cartCount != null) setCartItem(cartCount.split(',').length);
        else setCartItem(0);
    }, []);

    useEffect(() => {
        document.body.style.backgroundColor = color;
        document.getElementById("navbar-id").style.background = color_1;
        document.getElementById("navbar-id").style.backgroundImage = color_2;
        const home_body = document.getElementById("home_body");
        if (home_body != null) {
            home_body.style.background = color_1;
            home_body.style.backgroundImage = color_2;
        }
        // const cardContainer = document.getElementById("cardProducts");
        // if (cardContainer != null) {
        //     const cardProducts = Array.from(cardContainer.childNodes);
        //     cardProducts.map((product) => {
        //         product.style.backgroundColor = color;
        //         product.style.color = aboutText;
        //         return product;
        //     });
        // }
        const cartButton = document.getElementById("cartButton");
        if (cartButton != null) {
            cartButton.style.background = color_1;
            cartButton.style.backgroundImage = color_2;
            cartButton.style.color = aboutText;
        }
        const ProductImages = document.getElementById("ProductImages");
        if (ProductImages != null) {
            ProductImages.style.background = color_1;
            ProductImages.style.backgroundImage = color_2;
        }
        const currentView = document.getElementById("view_id");
        if (currentView != null) {
            currentView.style.background = color_1;
            currentView.style.backgroundImage = color_2;
        }
        const HomeCategory = document.getElementById("HomeCategory");
        if (HomeCategory != null) {
            HomeCategory.style.background = color_1;
            HomeCategory.style.backgroundImage = color_2;
        }
        const Categorybody = document.getElementById("Categorybody");
        if (Categorybody != null) {
            Categorybody.style.background = color_1;
            Categorybody.style.backgroundImage = color_2;
            Categorybody.style.boxShadow = "40px 40px 40px black";
            Categorybody.style.color = aboutText;
        }
        document.getElementById("About_body").style.background = color_1;
        document.getElementById("About_body").style.backgroundImage = color_2;
        document.getElementById("aboutContact").style.color = aboutText;
    }, [color]);


    return (
        <>
            <Upclick />
            {showSearch && <Search />}
            {account && <Account />}
            {cart && <Cart />}
            <Navbar collapseOnSelect expand="lg" className="bg-black sticky-md-top" id="navbar-id">
                <Container fluid className='px-2'>
                    <Navbar.Brand className='text-white d-flex m-0 p-0' as={Link} to="/">
                        <img
                            alt=""
                            src={Logo}
                            width="80"
                            height="40"
                            className="d-inline-block align-top rounded-3"
                        />
                        <span className='my-auto me-3'>Store3i</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ boxShadow: 'none', background: 'white' }} />
                    <Navbar.Collapse id="basic-navbar-nav" className='order-2 me-auto'>
                        <Nav id='nav-text'>
                            <Nav.Link as={Link} to="/" className='font-weight-bold m-auto text-white'>Home</Nav.Link>
                            <Nav.Link as={Link} to="/products" className='font-weight-bold m-auto text-white'>Products</Nav.Link>
                            <Dropdown className='w-100 text-center'>
                                <Dropdown.Toggle className="bg-transparent text-white" id="dropdown-basic"
                                    style={{ borderColor: 'transparent' }}>Categories</Dropdown.Toggle>
                                <Dropdown.Menu className='bg-black text-center'>
                                    {categories.map(category => (
                                        <Dropdown.Item className='text-info' as={Link} to={`/category/${category.id}`} >{category.name}</Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                            <Nav.Link href="#About" className='font-weight-bold m-auto text-white'>About</Nav.Link>
                        </Nav>
                        <Nav className='ms-auto py-0 d-flex'>
                            <div className='mx-auto'>
                                <Button className='rounded-circle me-1 py-2' variant="primary" onClick={searchShow} >
                                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Button>
                                <Button className='rounded-circle me-1 py-2' variant="light" onClick={() => bgColorSet(1)}>
                                    {bgColor && <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.9001 2.30719C19.7392 1.8976 19.1616 1.8976 19.0007 2.30719L18.5703 3.40247C18.5212 3.52752 18.4226 3.62651 18.298 3.67583L17.2067 4.1078C16.7986 4.26934 16.7986 4.849 17.2067 5.01054L18.298 5.44252C18.4226 5.49184 18.5212 5.59082 18.5703 5.71587L19.0007 6.81115C19.1616 7.22074 19.7392 7.22074 19.9001 6.81116L20.3305 5.71587C20.3796 5.59082 20.4782 5.49184 20.6028 5.44252L21.6941 5.01054C22.1022 4.849 22.1022 4.26934 21.6941 4.1078L20.6028 3.67583C20.4782 3.62651 20.3796 3.52752 20.3305 3.40247L19.9001 2.30719Z" fill="#1C274C" />
                                        <path d="M16.0328 8.12967C15.8718 7.72009 15.2943 7.72009 15.1333 8.12967L14.9764 8.52902C14.9273 8.65407 14.8287 8.75305 14.7041 8.80237L14.3062 8.95987C13.8981 9.12141 13.8981 9.70107 14.3062 9.86261L14.7041 10.0201C14.8287 10.0694 14.9273 10.1684 14.9764 10.2935L15.1333 10.6928C15.2943 11.1024 15.8718 11.1024 16.0328 10.6928L16.1897 10.2935C16.2388 10.1684 16.3374 10.0694 16.462 10.0201L16.8599 9.86261C17.268 9.70107 17.268 9.12141 16.8599 8.95987L16.462 8.80237C16.3374 8.75305 16.2388 8.65407 16.1897 8.52902L16.0328 8.12967Z" fill="#1C274C" />
                                        <path opacity="0.5" d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#1C274C" />
                                    </svg>}

                                    {!bgColor && <svg width="24px" height="24px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet"><path fill="#FFAC33" d="M16 2s0-2 2-2s2 2 2 2v2s0 2-2 2s-2-2-2-2V2zm18 14s2 0 2 2s-2 2-2 2h-2s-2 0-2-2s2-2 2-2h2zM4 16s2 0 2 2s-2 2-2 2H2s-2 0-2-2s2-2 2-2h2zm5.121-8.707s1.414 1.414 0 2.828s-2.828 0-2.828 0L4.878 8.708s-1.414-1.414 0-2.829c1.415-1.414 2.829 0 2.829 0l1.414 1.414zm21 21s1.414 1.414 0 2.828s-2.828 0-2.828 0l-1.414-1.414s-1.414-1.414 0-2.828s2.828 0 2.828 0l1.414 1.414zm-.413-18.172s-1.414 1.414-2.828 0s0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0s0 2.828 0 2.828l-1.414 1.414zm-21 21s-1.414 1.414-2.828 0s0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0s0 2.828 0 2.828l-1.414 1.414zM16 32s0-2 2-2s2 2 2 2v2s0 2-2 2s-2-2-2-2v-2z">
                                    </path><circle fill="#FFAC33" cx="18" cy="18" r="10"></circle></svg>}
                                </Button>
                                <Button className='rounded-circle me-1 py-2' variant="warning" onClick={handleCartShow}>
                                    <svg height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m20.756 5.345c-.191-.219-.466-.345-.756-.345h-13.819l-.195-1.164c-.08-.482-.497-.836-.986-.836h-2.25c-.553 0-1 .447-1 1s.447 1 1 1h1.403l1.86 11.164.045.124.054.151.12.179.095.112.193.13.112.065c.116.047.238.075.367.075h11.001c.553 0 1-.447 1-1s-.447-1-1-1h-10.153l-.166-1h11.319c.498 0 .92-.366.99-.858l1-7c.041-.288-.045-.579-.234-.797zm-1.909 1.655-.285 2h-3.562v-2zm-4.847 0v2h-3v-2zm0 3v2h-3v-2zm-4-3v2h-3l-.148.03-.338-2.03zm-2.986 3h2.986v2h-2.653zm7.986 2v-2h3.418l-.285 2z" /><circle cx="8.5" cy="19.5" r="1.5" /><circle cx="17.5" cy="19.5" r="1.5" /></svg>
                                </Button>
                                <Button variant="transparent" disabled className='border-0' style={{ marginLeft: '-20px', marginTop: '-20px', padding: '0' }}>
                                    <Badge bg="black" pill ><strong id='totalCart'>{cartItem}</strong></Badge>
                                </Button>
                                <Button className='rounded-circle me-1 py-2' variant="secondary" onClick={handleAccount}>
                                    <svg fill="#000000" width="24px" height="24px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M10.31,9.12H5.5A4.52,4.52,0,0,0,1,13.62,2.34,2.34,0,0,0,1,14H14.78a2.34,2.34,0,0,0,0-.38A4.51,4.51,0,0,0,10.31,9.12ZM8,7.88A3.94,3.94,0,1,0,4.06,3.94,3.94,3.94,0,0,0,8,7.88Z" />
                                        </g>
                                    </svg>
                                </Button>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;