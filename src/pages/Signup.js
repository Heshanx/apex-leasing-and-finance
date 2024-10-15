import React, { useState } from 'react';
import axios from 'axios';
import uservelidation from '../validation';

const Signup = () => {
  const [custname, setcustname]= useState('');
  const [userEmail, setuseremail]= useState('');
  const [userPassword, setuserpassword]= useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit =(event)=>{
    event.preventDefault();
    const validationerror = uservelidation(custname,userEmail,userPassword);
    setErrors(validationerror.error);
    if(validationerror.isValid){
  try{
    axios.post('http://localhost:5000/signup',{
      cust_name : custname,
      User_name : userEmail,
      Password : userPassword,
    })
    .then((response) => { 
      alert(response.data.message);
      setcustname('');
      setuseremail('');
      setuserpassword('');
      setErrors({});
    })
    .catch((error) => { 
      console.error('There was an Error', error);
    });
  
   } catch(Error) {
      console.error('There was an Error',Error);

    }
  }
  };
  return (
    <div className="container mt-5">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your name" value={custname} onChange={(event)=>setcustname(event.target.value)} />
          {errors.custnames && <p style={{ color: "red" }}>{errors.custnames}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" value={userEmail} onChange={(event)=>setuseremail(event.target.value)}/>
          {errors.useremail && <p style={{ color: "red" }}>{errors.useremail}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Enter your password" value={userPassword} onChange={(event)=>setuserpassword(event.target.value)}/>
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>
        <button type="submit" className="btn btn-primary">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
