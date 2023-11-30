
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function AdminPage() {
    const navigate=useNavigate();
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const token = localStorage.getItem('token');
            console.log(token)
            const config = {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            };
            let url = 'http://localhost:8080/admin/users';
            if (searchQuery) {
              url += `?search=${searchQuery}`;
            }


           const response = await axios.get(url, config);
            setUsers(response.data);
          } catch (error) {
            console.error('Error fetching users:', error.message);
            navigate('/home')
          }
        };
    
        fetchUsers();
      }, [searchQuery, navigate]);

      const handleDelete = async (userId) => {
        // Implement your delete logic here, for example, show a confirmation modal
        const confirmed = window.confirm('Are you sure you want to delete this user?');
        
        if (confirmed) {
          try {
            const token = localStorage.getItem('token');
            const config = {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            };
    
            // Make an API call to delete the user
            await axios.delete(`http://localhost:8080/admin/usersDelete/${userId}`, config);
    
            // Refresh the user list
            const updatedUsers = users.filter((user) => user.id !== userId);
            setUsers(updatedUsers);
    
            console.log(`User with ID ${userId} deleted successfully`);
          } catch (error) {
            console.error(`Error deleting user with ID ${userId}:`, error.message);
          }
        }
      };
      const handleEdit = (userId) => {
        // Implement your edit logic here, for example, open a modal
        navigate(`/edituser/${userId}`);
      };
      const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
      };
    
      const handleSearchSubmit = (e) => {
        e.preventDefault();
        // The search will be automatically triggered by the useEffect hook when searchQuery changes.
      };
      const handleLogout = () => {
        localStorage.removeItem('token');
      navigate('/')
      };
  return (
    <div >
    <nav style={{ backgroundColor: 'black', color: 'white', padding: '15px', display: 'flex', justifyContent: 'space-between' }}>
    <span style={{ fontWeight: 'bold', fontSize: '20px' }}>ADMIN</span>
    <div style={{ display: 'flex', alignItems: 'center' }}>
    <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search..."
              style={{ marginRight: '10px', padding: '5px' }}
              value={searchQuery}
              onChange={handleSearchChange}
            />
            {/* <button type="submit" className="btn btn-outline-light" style={{ cursor: 'pointer' }}>
              SEARCH
            </button> */}
          </form>
    <Link to={'/adduser'}className="btn btn-outline-light " style={{ cursor: 'pointer' }}>
      ADD USER
    </Link>
    <p style={{color:'black'}}>ashra</p>
    <button onClick={handleLogout} className="btn btn-outline-light " style={{ cursor: 'pointer' }}>
      LOGOUT
    </button>
    </div>
  </nav>

  <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">UserName</th>
          <th scope="col">Email</th>
          <th scope="col">Mobile</th>
          <th scope="col">Role</th>
        </tr>
      </thead>
      <tbody>
  {users.map((user, index) => (
    <tr key={index}>
      <th scope="row">{index + 1}</th>
      <td>{user.userName}</td>
      <td>{user.email}</td>
      <td>{user.mobile}</td>
      <td>{user.roles}</td>
      <td>
        <button className="btn btn-warning" onClick={() => handleEdit(user.id)}>
          Edit
        </button>
      </td>
      {user.roles !== 'ROLE_ADMIN' && (
      <td>
        <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>
          Delete
        </button>
      </td>
    )}
    </tr>
  ))}
</tbody>
    </table>
  </div>
  )
}

export default AdminPage
