import React from 'react';
import NavBar from '../Header/NavBar';
import HomeBody from './HomeBody';
import Products from '../Products/Products'
import Footer from '../Footer/Footer';
import Category from './HomeCategory'
import { Container} from 'react-bootstrap';

function Home() {

    return (
        <>
            <NavBar />
            <HomeBody />
            <Category />
            <Container fluid className='m-0 w-100 bg-success bg-opacity-50 px-1 py-5'>
                <h3 className='w-100 text-center my-3 text-black'><strong>See Latest Products</strong></h3>
                <Products type='New' total={10} category_id={-1} showType={true}/>
            </Container>
            <Footer />
        </>
    );
}

export default Home;