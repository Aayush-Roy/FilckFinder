// About.jsx
import React from 'react';
import { FaNodeJs, FaGithub, FaStar, FaReact, FaDatabase } from 'react-icons/fa'; 
import Sidenav from './templates/Sidenav';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate =   useNavigate()
  return (
    <>
    <Sidenav/>
    <section className="bg-[#1f1e24] h-full w-[80%] text-white py-12">
    <h1 className='text-2xl font-semibold text-zinc-400 px-3'>
            <i onClick={()=>navigate(-1)} className="hover:text-[#6556cd] ri-arrow-left-line"></i>
            </h1>
      <div className="container mx-auto px-4 mt-[5%]">
        <h2 className="text-4xl font-bold mb-4 text-center">About FlickFinder</h2>
        <p className="text-lg mb-6 text-center">
          FlickFinder is your go-to app for discovering the latest movies, exploring trending titles, 
          and finding hidden gems. Whether you're into blockbusters, indie films, or binge-worthy series, 
          FlickFinder makes it easy to keep up with what's popular and curate your personal watchlist.
        </p>
        <p className="text-lg text-center">
          Our mission is to connect movie lovers with their next favorite film by providing up-to-date information 
          on what's hot in the world of cinema. From trending releases to hidden gems, FlickFinder helps you 
          stay ahead in the world of movies.
        </p>
        
        {/* GitHub Section */}
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-semibold mb-2">Support Us</h3>
          <p className="text-lg mb-4">If you love FlickFinder, follow us on GitHub and give our repo a star!</p>
          <a 
            href="https://github.com/Aayush-Roy" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center text-lg font-medium hover:underline"
          >
            <FaGithub className="text-3xl mr-2" /> Follow me on GitHub
          </a>
          <p className="mt-2 flex items-center justify-center text-lg">
            <FaStar className="text-yellow-400 mr-2" /> Don't forget to give a star!
          </p>
        </div>
      </div>


    </section>
    </>
  );
};

export default About;
