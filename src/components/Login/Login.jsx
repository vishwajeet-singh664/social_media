import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // login logic
    if (username === 'admin' && password === 'password') {
      alert('Login successful!');
      // Perform any necessary actions after successful login

      // Redirect to the home page
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
