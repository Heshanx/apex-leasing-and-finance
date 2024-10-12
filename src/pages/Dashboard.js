import React from 'react';

const Dashboard = () => {
  return (
    <div className="container mt-6">
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
      style={{ borderColor: '#004aad' }} // Toggler button border color
    >
      {/* Custom icon color */}
      <span className="navbar-toggler-icon" style={{ color: '#004aad' }}></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul className="nav nav-pills nav-fill">
        {/* Set default color for nav links and active state color */}
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




<div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img
            src="apex-home-mobile (1).jpg"
            alt="1"
            className="img-fluid w-100 h-100 border rounded"
          />
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
    <img
            src="apex-home-mobile (1).jpg"
            alt="2"
            className="img-fluid w-100 h-100 border rounded"

          />
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
    <img
            src="apex-home-mobile (1).jpg"
            alt="3"
            className="img-fluid w-100 h-100 border rounded"

          />
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
    
  );
}

export default Dashboard;
