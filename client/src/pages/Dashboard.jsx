import React from 'react'
import mee from '../assets/mee.jpg'
import Header from '../components/Header'
import Footer from '../components/Footer'


function Dashboard() {
  return (
    <>
    <Header/>
    
<div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl">
        {/* Doctor Information Section */}
        <div className="w-full md:w-1/2 bg-blue-50 p-6 flex flex-col items-center">
          <h1 className="text-3xl font-bold text-blue-700 mb-2">Dr. Sulfi CY</h1>
          <p className="text-2xl text-blue-600 mb-1">$ 75.00</p>
          <p className="text-gray-600 mb-6">Mentalist</p>
          <img
            className="w-48 h-48 rounded-full mb-4"
            src={mee}
            alt="Doctor Image"
          />
        </div>

        {/* Payment Form Section */}
        <div className="w-full md:w-1/2 bg-white p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Pay with Card</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                type="email"
                id="email"
                placeholder="email@gmail.com"
                required
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-2" htmlFor="card-info">
                Card Information
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                type="text"
                id="card-info"
                placeholder="xxxx xxxx xxxx"
                required
              />
            </div>

            <div className="flex space-x-4">
              <input
                className="w-1/2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                type="text"
                placeholder="MM / YY"
                required
              />
              <input
                className="w-1/2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                type="text"
                placeholder="CVC"
                required
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-2" htmlFor="name-on-card">
                Name on Card
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                type="text"
                id="name-on-card"
                required
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-2" htmlFor="country">
                Country or Region
              </label>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                id="country"
              >
                <option>India</option>
                <option>USA</option>
                <option>China</option>
                <option>UAE</option>
              </select>
            </div>

            <div className="flex items-center mt-4">
              <input type="checkbox" id="save-info" className="mr-2" />
              <label className="text-gray-600" htmlFor="save-info">
                Securely save my information for 1-click checkout
              </label>
            </div>

            <button className="mt-4 w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Pay
            </button>
          </form>
        </div>
      </div>
    </div>        
    <Footer/>
    </>
  )
}

export default Dashboard