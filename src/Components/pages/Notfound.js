import React from 'react';
import { Link } from 'react-router-dom'; 
import './Notfound.css'; 

const Notfound = () => {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="home-button">Home</Link>
    </div>
  );
}

export default Notfound;

