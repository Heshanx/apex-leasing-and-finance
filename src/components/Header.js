import React from 'react';
import { Link } from 'react-router-dom'; 

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{ color: '#004aad' }}>Apex Leasing and Finance</a>
    
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
      style={{ borderColor: '#004aad' }} 
    >

      <span className="navbar-toggler-icon" style={{ color: '#004aad' }}></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" style={{ color: '#fff', backgroundColor: '#004aad' }}>
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{ color: '#004aad' }}>
            Loan Services
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{ color: '#004aad' }}>
            Leasing Services
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{ color: '#004aad' }}>
            Fixed Deposits
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{ color: '#004aad' }}>
            Payments And Billing
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{ color: '#004aad' }}>
            About Us
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{ color: '#004aad' }}>
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </header>
  );
};

export default Header;
