import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import dctr3 from '../assets/dctr3.jpg';
import { useNavigate } from 'react-router-dom';
import { addappointment } from '../services/allAPIs';

function SlotBook() {

  const navigate = useNavigate()
  

  const [appointment, setAppointment] = useState({
    name: '',
    date: '',
    time: '',
    reason: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setAppointment({ ...appointment, [id]: value });
  };

  const handleAdd = async () => {
    const { name, date, time, reason } = appointment;

    if (!name || !date || !time || !reason) {
      alert("Please fill out the form.");
    } else {
      const reqBody = new FormData();
      reqBody.append("name", name);
      reqBody.append("date", date);
      reqBody.append("time", time);
      reqBody.append("reason", reason);

      const token = sessionStorage.getItem("token");
      if (token) {
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        };
        try {
          const response = await addappointment(reqBody, reqHeader);
          console.log(response);

          if (response.status >= 200 && response.status < 300) {
            alert("Appointment added successfully.");
            setAppointment({ name: "", date: "", time: "", reason: "" });

            navigate('/payment')


          } else {
            alert("Appointment already exists.");
          }
        } catch (err) {
          console.log("Error:", err);
        }
      }
    }
  };

  return (
    <>
      <Header />
      <div>
        <div className="flex justify-center items-center h-3/5 bg-gradient-to-r from-blue-50 to-blue-100">
          <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white shadow-lg rounded-lg p-8 border border-gray-200">
            <div className="md:w-1/2 p-6">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Doctor Appointment Form</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                    Patient Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={appointment.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="date">
                    Appointment Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    value={appointment.date}
                    onChange={handleInputChange}
                    className="shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="time">
                    Appointment Time
                  </label>
                  <select
                    id="time"
                    value={appointment.time}
                    onChange={handleInputChange}
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
                    phone
                  </label>
                  <input
                    type="text"
                    id="reason"
                    value={appointment.reason}
                    onChange={handleInputChange}
                    placeholder="enter your number"
                    className="shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleAdd}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded transition duration-200 ease-in-out w-full shadow-md"
                >
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
      <Footer />
    </>
  );
}

export default SlotBook;
