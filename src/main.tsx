import { createRoot } from 'react-dom/client'
import './App.css'; // Make sure it's exactly this
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import SplashScreen from './Components/HomeScreen/SplashScreen';
import Login from './Components/Login/Login';
import NavBar from './Components/ui/Navbar';
import SignUp from './Components/Login/SignUp';
import HospitalHomeScreen from './Components/Hospital/HospitalHomePage';

createRoot(document.getElementById('root')!).render(
  <>
  <React.StrictMode>
        <Router>
          <Routes>
            <Route path = "/" element = {<SplashScreen/>}></Route>
            <Route path = "/HomeScreen" element = {<><NavBar/><HomeScreen/></>} ></Route>
            <Route path = '/Login' element = {<Login/>}></Route>
            <Route path = '/SignUp' element={<SignUp/>}></Route>
            <Route path = '/Hospital/HomeScreen' element = {<HospitalHomeScreen/>}></Route>
          </Routes>
        </Router>
    </React.StrictMode>
   
    </>
)
