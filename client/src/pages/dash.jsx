import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/sideBar';
import TopBar from '../components/topBar';

const Dashboard = () => {
  const [analytics, setAnalytics] = useState({});

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const response = await axios.get('/api/admin/analytics');
      setAnalytics(response.data);
    } catch (error) {
      console.error('Error fetching analytics:', error.message);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 ">
        <Sidebar className="h-full " />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <TopBar />

        {/* Content */}
        <div className="flex-1 p-8">
          <h2 className="text-2xl font-bold text-gray-800">Analytics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-lg font-medium text-gray-700">Total Doctors</h3>
              <p className="text-4xl font-bold text-blue-800">
                {analytics.totalDoctors || 0}
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-lg font-medium text-gray-700">Total Appointments</h3>
              <p className="text-4xl font-bold text-blue-800">
                {analytics.totalAppointments || 0}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
