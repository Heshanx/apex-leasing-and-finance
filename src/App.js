import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Registration from './pages/Registration';

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
