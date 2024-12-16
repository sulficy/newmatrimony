import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/sideBar';
import TopBar from '../components/topBar';
import { getAppointAPI, getDoctorAPI } from '../services/allAPIs';


const Dashboard = () => {
  const [allAppoint, setAllAppoint] = useState([]);

  useEffect(() => {
    const handleView = async () => {
      const token = sessionStorage.getItem('token');
      console.log(token);

      if (token) {
        const reqHeader = {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        };
        console.log(reqHeader);
        try {
          const response = await getAppointAPI(reqHeader);
          console.log(response);
          setAllAppoint(response.data);
        } catch (err) {
          console.log(err);
        }
      }
    };

    handleView();
  }, []);
  // console.log(allAppoint);
  const appointments = allAppoint.length  
  // console.log(appointments);
  const [allDoctors, setAllDoctors] = useState([]);

  useEffect(() => {
    const handleGet = async () => {
      const token = sessionStorage.getItem('token');
      console.log(token);

      if (token) {
        const reqHeader = {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        };
        console.log(reqHeader);
        try {
          const response = await getDoctorAPI(reqHeader);
          console.log(response);
          setAllDoctors(response.data);
        } catch (err) {
          console.log(err);
        }
      }
    };

    handleGet();
  }, []);

  // console.log(allDoctors);
  const allDoc = allDoctors.length
  console.log(allDoc);
  
  

  
    

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
                {appointments}
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-lg font-medium text-gray-700">Total Appointments</h3>
              <p className="text-4xl font-bold text-blue-800">
                {allDoc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
