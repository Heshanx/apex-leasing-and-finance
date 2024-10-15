import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';



const Aboutus = () => {

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
    {/* About Us Section */}
    <div className="container mt-5">
      <h2 className="text-center mb-4">About Apex Leasing and Finance</h2>
      <p className="text-center lead">
        With over a decade of experience in providing tailored financial solutions, Apex Leasing and Finance has been
        empowering individuals and businesses across Sri Lanka to achieve their financial goals.
      </p>
      <div className="row mt-5">
        {/* Company Mission */}
        <div className="col-md-6 mb-4">
          <div
            className="p-5 rounded"
            style={{ backgroundColor: '#004aad', color: 'white' }}
          >
            <h4>Our Mission</h4>
            <p>
              To deliver innovative, customer-centric financial services that foster long-term relationships, 
              empower our clients, and contribute to sustainable economic growth in Sri Lanka.
            </p>
          </div>
        </div>

        {/* Company Vision */}
        <div className="col-md-6 mb-4">
          <div
            className="p-5 rounded"
            style={{ backgroundColor: '#004aad', color: 'white' }}
          >
            <h4>Our Vision</h4>
            <p>
              To be the leading financial services provider in Sri Lanka, recognized for our integrity, 
              excellence, and commitment to delivering exceptional value to our clients and communities.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Our Values Section */}
   <div className="container mt-5">
  <h3 className="text-center mb-4">Our Core Values</h3>
  <div className="row">
    <div className="col-md-4 mb-4">
      <div className="card rounded">
        <div className="card-body" style={{ backgroundColor: '#ffbd59', color: 'black', padding: '1rem' }}>
          <h5 className="card-title">Integrity</h5>
          <p className="card-text">We operate with the highest ethical standards in all our interactions.</p>
        </div>
      </div>
    </div>
    <div className="col-md-4 mb-4">
      <div className="card rounded">
        <div className="card-body" style={{ backgroundColor: '#004aad', color: 'white', padding: '1rem' }}>
          <h5 className="card-title">Customer Focus</h5>
          <p className="card-text">Our clients' satisfaction is at the heart of everything we do.</p>
        </div>
      </div>
    </div>
    <div className="col-md-4 mb-4">
      <div className="card rounded">
        <div className="card-body" style={{ backgroundColor: '#9b9f9f', color: 'black', padding: '1rem' }}>
          <h5 className="card-title">Innovation</h5>
          <p className="card-text">We embrace technology to bring forward-thinking solutions to our clients.</p>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* History Section */}
      <div className="container mt-5 mb-5">
        <h3 className="text-center mb-4">Our History</h3>
        <p>
        <b>Founded in 2010,</b> Apex Leasing and Finance emerged from a vision to transform the financial landscape of Sri Lanka, making quality financial services accessible to every individual and business across the island. The founders, driven by a commitment to empower Sri Lankans, recognized the need for a reliable and customer-focused financial institution that could provide tailored solutions to meet diverse financial needs.
        </p>
        <p>
        <b>Our journey began with leasing services,</b> a sector that was underserved at the time. We aimed to bridge the gap by offering competitive leasing options that catered to both individuals and businesses. This foundational service quickly gained traction, allowing us to build a loyal customer base. Through dedication and hard work, we became known for our transparent practices, personalized service, and innovative financing solutions.
        </p>
        <p>As we established our presence in the market,<b>we expanded our portfolio to include personal loans and fixed deposits,</b> providing clients with a wider array of financial products that addressed their evolving needs. Our personal loan offerings were designed to empower individuals, whether they were looking to finance a new vehicle, pursue higher education, or manage unexpected expenses. Similarly, our fixed deposit schemes attracted customers seeking secure investment options with competitive interest rates, helping them grow their savings.
        </p>
        <p>Recognizing the growing demand for digital solutions, we embraced technology and launched innovative digital banking services. These solutions simplified banking processes, allowing clients to manage their finances conveniently and securely from their mobile devices or computers. Our commitment to innovation not only enhanced customer experience but also positioned Apex Leasing and Finance as a leader in the digital transformation of financial services in Sri Lanka.
        </p>
        <p><b>Over the years,</b> we have proudly served thousands of satisfied clients, helping them achieve their financial goals and aspirations. Our commitment to customer satisfaction is reflected in the long-lasting relationships we’ve built, grounded in trust, reliability, and support.
        </p>
        <p><b>As we look to the future,</b> Apex Leasing and Finance remains dedicated to expanding our services and enhancing our offerings. Our mission continues to be centered around empowering Sri Lankans with accessible and innovative financial solutions that cater to their diverse needs. We are excited to embark on the next chapter of our journey, driven by our passion for excellence and a vision for a financially inclusive Sri Lanka.
        </p>
      </div>

      {/* Contact Us Section */}
      <div className="container mt-5 mb-5">
        <h3 className="text-center mb-4">Contact Us</h3>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="p-5 bg-light rounded">
              <h4>Head Office</h4>
              <p>123 Apex Tower, Colombo, Sri Lanka</p>
              <p>Phone: +94 11 234 5678</p>
              <p>Email: info@apexfinance.lk</p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="p-5 bg-light rounded">
              <h4>Customer Support</h4>
              <p>For inquiries or support, reach us at:</p>
              <p>Phone: +94 77 123 4567</p>
              <p>Email: support@apexfinance.lk</p>
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

export default Aboutus;
