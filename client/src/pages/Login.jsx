import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import reg from '../assets/reg.png';
import { Navigate } from 'react-router-dom';


function Login() {


  






  return (
    <>
    <Header/>
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen text-white">
      
      <div className="flex-1 p-6 bg-white bg-opacity-90 rounded-lg shadow-2xl max-w-md md:max-w-sm text-gray-800">
        <h2 className="text-2xl font-bold mb-4 text-purple-700">Login your account</h2>
        <form>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          
          
          <div className="mb-4">
            <button className="bg-purple-600 text-white w-full p-2 rounded-md font-semibold hover:bg-purple-700 transition shadow-lg transform hover:scale-105">
              Sign IN
            </button>
          </div>
          
        </form>
      </div>
      <div className="flex-1 flex items-center justify-center max-w-xs md:max-w-md p-4">
        <img alt="User illustration" src={reg} className="w-full h-auto rounded-lg shadow-lg" />
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Login