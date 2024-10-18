import React, { useState } from 'react';
import axios from 'axios';
import './FDregistration.css';

const FDRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    nationalID: '',
    address: '',
    city: '',
    country: '',
    phoneNumber: '',
    emailAddress: '',
    accountNumber: '',
    depositAmount: '',
    depositTenure: '',
    interestRate: '',
    interestAmount: '',
    paymentMode: ''
  });

  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({}); 


  const calculateInterestRate = (tenure, amount) => {
    let rate = 0;

    if (tenure === '3 Months') {
      rate = 4;
    } else if (tenure === '6 Months') {
      rate = 4.5;
    } else if (tenure === '1 Year') {
      rate = 5;
    }

    const interestAmount = (amount * rate * (parseInt(tenure) / 12)) / 100;

    return { rate, interestAmount };
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    let updatedData = { ...formData, [name]: value };

    if (name === 'depositTenure' || name === 'depositAmount') {
      const { depositTenure, depositAmount } = updatedData;
      if (depositTenure && depositAmount) {
        const { rate, interestAmount } = calculateInterestRate(depositTenure, depositAmount);
        updatedData.interestRate = rate;
        updatedData.interestAmount = interestAmount.toFixed(2);
      }
    }

    setFormData(updatedData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const form = event.currentTarget;
    let formErrors = {};
    let valid = true;

    // Validation
    Object.keys(formData).forEach(key => {
      if (!formData[key] && key !== 'interestRate' && key !== 'interestAmount') {
        formErrors[key] = `${key} is required`;
        valid = false;
      }
    });

    if (!agreeTerms) {
      formErrors.agreeTerms = 'You must agree to the terms and conditions.';
      valid = false;
    }

    setErrors(formErrors);
    setIsValid(valid);

    if (!valid) return;

    try {
      const response = await axios.post('http://localhost:5000/fd-registration', formData);
      alert(response.data.message);
      // Clear form
      setFormData({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        nationalID: '',
        address: '',
        city: '',
        country: '',
        phoneNumber: '',
        emailAddress: '',
        accountNumber: '',
        depositAmount: '',
        depositTenure: '',
        interestRate: '',
        interestAmount: '',
        paymentMode: ''
      });
      setAgreeTerms(false);
    } catch (error) {
      console.error('There was an error:', error);
      alert('Registration failed: ' + (error.response ? error.response.data.message : 'Unknown error'));
    }
  };

  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <form className="form-fdreg border p-4 rounded shadow" onSubmit={handleSubmit} noValidate validated={isValid}>
            <h2 className="text-center mb-4">Fixed Deposit Registration</h2>

            <div className="row">
              {/* Personal Information */}
              <div className="col-md-6">
                <h4>Personal Information</h4>
                {errors.firstName && <div className="text-danger">{errors.firstName}</div>}
                <div className="form-group mb-3">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                {errors.lastName && <div className="text-danger">{errors.lastName}</div>}
                <div className="form-group mb-3">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>

                {errors.dateOfBirth && <div className="text-danger">{errors.dateOfBirth}</div>}
                <div className="form-group mb-3">
                  <label htmlFor="dateOfBirth">Date of Birth</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    id="dateOfBirth"
                    className={`form-control ${errors.dateOfBirth ? 'is-invalid' : ''}`}
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                  />
                </div>

                {errors.nationalID && <div className="text-danger">{errors.nationalID}</div>}
                <div className="form-group mb-3">
                  <label htmlFor="nationalID">National Identity Number</label>
                  <input
                    type="text"
                    name="nationalID"
                    id="nationalID"
                    className={`form-control ${errors.nationalID ? 'is-invalid' : ''}`}
                    value={formData.nationalID}
                    onChange={handleChange}
                    required
                  />
                </div>

                {errors.address && <div className="text-danger">{errors.address}</div>}
                <div className="form-group mb-3">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>

                {errors.city && <div className="text-danger">{errors.city}</div>}
                <div className="form-group mb-3">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>

                {errors.country && <div className="text-danger">{errors.country}</div>}
                <div className="form-group mb-3">
                  <label htmlFor="country">Country</label>
                  <select
                    name="country"
                    id="country"
                    className={`form-control ${errors.country ? 'is-invalid' : ''}`}
                    value={formData.country}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Country</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    
                  </select>
                </div>
              </div>

              {/* Deposit Details */}
              <div className="col-md-6">
                <h4>Deposit Details</h4>

                {errors.accountNumber && <div className="text-danger">{errors.accountNumber}</div>}
                <div className="form-group mb-3">
                  <label htmlFor="accountNumber"style={{ fontWeight: 'bold'}}>Account Number</label>
                  <input
                    type="text"
                    name="accountNumber"
                    id="accountNumber"
                    className={`form-control ${errors.accountNumber ? 'is-invalid' : ''}`}
                    value={formData.accountNumber}
                    onChange={handleChange}
                    required
                  />
                </div>

                {errors.depositAmount && <div className="text-danger">{errors.depositAmount}</div>}
                <div className="form-group mb-3">
                  <label htmlFor="depositAmount"style={{ fontWeight: 'bold'}}>Deposit Amount</label>
                  <input
                    type="number"
                    name="depositAmount"
                    id="depositAmount"
                    className={`form-control ${errors.depositAmount ? 'is-invalid' : ''}`}
                    value={formData.depositAmount}
                    onChange={handleChange}
                    required
                  />
                </div>

                {errors.depositTenure && <div className="text-danger">{errors.depositTenure}</div>}
                <div className="form-group mb-3">
                  <label htmlFor="depositTenure" style={{ fontWeight: 'bold'}}>Deposit Tenure</label>
                  <select
                    name="depositTenure"
                    id="depositTenure"
                    className={`form-control ${errors.depositTenure ? 'is-invalid' : ''}`}
                    value={formData.depositTenure}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Tenure</option>
                    <option value="3 Months">3 Months</option>
                    <option value="6 Months">6 Months</option>
                    <option value="1 Year">1 Year</option>
                  </select>
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="interestRate" style={{ fontWeight: 'bold', color: '#004aad' }}>Interest Rate (%)</label>
                  <input
                    type="text"
                    name="interestRate"
                    id="interestRate"
                    className="form-control"
                    style={{ fontWeight: 'bold', color: '#004aad' }}
                    value={formData.interestRate}
                    readOnly
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="interestAmount" style={{ fontWeight: 'bold', color: '#004aad' }}>Total Interest Amount</label>
                  <input
                    type="text"
                    name="interestAmount"
                    id="interestAmount"
                    className="form-control"
                    style={{ fontWeight: 'bold', color: '#004aad' }}
                    value={formData.interestAmount}
                    readOnly
                  />
                </div>

                {errors.paymentMode && <div className="text-danger">{errors.paymentMode}</div>}
                <div className="form-group mb-3">
                  <label htmlFor="paymentMode"style={{ fontWeight: 'bold'}}>Interest Payment Mode</label>
                  <select
                    name="paymentMode"
                    id="paymentMode"
                    className={`form-control ${errors.paymentMode ? 'is-invalid' : ''}`}
                    value={formData.paymentMode}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Payment Mode</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Quarterly">Quarterly</option>
                    <option value="Annually">Annually</option>
                  </select>
                </div>
                 
                <div className="form-group mb-3">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  id="agreeTerms"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                />
                <label htmlFor="agreeTerms" className="ms-2">
                  I agree to the <a href="/terms">terms and conditions</a>.
                </label>
              </div>
                {errors.agreeTerms && <div className="text-danger">{errors.agreeTerms}</div>}
                <button type="submit" className="btn btn-primary position-center" >
                  Submit
                </button>
              </div>

              {/* Terms Agreement */}
              

              <div className="form-group mb-3 text-center">
                
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FDRegistration;
