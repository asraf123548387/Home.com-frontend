import React from 'react'
import logo from '../../images/logo.png'
import user from '../../images/user.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../contextapi/authContext';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBook, faGift, faStar, faBookmark, faSignOutAlt,faQuestion } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const { isAuthenticated } = useAuth();
    const navigate=useNavigate();
    const userName=localStorage.getItem('userName');
    const firstLetter = userName ? userName.charAt(0).toUpperCase() : ''; // Get the first letter of the username
    const [isModalOpen,setIsModalOpen]=useState(false);
    const handleHover = () => {
      setIsModalOpen(true);
    };
  
    const handleModalClose = () => {
      setIsModalOpen(false);
    };
   const handleSignout=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    console.log("ghfsdfv")
    navigate('/login');


   }
  
  return (
<div>
    <div className=" bg-white border-b border-black   ">
        <nav className="container mx-auto p-4 flex items-center justify-between ml-4">
            <div className="flex items-center space-x-2">
                <img src={logo} alt="Logo" className="h-8 w-8 ml-2" />
                <div className="text-xl font-bold hidden md:block">home<sub>.com</sub></div>
            </div>
           <div className='flex'>

                <div className=''>
                  INR
                </div>
                {/* <div className='ml-3 rounded-2xl border w-4'>
                  <FontAwesomeIcon icon={faQuestion} />
                </div> */}  
           </div>
            

           
         

            {isAuthenticated ? (
        <button
        className="group hover:text-blue-500 transition-colors duration-300"
        onMouseEnter={handleHover}
        
      >
            <div className="flex items-center space-x-3 no-u">
              <div className="inline-block w-8 h-8 rounded-full bg-red-500 text-white text-center group-hover:bg-yellow-500">
                <span>{firstLetter}</span>
              </div>
              <span className="text-lg font-medium md:text-xl">{userName}</span>
            </div>
          </button>
          
          
          ) : (
            <Link to="/login" className="hover:text-red-300 text-red-800 no-underline mr-4 md:mr-20">Sign In</Link>
          )}
        </nav>
        <Modal isOpen={isModalOpen} onRequestClose={handleModalClose} style={{
          overlay: {
          background:'transparent'
          },
          content: {
            border: 'none',
            background: 'transparent',
         
         
         
        
          },
        }}>
   <div className="flex justify-end">
            <div className="flex flex-col items-center bg-white w-60 h-auto pt-3 pb-4 border border-gray-200 rounded-lg space-y-6 ">
                <Link to={'/userProfilePage'}   className='flex items-center w-full  hover:text-black pl-5 no-underline  '>
                    <FontAwesomeIcon icon={faUser} />
                    <button  className='ml-2 '>Manage Account</button>
                </Link>
                <Link className='flex items-center w-full  hover:text-black pl-5 no-underline' >
                    <FontAwesomeIcon icon={faBook} />
                    <button className='ml-2 '>Bookings</button>
                </Link>
                <Link className='flex items-center w-full   hover:text-black pl-5 no-underline'>
                    <FontAwesomeIcon icon={faGift} />
                    <button className='ml-2 '>Rewards</button>
                </Link>
                <Link className='flex items-center w-full   hover:text-black pl-5 no-underline'>
                    <FontAwesomeIcon icon={faStar} />
                    <button className='ml-2 '>Reviews</button>
                </Link>
                <Link className='flex items-center w-full  hover:text-black pl-5 no-underline'>
                    <FontAwesomeIcon icon={faBookmark} />
                    <button className='ml-2 '>Saved</button>
                </Link>
                <div className='flex items-center w-full  text-blue-600 hover:text-black pl-5 no-underline 'onClick={handleSignout}>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <button className='ml-2' >Sign Out</button>
                </div>
            </div>
        </div>

      </Modal>
    </div>
</div>

  )
}

export default Navbar
