import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
        `}
      </style>

      <header className="fixed top-0 right-0 z-10 bg-blue-600 shadow-md px-6 py-4 flex items-center justify-end w-full">
        <Link to='/'>
            <h1 className="text-white text-xl font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Business Plan Writer
            </h1>
        </Link>
      </header>
    </>
  );
};

export default Header;
