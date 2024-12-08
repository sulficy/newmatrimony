import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Sidebar from '../components/sideBar';
import TopBar from '../components/topBar';
import { addDoctorAPI, getDoctorAPI } from '../services/allAPIs';

const Doctors = () => {
  //   const [doctors, setDoctors] = useState([]);
  const [doctorDetails, setDoctorDetails] = useState({
    name: '',
    email: '',
    speciality: '',
    phone: '',
    doctorImg: ''
  });
  //   const [doctorImage, setDoctorImage] = useState(null);
  const handleAdd = async () => {
    console.log(doctorDetails);
    const { name, email, speciality, phone, doctorImg } = doctorDetails
    if (!name || !email || !speciality || !phone || !doctorImg) {

      alert("please fill the form");


    }
    else {

      const reqBody = new FormData()
      reqBody.append("name", name),
        reqBody.append("email", email),
        reqBody.append("speciality", speciality),
        reqBody.append("phone", phone),
        reqBody.append("doctorImg", doctorImg)

      const token = sessionStorage.getItem("token")
      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        try {

          const response = await addDoctorAPI(reqBody, reqHeader)
          console.log(response);

          if (response.status >= 200 && response.status < 300) {
            alert("doctor added successfully...")
            setDoctorDetails({ name: "", email: "", speciality: "", phone: "", doctorImg: "" })
          }
          else {

            alert("doctor already exist");
          }


        }
        catch (err) {
          console.log("error", err);

        }
      }
      // alert(" everything is fine");

    }
  }

  //get doctor details

  const [allDoctors, setallDoctors] = useState([])
  const handleGet = async () => {

    const token = sessionStorage.getItem("token")
    console.log(token);

    if (token) {
      const reqHeader = {

        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`

      }
      console.log(reqHeader);
      try {

        const response = await getDoctorAPI(reqHeader)
        console.log(response);
        setallDoctors(response.data)

      }
      catch (err) {

        console.log(err);

      }

    }

  }

  return (
    <div className="flex ">
      {/* Sidebar */}
      <div className="w-64 fixed h-full bg-gray-800">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        <div className="fixed w-full h-16 bg-gray-200 z-10">
          <TopBar />
        </div>

        {/* Page Content */}
        <div className="pt-20 mt-10 mb-10 px-6">
          <h2 className="text-2xl font-bold text-gray-800">Manage Doctors</h2>

          {/* Add Doctor Form */}
          <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Add New Doctor</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="border p-3 rounded-md w-full"
                onChange={e => setDoctorDetails({ ...doctorDetails, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email"
                className="border p-3 rounded-md w-full"
                onChange={e => setDoctorDetails({ ...doctorDetails, email: e.target.value })}
              />
              <input
                type="text"
                placeholder="Specialty"
                className="border p-3 rounded-md w-full"
                onChange={e => setDoctorDetails({ ...doctorDetails, speciality: e.target.value })}
              />
              <input
                type="text"
                placeholder="Phone"
                className="border p-3 rounded-md w-full"
                onChange={e => setDoctorDetails({ ...doctorDetails, phone: e.target.value })}

              />
              <div className="col-span-full">
                <label className="block text-gray-700 font-bold mb-2">Upload Doctor Image</label>
                <input
                  type="file"
                  className="block w-full text-gray-900 border rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                  onChange={e => setDoctorDetails({ ...doctorDetails, doctorImg: e.target.files[0] })}
                />
                <div className="mt-4">
                  {/* Placeholder for image preview */}
                </div>
              </div>
              <button
                type="button"
                className="col-span-full bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 transition"
                onClick={handleAdd}
              >
                Add Doctor
              </button>
            </form>
          </div>
          <div>
            <button
              type="button"
              className="col-span-full bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 transition"
              onClick={handleGet}
            >
              View all Doctors
            </button>
          </div>

          {/* Doctors List */}
          <table className="mt-6 w-full bg-white shadow-lg rounded-lg">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Specialty</th>
                <th className="p-4 text-left">Phone</th>
                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              
              {allDoctors.length > 0 ? (
                allDoctors.map((doctor) => (
                  <tr key={doctor.id}>
                    <td className="p-4">{doctor.name}</td>
                    <td className="p-4">{doctor.email}</td>
                    <td className="p-4">{doctor.speciality}</td>
                    <td className="p-4">{doctor.phone}</td>
                    <td className="p-4 flex items-center gap-4">
                      <button className="text-blue-500 hover:text-blue-600 transition">
                        <FaEdit />
                      </button>
                      <button className="text-red-500 hover:text-red-600 transition">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="p-4 text-center text-gray-500">
                    No Doctors Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
