import React, { useEffect, useState } from 'react'
import axios from 'axios';

function UserProfilePage() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const response = await axios.get(`http://localhost:8080/user/profile/${userId}`);
        setUser(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);


  
  return (
  <div>
    <div className='w-full h-screen bg-slate-200 flex'>
      <div className='bg-slate-200 w-3/12'>
        <div className='w-8'>


        </div>

      </div>
      <div className='w-9/12 h-5/6 bg-white rounded-3xl  mt-6'>
{user.userName}
      </div>

    </div>

   
</div>
  )
}

export default UserProfilePage
