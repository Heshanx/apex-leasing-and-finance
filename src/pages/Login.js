import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReCAPTCHA from 'react-google-recaptcha';

const Login = () => {
  const navigate = useNavigate();
  const[logemail, setlogemail]= useState('');
  const[logpassword, setlopassword]=useState('');
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!captchaValue){
      alert('Please Complete reCAPCHA ');
      return;
    }
    try{
      const response = await axios.post('http://localhost:5000/login',{
        useremail: logemail,
        userpassword: logpassword,
        captcha : captchaValue
      });
       alert('login successful')
       navigate('/dashboard');
      
    }catch(error){
      alert('Login failed '+error.response.data.message);
    }
  };

  return (
    <div className="container-fluid vh-100 position-relative"> {/* Full viewport height, relative container */}
      
      {/* Background Image */}
      <div className="position-absolute top-0 start-0 w-75 h-100">
        <img
          src="ApexLogin.png"
          alt="Background"
          className="img-fluid w-100 h-100"
          style={{ objectFit: 'contain' }}
        />
      </div>

      {/* Login Form */}
      <div className="position-absolute top-0 end-0 w-25 h-100 d-flex align-items-center justify-content-center">
        <form className="login-form p-4 bg-white shadow rounded w-100 h-100 d-flex flex-column justify-content-center" onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <h2 className="text-center mb-4">LOGIN</h2>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" value={logemail} onChange={(event)=>setlogemail(event.target.value)}required />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter your password" value={logpassword} onChange={(event)=>setlopassword(event.target.value)} required/>
          </div>
          <div className="form-group form-check mb-3">
            <input type="checkbox" className="form-check-input" id="rememberMe" />
            <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
          </div>   

         <div className="form-group form-check mb-3">
          <ReCAPTCHA 
           sitekey='6LccvGEqAAAAAKNkyQRE2TgbfHkOFe-zry1cRJZ0'
           onChange={(value)=>setCaptchaValue(value)}/>         
         </div>

          <button type="submit" className="btn btn-dark btn-block mb-3"style={{ backgroundColor: '#004aad', color: '#fff' }}>Login</button>
          <p className="text-center"><a href="#">Forgot Password?</a></p>
          <p className="text-center">Don't have an account? <a href="#" onClick={() => navigate('/Signup')}>Sign Up</a></p>
        </form>
      </div>
    </div>
  );
}

export default Login;
