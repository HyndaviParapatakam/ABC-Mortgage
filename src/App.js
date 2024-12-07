import React, { useState } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
//import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = ()=>{
    setIsLoggedIn(true);
  };
  const handleLogout = ()=> {
    setIsLoggedIn(false);
  };

  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: isLoggedIn ? <Navigate to="/dashboard" /> : <HomePage handleLogin={handleLogin} handleLogout={handleLogout} isLoggedIn={isLoggedIn}/>,
  //   },
  //   // {
  //   //   path: '*',
  //   //   element: <NotFoundPage />,
  //   // },
  // ]);

  return (
    <div className="App">
      { isLoggedIn ?
       <Dashboard />
      : <HomePage handleLogin={handleLogin} handleLogout={handleLogout} isLoggedIn={isLoggedIn}/>}
      {/* <RouterProvider router={router} /> */}
    </div>
  );
}

export default App;
