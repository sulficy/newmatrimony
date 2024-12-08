import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ activeTab}) => {
  return (
    
    <aside className="w-64 h-screen sticky top-0 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
      <div className="p-6 text-2xl font-bold border-b border-blue-600">
        Admin Dashboard
      </div>
      <ul className="mt-6 space-y-4">
        <Link to={'/dashboard/view'}>
        <li
          className={`p-4 flex items-center rounded-md cursor-pointer transition ${
            activeTab === "Dashboard"
              ? "bg-blue-600 shadow-md"
              : "hover:bg-blue-800"
          }`}
          
        >

        
        <span className="mr-3 text-lg">📊</span>
          View status
        </li>
        </Link>
        <Link to={'/dashboard/add-doctors'}>
        <li
          className={`p-4 flex items-center rounded-md cursor-pointer transition ${
            activeTab === "Doctors"
              ? "bg-blue-600 shadow-md"
              : "hover:bg-blue-800"
          }`}
          
        >
            
          <span className="mr-3 text-lg">🧑‍⚕️</span>
          Doctors
        </li>
        </Link>
        <Link to={'/dashboard/checkappointment'}>
        <li
          className={`p-4 flex items-center rounded-md cursor-pointer transition ${
            activeTab === "Appointments"
              ? "bg-blue-600 shadow-md"
              : "hover:bg-blue-800"
          }`}
          
        >
          <span className="mr-3 text-lg">📅</span>
          Appointments
        </li>
        </Link>
        
        <li
          className={`p-4 flex items-center rounded-md cursor-pointer transition ${
            activeTab === "Settings"
              ? "bg-blue-600 shadow-md"
              : "hover:bg-blue-800"
          }`}
          
        >
          <span className="mr-3 text-lg">⚙️</span>
          Settings
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
