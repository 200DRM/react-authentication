import swal from 'sweetalert';
import React, { useState } from 'react';

import './Login.css';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validate = (e) => {
    e.preventDefault();
    if (username === 'login' && password === '1234') {
      swal('Successfully logged in', 'Congratulations, you logged in successfully!', 'success');
    } else {
      swal('Incorrect username or password', 'Check your details once more time', 'error');
    }
  };

  return (
    <div>
      <div className='row justify-content-center w-100'>
        <div className='col-md-4'>
          <h2>React - Authentication</h2>
          <h5>Test using login as 'login, and password as '1234'.</h5>
          <form
            onSubmit={validate}
          >
            <input
              className='form-control'
              onChange={(e) => setUsername(e.target.value)}
              placeholder='username'
              type='text'
              value={username}
            />
            <input
              className='form-control'
              onChange={(e) => setPassword(e.target.value)}
              placeholder='password'
              type='text'
              value={password}
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