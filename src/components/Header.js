import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  
  // Determine active tab based on current path
  const getActiveTab = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          {/* Left-aligned brand */}
          <Link className="navbar-brand" to="/" style={{ color: '#004aad', fontWeight: 'bold' }}>
            Apex Leasing and Finance
          </Link>

          {/* Centered nav items */}
          <div className="d-flex justify-content-center w-100">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <Link
                  className={`nav-link ${getActiveTab('/dashboard')}`}
                  id="pills-home-tab"
                  to="/dashboard"
                  style={{ color: '#004aad' }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item" role="presentation">
              <Link
                  className={`nav-link ${getActiveTab('/loanservices')}`}
                  id="pills-loanservices-tab"
                  to="/loanservices"
                  style={{ color: '#004aad' }}
                >
                  Loan Services
                </Link>
                
              </li>
              <li className="nav-item" role="presentation">
              <Link
                  className={`nav-link ${getActiveTab('/leasingservices')}`}
                  id="pills-leasingservices-tab"
                  to="/leasingservices"
                  style={{ color: '#004aad' }}
                >
                  Leasing Services
                </Link>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${getActiveTab('/fixed-deposits')}`}
                  id="pills-fixed-deposits-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-fixed-deposits"
                  type="button"
                  role="tab"
                  aria-controls="pills-fixed-deposits"
                  aria-selected="false"
                  style={{ color: '#004aad' }}
                >
                  Fixed Deposits
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${getActiveTab('/payments')}`}
                  id="pills-payments-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-payments"
                  type="button"
                  role="tab"
                  aria-controls="pills-payments"
                  aria-selected="false"
                  style={{ color: '#004aad' }}
                >
                  Payments And Billing
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <Link
                  className={`nav-link ${getActiveTab('/aboutus')}`}
                  id="pills-aboutus-tab"
                  to="/aboutus"
                  style={{ color: '#004aad' }}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${getActiveTab('/contactus')}`}
                  id="pills-contactus-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contactus"
                  type="button"
                  role="tab"
                  aria-controls="pills-contactus"
                  aria-selected="false"
                  style={{ color: '#004aad' }}
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Tab content */}
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
          {/* Home content */}
        </div>
        <div className="tab-pane fade" id="pills-loan" role="tabpanel" aria-labelledby="pills-loan-tab" tabIndex="0">
          {/* Loan Services content */}
        </div>
        <div className="tab-pane fade" id="pills-leasing" role="tabpanel" aria-labelledby="pills-leasing-tab" tabIndex="0">
          {/* Leasing Services content */}
        </div>
        <div className="tab-pane fade" id="pills-fixed-deposits" role="tabpanel" aria-labelledby="pills-fixed-deposits-tab" tabIndex="0">
          {/* Fixed Deposits content */}
        </div>
        <div className="tab-pane fade" id="pills-payments" role="tabpanel" aria-labelledby="pills-payments-tab" tabIndex="0">
          {/* Payments And Billing content */}
        </div>
        <div className="tab-pane fade" id="pills-aboutus" role="tabpanel" aria-labelledby="pills-aboutus-tab" tabIndex="0">
          {/* About Us content */}
        </div>
        <div className="tab-pane fade" id="pills-contactus" role="tabpanel" aria-labelledby="pills-contactus-tab" tabIndex="0">
          {/* Contact Us content */}
        </div>
      </div>
    </header>
  );
};

export default Header;
