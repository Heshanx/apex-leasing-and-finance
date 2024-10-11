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
    <div className="container-fluid d-flex align-items-center justify-content-center vh-100">
      <div className="row w-100 position-relative">
        <div className="col-md-9 p-0">
          <img
            src="apex-home-mobile (1).jpg"
            alt="Surfing"
            className="img-fluid w-100 h-100 border rounded"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="col-md-3 position-absolute end-0 top-50 translate-middle-y">
          <form className="login-form p-4 bg-white shadow rounded " onSubmit={handleSubmit}>
            <h2 className="text-center">LOGIN</h2>
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
            <button type="submit" className="btn btn-primary btn-block">Login</button>
            <p className="text-center mt-3"><a href="#">Forgot Password?</a></p>
            <p className="text-center">Don't have an account? <a href="#">Sign Up</a></p>
          </form>
        </div>
      </div>
    </div>
  );
}


export default Login;
