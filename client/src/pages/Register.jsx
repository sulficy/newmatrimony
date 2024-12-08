import React from 'react'
import login from '../assets/login.png';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
 

function Register() {
  return (
    <>
    <Header/>
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen text-white">
        <div className="flex-1 flex items-center justify-center max-w-xs md:max-w-md p-4">
        <img alt="User illustration" src={login} className="w-full h-auto rounded-lg shadow-lg" />
      </div>
      <div className="flex-1 p-6 bg-white bg-opacity-90 rounded-lg shadow-2xl max-w-md md:max-w-sm text-gray-800">
        <h2 className="text-2xl font-bold mb-4 text-purple-700">Create an Account</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="full-name">
              Full Name
            </label>
            <input 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
              type="text"
              id="full-name"
              placeholder="Enter your name"
              required
            />
          </div>
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
            <span className="block text-sm font-medium text-gray-700">Are you a:</span>
            <div className="flex space-x-4 mt-1">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="user-type"
                  value="patient"
                  className="text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-700">Patient</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="user-type"
                  value="doctor"
                  className="text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-700">Doctor</span>
              </label>
            </div>
          </div>
          <div className="mb-4">
            <span className="block text-sm font-medium text-gray-700">Gender:</span>
            <div className="flex space-x-4 mt-1">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-700">Male</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-700">Female</span>
              </label>
            </div>
          </div>
          <div className="mb-4">
            <button className="bg-purple-600 text-white w-full p-2 rounded-md font-semibold hover:bg-purple-700 transition shadow-lg transform hover:scale-105">
              Sign Up
            </button>
          </div>
          <p className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login">
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              Login
            </a>
            </Link>
          </p>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Register