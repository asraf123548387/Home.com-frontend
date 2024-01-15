import React, { useState, useEffect } from 'react';
import axios from 'axios';
import userlogo from '../../images/user.png';

function UserList() {
  const [isBlocked, setIsBlocked] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const blockUrl = 'http://localhost:8080/admin/block';
  const unblockUrl = 'http://localhost:8080/admin/unblock';

  const handleButtonClick = async (userId) => {
    const confirmed = window.confirm(`Are you sure you want to ${isBlocked ? 'unblock' : 'block'} this user?`);

    if (confirmed) {
      try {
        const url = isBlocked ? unblockUrl : blockUrl;
        const response = await axios.post(url, { userId }, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.status >= 200 && response.status < 300) {
          setIsBlocked(!isBlocked);
        } else {
          console.error('Failed to block/unblock user:', response.statusText);
        }
      } catch (error) {
        console.error('Error blocking/unblocking user:', error.message);
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');

    const fetchAllUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/admin/users', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          params: {
            search: searchQuery,
          },
        });

        if (response.status >= 200 && response.status < 300) {
          setUsers(response.data);
        } else {
          console.error('Failed to fetch users:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching users:', error.message);
      }
    };

    fetchAllUsers();
  }, [isBlocked, searchQuery]);
      


      
      
  return (
<div className="flex h-screen">
  <div className="w-1/4 p-6 bg-gray-800 text-white h-full">
    <div className="relative flex-col justify-start items-start">
      <div className="justify-center items-start gap-4 inline-flex">
        <div className="w-10 h-10 relative flex-col justify-start items-start flex">
          <img className="w-10 h-10 rounded-full" src={userlogo} alt="User Logo" />
          
        </div>
        <div className="flex-col justify-start items-start">
          <div className="text-white text-base font-bold leading-tight">Ashraf</div>
          <div className="text-gray-400 text-base font-normal leading-normal">Admin</div>
        </div>
      </div>

      <div className="flex-col justify-center items-start mt-4">
        <div className="pl-[23px] pr-[77.04px] py-[7px] bg-gray-700 rounded-tr-[30px] rounded-br-[30px] border-l-2 border-green-500 flex items-center gap-2">
          <div className="w-10 h-10 pl-[11px] pr-[10.69px] py-3 bg-gray-800 rounded-[40px]">
            <img src={userlogo} alt="User Logo" />
          </div>
          <div className="text-green-500 text-base font-medium leading-normal">User Manage</div>
        </div>
      </div>
    </div>
  </div>

  <div className="text-gray-900 w-3/4 h-full overflow-y-auto">
    <div className="p-4 flex">
      <h1 className="text-3xl">Users List</h1>
    </div>
    <input
            type="text"
            placeholder="Search by username"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="ml-4 p-2 border border-gray-800 rounded"
          />
    <div className="px-3 py-4 flex justify-center">
      <table className="w-full text-md bg-white shadow-md rounded mb-4">
        <tbody>
          <tr className="border-b">
            <th className="text-left p-3 px-5">userName</th>
            <th className="text-left p-3 px-5">Email</th>
            <th className="text-left p-3 px-5">phoneNumber</th>
            <th></th>
          </tr>

          {users.map((user) => (
                <tr key={user.id} className="border-b hover:bg-orange-100 bg-gray-100">
                  <td className="p-3 px-5">{user.userName}</td>
                  <td className="p-3 px-5">{user.email}</td>
                  <td className="p-3 px-5">{user.mobile}</td>
                  <td className="p-3 px-5 flex justify-end">
                  <button
              type="button"
              className={`mr-3 text-sm ${isBlocked ? 'bg-green-500 hover:bg-green-700' : 'bg-blue-500 hover:bg-blue-700'} text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline`}
              onClick={() => handleButtonClick(user.id)}
            >
              {isBlocked ? 'Unblock' : 'Block'}
            </button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  </div>
</div>


  )
}

export default UserList
