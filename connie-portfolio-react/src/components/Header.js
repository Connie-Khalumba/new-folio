import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 fixed w-full top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="navbar-logo">
          <img src="/assets/logo.png" alt="Logo" className="h-12 w-auto" />
        </div>
        <nav className="navbar">
          <ul className="flex space-x-6 items-center">
            <li><a href="#home" className="text-gray-700 hover:text-blue-600">Home</a></li>
            <li><a href="#about" className="text-gray-700 hover:text-blue-600">About</a></li>
            <li><a href="#portfolio" className="text-gray-700 hover:text-blue-600">Portfolio</a></li>
            <li><a href="#skills" className="text-gray-700 hover:text-blue-600">Skills</a></li>
            <li><a href="#qualifications" className="text-gray-700 hover:text-blue-600">Qualifications</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a></li>
            <li>
              <a href="/Connie-CV.pdf" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Download CV
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;