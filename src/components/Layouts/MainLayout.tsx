import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

const MainLayout: React.FC = () => {
  return (
    <div className="wrapper">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
