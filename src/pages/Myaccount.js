import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Myaccount.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Myaccount = () => {
  // Sample data for visualization
  const savingsValue = 35; // Example value for savings progress
  const fixedDepositValue = 20;
  const loanValue = 30;
  const leasingValue = 50;

  const requestStatus = [
    { type: 'Fixed Deposit', status: 'Approved', date: '10/12/2023' },
    { type: 'Leasing', status: 'Pending', date: '15/01/2024' },
    { type: 'Loan', status: 'Rejected', date: '08/12/2023' }
  ];

  const recentTransections = [
    { type: 'Money Transfer - AccNo 123XXXX', value: '15000LKR' },
    { type: 'Ongoing Lease Installment', value: '39000LKR' },
    { type: 'Withdrawal - ATM', value: '5000LKR' },
    { type: 'Loan DEP', value: '20000LKR' },
    { type: 'Credited - AccNo 123XXXX', value: '55000LKR' }
  ];

  const upcomingPayments = [
    { type: 'Loan Installment', dueDate: 'Feb 2024' },
    { type: 'Annual Fee', dueDate: 'Feb 2024' },
    { type: 'Lease Interest', dueDate: 'Feb 2024' }
  ];

  return (
    <div className="dashboard-container">
      <Header />
      <div className="row">
        <div className="col-md-2 left-container">
          {/* Upcoming Payments Card moved to left container */}
          <div className="card text-center mb-3">
            <div className="card-body">
              <h5 className="card-title">Upcoming Payments</h5>
              <ul className="list-group">
                {upcomingPayments.map((payment, index) => (
                  <li key={index} className="list-group-item">
                    {payment.type}: <strong>{payment.dueDate}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-8 center-container">
          <div className="main-section">
            <h2 className="text-center mb-5">Savings and Finance Dashboard</h2>

            {/* First Row: Two equal-width cards, with Additional Info split vertically */}
            <div className="container mb-5">
              <div className="row justify-content-center">
                <div className="col-md-4 d-flex justify-content-center">
                  <div className="card text-center">
                    <div className="card-body">
                      <h5 className="card-title">Savings</h5>
                      <CircularProgressbar
                        value={savingsValue}
                        text={`${savingsValue}%`}
                        styles={buildStyles({
                          textColor: 'black',
                          pathColor: '#004aad',
                          trailColor: '#d6d6d6'
                        })}
                      />
                      <p className="mt-2">Total: 35,000LKR</p>
                    </div>
                  </div>
                </div>

                {/* Additional Info split into two vertical cards */}
                <div className="col-md-6 d-flex justify-content-center">
                  <div className="row w-100">
                    <div className="col-12 d-flex justify-content-center">
                      <div className="card text-center mb-2 additional-info-card">
                        <div className="card-body">
                          <h5 className="card-title">Income</h5>
                          <h3 className="card-titleh3">100000LKR</h3>
                          <p className="mt-2">-2% from last month</p>                        </div>
                      </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                      <div className="card text-center mb-2 additional-info-card">
                        <div className="card-body">
                          <h5 className="card-title">Expenses</h5>
                          <h3 className="card-titleh3">65000LKR</h3>
                          <p className="mt-2">Compared to last month</p>                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row: Two equal-height cards */}
            <div className="container mb-4">
              <div className="row justify-content-center">
                <div className="col-md-3 d-flex justify-content-center">
                  <div className="card text-center">
                    <div className="card-body">
                      <h5 className="card-title">Fixed Deposit</h5>
                      <CircularProgressbar
                        value={fixedDepositValue}
                        text={`${fixedDepositValue}%`}
                        styles={buildStyles({
                          textColor: '#004aad',
                          pathColor: '#ffbd59',
                          trailColor: '#d6d6d6'
                        })}
                      />
                      <p className="mt-2">Total: 13,000LKR</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center">
                  <div className="card text-center">
                    <div className="card-body">
                      <h5 className="card-title">Leasing</h5>
                      <CircularProgressbar
                        value={leasingValue}
                        text={`${leasingValue}%`}
                        styles={buildStyles({
                          textColor: '#004aad',
                          pathColor: '#004aad',
                          trailColor: '#d6d6d6'
                        })}
                      />
                      <p className="mt-2">Total: 35,000LKR</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center">
                  <div className="card text-center mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Loans</h5>
                      <CircularProgressbar
                        value={loanValue}
                        text={`${loanValue}%`}
                        styles={buildStyles({
                          textColor: '#004aad',
                          pathColor: '#ffbd59',
                          trailColor: '#d6d6d6'
                        })}
                      />
                      <p className="mt-2">Total: 19,500LKR</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="container mb-3">
              <div className="card mb-3">
                <div className="card-body">
                  <h4 className="card-title">Recent Transections</h4>
                  <ul className="list-group">
                    {recentTransections.map((transection, index) => (
                      <li key={index} className="list-group-item">
                        {transection.type}: <strong>{transection.value}</strong>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2 right-container">
          {/* Request Status Card moved to right container */}
          <div className="card text-center mb-3">
            <div className="card-body">
              <h5 className="card-title">Request Status</h5>
              <ul className="list-group">
                {requestStatus.map((item, index) => (
                  <li key={index} className="list-group-item">
                    {item.type}: <strong>{item.status}</strong> ({item.date})
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Myaccount;
