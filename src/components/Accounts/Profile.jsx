import React from 'react';
import { Container } from 'react-bootstrap';

function Profile() {
  return (
    <div className='p-3'>
      <h5 className='text-success'>You are logged in as</h5>
      <h4 className='text-center'>Name: </h4>
      <h5 className='text-center'>Email: </h5>
    </div>
  )
}

export default Profile;