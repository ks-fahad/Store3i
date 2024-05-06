import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { dataref } from './firebase';
import LogIn from './LogIn';

function SignUp() {
  const [signup, setSignup] = useState(true);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [e_mail, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [cpass, setCPass] = useState('');
  const [cbox, setCbox] = useState(false);
  const [fback, setFback] = useState("Enter all information to create an account.");

  const [isEValid, setIsEValid] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSignup = async () => {
    dataref.ref("user").set({
      firstName: firstName,
      lastName: lastName,
      e_mail: e_mail,
      pass: pass
    }).catch(alert);
    setFback(<span className='text-success'>Create Account Successful !</span>)
  };

  const checkInput = () => {
    if (pass.length != 0 && firstName.length != 0 && lastName.length != 0 && e_mail.length != 0) {
      if (cbox) {
        setIsEValid(() => emailRegex.test(e_mail));
        if (emailRegex.test(e_mail)) {
          if (pass === cpass) { handleSignup }
          else setFback(<span className='text-warning'>Please check your confirm password !</span>);
        }
        else setFback(<span className='text-danger'>Email Address is not Valid !</span>);
      }
      else setFback(<span className='text-warning'>Please Select the confirm box.</span>);
    }
    else setFback(<span className='text-danger'>Don't leave the any boxes empty!</span>)
  };
  const formBox = {
    border: 'none',
    borderBottom: '2px solid gray',
    background: 'transparent',
    borderRadius: 0,
    boxShadow: 'none',
    margin: '2px'
  }
  return (
    <>
      {signup && <>
        <h3 className='text-center m-2 text-warning'><strong>Create Account with given information</strong></h3>
        <Form className="m-3 mx-5">
          <Form><Form.Text>{fback}</Form.Text>
            <Row className="mb-3">
              <Col><Form.Control placeholder="First name" style={formBox} onChange={(e) => setFirstName(e.target.value)} /></Col>
              <Col> <Form.Control placeholder="Last name" style={formBox} onChange={(e) => setLastName(e.target.value)} /></Col>
            </Row>
            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} style={formBox} />
            <Form.Control type="password" style={formBox} placeholder="Password" onChange={(e) => setPass(e.target.value)} />
            <Form.Control type="password" style={formBox} placeholder="Confirm Password" onChange={(e) => setCPass(e.target.value)} />
            <Form.Check type="checkbox" className='mt-3' label="confirm" onChange={(e) => setCbox(e.target.value)} />
          </Form>
          <div className='text-center mt-3'><Button variant='warning' className='text-light' onClick={checkInput}>Submit</Button></div>
          <div className='text-center p-2'>or,
            <span className='btn text-primary p-0 border-0 m-0 px-2' onClick={() => setSignup(false)}>Log In</span>
          </div>
        </Form>
      </>}
      {!signup && <LogIn />}
    </>
  )
}

export default SignUp;