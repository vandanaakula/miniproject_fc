import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminLoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/adminlogin', { email, password });
      setMessage(response.data);
      if (response.data === "Admin login success") {
        // Redirect to admin dashboard or any other page upon successful login
        navigate('/faculty-options');
      }
    } catch (error) {
      console.error(error);
      setMessage("An error occurred while logging in");
    }
  }

  return (
    <div>
      <h2>Admin Sign-In</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='email'><strong>Email:</strong></label>
          <input type='email' placeholder='Enter email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} className='form-control rounded-0'/>
        </div>
        <div className='mb-3'>
          <label htmlFor='password'><strong>Password:</strong></label>
          <input type='password' placeholder='Enter password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} className='form-control rounded-0'/>
        </div>
        <button type='submit' className='btn btn-success w-100 rounded-0'>Log in</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default AdminLoginForm;
