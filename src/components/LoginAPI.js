import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/actions/authActions';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginAPI = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('https://fakestoreapi.com/users');
      const users = response.data;
      const user = users.find((u) => u.email === email && u.password === password);

      if (user) {
        dispatch(login(user));
        navigate('/');
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login with API</h2>
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginAPI;