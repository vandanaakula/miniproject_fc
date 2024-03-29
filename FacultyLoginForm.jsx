import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function FacultyLoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/login", { email, password })
      .then(response => {
        setMessage(response.data);
        if (response.data === "Login success") {
          navigate('/faculty-options'); // Redirect to faculty options page after successful login
        }
      })
      .catch(error => console.error(error));
  }

  return (
    <div className='d-flex justify-content-center align-items-center border border-primary vh-100'>
      <div className='bg-white p-3 border border-blue rounded w-25'>
        <h2>Signin</h2>
        <form onSubmit={handleLogin}>
          <div className='mb-3'>
            <label htmlFor='email'><strong>Email</strong></label>
            <input type='email' placeholder='Enter Email' autoComplete='off' name='email'
              className='form-control rounded-0' onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='mb-3'>
            <label htmlFor='password'><strong>Password</strong></label>
            <input type='password' placeholder='Enter password' autoComplete='off' name='password'
              className='form-control' onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0'>Login</button>
        </form>
        <p>{message}</p>
      </div>
    </div>
  );
}
export default FacultyLoginForm;