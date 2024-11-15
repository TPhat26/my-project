
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Account.css';

const Account = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    alert('You have logged out successfully!');
    navigate('/');
  };

  return (
    <div className="account-container">
      <h1>Hey, {user ? user.firstName.toUpperCase() : "User"}!</h1>
      <div className="account-details">
        <div>
          <p>{user ? `${user.firstName} ${user.lastName}` : "Name"}</p>
          <p>{user ? user.email : "Email"}</p>
          <Link to="/" onClick={handleLogout} className="logout-link">Logout</Link>
        </div>
        <div className="account-divider"></div>
        <div className="account-actions">
          <button className="manage-subscriptions-btn">Manage Subscriptions</button>
          <p className="no-orders">You haven't placed any orders yet.</p>
        </div>
      </div>
    </div>
  );
};

export default Account;
