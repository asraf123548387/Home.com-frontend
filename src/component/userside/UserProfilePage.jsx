import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from './Navbar';
import { useAuth } from '../../contextapi/authContext';


function UserProfilePage() {
  const { login } = useAuth();
  const [user, setUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState('');
  const [editPhone,setEditPhone]=useState(false);
  const [newPhone,setNewPhone]=useState('');


 



  const fetchUserData = async () => {
    try {
      const userId = localStorage.getItem('userId');
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:8080/user/profile/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUser(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);


  //// the below code is handling the the userName

  const handleSaveClick = () => {
      // Handle saving the new name
      const userId=localStorage.getItem('userId');
      const token=localStorage.getItem('token');
      localStorage.setItem('userName',newName)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      axios.put(`http://localhost:8080/user/profile/updateUser`,{userName:newName,id:userId})
      .then(response => {
        // Handle success response from the backend
        console.log('User name updated successfully');
        setIsEditing(false);
        login();

        fetchUserData();
    })
    .catch(error => {
        // Handle error response from the backend
        console.error('Error updating user name:', error);
    });
  };
  const handleEditClick = () => {
    setIsEditing(true);
};

//below code is handling the phone to edit 

const handleEditPhone = () => {
  setEditPhone(true);
};

const handleSavePhone = () => {
  // Handle saving the new name
  const userId=localStorage.getItem('userId');
  const token=localStorage.getItem('token');
  
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  axios.put(`http://localhost:8080/user/profile/updatePhone`,{mobile:newPhone,id:userId})
  .then(response => {
    // Handle success response from the backend
    console.log('phone updated successfully');
    setEditPhone(false);
    login();

    fetchUserData();
})
.catch(error => {
    // Handle error response from the backend
    console.error('Error updating user name:', error);
});
};




  
  return (
  <div>
    <Navbar/>
    <div className='flex '>
        <div className='w-1/12'>

        </div>
        <div className='w-10/12 font-sans'>
          <h1 className="mb-4">Personal Details</h1>
          <p className="mb-4">Update your info and find out how it's used.</p>
          <hr className="mb-4" />

          <div className='flex justify-between items-center mb-3'>
                <div className='w-4/12'>
                    <p className="flex-1">Name:</p>
                </div>
                <div className='w-6/12'>
                    {isEditing ? (
                        <input
                            type="text"
                            className="border-b border-gray-400"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                        />
                    ) : (
                        <p className="flex-1">{user.userName}</p>
                    )}
                </div>
                <div className='w-2/12 text-right'>
                    {isEditing ? (
                        <button onClick={handleSaveClick} className='text-blue-700'>Save</button>
                    ) : (
                        <button onClick={handleEditClick} className='text-blue-700'>Edit</button>
                    )}
                </div>
            </div>



          <hr className="mb-4" />

          <div className='flex justify-between items-center mb-3'>
            <div className='w-4/12'>
              <p className="flex-1">Email Address:</p>
             </div>
             <div className='w-6/12'>
              <p className="flex-1">{user.email}<button className='bg-green-700 text-white ml-3 rounded-lg w-16'>verified</button></p>
              <p>This is the email address you use to sign in. It’s also where we send your booking confirmations.</p>
              </div>
              <div className='w-2/12 text-right '>
              <button className='text-blue-700 w-auto hover:bg-slate-500'>Edit</button>
              </div>
          </div>
          <hr className="mb-4" />

           <div className='flex justify-between items-center mb-3'>
                <div className='w-4/12'>
                    <p className="flex-1">Phone Number:</p>
                </div>
                <div className='w-6/12'>
                    {editPhone ? (
                        <input
                            type="text"
                            className="border-b border-gray-400"
                            value={newPhone}
                            onChange={(e) => setNewPhone(e.target.value)}
                        />
                    ) : (
                        <p className="flex-1">{user.mobile}</p>
                    )}
                </div>
                <div className='w-2/12 text-right'>
                    {editPhone ? (
                        <button onClick={handleSavePhone} className='text-blue-700'>Save</button>
                    ) : (
                        <button onClick={handleEditPhone} className='text-blue-700'>Edit</button>
                    )}
                </div>
            </div>

          <hr className="mb-4" />
          <div className='flex justify-between items-center mb-3'>
            <div className='w-4/12'>
              <p className="flex-1">Date Of Birth:</p>
             </div>
             <div className='w-6/12'>
              <p className="flex-1"><input type='date' placeholder='enter the date of birth'/></p>
              
              </div>
              <div className='w-2/12 text-right'>
              <button className='text-blue-700'>Edit</button>
              </div>
          </div>
          <hr className="mb-4" />
          <div className='flex justify-between items-center mb-3'>
            <div className='w-4/12'>
              <p className="flex-1">Address:</p>
             </div>
             <div className='w-6/12'>
              <p className="flex-1">enter your address</p>
              
              </div>
              <div className='w-2/12 text-right'>
              <button className='text-blue-700'>Edit</button>
              </div>
          </div>
          <hr className="mb-4" />
      </div>

    </div>

   
 </div>
  )
}

export default UserProfilePage
