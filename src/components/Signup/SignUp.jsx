import React from 'react';
import { Link } from 'react-router-dom';

import './signup.css';

const SignUp = () => {
  return (
    <div className="form">
      <form>
        <div className="input-container">
          <h2>Sign Up</h2>
          <label>Username</label>
          <input type="text" required />
        </div>

        <div className="input-container">
          <label>Email</label>
          <input type="text" required />
        </div>

        <div className="input-container">
          <label>Password</label>
          <input type="password" required />
        </div>

        <div className="button-container">
          <input type="submit" value="Sign Up" />
        </div>

        <div className="login-container">
          <span>Already have an account?</span>
          <Link to="/">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
