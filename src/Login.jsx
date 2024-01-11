import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { login, setToken} from './slice/authSlice';
import axios from 'axios';
import UserService from './service/UserService';



function Login() {
  const dispatch = useDispatch();
 
  const [error1, setError1] = useState(null); 
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate=useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await UserService.userLogin(formData)

      if (response.status >= 200 && response.status < 300) {
        const token = response.data;
        localStorage.setItem('token', token);
     
        navigate('/');
      } else {
        // Display an error message for invalid credentials
        setError1('Invalid username or password');
      }
    } catch (error) {
      // Handle other types of errors (e.g., network issues)
      setError1('Login failed. Please try again.');
    }
  };
   
    return (
      <div className="d-flex justify-content-center align-items-center vh-100" style={{ background: '#3498db' }}>
      <div className="bg-white p-5 rounded w-50 shadow">
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
         <div style={{ color: 'red' }}>{error1}</div> 
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Username:
            </label>
            <input
              type="email"
              name="email"  
              className="form-control"
              placeholder="Enter useremail"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Log In
          </button>
          <p className="mt-3 text-center text-muted">By logging in, you agree to our terms and policy</p>
          <Link to="/SignUp" className="btn btn-outline-secondary btn-block">
            Create Account
          </Link>
        </form>
      </div>
    </div>
    );
  }
  
  

export default Login
