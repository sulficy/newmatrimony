import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import dctr3 from '../assets/dctr3.jpg'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function SlotBook() {

    const navigate=useNavigate()
    const handlePay=()=>{
        alert("waiting for payment...")
        navigate('/payment')
    }
  return (
    <>
      <Header />
      <div>
      <div className="flex justify-center items-center h-3/5 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white shadow-lg rounded-lg p-8 border border-gray-200">
          <div className="md:w-1/2 p-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Doctor Appointment Form</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="patient-name">
                  Patient Name
                </label>
                <input
                  type="text"
                  id="patient-name"
                  placeholder="Enter your name"
                  className="shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="appointment-date">
                  Appointment Date
                </label>
                <input
                  type="date"
                  id="appointment-date"
                  className="shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="appointment-time">
                  Appointment Time
                </label>
                <select
                  id="appointment-time"
                  className="shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
                >
                  <option value="">Select a time</option>
                  <option value="09:00">09:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="16:00">04:00 PM</option>
                  <option value="17:00">05:00 PM</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="reason">
                  Reason for Appointment
                </label>
                <input
                  type="text"
                  id="reason"
                  placeholder="Describe your issue"
                  className="shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
                />
              </div>

              <button onClick={handlePay} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded transition duration-200 ease-in-out w-full shadow-md">
                Schedule Appointment
              </button>
            </form>
          </div>

          <div className="md:w-1/2 flex justify-center items-center p-6">
            <img
              src={dctr3}
              alt="Doctor Appointment"
              className="rounded-lg shadow-lg w-full h-full max-w-md transition-transform transform hover:scale-105"
            />
          </div>
        </div>
      </div>
      </div>
      <div>
      <Footer />
      </div>
    </>
  );
}

export default SlotBook;