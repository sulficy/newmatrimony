import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';


const TopBar = () => {
  const token = sessionStorage.getItem("token")
  const navigate = useNavigate()
  const user = sessionStorage.getItem("username")
  const handleLogout=()=>{
    sessionStorage.removeItem("token"); // Remove token from session storage
    navigate("/");
  }
  return (
    <header className="bg-white shadow-lg p-6 flex justify-between items-center">
      <h1 className="text-3xl font-semibold text-blue-800">Welcome {user}</h1>
      <button
        className="bg-red-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-red-600 transition"
        onClick={handleLogout}
      >
        Logout
      </button>
    </header>
  );
};

export default TopBar;
