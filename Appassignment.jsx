import React from 'react'
import Signup from './COMPANY ASIGNMENT/Signup';
import { Login } from './COMPANY ASIGNMENT/Login';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './COMPANY ASIGNMENT/Home';
import Customers from './COMPANY ASIGNMENT/Customers';
import Profile from './COMPANY ASIGNMENT/Profile';
import View from './COMPANY ASIGNMENT/View';



export const Appassignment = () => {
  return (
    <>
    <Router>
   < Routes>
  < Route path='/' element={<Signup/>}/>
   <Route path='/login' element={<Login/>}/>
   <Route path='/home' element={<Home/>}/>
   <Route path='/customer' element={<Customers/>}/>
   <Route path='/profile' element={<Profile/>} />
   <Route path='/view' element={<View/>} />
   </Routes>
    </Router>
    </>
  )
}
