import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Registration from './pages/Registration';
import Aboutus from './pages/Aboutus';
import Loanservices from './pages/Loanservices';
import Leasingservices from './pages/Leasingservices';
import Fixeddeposits from './pages/Fixeddeposits';
import Myaccount from './pages/Myaccount';
import LeaseRegistration from './pages/LeaseRegistration';
import FDregistration from './pages/FDregistration';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Login />} />
          <Route path="/Registration" element={<Registration/>}/>
          <Route path="/leaseRegistration" element={<LeaseRegistration />} />
          <Route path="/fdregistration" element={<FDregistration />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/loanservices" element={<Loanservices />} />
          <Route path="/leasingservices" element={<Leasingservices />} />
          <Route path="/fixeddeposits" element={<Fixeddeposits />} />
          <Route path="/myaccount" element={<Myaccount />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
