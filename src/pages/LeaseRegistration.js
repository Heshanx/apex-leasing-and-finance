import React, { useState } from 'react';
import axios from 'axios';
import './LeaseRegistration.css';

const LeaseRegistration = () => {
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
    leaseAmount: '',
    leaseTerm: '',
    downPayment: '',
    interestRate: '',
    monthlyRental: ''
  });

  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({});

  const calculateMonthlyRental = (amount, downPayment, term) => {
    let rate = 0;
  
    if (term === 12) {
      rate = 15;
    } else if (term === 24) {
      rate = 16.5;
    } else if (term === 36) {
      rate = 18;
    }
  
    const principal = amount - downPayment;
    const monthlyInterest = (rate / 100) / 12;
    const monthlyRental = (principal * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -term));
    

    return {
      monthlyRental: monthlyRental.toFixed(2),
      interestRate: rate
    };
  };
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    const updatedData = { ...formData, [name]: value };
  

    if (name === 'leaseAmount' || name === 'downPayment' || name === 'leaseTerm') {
      const { leaseAmount, downPayment, leaseTerm } = updatedData;
      const term = parseInt(leaseTerm, 10);
      
      if (leaseAmount && downPayment && term) {
        const { monthlyRental, interestRate } = calculateMonthlyRental(leaseAmount, downPayment, term);
        updatedData.monthlyRental = monthlyRental;
        updatedData.interestRate = interestRate;
      }
    }
  
    setFormData(updatedData);
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const form = event.currentTarget;
    let formErrors = {};
    let valid = true;

    // Validate Personal Info
    const requiredFields = ['firstName', 'lastName', 'dateOfBirth', 'nationalID', 'address', 'city', 'country', 'phoneNumber', 'emailAddress'];
    requiredFields.forEach((key) => {
      if (!formData[key]) {
        formErrors[key] = `${key.replace(/([A-Z])/g, ' $1')} is required`;
        valid = false;
      }
    });

    // Validate Lease Info
    if (!formData.leaseAmount) {
      formErrors.leaseAmount = 'Lease Amount is required';
      valid = false;
    }

    if (!formData.leaseTerm) {
      formErrors.leaseTerm = 'Lease Term is required';
      valid = false;
    }

    if (!formData.downPayment) {
      formErrors.downPayment = 'Down Payment is required';
      valid = false;
    } else if (parseFloat(formData.downPayment) >= parseFloat(formData.leaseAmount)) {
      formErrors.downPayment = 'Down payment must be less than lease amount.';
      valid = false;
    }

    if (!agreeTerms) {
      formErrors.agreeTerms = 'You must agree to the terms and conditions.';
      valid = false;
    }

    setErrors(formErrors);
    setIsValid(valid);

    if (!valid) return;

    try {
      const requestData = {
        nic: formData.nationalID,      // Ma p nationalID to nic
        fullName: `${formData.firstName} ${formData.lastName}`,  // Combine first and last name into full_name
        contactNumber: formData.phoneNumber,
        address: `${formData.address}, ${formData.city}`,
        downPayment: formData.downPayment,
        leaseAmount: formData.leaseAmount,
        leaseTerm: formData.leaseTerm
      };
      const response = await axios.post('http://localhost:5000/lease-registration',requestData);
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
        leaseAmount: '',
        leaseTerm: '',
        downPayment: '',
        interestRate: '',
        monthlyRental: ''
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
          <form className="lease-registration-container border p-4 rounded shadow" onSubmit={handleSubmit} noValidate validated={isValid}>
            <h2 className="text-center mb-4">Lease Registration</h2>

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
                  <label htmlFor="nationalID">National ID</label>
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
                    {/* Add more countries here */}
                  </select>
                </div>

                {errors.phoneNumber && <div className="text-danger">{errors.phoneNumber}</div>}
                <div className="form-group mb-3">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>

                {errors.emailAddress && <div className="text-danger">{errors.emailAddress}</div>}
                <div className="form-group mb-3">
                  <label htmlFor="emailAddress">Email Address</label>
                  <input
                    type="email"
                    name="emailAddress"
                    id="emailAddress"
                    className={`form-control ${errors.emailAddress ? 'is-invalid' : ''}`}
                    value={formData.emailAddress}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Lease Information */}
              <div className="col-md-6">
                <h4>Lease Information</h4>
                {errors.leaseAmount && <div className="text-danger">{errors.leaseAmount}</div>}
                <div className="form-group mb-3">
                  <label htmlFor="leaseAmount">Lease Amount</label>
                  <input
                    type="number"
                    name="leaseAmount"
                    id="leaseAmount"
                    className={`form-control ${errors.leaseAmount ? 'is-invalid' : ''}`}
                    value={formData.leaseAmount}
                    onChange={handleChange}
                    required
                  />
                </div>

                {errors.leaseTerm && <div className="text-danger">{errors.leaseTerm}</div>}
                <div className="form-group mb-3">
                  <label htmlFor="leaseTerm">Lease Term (months)</label>
                  <select
                    name="leaseTerm"
                    id="leaseTerm"
                    className={`form-control ${errors.leaseTerm ? 'is-invalid' : ''}`}
                    value={formData.leaseTerm}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Lease Term</option>
                    <option value="12">12 months</option>
                    <option value="24">24 months</option>
                    <option value="36">36 months</option>
                  </select>
                </div>

                {errors.downPayment && <div className="text-danger">{errors.downPayment}</div>}
                <div className="form-group mb-3">
                  <label htmlFor="downPayment">Down Payment</label>
                  <input
                    type="number"
                    name="downPayment"
                    id="downPayment"
                    className={`form-control ${errors.downPayment ? 'is-invalid' : ''}`}
                    value={formData.downPayment}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="interestRate">Interest Rate (%)</label>
                  <input
                    type="number"
                    name="interestRate"
                    id="interestRate"
                    className="form-control"
                    value={formData.interestRate} // Display interest rate if needed
                    readOnly
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="monthlyRental">Monthly Rental (LKR)</label>
                  <input
                    type="text"
                    name="monthlyRental"
                    id="monthlyRental"
                    className="form-control"
                    value={formData.monthlyRental}
                    readOnly
                  />
                </div>

                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    id="agreeTerms"
                    className={`form-check-input ${errors.agreeTerms ? 'is-invalid' : ''}`}
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    required
                  />
                  <label htmlFor="agreeTerms" className="form-check-label">I agree to the terms and conditions.</label>
                  {errors.agreeTerms && <div className="text-danger">{errors.agreeTerms}</div>}
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LeaseRegistration;
