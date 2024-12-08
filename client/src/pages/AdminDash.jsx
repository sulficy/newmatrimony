import React from 'react';
import Sidebar from '../components/sideBar';
import TopBar from '../components/topBar';

const AdminDash = () => {
  return (
    <div className="flex h-screen">
      
      <aside className="w-64 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
        <Sidebar />
      </aside>  

    
      <div className="flex-1 flex flex-col bg-gray-100">
        <TopBar />
        <div className="p-6">
          
          <h1 className="text-2xl font-bold text-gray-800">Welcome to the Admin Dashboard</h1>
          
        </div>
      </div>
    </div>
  );
};

export default AdminDash;
