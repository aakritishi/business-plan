import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPlusSquare, FaBars } from 'react-icons/fa'; 
import { RxCross1 } from "react-icons/rx";
import logo from '../media/images/ranlogo.png';

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // New state to track if menu is open
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    if (window.innerWidth < 1024) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div>
      {/* Menu Icon for small screens */}
      <button
        className="lg:hidden fixed top-4 left-4 z-30"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        {isMenuOpen ? (
          <div className="flex flex-end ml-48">
            <RxCross1 className="text-white text-3xl" />
          </div>
        ) : (
          <FaBars className="text-white text-3xl" />
        )}
      </button>

      <div
        className={`fixed inset-y-0 left-0 z-20 w-64 bg-blue-600 shadow-lg sm:block lg:block ${
          isMenuOpen ? 'block' : 'hidden' 
        }`}
      >
        <div className="flex flex-col h-full p-4">
          <div className="flex items-center space-x-2 mb-6">
            <Link to="/" onClick={handleLinkClick}>
              <img alt="Logo" src={logo} className="h-16 w-auto" />
            </Link>
          </div>
          <nav className="flex flex-col space-y-4">
            <button
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="text-white hover:bg-blue-700 rounded-md px-4 py-2 text-lg font-medium flex items-center space-x-2"
            >
              <FaPlusSquare className="text-blue-950" />
              <span>Generate New Plan</span>
            </button>
            {isDropdownOpen && (
              <div ref={dropdownRef} className="ml-4 space-y-2 bg-white rounded-md shadow-md p-2">
                <Link
                  to="/business-form"
                  onClick={() => { setIsDropdownOpen(false); handleLinkClick(); }}
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  Introduction
                </Link>
                <Link
                  to="/"
                  onClick={() => { setIsDropdownOpen(false); handleLinkClick(); }}
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  Section-2
                </Link>
              </div>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
