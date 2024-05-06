import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import SignUp from './SignUp';

function LogIn() {
    const [login, setLogin] = useState(true);
    const formBox = {
        border: 'none',
        borderBottom: '2px solid gray',
        background: 'transparent',
        borderRadius: 0,
        boxShadow: 'none',
        margin: '2px'
    }
    return (
        <> {login && <>
            <h3 className='text-center m-2 text-primary'><strong>Log in with Given Information</strong></h3>
            <Form className="m-3 mx-5">
                <Form.Text className='m-2'>Enter your Login information.</Form.Text>
                <Form.Control type="email" style={formBox} placeholder="Enter email" />
                <Form.Control type="password" style={formBox} placeholder="Password" />
                <div className='text-center mt-3'><Button>Submit</Button></div>
                <div className='text-center p-2'>If you have no account,
                    <span className='btn text-warning p-0 border-0 m-0 px-2' onClick={() => setLogin(false)}>Create Account</span>
                </div>
            </Form>
        </>}
            {!login && <SignUp />}
        </>
    )
}

export default LogIn