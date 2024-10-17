import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import registrationform from '../restvalidation';
import axios from 'axios';

function Registration() {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    nic: '',
    contactNumber: '',
    email: '',
    address: '',
    employmentStatus: '',
    employer: '',
    jobTitle: '',
    monthlyIncome: '',
    otherIncome: '',
    loanAmount: '',
    loanPurpose: '',
    loanTerm: '',
    assets: '',
    currentDebts: '',
    collateral: '',
    tin : '',
    consent: false
  });
  const [errors,seterror] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value} = e.target;
    setFormData({
      ...formData,
      [name]:value,
    });
  };

  // Handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault();
    const validationerror = registrationform(formData) ;
    seterror(validationerror.error);
    if(validationerror.error){
    const response = await axios.post('http://localhost:5000/registration',{
      ...formData,
      nic : formData.nic,
      fullName : formData.fullName,
      contactNumber : formData.contactNumber,
      address : formData.address,
      monthlyIncome: formData.monthlyIncome,
      loanAmount : formData.loanAmount,
      loanTerm : formData.loanTerm,
      });
    }
  };


  return (
    <div className="container mt-5">
      <h1 className="mb-4">Registration Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Personal Information */}
        <h4>Personal Information</h4>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}           
          />
          {errors.fullName && <p style={{ color: 'red' }}>{errors.fullName}</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">Date of Birth</label>
          <input
            type="date"
            className="form-control"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
       
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <select
            className="form-select"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
           
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">National Identity Card Number (NIC)</label>
          <input
            type="text"
            className="form-control"
            name="nic"
            value={formData.ssn}
            onChange={handleChange}
        
          />
          {errors.nic && <p style={{ color: 'red' }}>{errors.nic}</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">Taxpayer Identityfication Number (TIN)</label>
          <input
            type="text"
            className="form-control"
            name="tin"
            value={formData.ssn}
            onChange={handleChange}
          
          />
          {errors.nic && <p style={{ color: 'red' }}>{errors.nic}</p>}
        </div>

        {/* Contact Information */}
        <h4>Contact Information</h4>
        <div className="mb-3">
          <label className="form-label">Contact Number</label>
          <input
            type="text"
            className="form-control"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}          
          />
           {errors.contactNumber && <p style={{ color: 'red' }}>{errors.contactNumber}</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
          
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">Residential Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={formData.address}
            onChange={handleChange}
           
          />
          {errors.address && <p style={{ color: 'red' }}>{errors.address}</p>}
        </div>

        {/* Employment Information */}
        <h4>Employment Information</h4>
        <div className="mb-3">
          <label className="form-label">Employment Status</label>
          <input
            type="text"
            className="form-control"
            name="employmentStatus"
            value={formData.employmentStatus}
            onChange={handleChange}
        
          />
          {errors.employmentStatus && <p style={{ color: 'red' }}>{errors.employmentStatus}</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">Employer's Name</label>
          <input
            type="text"
            className="form-control"
            name="employer"
            value={formData.employer}
            onChange={handleChange}
            
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Job Title</label>
          <input
            type="text"
            className="form-control"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
           
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Monthly Income</label>
          <input
            type="number"
            className="form-control"
            name="monthlyIncome"
            value={formData.monthlyIncome}
            onChange={handleChange}
          
          />
          {errors.monthlyIncome && <p style={{ color: 'red' }}>{errors.monthlyIncome}</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">Other Sources of Income</label>
          <input
            type="text"
            className="form-control"
            name="otherIncome"
            value={formData.otherIncome}
            onChange={handleChange}
          />
          {errors.otherIncome && <p style={{ color: 'red' }}>{errors.otherIncome}</p>}
        </div>

        {/* Loan Information */}
        <h4>Loan Details</h4>
        <div className="mb-3">
          <label className="form-label">Loan Amount</label>
          <input
            type="number"
            className="form-control"
            name="loanAmount"
            value={formData.loanAmount}
            onChange={handleChange}
          
          />
          {errors.loanAmount && <p style={{ color: 'red' }}>{errors.loanAmount}</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">Loan Purpose</label>
          <input
            type="text"
            className="form-control"
            name="loanPurpose"
            value={formData.loanPurpose}
            onChange={handleChange}
         
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Loan Term (years)</label>
          <input
            type="number"
            className="form-control"
            name="loanTerm"
            value={formData.loanTerm}
            onChange={handleChange}
       
          />
          {errors.loanTerm && <p style={{ color: 'red' }}>{errors.loanTerm}</p>}
        </div>

        {/* Financial Information */}
        <h4>Financial Information</h4>
        <div className="mb-3">
          <label className="form-label">Assets</label>
          <input
            type="text"
            className="form-control"
            name="assets"
            value={formData.assets}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Current Debts</label>
          <input
            type="text"
            className="form-control"
            name="currentDebts"
            value={formData.currentDebts}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Collateral (if any)</label>
          <input
            type="text"
            className="form-control"
            name="collateral"
            value={formData.collateral}
            onChange={handleChange}
          />
        </div>

        {/* Consent */}
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            required
          />
          <label className="form-check-label">
            I consent to the processing of my data for loan purposes.
          </label>
        </div>

        {/* Submit Button */}
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Registration;




