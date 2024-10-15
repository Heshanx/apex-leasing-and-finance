import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css';

const Dashboard = () => {
  const [showButton, setShowButton] = useState(false);

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

      {/* Carousel Section */}
      <div className="row">
        {/* Left Content */}
        <div className="col-md-3 d-none d-md-block mb-4"> 
          <div className="p-5 bg-light rounded">
            <h4>Why Choose Us?</h4>
            <p>
              At Apex Leasing and Finance, we understand that navigating the world of loans and financing can be overwhelming. That's why we are committed to providing our clients with the best loan services tailored to meet their individual needs.</p>
              <h5>Here's what sets us apart:</h5>
              <ul>
    <li>Affordable Rates</li>
    <li>Customer-First Approach</li>
    <li>Flexible Financing Options</li>
    <li>Expert Guidance</li>
    <li>Streamlined Process</li>
    <li>Transparency and Integrity</li>
    <li>Community Focused</li>
    <li>Proven Track Record</li>
</ul>
            
          </div>
        </div>

        {/* Carousel */}
        <div className="col-md-6 mb-4">
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6"></button>
            </div>

            <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={require('./Carousel_Images/personal-loan-services.jpg')} className="d-block w-100" alt="Personal Loan Services" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Personal Loan Services</h5>
                    <p>Discover the best personal loan options for your needs.</p>
                  </div>
                </div>

                <div className="carousel-item">
                  <img src={require('./Carousel_Images/49e0a73aa3e8cffe22bb3ff344e5c006079bcde3 .jpg')} className="d-block w-100" alt="Loan Consultation" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Loan Consultation</h5>
                    <p>Get expert advice on loan services.</p>
                  </div>
                </div>

                <div className="carousel-item">
                  <img src={require('./Carousel_Images/What-factors-should-you-consider-before-investing-in-corporate-fixed-deposits-.png')} className="d-block w-100" alt="Corporate Fixed Deposits" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Corporate Fixed Deposits</h5>
                    <p>Important factors to consider before investing.</p>
                  </div>
                </div>

                <div className="carousel-item">
                  <img src={require('./Carousel_Images/Online-Lending.jpg')} className="d-block w-100" alt="Online Lending Services" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Online Lending Services</h5>
                    <p>Fast and secure lending solutions at your fingertips.</p>
                  </div>
                </div>

                <div className="carousel-item">
                  <img src={require('./Carousel_Images/Banner-6-v5-1.jpg')} className="d-block w-100" alt="Banner" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Flexible Financing</h5>
                    <p>Tailored financing solutions for all customers.</p>
                  </div>
                </div>

                <div className="carousel-item">
                  <img src={require('./Carousel_Images/Fixed-Deposit-TT.webp')} className="d-block w-100" alt="Fixed Deposit" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Fixed Deposit Options</h5>
                    <p>Secure your future with our attractive interest rates.</p>
                  </div>
                </div>

                <div className="carousel-item">
                  <img src={require('./Carousel_Images/Technavio___IRTNTR43746.jpg')} className="d-block w-100" alt="Technavio Report" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Technavio Report</h5>
                    <p>Stay updated with the latest market insights.</p>
                  </div>
                </div>
              </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="col-md-3 d-none d-md-block mb-4">
          <div className="p-5 bg-light rounded">
            <h4>Our Expertise</h4>
            <p><strong>Pioneers in Value-Added Financial Services for Sri Lankans</strong></p>
            <h5>Leasing and Loans</h5>
<ul>
    <li>Tailored Solutions to Fit Your Needs</li>
    <li>Affordable Rates for Everyone</li>
</ul>

<h5>Fixed Deposits and Savings</h5>
<ul>
    <li>Attractive Rates with Enhanced Security</li>
    <li>Easy and Convenient Operations</li>
    <li>Investment Plans to Secure Your Future Today</li>
</ul>

<h5>Auto Loans</h5>
<ul>
    <li>Drive Your Dream Vehicle with Ease</li>
    <li>Join the Ranks of a Trusted Industry Leader</li>
</ul>
          </div>
        </div>
      </div>

      {/* Welcome Note Section */}
      <div className="container mt-5 text-center" style={{ marginTop: 'auto', padding: '20px 0' }}>
        <h2>Welcome to Apex Leasing and Finance</h2>
        <p>
        At Apex, we are dedicated to offering customized financing and leasing solutions that cater to both personal and business needs. Our team of experienced professionals takes the time to understand your unique circumstances, ensuring that we provide tailored options that best suit your financial goals. Whether you are looking for flexible leasing arrangements or affordable loan products, we are here to help you navigate the process with ease. With our commitment to exceptional customer service and innovative solutions, we empower you to achieve your aspirations and secure a brighter financial future.
        </p>
          <button className="btn btn-primary custom-blue-btn">Read More</button>
      </div>

      {/* Our Products Section */}
      <div className="container mt-5" style={{ marginTop: 'auto', padding: '20px 0' }}>
        <h3 className="text-center mb-4">Our Products</h3>
        <div className="row">
        <div className="col-md-4 mb-4">
            <div className="card">
              <img src={require('./Product_Images/homewise-loans-and-financial-services-vadgaon-sheri-pune-home-loans-7t686ma5f4.avif')} className="card-img-top fixed-size" alt="Loan Services" />
              <div className="card-body">
                <h5 className="card-title">Loan Services</h5>
                <p className="card-text">Flexible loan options with competitive rates.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={require('./Product_Images/leasing.jpeg')} className="card-img-top fixed-size" alt="Leasing Services" />
              <div className="card-body">
                <h5 className="card-title">Leasing Services</h5>
                <p className="card-text">Vehicle leasings for your business or personal use.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={require('./Product_Images/fd-features.webp')} className="card-img-top fixed-size" alt="Fixed Deposits" />
              <div className="card-body">
                <h5 className="card-title">Fixed Deposits</h5>
                <p className="card-text">Secure investment options for guaranteed returns.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Latest News and Events Section */}
      <div className="container mt-5">
        <h3 className="text-center mb-4">Latest News and Events</h3>
        <div className="row">
        <div className="col-md-4 mb-4">
            <div className="card">
              <img src={require('./News_Images/businessman-bank-clerk-rolls-cart-with-stacks-money-from-bank-open-door-credit-department_985641-5208.avif')} className="card-img-top fixed-size" alt="News 1" />
              <div className="card-body">
                <h5 className="card-title">News Title 1</h5>
                <p className="card-text">Brief description of news item 1.</p>
                <a href="#" className="btn btn-primary custom-blue-btn">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={require('./News_Images/david_plas_47549.jpg.jpeg')} className="card-img-top fixed-size" alt="News 2" />
              <div className="card-body">
                <h5 className="card-title">News Title 2</h5>
                <p className="card-text">Brief description of news item 2.</p>
                <a href="#" className="btn btn-primary custom-blue-btn">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={require('./News_Images/csm_61__Acheter_ou_louer__Update_Lease_Plus_EN_3997fbe1a0.jpg')} className="card-img-top fixed-size" alt="News 3" />
              <div className="card-body">
                <h5 className="card-title">News Title 3</h5>
                <p className="card-text">Brief description of news item 3.</p>
                <a href="#" className="btn btn-primary custom-blue-btn">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
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

export default Dashboard;
