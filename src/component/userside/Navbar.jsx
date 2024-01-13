import React from 'react'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

function Navbar({showSignInLink}) {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  return (
<div>
    <div className="bg-white border-b border-black">
        <nav className="container mx-auto p-4 flex items-center justify-between ml-4">
            <div className="flex items-center space-x-2">
                <img src={logo} alt="Logo" className="h-8 w-8 ml-2" />
                <div className="text-xl font-bold hidden md:block">home<sub>.com</sub></div>
            </div>

            {/* Responsive Navigation Menu */}
            <div className="md:hidden">
                {/* Add a responsive menu icon (e.g., hamburger menu) */}
            </div>

            {/* Authenticated Content */}
            {isAuthenticated ? (
                <div>
                    {/* Add code for authenticated user content */}
                </div>
            ) : (
               <Link to="/login" className="hover:text-red-300 text-red-500  no-underline mr-4 md:mr-20">Sign In</Link> 
            )}
        </nav>
    </div>
</div>

  )
}

export default Navbar
