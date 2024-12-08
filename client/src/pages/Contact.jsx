import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


function Contact() {
  return (
    <>
    <Header/>
    
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-gray-600 mb-6">
          Got a technical issue? Want to send feedback about a beta feature? Let us know.
        </p>
        
        <form>
          <label className="block mb-2 text-gray-600" htmlFor="email">Your Email</label>
          <input 
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400" 
            type="email" 
            id="email" 
            placeholder="example@gmail.com" 
            required 
          />
          
          <label className="block mb-2 text-gray-600" htmlFor="subject">Subject</label>
          <input 
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400" 
            type="text" 
            id="subject" 
            placeholder="Let us know how we can help you" 
            required 
          />
          
          <label className="block mb-2 text-gray-600" htmlFor="message">Your Message</label>
          <textarea 
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400" 
            id="message" 
            rows="4" 
            placeholder="Leave a comment..." 
            required 
          ></textarea>
          
          <button 
            className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Contact;
