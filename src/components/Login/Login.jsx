import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  
  const handleFormSubmit = (e) => {
    e.preventDefault();

  
    if (username === "admin" && password === "password") {
      console.log("toast")
      toast.success("Logged In!", {
        position: toast.POSITION.TOP_RIGHT,
      });

      setTimeout(() => {
        navigate('/home');
      }, 2000)
      
     
    } else {
      toast.warning("invalid credentials!!!",{
        position: toast.POSITION.TOP_RIGHT,
      });
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

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Login;
