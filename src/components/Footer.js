// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start" style={{ marginTop: 'auto', padding: '20px 0' }}>
      <div className="container p-4">
        <section>
          <h5>Apex Leasing and Finance</h5>
          <p>No.1234, Colombo 007, Sri Lanka</p>
          <p>Phone: +94 11 2 345 678</p>
          <p>Email: info@apexfinance.com</p>
        </section>

        <section>
          <div className="row">
            <div className="col-md-4">
              <h6>Our Services</h6>
              <ul className="list-unstyled">
                <li><a href="#" style={{ color: '#004aad' }}>Loan Services</a></li>
                <li><a href="#" style={{ color: '#004aad' }}>Leasing Services</a></li>
                <li><a href="#" style={{ color: '#004aad' }}>Fixed Deposits</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h6>Resources</h6>
              <ul className="list-unstyled">
                <li><a href="#" style={{ color: '#004aad' }}>Contact Us</a></li>
                <li><a href="#" style={{ color: '#004aad' }}>FAQs</a></li>
                <li><a href="#" style={{ color: '#004aad' }}>Careers</a></li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: '#004aad', color: 'white' }}>
        © 2024 Apex Leasing and Finance. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
