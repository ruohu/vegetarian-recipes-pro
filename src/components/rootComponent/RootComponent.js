import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';

const RootComponent = () => {
  return (
    <>
      <Navbar />
      <div className="app-container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default RootComponent;