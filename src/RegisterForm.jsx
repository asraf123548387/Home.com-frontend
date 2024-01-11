import React, { useState } from 'react'
import UserService from '../src/service/UserService';
import { Link } from 'react-router-dom';

function RegisterForm() {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    mobile: "",
    password: "",
  });
  const [msg, setMsg] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear validation errors when the user types
  };

  const validateForm = () => {
    const newErrors = {};


    if (!user.userName.trim()) {
      newErrors.userName = "User Name is required";
    }

    if (!user.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!user.mobile.trim()) {
      newErrors.mobile = "Mobile No is required";
    } else if (!/^[0-9]+$/.test(user.mobile)) {
      newErrors.mobile = "Invalid mobile number";
    }

    if (!user.password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const RegisterUser = (e) => {
    e.preventDefault();

    if (validateForm()) {
      UserService.saveUser(user)
        .then((res) => {
          console.log("User Added Successfully");
          console.log(user);
          setMsg("User Added Successfully");
          setUser({
            userName: "",
            email: "",
            mobile: "",
            password: "",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100' style={{ background: '#3498db' }}>
      <div className='bg-white p-3 rounded w-50 shadow'>
        <h2 className="text-center mb-3">Register User</h2>
        {msg && <p className="text-center text-success font-weight-bold">{msg}</p>}
        <form onSubmit={(e) => RegisterUser(e)}>
          <div className='mb-3'>
            <label htmlFor='userName' className='form-label'>User Name:</label>
            <input type="text" name="userName" className='form-control' onChange={(e) => handleChange(e)} value={user.userName} />
            {errors.userName && <p className="text-danger">{errors.userName}</p>}
          </div>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>Email:</label>
            <input type="email" name="email" className='form-control' onChange={(e) => handleChange(e)} value={user.email} />
            {errors.email && <p className="text-danger">{errors.email}</p>}
          </div>
          <div className='mb-3'>
            <label htmlFor='mobile' className='form-label'>Mobile No:</label>
            <input type="text" name="mobile" className='form-control' onChange={(e) => handleChange(e)} value={user.mobile} />
            {errors.mobile && <p className="text-danger">{errors.mobile}</p>}
          </div>
          <div className='mb-3'>
            <label htmlFor='password' className='form-label'>Password:</label>
            <input type="password" name="password" className='form-control' onChange={(e) => handleChange(e)} value={user.password} />
            {errors.password && <p className="text-danger">{errors.password}</p>}
          </div>
          <div className="d-flex justify-content-between">
            <button type="submit" className='btn btn-primary btn-block'>Submit</button>
            <Link to="/" className='btn btn-primary btn-block'>Back to Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;