import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    
    emailjs.send(
      'service_j4lx6lm', 
      'template_9nmgakg', 
      { user_email: email }, 
      'TaeUwqFjLMRePanLe' 
    ).then((response) => {
      console.log('Email gửi thành công!', response.text);
      alert(`Password recovery link sent to ${email}`);
      navigate('/profile');
    }).catch((error) => {
      console.error('Gửi email thất bại...', error.text);
      alert('Failed to send recovery email.');
    });
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="forgot-password-container">
      <h1 className="forgot-password-title">Sign In</h1>
      <p className="forgot-password-subtitle">Recover your password</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="forgot-password-input"
          required
        />
        <button type="submit" className="forgot-password-submit">
          Submit
        </button>
        <Link to="/"><button type="button" className="forgot-password-cancel" onClick={handleCancel}>
          Cancel
        </button></Link>
      </form>
    </div>
  );
};

export default ForgotPassword;
