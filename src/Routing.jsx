import { Routes, Route } from 'react-router-dom';
import React from 'react'
import Home from "./Pages/Home"
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';

function Routing() {
  return (
    <>
   <Routes>
     <Route  path="/" element ={<Home/>}/>
     <Route path="/login" element={<LogIn/>}/>
     <Route path="/signup" element= {<SignUp/>}/>
     <Route path="/profile" element={<Profile/>}/>
   </Routes>
   
    
    
    </>
  )
}

export default Routing
