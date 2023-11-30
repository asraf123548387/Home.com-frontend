import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function EditUser() {
    const navigate=useNavigate();
    const { userId } = useParams();
    const [user, setUser] = useState({
        userName: '',
        email: '',
        mobile: '',
        
      });
      useEffect(() => {
        const fetchUserById = async () => {
          try {
            const token = localStorage.getItem('token');
            const config = {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            };
    
            const response = await axios.get(`http://localhost:8080/adminUpdateUsers/${userId}`, config);
            setUser(response.data);
          } catch (error) {
            console.error('Error fetching user by ID:', error.message);
          }
        };
    
        fetchUserById();
      }, [userId]);
      const handleEditUser = async (e) => {
        e.preventDefault();
    
        try {
          const token = localStorage.getItem('token');
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
    
        
          await axios.put(`http://localhost:8080/adminUpdateUsers/${userId}`, user, config);
    
           navigate('/admin')
          console.log('User updated successfully');
        } catch (error) {
          console.error('Error updating user:', error.message);
          
        }
      };
  return (
    <div>
          <div className='d-flex justify-content-center align-items-center vh-100' style={{ background: '#3498db' }}>
        <div className='bg-white p-3 rounded w-50 shadow'>
          <h2 className="text-center mb-3">Edit User</h2>
          <p className="text-center text-success font-weight-bold"></p>
          <form onSubmit={handleEditUser}>
            <div className='mb-3'>
              <label htmlFor='userName' className='form-label'>User Name:</label>
              <input type="text" name="userName" className='form-control'onChange={(e) => setUser({ ...user, userName: e.target.value })} value={user.userName} />
            </div>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>Email:</label>
              <input type="email" name="email" className='form-control' onChange={(e) => setUser({ ...user, email: e.target.value })} value={user.email} />
            </div>
            <div className='mb-3'>
              <label htmlFor='mobile' className='form-label'>Mobile No:</label>
              <input type="text" name="mobile" className='form-control' onChange={(e) => setUser({ ...user, mobile: e.target.value })} value={user.mobile} />
            </div>
          
            <div className="d-flex justify-content-between">
            <button type="submit" className='btn btn-primary btn-block'>Edit User</button>
  
</div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditUser
