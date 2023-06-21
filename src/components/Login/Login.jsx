import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const users = [
    { username: 'admin', password: 'password' },
    { username: 'user1', password: '123456' },
    { username: 'user2', password: 'abcdef' },
  ];
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const foundUser = users.find(
      (user) => user.username === username && user.password === password
    );
    
    if (foundUser) {
      alert('Login successful!');
      navigate('/home');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleFormSubmit}>
        <div className="input-container">
          <h2>Login</h2>
          <label>Username </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="button-container">
          <input type="submit" value="Login" />
        </div>
        <div className="register-container">
          <span>Don't have an account?</span>
          <Link to="/signup">Sign up</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
