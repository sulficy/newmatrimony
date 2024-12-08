import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/sideBar';
import TopBar from '../components/topBar';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  // Fetch Appointments (Placeholder)
  useEffect(() => {
    // Simulating API Call
    const fetchAppointments = async () => {
      // Example Data - Replace with actual API call
      const exampleAppointments = [
        {
          id: 1,
          patientName: 'John Doe',
          doctorName: 'Dr. Smith',
          date: '2024-12-10',
          time: '10:30 AM',
          status: 'Confirmed',
        },
        {
          id: 2,
          patientName: 'Jane Roe',
          doctorName: 'Dr. Adams',
          date: '2024-12-11',
          time: '2:00 PM',
          status: 'Pending',
        },
      ];
      setAppointments(exampleAppointments);
    };

    fetchAppointments();
  }, []);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 fixed h-full bg-gray-800">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Top Bar */}
        <div className="fixed w-full h-16 bg-gray-200 z-10">
          <TopBar />
        </div>

        {/* Page Content */}
        <div className="pt-20 mt-10 px-6">
          <h2 className="text-2xl font-bold text-gray-800">Manage Appointments</h2>

          {/* Appointments Table */}
          <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Appointments List</h3>
            <table className="w-full table-auto border-collapse border border-gray-300">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="p-4 text-left border border-gray-300">Patient Name</th>
                  <th className="p-4 text-left border border-gray-300">Doctor Name</th>
                  <th className="p-4 text-left border border-gray-300">Date</th>
                  <th className="p-4 text-left border border-gray-300">Time</th>
                  <th className="p-4 text-left border border-gray-300">Status</th>
                  <th className="p-4 text-left border border-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment) => (
                  <tr key={appointment.id} className="hover:bg-gray-50 transition">
                    <td className="p-4 border border-gray-300">{appointment.patientName}</td>
                    <td className="p-4 border border-gray-300">{appointment.doctorName}</td>
                    <td className="p-4 border border-gray-300">{appointment.date}</td>
                    <td className="p-4 border border-gray-300">{appointment.time}</td>
                    <td className="p-4 border border-gray-300">{appointment.status}</td>
                    <td className="p-4 border border-gray-300 flex items-center gap-2">
                      <button className="text-blue-500 hover:text-blue-600 transition">
                        Edit
                      </button>
                      <button className="text-red-500 hover:text-red-600 transition">
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
                {appointments.length === 0 && (
                  <tr>
                    <td
                      colSpan="6"
                      className="p-4 text-center text-gray-500"
                    >
                      No Appointments Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
