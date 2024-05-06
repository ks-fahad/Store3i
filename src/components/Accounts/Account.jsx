import React, { useState } from 'react';
import LogIn from './LogIn';
import Profile from './Profile';
import { Container, Button } from 'react-bootstrap';

function Account() {
    const [account, setAccount] = useState(false);
    const [show, setShow] = useState(true);
    return (
        <>
            {show && <Container className='fixed-top bg-light rounded-2 p-4' style={{
                marginTop: '70px',
                background: 'rgb(168,178,255)',
                backgroundImage: 'linear-gradient(90deg, rgba(168,178,255,1) 0%, rgba(255,255,255,1) 35%, rgba(255,255,255,1) 100%)',
                boxShadow: '1px 1px 2px black'
            }} >
                <div className='d-flex'>
                    <div className='ms-auto' >
                        {account && <Button variant='warning' style={{ boxShadow: '1px 1px 3px black', marginRight: '5px' }}
                            onClick={() => setAccount(false)}>Log Out</Button>}
                        <Button variant='danger' style={{ boxShadow: '1px 1px 3px black' }}
                            onClick={() => setShow(false)}>Close</Button></div></div>
                {account && show ? <Profile /> : <LogIn />}
            </Container >}
        </>
    )
}

export default Account;