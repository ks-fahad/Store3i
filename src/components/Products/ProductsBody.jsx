import React from 'react';
import Container from 'react-bootstrap/Container';
import NavBar from '../Header/NavBar';
import View from '../View/View';
import Footer from '../Footer/Footer';


function Body() {
    return (
        <>
            <Container fluid className="p-0">
                <NavBar />
                <View category={-1}/>
                <Footer />
            </Container>
        </>
    )
}

export default Body;