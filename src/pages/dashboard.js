import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

export default function Dashboard() {
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;

  return (
    <div className="dashboardPage" style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome {user && user.username ? user.username : 'Guest'}!</h1>
      <p>This is your dashboard where you can view your profile, appointments, and more.</p>
      <p>
        <Link to="/">Return to Home</Link>
      </p>   
       </div>
  );
}
