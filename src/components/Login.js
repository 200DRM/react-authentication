import React from 'react';

import './Login.css';

const Login = () => {
  return (
    <div>
      <div className='row justify-content-center w-100'>
        <div className='col-md-4'>
          <h2>React - Authentication</h2>
          <form>
            <input
              className='form-control'
              placeholder='username'
              type='text'
            />
            <input
              className='form-control'
              placeholder='password'
              type='text'
            />
            <input
              className='btn btn-primary'
              type='submit'
              value='SUBMIT'
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;