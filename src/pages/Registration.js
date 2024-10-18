import React, { useState, useEffect } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import registrationform from '../restvalidation';
import './Registration.css';
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
    accountNumber: '',
    loanAmount: '',
    monthlyIncome: '',
    loanTerm: '',
    interestRate: '',
    monthlyInterestAmount: '',
    tin: '',
    consent: false
  });
  const [errors, seterror] = useState({});

  // loan calculation
  useEffect(() => {
    const { loanAmount, loanTerm, interestRate } = formData;
    if (loanAmount && loanTerm && interestRate) {
      const monthlyInterest = (loanAmount * (interestRate / 100) / 12 + loanAmount/(12*loanTerm)).toFixed(2);
      setFormData((prevData) => ({
        ...prevData,
        monthlyInterestAmount: monthlyInterest,
      }));
    }
  }, [formData.loanAmount, formData.loanTerm, formData.interestRate]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    //interest rates
    if (name === 'loanTerm') {
      let rate;
      switch (value) {
        case '1':
          rate = 12;
          break;
        case '2':
          rate = 10;
          break;
        case '3':
          rate = 9;
          break;
        case '4':
          rate = 8;
          break;
        case '5':
          rate = 7;
          break;
        default:
          rate = '';
      }
      setFormData((prevData) => ({
        ...prevData,
        interestRate: rate,
      }));
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationerror = registrationform(formData);
    seterror(validationerror.error);
    if (!validationerror.error) {
      try {
        const response = await axios.post('http://localhost:5000/registration', {
          ...formData,
          nic: formData.nic,
          fullName: formData.fullName,
          contactNumber: formData.contactNumber,
          address: formData.address,
          monthlyIncome: formData.monthlyIncome,
          loanAmount: formData.loanAmount,
          loanTerm: formData.loanTerm,
        });
      } catch (error) {
        console.error('Please Check the details Again', error.message);
        alert('Please Check Details Again');
      }
    }
  };

  return (
    <div className="container mt-5 ">
      <h1 className="mb-4 ">Registration Form</h1>
      <form className='form-reg ' onSubmit={handleSubmit}>
        {/* Personal Information */}
        <h4>Personal Information</h4>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange} 
              required          
            />
            {errors.fullName && <p style={{ color: 'red' }}>{errors.fullName}</p>}
          </div>
          <div className="col-md-6">
            <label className="form-label">Date of Birth</label>
            <input
              type="date"
              className="form-control"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required       
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <select
            className="form-select"
            name="gender"
            style={{width:'47%'}}
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">National Identity Card Number (NIC)</label>
            <input
              type="text"
              className="form-control"
              name="nic"
              value={formData.nic}
              onChange={handleChange}
              required        
            />
            {errors.nic && <p style={{ color: 'red' }}>{errors.nic}</p>}
          </div>
          <div className="col-md-6">
            <label className="form-label">Taxpayer Identification Number (TIN)</label>
            <input
              type="text"
              className="form-control"
              name="tin"
              value={formData.tin}
              onChange={handleChange}
              required          
            />
            {errors.tin && <p style={{ color: 'red' }}>{errors.tin}</p>}
          </div>
        </div>

        {/* Contact Information */}
        <h4>Contact Information</h4>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Contact Number</label>
            <input
              type="text"
              className="form-control"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}  
              required        
            />
            {errors.contactNumber && <p style={{ color: 'red' }}>{errors.contactNumber}</p>}
          </div>
          <div className="col-md-6">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required          
            />
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Residential Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required           
          />
          {errors.address && <p style={{ color: 'red' }}>{errors.address}</p>}
        </div>

        

        {/* Loan Information */}
        <h4>Loan Details</h4>
        <div className="row mb-3">
          {/* New Account Number Field */}
        <div className="mb-3">
          <label className="form-label">Account Number</label>
          <input
            type="text"
            className="form-control"
            name="accountNumber"
            value={formData.accountNumber}
            style={{width:'70%'}}
            onChange={handleChange}
            required          
          />
        </div>
          <div className="col-md-6">
            <label className="form-label">Loan Amount</label>
            <input
              type="number"
              className="form-control"
              name="loanAmount"
              value={formData.loanAmount}
              onChange={handleChange}
              required          
            />
            {errors.loanAmount && <p style={{ color: 'red' }}>{errors.loanAmount}</p>}
          </div>
          <div className="col-md-6">
            <label className="form-label">Loan Term (years)</label>
            <select
              className="form-select"
              name="loanTerm"
              value={formData.loanTerm}
              onChange={handleChange}
              required
            >
              <option value="">Select Loan Term</option>
              <option value="1">1 year</option>
              <option value="2">2 years</option>
              <option value="3">3 years</option>
              <option value="4">4 years</option>
              <option value="5">5 years</option>
            </select>
            {errors.loanTerm && <p style={{ color: 'red' }}>{errors.loanTerm}</p>}
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Monthly Income</label>
          <input
            type="number"
            className="form-control"
            name="monthlyIncome"
            style={{width:'47%'}}
            value={formData.monthlyIncome}
            onChange={handleChange}
            required          
          />
          {errors.monthlyIncome && <p style={{ color: 'red' }}>{errors.monthlyIncome}</p>}
        </div>
        <div className="mb-3">
          <label className="form-label"style={{ fontWeight: 'bold', color: '#004aad' }}>Interest Rate (%)</label>
          <input
            type="number"
            className="form-control"
            name="interestRate"
            style={{ fontWeight: 'bold', color: '#004aad', width:'47%' }}
            value={formData.interestRate}
            readOnly       
          />
        </div>
        <div className="mb-3">
          <label className="form-label"style={{ fontWeight: 'bold', color: '#004aad' }}>Monthly Interest Amount (LKR)</label>
          <input
            type="number"
            className="form-control"
            name="monthlyInterestAmount"
            style={{ fontWeight: 'bold', color: '#004aad', width:'47%' }}
            value={formData.monthlyInterestAmount}
            readOnly       
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
          <button type="submit" className="btn btn-primary "style={{width:'33%'}}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Registration;
