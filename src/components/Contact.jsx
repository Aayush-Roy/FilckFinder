// Contact.jsx
import React from 'react';
import { FaEnvelope, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Importing icons
import Sidenav from './templates/Sidenav';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate =  useNavigate()
  return (
    <>
    <Sidenav/>
    <section className="bg-[#1f1e24] w-[80%] text-white py-12 mx-auto overflow-hidden overflow-y-auto">
    <h1 className='text-2xl font-semibold text-zinc-400 px-3'>
            <i onClick={()=>navigate(-1)} className="hover:text-[#6556cd] ri-arrow-left-line"></i>
            </h1>
      <div className="container  px-4 w-[100%]">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>
        
        {/* Contact Info */}
       
        {/* Contact Form */}
        <div className="bg-gray-700 p-8 rounded-lg shadow-lg max-w-lg mx-auto">
          <h3 className="text-3xl font-semibold mb-6 text-center">Send us a message</h3>
          <form>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2" htmlFor="name">Your Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full p-3 rounded-md bg-gray-900 text-white border border-gray-600 focus:outline-none focus:border-yellow-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2" htmlFor="email">Your Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full p-3 rounded-md bg-gray-900 text-white border border-gray-600 focus:outline-none focus:border-yellow-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2" htmlFor="message">Message</label>
              <textarea 
                id="message" 
                rows="5" 
                className="w-full p-3 rounded-md bg-gray-900 text-white border border-gray-600 focus:outline-none focus:border-yellow-400"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-yellow-400 text-gray-900 font-bold p-3 rounded-md hover:bg-yellow-500 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;
