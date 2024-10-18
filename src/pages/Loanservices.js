import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Loanservices.css';
import { useNavigate } from 'react-router-dom';


const Loanservices = () => {
    const navigate = useNavigate();

    const handleApplyLoanClick = () => {
      navigate('/registration');
    };
  return (
    <div className="container-fluid px-3">
      <Header />
      
      {/* Loan Services Section */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Our Loan Services</h2>
        <p className="text-center lead">
          At Apex Leasing and Finance, we offer a comprehensive range of loan products tailored to meet your financial needs.
          Whether you're looking to fund personal projects, invest in your education, or purchase your dream home, we have flexible solutions to help you achieve your goals.
        </p>

        <div className="row mt-5">
          {/* Personal Loans */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Personal Loans</h5>
                <p className="card-text">
                  Our personal loans are designed to help you cover unexpected expenses, finance major purchases, or consolidate debt. 
                  With competitive interest rates and flexible repayment terms, we make it easier for you to manage your finances.
                </p>
                <p className="card-text">
                  <strong>Features:</strong>
                  <ul>
                    <li>Quick and easy application process</li>
                    <li>Flexible loan amounts and repayment terms</li>
                    <li>No hidden fees</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          
          {/* Home Loans */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Home Loans</h5>
                <p className="card-text">
                  Make your dream home a reality with our competitive home loan options. 
                  We provide customized financing solutions tailored to fit your budget and needs.
                </p>
                <p className="card-text">
                  <strong>Features:</strong>
                  <ul>
                    <li>Low interest rates</li>
                    <li>Flexible repayment options</li>
                    <li>Fast approval process</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          
          {/* Education Loans */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Education Loans</h5>
                <p className="card-text">
                  Invest in your future with our education loans, which cover tuition fees, study materials, and living expenses.
                  We aim to make quality education accessible to everyone.
                </p>
                <p className="card-text">
                  <strong>Features:</strong>
                  <ul>
                    <li>Funding for undergraduate and postgraduate studies</li>
                    <li>Flexible repayment plans aligned with your career path</li>
                    <li>Support for international studies</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Apply for Loan Button */}
        <div className="text-center mt-5">
        <button
            onClick={handleApplyLoanClick}
            className="btn btn-primary"
            style={{ backgroundColor: '#004aad', borderColor: '#004aad' }}
          >
            Apply Loan
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Loanservices;
