import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Leasingservices.css';
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Leasingservices = () => {
  const navigate = useNavigate();

  const handleApplyLeaseClick = () => {
    navigate('/leaseregistration');
  };

  return (
    <div className="container-fluid px-3">
        <Header />
      <header>
        <h2 className="text-center mb-4">Leasing Services</h2>
      </header>

      <div className="content mt-5">
        <p className="text-center lead">
          Discover our diverse leasing options designed to meet your personal and business needs.
        </p>

        {/* Card Section for Leasing Options */}
        <div className="row mt-4">
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={require('./Leasing_Images/seo_lease-a-car-for-a-month-1093965650_resized.avif')} className="card-img-top" alt="Vehicle Leasing" />
              <div className="card-body">
                <h5 className="card-title">Vehicle Leasing</h5>
                <p className="card-text">Purchase Your Dream Vehicle without the upfront costs.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={require('./Leasing_Images/real-estate-agents-offer-contracts-600nw-2297877821.webp')} className="card-img-top" alt="Commercial Leasing" />
              <div className="card-body">
                <h5 className="card-title">Commercial Property Leasing</h5>
                <p className="card-text">Secure prime locations for your business operations.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={require('./Leasing_Images/pngtree-finance-concept-leasing-on-digital-background-cyber-pixelated-investment-photo-image_21635050.jpg')} className="card-img-top" alt="Technology Leasing" />
              <div className="card-body">
                <h5 className="card-title">Technology Leasing</h5>
                <p className="card-text">Stay ahead with cutting-edge technology solutions.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Apply Lease Button */}
        <div className="text-center mt-4">
          <button
            onClick={handleApplyLeaseClick}
            className="btn btn-primary"
            style={{ backgroundColor: '#004aad', borderColor: '#004aad' }}
          >
            Apply Lease
          </button>
        </div>

        {/* FAQ Accordion Section */}
        <div className="mt-5">
          <h4 className="text-center">Frequently Asked Questions (FAQs)</h4>
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>What is equipment leasing?</Accordion.Header>
              <Accordion.Body>
                Equipment leasing allows businesses to use equipment without purchasing it outright. Instead, they pay a monthly fee to use the equipment.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>How does commercial property leasing work?</Accordion.Header>
              <Accordion.Body>
                Commercial property leasing involves renting space in a commercial building, where the lessee pays rent for the duration of the lease term.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>What are the benefits of technology leasing?</Accordion.Header>
              <Accordion.Body>
                Technology leasing helps businesses stay updated with the latest tech without large upfront investments, allowing for easier upgrades and better cash flow management.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Leasingservices;
