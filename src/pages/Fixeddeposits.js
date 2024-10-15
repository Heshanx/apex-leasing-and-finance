import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Fixeddeposits.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const Fixeddeposits = () => {
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);

  const handleApplyFDClick = () => {
    navigate('/fdregistration');
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container-fluid px-3">
      <Header />
      <header>
        <h2 className="text-center mb-4">Fixed Deposit Services</h2>
      </header>

      <div className="content mt-5">
        <p className="text-center lead">
          Secure your savings with our attractive fixed deposit rates and enjoy peace of mind with guaranteed returns.
        </p>

        {/* Card Section for Fixed Deposit Options */}
        <div className="row card-container mt-4">
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={require('./FD_Images/istockphoto-1308840306-612x612.jpg')} className="card-img-top" alt="Short-Term Fixed Deposit" />
              <div className="card-body">
                <h5 className="card-title">Short-Term Fixed Deposit</h5>
                <p className="card-text">Lock your funds for a period of 6 to 12 months with competitive interest rates.</p>
                <p className="card-text"><strong>Rates: 6.5% p.a.</strong></p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={require('./FD_Images/shutterstock-2401958867-2024-07-0c703378bf0c7a92fcbb9558e5d66246-scaled.avif')} className="card-img-top" alt="Mid-Term Fixed Deposit" />
              <div className="card-body">
                <h5 className="card-title">Mid-Term Fixed Deposit</h5>
                <p className="card-text">Enjoy flexible terms ranging from 1 to 2 years with attractive rates.</p>
                <p className="card-text"><strong>Rates: 7.0% p.a.</strong></p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={require('./FD_Images/png-transparent-fixed-deposit-time-deposit-deposit-account-interest-investment-dollar-saving-investment-bank-thumbnail.png')} className="card-img-top" alt="Long-Term Fixed Deposit" />
              <div className="card-body">
                <h5 className="card-title">Long-Term Fixed Deposit</h5>
                <p className="card-text">Maximize your earnings with deposits locked in for 3 years or more.</p>
                <p className="card-text"><strong>Rates: 7.5% p.a.</strong></p>
              </div>
            </div>
          </div>
        </div>

        {/* Apply Fixed Deposit Button */}
        <div className="text-center mt-4">
          <button
            onClick={handleApplyFDClick}
            className="btn btn-primary"
            style={{ backgroundColor: '#004aad', borderColor: '#004aad' }}
          >
            Apply Fixed Deposit
          </button>
        </div>

        {/* Benefits Section */}
        <div className="mt-5">
          <h4 className="text-center">Benefits of Fixed Deposits</h4>
          <ul className="list-group mt-3">
            <li className="list-group-item">Guaranteed returns on investment</li>
            <li className="list-group-item">Flexibility in choosing deposit terms</li>
            <li className="list-group-item">Safe and secure investment option</li>
            <li className="list-group-item">Loan facility against fixed deposits</li>
          </ul>
        </div>

        {/* FAQ Accordion Section */}
        <div className="mt-5">
          <h4 className="text-center">Frequently Asked Questions (FAQs)</h4>
          <div className="accordion mt-3" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  What is a fixed deposit?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  A fixed deposit is a financial instrument provided by banks or non-banking financial companies that offers a higher interest rate than a regular savings account, until the given maturity date.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  How are interest rates determined for fixed deposits?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Interest rates on fixed deposits are determined based on various factors including the economic conditions, the duration of the deposit, and the amount deposited.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Can I withdraw my fixed deposit before maturity?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Yes, you can withdraw your fixed deposit before the maturity date, but this may incur a penalty, and you may receive lower interest rates.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showButton && (
        <button
          onClick={handleScrollToTop}
          className={`btn btn-secondary position-fixed bottom-0 end-0 m-3 custom-scroll-btn custom-blue-btn`}
        >
          <span className="btn-text">Scroll to Top</span>
        </button>
      )}
      <Footer />
    </div>
  );
};

export default Fixeddeposits;
