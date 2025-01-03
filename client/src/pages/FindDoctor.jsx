import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getDoctorAPI } from '../services/allAPIs';
import { serverUrl } from '../services/serverUrl';
import { Link } from 'react-router-dom';

function FindDoctor() {
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

  console.log(allDoctors);

  return (
    <>
      <Header />
      <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12">
        <div className="bg-white w-full max-w-2xl text-center py-8 px-4 rounded-md shadow-md">
          <h1 className="text-4xl font-bold text-blue-600 mb-6">Find a Doctor</h1>
          <div className="flex w-full max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Search by doctor name or specialization"
              className="flex-grow border border-gray-300 rounded-l-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500"
            />
            <button className="bg-blue-600 text-white rounded-r-md px-5 py-3 hover:bg-blue-700 transition-colors">
              Search
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 p-6 w-full max-w-screen-lg mt-8">
          {allDoctors.length > 0 ? (
            allDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-lg shadow-lg p-6 text-center w-full sm:w-64 transform transition-all hover:scale-105"
              >
                <img
                  alt="Doctor"
                  src={`${serverUrl}/uploads/${doctor.doctorImg}` || 'https://via.placeholder.com/150'}
                  className="rounded-full mb-4 mx-auto w-24 h-24"
                />
                <h3 className="text-xl font-semibold text-gray-900">{doctor.name}</h3>
                <p className="text-gray-500">{doctor.speciality}</p>
                <div className="flex items-center justify-center my-2 text-yellow-500">
                   <span className="text-gray-400 ml-2"></span>
                </div>
                <p className="text-sm text-gray-400 mb-4">{doctor.hospital}</p>
                <Link to={'/appointment'}>
                <button className="bg-blue-100 text-blue-600 hover:bg-blue-200 px-4 py-2 rounded-full transition-colors">
                  Book your slot →
                </button>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-2xl">Please Login</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FindDoctor;