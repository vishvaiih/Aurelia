import { Routes, Route } from 'react-router-dom';
import React from 'react'
import Home from "./Pages/Home"
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';

function Routing() {
  return (
    <>
   <Routes>
     <Route  path="/" element ={<Home/>}/>
     <Route path="/login" element={<LogIn/>}/>
     <Route path="/signup" element= {<SignUp/>}/>
   </Routes>
   
    
    
    </>
  )
}

export default Routing
