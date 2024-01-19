import React from 'react'
import { useState } from 'react'
import Modal from 'react-modal';
import axios from 'axios';
const AddHotelModal=({isOpen,onSuccess})=> {
    const[hotel,setHotel]=useState({
        hotelName:'',
        email:'',
        phone:'',
        address:'',
        description:'',
        images:''
    })
const [msg,setMsg]=useState('');
const [errors,setErrors]=useState({});

const handleChange=(e)=>{
    const {name,value}=e.target;
    setHotel({...hotel,[name]:value});
    setErrors({...errors,[name]:""})
};

const validateForm = () => {
    const newErrors = {};
  
    if (!hotel.hotelName.trim()) {
      newErrors.hotelName = "Hotel Name is required";
    }
  
    if (!hotel.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(hotel.email)) {
      newErrors.email = "Invalid email format";
    }
  
    if (!hotel.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]+$/.test(hotel.phone)) {
      newErrors.phone = "Invalid phone number";
    }
  
    if (!hotel.address.trim()) {
      newErrors.address = "Address is required";
    }
  
    if (!hotel.description.trim()) {
      newErrors.description = "Description is required";
    }
  
    if (!hotel.images.trim()) {
      newErrors.images = "Images are required";
    }
  
    // Add additional validation rules as needed
  
    return newErrors;
  };


const RegisterUser = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem('userId');
    console.log(hotel)
    if (validateForm()) {
      try {
        const token = localStorage.getItem('token');
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          };
          const hotelWithUserId = {
            ...hotel,
            userId: userId,
          };

        
        // Make a POST request to your backend API to register the admin
        const response = await axios.post('http://localhost:8080/admin/savehotel', hotelWithUserId, { headers })
          
      

        // Check if the request was successful
        if (response.status === 200) {
          console.log("Hotel Added Successfully");
          console.log(hotel);

          setMsg("hotel  Added Successfully");
          // Redirect to OTP page with email state
          if (onSuccess) {
            onSuccess();
          }
          setHotel({
            hotelName:'',
            email:'',
            phone:'',
            address:'',
            description:'',
            images:'',
          });
        } else {
          // Handle other status codes or error scenarios
          setMsg('Failed to register admin. Please try again.');
        }
      } catch (error) {
        // Handle any errors that occurred during the request
        console.error('Error registering admin:', error.message);
        if (error.response && error.response.status === 400 && error.response.data) {
          setMsg(error.response.data);
        } else {
          console.log(error);
        }
      }
    }
  };

  return (
    <div>
 <Modal
  isOpen={isOpen}

  ariaHideApp={false}
  style={{
    overlay: {
      backgroundColor: 'transparent',  // Set overlay background to transparent
    },
    content: {
      border: 'none',  // Remove border
      background: 'transparent',  // Set content background to transparent
      padding: 0,
      overflowY: 'auto'
        // Remove padding
      
    },
  }}
>
<div>
        
        <div className='d-flex justify-content-center align-items-center vh-100'>
          <div className='bg-white p-3 rounded w-50 shadow'>
            <h2 className="text-center mb-3">Add Admin</h2>
            {msg && <p className="text-center text-success font-weight-bold">{msg}</p>}
            <form onSubmit={(e) => RegisterUser(e)}>
              <div className='mb-3'>
                <label htmlFor='userName' className='form-label'>Hotel Name:</label>
                <input type="text" name="userName" className='form-control' onChange={(e) => handleChange(e)} value={hotel.hotelName} />
                {errors.hotelName && <p className="text-danger">{errors.hotelName}</p>}
              </div>

              <div className='mb-3'>
                <label htmlFor='email' className='form-label'>Email:</label>
                <input type="email" name="email" className='form-control' onChange={(e) => handleChange(e)} value={hotel.email} />
                {errors.email && <p className="text-danger">{errors.email}</p>}
              </div>
              <div className='mb-3'>
                <label htmlFor='mobile' className='form-label'>Mobile No:</label>
                <input type="text" name="mobile" className='form-control' onChange={(e) => handleChange(e)} value={hotel.phone} />
                {errors.phone && <p className="text-danger">{errors.phone}</p>}
              </div>
              <div className='mb-3'>
                <label htmlFor='password' className='form-label'>address:</label>
                <input type="password" name="password" className='form-control' onChange={(e) => handleChange(e)} value={hotel.address} />
                {errors.address && <p className="text-danger">{errors.address}</p>}
              </div>
              <div className='mb-3'>
                <label htmlFor='password' className='form-label'>images:</label>
                <input type="password" name="password" className='form-control' onChange={(e) => handleChange(e)} value={hotel.images} />
                {errors.password && <p className="text-danger">{errors.password}</p>}
              </div>
              <div className='mb-3'>
                <label htmlFor='password' className='form-label'>description:</label>
                <input type="password" name="password" className='form-control' onChange={(e) => handleChange(e)} value={hotel.description} />
                {errors.description && <p className="text-danger">{errors.description}</p>}
              </div>
              <div className="d-flex justify-content-between">
                <button type="submit" className='btn btn-primary btn-block'>Add</button>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </Modal>








      
    </div>
  )
}


export default AddHotelModal;
