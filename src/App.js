import React from 'react';
import Header from './component/Header';
import Sidebar from './component/SideBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/home/Home';  
import BusinessForm from './component/inside-menu/BusinessForm'; 
import BusinessPlan from './component/inside-menu/BusinessPlan';

const App = () => {

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />

        <div className="flex-1 md:ml-64 ml-0 mt-14">
          <Header />
          
          {/* Main content */}
          <main className="p-6 ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/business-form" element={<BusinessForm />} />
              <Route path='/business-plan' element={<BusinessPlan/>} />
            </Routes>
          </main>
        </div>

      </div>
    </Router>
  );
};

export default App;
