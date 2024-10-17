import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import './Signup.css';
import uservelidation from '../validation';
import { posix } from 'path-browserify';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    position: '',
    company: '',
    businessArena: '',
    employees: '',
    address: '',
    zip: '',
    country: '',
    phone: '',
    userEmail: '',
    userPassword: '',
  });
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [errors,seterror] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const validateerror = uservelidation(formData)
    seterror(validateerror.error);
    if(validateerror.isValid){

    if (!agreeTerms) {
      alert('You must agree to the terms and conditions.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/signup', {
        ...formData,
        firstname:formData.firstName,
        lastname : formData.lastName,
        position : formData.position,
        company : formData.company,
        businessArea : formData.businessArena,
        Employeement :formData.employees,
        address :formData.address,
        zipcode : formData.zip,
        country : formData.country,
        phonenumber: formData.phone,
        useremail: formData.userEmail,
        userpassword: formData.userPassword,            
      });
      alert(response.data.message);
      navigate('/dashboard');

      setFormData({
        firstName: '',
        lastName: '',
        position: '',
        company: '',
        businessArena: '',
        employees: '',
        address: '',
        zip: '',
        country: '',
        phone: '',
        userEmail: '',
        userPassword: '',

      });
      setAgreeTerms(false);
    } catch (error) {
      console.error('There was an error:', error);
      alert('Signup failed: ' + (error.response ? error.response.data.message : 'Unknown error'));
    }
  } 
  };

  return (
    <div className="container-fluid my-5">
  <div className="row">
  <div className="col-md-4">
    </div>
    <div className="col-md-10 mx-auto">
      <form className="form-detail border p-4 rounded shadow" onSubmit={handleSubmit}>
        <h2 className="text-center mb-4">Sign Up</h2>
        
        <div className="row">
          {/* General Information */}
          <div className="col-md-6">
            <h4>General Information</h4>
            <div className="form-group mb-3">
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                name="firstName"
                id="first_name"
                className="form-control fname"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}               
              />
              {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName}</p>}
            </div>

            <div className="form-group mb-3">
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                name="lastName"
                id="last_name"
                className="form-control lname"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}  
                required              
              />              
            </div>

            <div className="form-group mb-3">
              <label htmlFor="position">Position</label>
              <select
                name="position"
                id="position"
                className="form-control position"
                value={formData.position}
                onChange={handleChange}
                required
              >
                <option value="">Select Position</option>
                <option value="director">Director</option>
                <option value="manager">Manager</option>
                <option value="employee">Employee</option>
              </select>
            </div>

            <div className="form-group mb-3">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                name="company"
                id="company"
                className="form-control company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}               
              />
             {errors.company && <p style={{ color: 'red' }}>{errors.company}</p>}
            </div>

            <div className="form-group mb-3">
              <label htmlFor="businessArena">Business Arena</label>
              <input
                type="text"
                name="businessArena"
                id="businessArena"
                className="form-control businessArena"
                placeholder="Business Arena"
                value={formData.businessArena}
                onChange={handleChange}
                required             
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="employees">Employees</label>
              <select
                name="employees"
                id="employees"
                className="form-control employees"
                value={formData.employees}
                onChange={handleChange}
                required               
              >
                <option value="">Select Employees</option>
                <option value="trainee">Trainee</option>
                <option value="colleague">Colleague</option>
                <option value="associate">Associate</option>
              </select>
            </div>
          </div>

          {/* Contact Details */}
          <div className="col-md-6">
            <h4>Contact Details</h4>
            <div className="form-group mb-3">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                className="form-control address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}               
              />
              {errors.address && <p style={{ color: 'red' }}>{errors.address}</p>}
            </div>

            <div className="form-group mb-3">
              <label htmlFor="zip">Zip Code</label>
              <input
                type="text"
                name="zip"
                id="zip"
                className="form-control zip"
                placeholder="Zip Code"
                value={formData.zip}
                onChange={handleChange}
              />
             {errors.zip && <p style={{ color: 'red' }}>{errors.zip}</p>}
            </div>

            <div className="form-group mb-3">
              <label htmlFor="country">Country</label>
              <select
                name="country"
                id="country"
                className="form-control country"
                value={formData.country}
                onChange={handleChange}
                required        
              >
                <option value="">Select Country</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Malaysia">Malaysia</option>
                <option value="India">India</option>
              </select>
            </div>

            <div className="form-group mb-3">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="form-control phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}                
              />
              {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
            </div>

            <div className="form-group mb-3">
              <label htmlFor="user_email">Your Email</label>
              <input
                type="email"
                name="userEmail"
                id="user_email"
                className="form-control userEmail"
                placeholder="Your Email"
                value={formData.userEmail}
                onChange={handleChange}             
              />
              {errors.userEmail && <p style={{ color: 'red' }}>{errors.userEmail}</p>}
            </div>
            <div className="form-group mb-3">
              <label htmlFor="userpassword">Your Password</label>
              <input
                type="password"
                name="userPassword"
                id="userpassword"
                className="form-control userpassowrd"
                placeholder="Your Password"
                value={formData.userPassword}
                onChange={handleChange}             
              />
              {errors.userPassword && <p style={{ color: 'red' }}>{errors.userPassword}</p>}
            </div>


            {/* Terms and Signup button */}
            <div className="form-check mb-3">
              <input
                type="checkbox"
                name="agreeTerms"
                className="form-check-input"
                id="agreeTerms"
                checked={agreeTerms}
                onChange={() => setAgreeTerms(!agreeTerms)}
                required
              />
              <label className="form-check-label" htmlFor="agreeTerms">
                I do accept the <a href="#" className="text-primary">Terms and Conditions</a> of your site.
              </label>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
          </div>
        </div>
      </form>
    </div>
  </div>
  <Footer />
</div>

  );
};

export default Signup;

