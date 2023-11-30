
import React from 'react';
// import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Home = () => {
  // const token = useSelector((state) => state.auth.token)
  const navigate=useNavigate();
  const handleLogout = () => {
    alert('You have been logged out.');
navigate('/')
   
  };



  return (
    <div >
      <nav style={{ backgroundColor: 'black', color: 'white', padding: '15px', display: 'flex', justifyContent: 'space-between' }}>
      <span style={{ fontWeight: 'bold', fontSize: '20px' }}>USER MANAGEMENT</span>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to={'/'} href="#home" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Home</Link>
        <Link  to={'/user'} style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>USER PROFILE</Link>
        <Link to={"/admin"} style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }} >ADMIN</Link>
        <button onClick={handleLogout} style={{ backgroundColor: 'transparent', color: 'white', border: '1px solid white', padding: '5px 10px', cursor: 'pointer' }}>
          Logout
        </button>
      </div>
    </nav>

      <div className="container text-center">
        {/* Your main content goes here */}
        <h1>Welcome to your homepage!</h1>
      </div>
    </div>
  );
}
  
export default Home;

