import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function MovieModule() {

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // console.log(isAuthenticated);

  return (
    <div>
   
      {isAuthenticated && <Navbar />}
      <Outlet />
    </div>
  );
}

export default MovieModule;
