import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { FaSignOutAlt } from 'react-icons/fa';

function Header() {

  const token = sessionStorage.getItem("token")
  const navigate = useNavigate()
  const handleLogout = () => {
    sessionStorage.removeItem("token"); // Remove token from session storage
    navigate("/");
    };

  return (
    <div>
        <nav className="bg-gradient-to-r from-blue-100 to-blue-300 p-4 flex items-center justify-between">
              <div className="flex items-center">
                <img undefinedhidden="true" alt="medicare-icon" src="https://openui.fly.dev/openui/24x24.svg?text=➕" className="mr-2" />
                <span className="text-xl font-bold text-blue-800">Medicare</span>
              </div>
              <div className="flex space-x-6">
                <Link to="/">
                <a href="#" className="text-blue-800 hover:text-blue-600">
                  Home
                </a>
                </Link>
                <Link to="/services">
                <a href="#" className="text-blue-800 hover:text-blue-600">
                  Services
                </a>
                </Link>
                <Link to="/doctors">
                <a href="#" className="text-blue-800 hover:text-blue-600">
                  Find a Doctor
                </a>
                </Link>
                <Link to="/contact">
                <a href="#" className="text-blue-800 hover:text-blue-600">
                  Contact
                </a>
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <Link to="/login">
                  <img undefinedhidden="true" alt="user-icon" src="https://openui.fly.dev/openui/24x24.svg?text=👤" className="h-8 w-8 rounded-full" />
                </Link>
                {token && (
            <button
              onClick={handleLogout}
              className="p-2 transition duration-200"
            >
              <FaSignOutAlt className="text-4xl text-red-600 " />
            </button>
          )}
              </div>
            </nav>
    </div>
  )
}

export default Header
