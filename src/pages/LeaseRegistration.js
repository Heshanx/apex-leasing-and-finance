import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import './LeaseRegistration.css';
import leaseValidation from '../leasingvalid';
import { useNavigate } from 'react-router-dom';

const LeaseRegistration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    nic: '',
    phone: '',
    email: '',
    address: '',
    vehicleMake: '',
    vehicleModel: '',
    manufactureYear: '',
    vehicleCondition: '',
    vehicleRegNumber: '',
    leaseAmount: '',
    leaseTerm: '',
    downPayment: ''
  });
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validateError = leaseValidation(formData);
    setErrors(validateError.error);
    if (validateError.isValid) {

      if (!agreeTerms) {
        alert('You must agree to the terms and conditions.');
        return;
      }

      try {
        const response = await axios.post('http://localhost:5000/lease', formData);
        alert(response.data.message);
        navigate('/dashboard');

        // Reset form
        setFormData({
          fullName: '',
          nic: '',
          phone: '',
          email: '',
          address: '',
          vehicleMake: '',
          vehicleModel: '',
          manufactureYear: '',
          vehicleCondition: '',
          vehicleRegNumber: '',
          leaseAmount: '',
          leaseTerm: '',
          downPayment: ''
        });
        setAgreeTerms(false);
      } catch (error) {
        console.error('There was an error:', error);
        alert('Lease registration failed: ' + (error.response ? error.response.data.message : 'Unknown error'));
      }
    }
  };

  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <form className="lease-registration-container border p-4 rounded shadow" onSubmit={handleSubmit}>
            <h2 className="text-center mb-4">Vehicle Lease Registration</h2>

            <div className="row">
              {/* Personal Information */}
              <div className="col-md-6">
                <h4>Personal Information</h4>
                <div className="form-group mb-3">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    className="form-control"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  {errors.fullName && <p style={{ color: 'red' }}>{errors.fullName}</p>}
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="nic">NIC/Passport Number</label>
                  <input
                    type="text"
                    name="nic"
                    id="nic"
                    className="form-control"
                    placeholder="NIC/Passport"
                    value={formData.nic}
                    onChange={handleChange}
                  />
                  {errors.nic && <p style={{ color: 'red' }}>{errors.nic}</p>}
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="form-control"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    className="form-control"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                  {errors.address && <p style={{ color: 'red' }}>{errors.address}</p>}
                </div>
              </div>

              {/* Vehicle Information */}
              <div className="col-md-6">
                <h4>Vehicle Information</h4>
                <div className="form-group mb-3">
                  <label htmlFor="vehicleMake">Vehicle Make</label>
                  <input
                    type="text"
                    name="vehicleMake"
                    id="vehicleMake"
                    className="form-control"
                    placeholder="Vehicle Make"
                    value={formData.vehicleMake}
                    onChange={handleChange}
                  />
                  {errors.vehicleMake && <p style={{ color: 'red' }}>{errors.vehicleMake}</p>}
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="vehicleModel">Vehicle Model</label>
                  <input
                    type="text"
                    name="vehicleModel"
                    id="vehicleModel"
                    className="form-control"
                    placeholder="Vehicle Model"
                    value={formData.vehicleModel}
                    onChange={handleChange}
                  />
                  {errors.vehicleModel && <p style={{ color: 'red' }}>{errors.vehicleModel}</p>}
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="manufactureYear">Manufacture Year</label>
                  <input
                    type="number"
                    name="manufactureYear"
                    id="manufactureYear"
                    className="form-control"
                    placeholder="Manufacture Year"
                    value={formData.manufactureYear}
                    onChange={handleChange}
                  />
                  {errors.manufactureYear && <p style={{ color: 'red' }}>{errors.manufactureYear}</p>}
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="vehicleCondition">Vehicle Condition</label>
                  <select
                    name="vehicleCondition"
                    id="vehicleCondition"
                    className="form-control"
                    value={formData.vehicleCondition}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Condition</option>
                    <option value="new">New</option>
                    <option value="used">Used</option>
                  </select>
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="vehicleRegNumber">Vehicle Registration Number</label>
                  <input
                    type="text"
                    name="vehicleRegNumber"
                    id="vehicleRegNumber"
                    className="form-control"
                    placeholder="Registration Number"
                    value={formData.vehicleRegNumber}
                    onChange={handleChange}
                  />
                  {errors.vehicleRegNumber && <p style={{ color: 'red' }}>{errors.vehicleRegNumber}</p>}
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="leaseAmount">Lease Amount (LKR)</label>
                  <input
                    type="number"
                    name="leaseAmount"
                    id="leaseAmount"
                    className="form-control"
                    placeholder="Lease Amount"
                    value={formData.leaseAmount}
                    onChange={handleChange}
                  />
                  {errors.leaseAmount && <p style={{ color: 'red' }}>{errors.leaseAmount}</p>}
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="leaseTerm">Lease Term</label>
                  <select
                    name="leaseTerm"
                    id="leaseTerm"
                    className="form-control"
                    value={formData.leaseTerm}
                    onChange={handleChange}
                  >
                    <option value="">Select Term</option>
                    <option value="12">12 months</option>
                    <option value="24">24 months</option>
                    <option value="36">36 months</option>
                  </select>
                  {errors.leaseTerm && <p style={{ color: 'red' }}>{errors.leaseTerm}</p>}
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="downPayment">Down Payment (LKR)</label>
                  <input
                    type="number"
                    name="downPayment"
                    id="downPayment"
                    className="form-control"
                    placeholder="Down Payment"
                    value={formData.downPayment}
                    onChange={handleChange}
                  />
                  {errors.downPayment && <p style={{ color: 'red' }}>{errors.downPayment}</p>}
                </div>

                {/* Terms and Submit Button */}
                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    id="agreeTerms"
                    className="form-check-input"
                    checked={agreeTerms}
                    onChange={() => setAgreeTerms(!agreeTerms)}
                  />
                  <label htmlFor="agreeTerms" className="form-check-label">
                    I agree to the terms and conditions
                  </label>
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LeaseRegistration;
