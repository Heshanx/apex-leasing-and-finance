import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="container-fluid vh-100 position-relative"> {/* Full viewport height, relative container */}
      
      {/* Background Image */}
      <div className="position-absolute top-0 start-0 w-75 h-100">
        <img
          src="ApexLogin.png"
          alt="Background"
          className="img-fluid w-100 h-100"
          style={{ objectFit: 'contain' }}
        />
      </div>

      {/* Login Form */}
      <div className="position-absolute top-0 end-0 w-25 h-100 d-flex align-items-center justify-content-center">
        <form className="login-form p-4 bg-white shadow rounded w-100 h-100 d-flex flex-column justify-content-center" onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <h2 className="text-center mb-4">LOGIN</h2>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter your password" />
          </div>
          <div className="form-group form-check mb-3">
            <input type="checkbox" className="form-check-input" id="rememberMe" />
            <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
          </div>
          <button type="submit" className="btn btn-dark btn-block mb-3"style={{ backgroundColor: '#004aad', color: '#fff' }}>Login</button>
          <p className="text-center"><a href="#">Forgot Password?</a></p>
          <p className="text-center">Don't have an account? <a href="#">Sign Up</a></p>
        </form>
      </div>
    </div>
  );
}

export default Login;
