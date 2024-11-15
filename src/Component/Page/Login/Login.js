
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      alert("Login successful!");
      navigate('/account');
    } else {
      alert("Incorrect email or password. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h1>SIGN IN</h1>
      <p>Welcome back!</p>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="input-group">
          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            placeholder="Email" 
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            placeholder="Password" 
          />
          <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
        </div>
        <button type="submit" className="login-button">Sign In</button>
      </form>
      <div className="login-footer">
        <p>Don't have an account? <Link to="/register" className="register-link">Register here</Link></p>
        
      </div>
    </div>
  );
};

export default Login;
